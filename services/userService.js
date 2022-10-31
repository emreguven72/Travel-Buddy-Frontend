import axios from 'axios';


export default class UserService {
    getAllUsers() {
        return axios.get('http://192.168.1.234:8080/api/users/getAll');
    }

    createUser(email,password,username,name,surname,phoneNumber) {
        return axios.post('http://192.168.1.234:8080/api/users/add',{
            email: email,
            username: username,
            password: password,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber
        }).then(() => console.log("User Created succesfully")).catch((error) => console.log(error))
    }

    deleteUser(id) {
        return axios.delete(`http://192.168.1.234:8080/api/users/delete?id=${id}`)
        .then(() => console.log("User Deleted successfully")).catch(() => console.log("User could not deleted"));
    }
}