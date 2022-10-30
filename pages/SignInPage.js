import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TextInput, StatusBar, View, TouchableOpacity } from "react-native";
import styles from "../styles/SignInPageStyle";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";

const SignInPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goBack = () => {
      navigation.goBack();
    }

    const logIn = () => {
      if(email!=''&&password!='') {
        if(true /* bilgiler doğruysa */) {
          console.log('Giriş yapıldı');
        } else {
          console.log('E-posta veya şifre yanlış')
        }
      }else {
        console.log('Eksik bilgi girişi');
      }
    }

    const LogInButton = () => {
      return(
        <View style={{marginTop:30}}>
          <BasicButton 
            title='Log In'
            onPress={logIn}
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
      <View style={styles.base.FormArea} >
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
        <LogInButton />
      </View>
    </View>
  );
}

export default SignInPage;
