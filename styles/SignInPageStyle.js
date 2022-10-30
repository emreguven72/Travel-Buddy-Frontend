import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    FormArea: {
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
        alignItems: 'center'
    }
})

export default {
    base: StyleSheet.create({
        ...baseStyle
    }),
    dark: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: 'black'
        },
        text: {
            color: 'white'
        }
    }),
    light: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: 'white'
        },
        text: {
            color: 'black'
        }
    })
}