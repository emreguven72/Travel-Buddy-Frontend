import create from 'zustand';
import axios from 'react-native-axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set) => ({
    isLoading: false,
    authToken: null,
    authInfo: null,
    login: async(email,password) => {
        const response = await axios.get(`http://192.168.1.248:8080/api/users/getByEmail?email=${email}`);
        set({ isLoading: true });
        if(response.data.password === password){
            set({ authInfo: await response.data });
            set({ authToken: await response.data.token });
            await AsyncStorage.setItem('authToken', response.data.token);
            await AsyncStorage.setItem('authInfo', JSON.stringify(response.data));
        }
        set({ isLoading: false });
    },
    logout: async() => {
        set({ isLoading: true });
        set({ authInfo: null });
        set({ authToken: null });
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('authInfo');
        set({ isLoading: false });
    },
    isLoggedIn: async() => { 
        set({ isLoading: true });
        let authInfo = await AsyncStorage.getItem('authInfo');
        let authToken = await AsyncStorage.getItem('authToken');
        authInfo = await JSON.parse(authInfo);
        if(authInfo){
            set({ authInfo: authInfo });
            set({ authToken: authToken });
        }
        set({ isLoading: false });
    }
}))
export default useAuthStore;