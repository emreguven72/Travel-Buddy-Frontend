import axios from "react-native-axios";

//Desktop ip address: 192.168.0.15

export default class UserService {
    async getAllUsers() {
        try {
            return await axios.get('http://192.168.0.15:8080/api/users/getAll');
        } catch(e) {
            console.log('getAllUsers request error');
        }
    }

    async createUser(email,password,username,name,surname,phoneNumber) {
        try {
            const userValues = [email,username,password,name,surname,phoneNumber];
            await axios.post('http://192.168.0.15:8080/api/users/add', {
                email: email,
                password: password,
                username: username,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            }).then(() => console.log("User Created succesfully")).catch((error) => console.log(error))
        } catch(e) {
            console.log('createUser request error');
        }
    }

    async deleteUser(id) {
        try {
            return await axios.delete(`http://192.168.0.15:8080/api/users/delete?id=${id}`)
            .then(() => console.log("User Deleted successfully")).catch(() => console.log("User could not deleted"));
        } catch(e) {
            console.log('deleteUser request error');
        }
    }

    async getById(id) {
        try{
            const response = await axios.get(`http://192.168.0.15:8080/api/users/getById?id=${id}`);
            return response.data;
        } catch(e) {
            console.log('getById request error', {e});
        }
    }

    async getByEmail(email) {
        try{
            const response = await axios.get(`http://192.168.0.15:8080/api/users/getByEmail?email=${email}`);
            return response.data;
        } catch(e) {
            console.log('getByEmail request error');
        }
    }
}