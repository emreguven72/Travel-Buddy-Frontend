import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    userInfoSection: {
        flexDirection: 'row',
        alignItems: 'center',     
    },
    userImageSection: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#53D8A9',
        marginLeft: 20,
        marginTop: 20,
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    usernameText: {
        fontSize: 24,
        marginLeft: 10,
        color: '#000000',
    },
    accountInformationContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50
    },
    information: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 8,
        marginTop: 0.5,
    },
    informaitonHeaderContainer: {
        width: '35%',
        justifyContent: 'center',
        marginLeft: 11
    },
    informationHeaderText: {
        fontSize: 20,
        color: '#000000'
    },
    informationUserText: {
        fontSize: 18,
        color: '#000000',
    },
    wrapper: {

    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}