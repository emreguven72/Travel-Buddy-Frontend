import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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