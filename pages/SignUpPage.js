import React, { useState } from "react";
import styles from '../styles/SignUpPageStyle';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import UserService from '../services/UserService'

const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const goBack = () => {
        navigation.goBack();
    }

    const BackButton = () => {
        return(
            <TouchableOpacity onPress={goBack} style={{marginTop: 10, marginLeft: 10}} >
                <Text>go Back</Text>
            </TouchableOpacity>
        );
    }

    const signUp = () => {
        if(email!=''&&password!=''&&username!=''&&name!=''&&surname!=''&&phoneNumber!='') {
            if(true /* Geçerli bilgiler girildi */) {
                let userService = new UserService();
                userService.createUser(email,password,username,name,surname,phoneNumber);
                navigation.navigate('WelcomeScreen');
                console.log('Kayıt başarılı');
            } else {
                console.log('girilen bilgiler ile kayıt olunamaz')
            }
        }else {
            console.log('Eksik bilgi girişi');
        }
    }

    return(
        <View style={styles.baseStyle.container}>
            <BackButton />

            <View style={styles.baseStyle.formContainer}>
                <TextInputArea
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInputArea
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInputArea
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInputArea
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                />
                <TextInputArea
                    placeholder='Surname'
                    value={surname}
                    onChangeText={setSurname}
                />
                <TextInputArea
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <View style={{marginTop: 20}}>
                    <BasicButton 
                        title='Sign Up'
                        onPress={signUp}
                        color='gray'
                    />
                </View>
            </View>
        </View>
    );
}
export default SignUpPage;