import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import styles from '../styles/SignUpPageStyle'
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import UserService from '../services/userService'

const SignUpDetailsScreen = ({ route,navigation }) => {
    const { email } = route.params

    const goBack = () => {
        navigation.goBack();
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

    const TopNav = () => {
        return(
            <View style={{flexDirection: 'row', alignContent: 'center', marginTop: 20}}>
                <View>
                    <TouchableOpacity onPress={goBack} style={{marginLeft: 10}} hitSlop={{left: 50, right: 50, bottom: 30, top: 50}}>
                        <Text style={{fontSize: 30}}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 60, alignSelf: 'center'}}> 
                    <Image 
                        source={require('../images/travelbuddy-logo.png')}
                        style={{
                            height: 40,
                            width: 180,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
            </View>
        );
    }

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <TopNav />

            <Formik
                initialValues={{
                    email: email,
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
                            isSecure={true}
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
                        <View style={{marginTop: 50}}>
                            <BasicButton 
                                title='Sign Up'
                                onPress={handleSubmit}
                                color='#53D8A9'
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}
export default SignUpDetailsScreen;