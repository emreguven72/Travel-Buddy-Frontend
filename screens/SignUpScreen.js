import React from "react";
import styles from '../styles/SignUpPageStyle';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import UserService from '../services/userService'
import { Formik } from "formik";

const SignUpPage = ({ navigation }) => {
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

    const signUp = (formValues) => {
        if(formValues.email!=''&&formValues.password!=''&&formValues.username!=''&&formValues.name!=''&&formValues.surname!=''&&formValues.phoneNumber!='') {
            if(true /* Geçerli bilgiler girildi */) {
                let userService = new UserService();
                userService.createUser(formValues.email,formValues.password,formValues.username,formValues.name,formValues.surname,formValues.phoneNumber);
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

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    username: '',
                    name: '',
                    surname: '',
                    phoneNumber: ''
                }}
                onSubmit={signUp}
            >
                {({ handleSubmit, handleBlur, handleChange, values }) => (
                    <View style={styles.baseStyle.formContainer}>
                        <TextInputArea
                            placeholder='Email'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        <TextInputArea
                            placeholder='Password'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        <TextInputArea
                            placeholder='Username'
                            value={values.username}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                        />
                        <TextInputArea
                            placeholder='Name'
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                        />
                        <TextInputArea
                            placeholder='Surname'
                            value={values.surname}
                            onChangeText={handleChange('surname')}
                            onBlur={handleBlur('surname')}
                        />
                        <TextInputArea
                            placeholder='Phone Number'
                            value={values.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                        />
                        <View style={{marginTop: 20}}>
                            <BasicButton 
                                title='Sign Up'
                                onPress={handleSubmit}
                                color='gray'
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}
export default SignUpPage;