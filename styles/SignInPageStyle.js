import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputArea: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 40,
        width: 250,
        marginTop: 40
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