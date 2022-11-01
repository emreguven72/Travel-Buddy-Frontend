import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/SignInPageStyle";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import { Formik } from "formik";
import { AuthContext } from "../contexts/AuthContext";

const SignInScreen = ({ navigation }) => {
  const {login, logout} = useContext(AuthContext);

    const goBack = () => {
      navigation.goBack();
    }

    const logIn = (formValues) => {
      if(formValues.email!=''&&formValues.password!='') {
        if(true /* bilgiler doğruysa */) {
          console.log('Giriş yapıldı');
        } else {
          console.log('E-posta veya şifre yanlış')
        }
      }else {
        console.log('Eksik bilgi girişi');
      }
    }

    const LogInButton = ({ onPress }) => {
      return(
        <View style={{marginTop:30}}>
          <BasicButton 
            title='Log In'
            onPress={onPress}
            color='#BBB'
          />
        </View>
      );
    }

  return (
    <View style={styles.light.container}>
      <TouchableOpacity onPress={goBack} style={{marginTop: 10, marginLeft: 10}} >
        <Text>go Back</Text>
      </TouchableOpacity>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.base.FormArea} >
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
            <LogInButton onPress={handleSubmit}/>
          </View>
        )}
      </Formik>

    </View>
  );
}

export default SignInScreen;