import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topNavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logoContainer: {
        alignSelf: 'center',
    },
    addTravelButtonContainer: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#53D8A9',
        marginLeft: 40
    },
    travelCardsContainer: {
        marginTop: 20,
        flex: 1,
    },
    travelCardContainer: {
        flexDirection: 'column',
        height: 300,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#53D8A9',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#E1FFEE'
    },
    travelCardTravelImage: {
        width: '100%',
        height: '40%',
        borderBottomWidth: 1.5,
        borderBottomColor: '#53D8A9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    travelCardUserInfoContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        alignItems: 'center',
    },
    travelCardUserImage: {
        width: '19%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#53D8A9',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    travelCardUserNameText: {
        fontSize: 20,
        marginLeft: 30,
        color: '#53D8A9'
    },
    travelCardLocationsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    travelCardLocationsTexts: {
        fontSize: 24,
        color: '#53D8A9',
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    cityDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cityDropdown: {
        borderRadius: 10,
        backgroundColor: '#53D8A9',
        width: '40%'
    },
    searchIcon: {
        width: 30,
        height: 30,
    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}