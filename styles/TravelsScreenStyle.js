import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    travelCardContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#53D8A9',
        opacity: 1,
        height: '15%',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    travelCardLocationText: {
        fontSize: 20
    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}