import React from "react";
import { Text, View, Image, TouchableOpacity, Touchable } from "react-native";
import styles from '../styles/WelcomePageStyle'


const WelcomePage = () => {
    return(
        <View style={styles.base.MainContainer}>
            <View style={styles.base.TopTextContainer}>
                <View style={styles.base.LogoAndAppNameContainer}>
                    <Text style={styles.base.AppNameText}>Travel Buddy</Text>
                </View>
                <Text style={styles.base.SloganText}>A fun way to travel</Text>
            </View>
            <TouchableOpacity style={styles.base.SignUpButton} activeOpacity={0.8}>
                <Text style={styles.base.SignUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.base.LogInContainer}>
                <Text style={styles.base.GotAccountText}>Got an account?</Text>
                <TouchableOpacity activeOpacity={0.4}><Text style={styles.base.LogInText}>Log in</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomePage;