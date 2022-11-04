import axios from "axios";
import UserService from "./userService";

export default class TravelService {
    async getAllTravels() {
        try {
            const response = await axios.get('http://192.168.0.111:8080/api/travels/getAll')
            return response.data;
        } catch(e) {
            console.log('getAllTravels request error', {e});
        }
    }

    async createTravel(startLocation, endLocation, userInfo) {
        try {
            let userService = new UserService();
            let user = await userService.getById(userInfo.id);
            return await axios.post(`http://192.168.0.111:8080/api/travels/add/${userInfo.id}`,{
                startLocation: startLocation,
                endLocation: endLocation,
                User: user //burda user gondermek ise yaramiyor 
                //apiye userId gonder apide useri bulup orada userini ata
            }).then(() => console.log(user.username, 'has created a travel successfully'))
            .catch(() => 'Failed to create travel');
            console.log('asdkasdlkas')

        } catch(e) {
            console.log('createTravel request error', {e});
        }
    }
}