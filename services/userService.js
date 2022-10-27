import axios from 'axios';


export default class UserService {
    getAllUsers() {
        return axios.get('http://192.168.1.234:8080/api/users/getAll');
    }
}