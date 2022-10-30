import React from "react";
import { Text, View, Image, TouchableOpacity, Touchable } from "react-native";
import styles from '../styles/WelcomePageStyle'
import BasicButton from "../components/BasicButton";

const WelcomePage = ({ navigation }) => {
    const TopTextArea = () => {
        return(
            <View style={styles.base.TopTextContainer}>
                    <View style={styles.base.LogoAndAppNameContainer}>
                        <Text style={styles.base.AppNameText}>Travel Buddy</Text>
                    </View>
                    <Text style={styles.base.SloganText}>A fun way to travel</Text>
                </View>
        );
    }
    
    const SignUpButton = () => {
        return(
            <View style={{marginTop:65}}>
                <BasicButton 
                    title='Sign Up'
                    onPress={() => navigation.navigate('SignUpScreen')}
                    color='#53D8A9'
                />
            </View>
        );
    }

    const GotAnAccountText = () => {
        return(
            <View style={styles.base.LogInContainer}>
                <Text style={styles.base.GotAccountText}>Got an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} activeOpacity={0.4}><Text style={styles.base.LogInText}>Log in</Text></TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={styles.base.MainContainer}>
            <TopTextArea />
            <SignUpButton />
            <GotAnAccountText />
        </View>
    );
}

export default WelcomePage;