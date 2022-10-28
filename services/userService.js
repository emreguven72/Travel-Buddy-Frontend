import axios from 'axios';


export default class UserService {
    getAllUsers() {
        return axios.get('http://192.168.0.113:8080/api/users/getAll');
    }

    createUser(email) {
        return axios.post('http://192.168.0.113:8080/api/users/add',{
            email: "huskan321@hotmail.com",
            username: "aragazHuso",
            password: "123",
            name: "Huseyin",
            surname: "Kan",
            phoneNumber: "333"
        }).then(() => console.log("User Created succesfully")).catch(() => console.log("User could not created"))
    }

    deleteUser(id) {
        return axios.delete(`http://192.168.0.113:8080/api/users/delete?id=${id}`)
        .then(() => console.log("User Deleted successfully")).catch(() => console.log("User could not deleted"));
    }
}