import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    TopTextContainer: {
        flexDirection: 'column',
        marginTop: 120,
        alignItems: 'center',
    },
    LogoAndAppNameContainer: {
        flexDirection: 'column'
    },
    SloganText: {
        fontSize: 20,
        marginTop: 10,
        color: '#000000'
    },
    Logo: {
        height: 100,
        width: 200,
        resizeMode: 'contain'
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
        flexDirection: 'column',
        color: '#000000'
    },
    LogInText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#53D8A9'
    },
})

export default {
    base: StyleSheet.create({
        ...baseStyle
    })
}