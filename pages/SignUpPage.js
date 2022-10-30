import React, { useState } from "react";
import styles from '../styles/SignUpPageStyle';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import TextInputArea from "../components/TextInputArea";

const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return(
        <View style={styles.baseStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 10, marginLeft: 10}} >
                <Text>go Back</Text>
            </TouchableOpacity>

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
            </View>

        </View>
    );
}
export default SignUpPage;