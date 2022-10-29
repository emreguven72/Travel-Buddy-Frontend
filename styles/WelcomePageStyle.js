import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const baseStyle = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    TopTextContainer: {
        flexDirection: 'column',
        marginTop: 120,
        alignItems: 'center',
    },
    LogoAndAppNameContainer: {
        flexDirection: 'row'
    },
    AppNameText: {
        fontSize: 36,
        alignSelf: 'center',
        marginLeft: 10,
        color: '#FF6464'
    },
    SloganText: {
        fontSize: 20,
        marginTop: 20,
        color: '#674747'
    },
    Logo: {
        height: 50,
        width: 50,
        borderRadius: 20
    },
    SignUpButton: {
        backgroundColor: '#53D8A9',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 55,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 65
    },
    SignUpButtonText: {
        fontSize: 16,
        color: 'white'
    },
    LogInContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    GotAccountText: {
        fontSize: 16,
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'column'
    },
    LogInText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
    },
})

export default {
    base: StyleSheet.create({
        ...baseStyle
    })
}