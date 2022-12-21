import create from "zustand";
import axios from 'react-native-axios';
import TravelService from "../services/TravelService";

const travelService = new TravelService();

const useTravelStore = create((set) => ({
    travels: null,
    fetch: async() => {
        const response = await axios.get('http://192.168.0.113:8080/api/travels/getAll');
        set({ travels: await response.data });
    },
    fetchByLocations: async(startLocation,endLocation) => {
        const response = await axios.get(`http://192.168.0.113:8080/api/travels/getByLocations?startLocation=${startLocation}&endLocation=${endLocation}`)
        set({ travels: await response.data })
    },
    addTravel: async(startLocation,endLocation,userInfo,description,carDetails) => {
        try {
            await travelService.createTravel(startLocation,endLocation,userInfo,description,carDetails);
        } catch(e) {
            console.log('addTravel Error: ', e)
        }
    }
}))
export default useTravelStore;