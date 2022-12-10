import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    settingsHeaderContainer: {
        alignItems: 'center'
    },
    settingsHeaderText: {
        color: '#000000',
        fontSize: 30,
        marginTop: 20
    },
    optionsContainer: {
        flexDirection: 'column',
        marginTop: 50,
    },
    option: {
        flexDirection: 'row',
        marginTop: 10,
    },
    optionIcon: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    optionText: {
        color: '#000000',
        fontSize: 20,
        marginLeft: 15
    },
    wrapper: {
        borderWidth: 0.5,
        borderColor: 'gray',
        width: '96%',
        alignSelf: 'center',
        marginTop: 5
    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}