import create from 'zustand';
import axios from 'react-native-axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set) => ({
    isLoading: false,
    authToken: null,
    authInfo: null,
    authTravels: null,
    login: async(email,password) => {
        const response = await axios.get(`http://192.168.0.113:8080/api/users/getByEmail?email=${email}`);
        const response2 = await axios.get(`http://192.168.0.113:8080/api/travels/getByUser?id=${response.data.id}`);
        set({ isLoading: true });
        if(response.data.password === password){
            set({ authInfo: await response.data });
            set({ authToken: await response.data.token });
            set({ authTravels: await response2.data })
            await AsyncStorage.setItem('authToken', response.data.token);
            await AsyncStorage.setItem('authInfo', JSON.stringify(response.data));
            await AsyncStorage.setItem('authTravels', JSON.stringify(response2.data));
        }
        set({ isLoading: false });
    },
    logout: async() => {
        set({ isLoading: true });
        set({ authInfo: null });
        set({ authToken: null });
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('authInfo');
        await AsyncStorage.removeItem('authTravels');
        set({ isLoading: false });
    },
    isLoggedIn: async() => { 
        set({ isLoading: true });
        let authInfo = await AsyncStorage.getItem('authInfo');
        let authToken = await AsyncStorage.getItem('authToken');
        let authTravels = await AsyncStorage.getItem('authTravels');
        authInfo = await JSON.parse(authInfo);
        authTravels = await JSON.parse(authTravels);
        if(authInfo){
            set({ authInfo: authInfo });
            set({ authToken: authToken });
            set({ authTravels: authTravels });
        }
        set({ isLoading: false });
    },
}))
export default useAuthStore;