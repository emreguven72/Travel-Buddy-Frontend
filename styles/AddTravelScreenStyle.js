import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    topNavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logoContainer: {
        alignSelf: 'center',
        marginLeft: 50
    },
    cancelButton: {
        backgroundColor: '#FF6464',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 55,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    cancelText: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    formContainer: {
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 70,
        alignItems: 'center'
    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}