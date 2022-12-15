import axios from "react-native-axios";
import UserService from "./userService";

//Desktop ip address: 192.168.0.113

export default class TravelService {
    async getAllTravels() {
        try {
            const response = await axios.get('http://192.168.0.113:8080/api/travels/getAll')
            return response.data;
        } catch(e) {
            console.log('getAllTravels request error', {e});
        }
    }

    async createTravel(startLocation, endLocation, userInfo, description, carDetails) {
        try {
            let userService = new UserService();
            let user = await userService.getById(userInfo.id);
            await axios.post(`http://192.168.0.113:8080/api/travels/add`,{
                startLocation: startLocation,
                endLocation: endLocation,
                user: user,
                description: description,
                carDetails: carDetails
            }).then(() => console.log(user.username, 'has created a travel successfully'))
            .catch(() => 'Failed to create travel');
        } catch(e) {
            console.log('createTravel request error', {e});
        }
    }
}