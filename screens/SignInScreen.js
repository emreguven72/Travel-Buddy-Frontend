import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../styles/SignInPageStyle";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import { Formik } from "formik";
import useAuthStore from "../contexts/AuthStore";

const SignInScreen = ({ navigation }) => {
  const login = useAuthStore((state) => state.login)

    const goBack = () => {
      navigation.goBack();
    }

    const logIn = (formValues) => {
      login(formValues.email, formValues.password);
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

  const OrText = () => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 50, alignItems: 'center'}}>
            <View style={{height: 1, width: '42%', backgroundColor: '#CCCCCC'}}></View>
            <Text style={{color: '#CCCCCC', fontSize: 18}}>OR</Text>
            <View style={{height: 1, width: '42%', backgroundColor: '#CCCCCC'}}></View>
        </View>
    )
}

const GoogleButton = () => {
  return(
      <View style={{marginTop: 50}}>
          <TouchableOpacity style={{
              backgroundColor: '#FFFFFF',
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 55,
              width: 300,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#53D8A9',
              flexDirection: 'row'
          }}
          onPress = {null}
          >
              <Image 
                  source={require('../images/icons8-google-192(-xxxhdpi).png')}
                  style={{height: 30, width: 30, marginLeft: -40}}
              />
              <Text style={{
                  fontSize: 14,
                  color: 'black',
                  marginLeft: 10
              }}>Sign In With Google</Text>
          </TouchableOpacity>
      </View>
  )
}

    const LogInButton = ({ onPress }) => {
      return(
        <View style={{marginTop:50}}>
          <BasicButton 
            title='Sign In'
            onPress={onPress}
            color='#53D8A9'
          />
        </View>
      );
    }

  return (
    <View style={styles.light.container}>
      <TopNav />
      <Formik
        initialValues={{ email: 'emreguven_72@hotmail.com', password: '123' }}
        onSubmit={logIn}
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
                isSecure={true}
            />
            <LogInButton onPress={handleSubmit}/>
          </View>
        )}
      </Formik>
      <OrText />
      <GoogleButton />
    </View>
  );
}
export default SignInScreen;