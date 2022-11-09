import create from "zustand";
import axios from 'react-native-axios';


const useTravelStore = create((set) => ({
    travels: null,
    fetch: async() => {
        const response = await axios.get('http://192.168.0.113:8080/api/travels/getAll');
        set({ travels: await response.data });
    },
    addTravel: async(startLocation,endLocation,userInfo) => {
        console.log('1');
        const response = await axios.get(`http://192.168.0.113:8080/api/users/getById?id=${userInfo.id}`);
        console.log('2');
        const user = await response.data;
        console.log('3');
        await axios.post('http://192.168.0.113:8080/api/travels/add',{
            startLocation: startLocation,
            endLocation: endLocation,
            user: user
        }) //it doesn't return the response
        console.log('4');
        const response2 = await axios.get('http://192.168.0.113:8080/api/travels/getAll');
        console.log('5');
        set({ travels: await response2.data });
        console.log('6');
    }
}))
export default useTravelStore;