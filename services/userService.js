import axios from 'axios';

export default class UserService {
    async getAllUsers() {
        try {
            return await axios.get('http://192.168.0.113:8080/api/users/getAll');
        } catch(e) {
            console.log('deleteUser request error');
        }
    }

    async createUser(email,password,username,name,surname,phoneNumber) {
        try {
            return await axios.post('http://192.168.0.113:8080/api/users/add',{
                email: email,
                username: username,
                password: password,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            }).then(() => console.log("User Created succesfully")).catch((error) => console.log(error))
        } catch(e) {
            console.log('deleteUser request error');
        }
    }

    async deleteUser(id) {
        try {
            return await axios.delete(`http://192.168.0.113:8080/api/users/delete?id=${id}`)
            .then(() => console.log("User Deleted successfully")).catch(() => console.log("User could not deleted"));
        } catch(e) {
            console.log('deleteUser request error');
        }
    }

    async getByEmail(email) {
        try{
            const response = await axios.get(`http://192.168.0.113:8080/api/users/getByEmail?email=${email}`);
            return response.data;
        } catch(e) {
            console.log('getByEmail request error');
        }
    }
}