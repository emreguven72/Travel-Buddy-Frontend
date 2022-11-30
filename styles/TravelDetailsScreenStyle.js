import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    imageSectionContainer: {
        width: '100%',
        height: '35%',
        position: "relative",
        justifyContent: 'flex-end'
    },
    carImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    userInfoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 10,
    },
    userImageSection: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#53D8A9'
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    usernameText: {
        fontSize: 24,
        marginLeft: 10,
        color: '#FFFFFF'
    },
    travelDetailsSectionContainer: {
        width: '100%',
        height: '35%',
    },
    locationTexts: {
        fontSize: 24,
        color: '#000000',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
    descriptionText: {
        fontSize: 18,
        color: '#000000',
        paddingHorizontal: 10,
        marginTop: 40
    },
    carDetailsText: {
        fontSize: 18,
        color: '#000000',
        paddingHorizontal: 10,
        marginTop: 80
    },
    mapSection: {
        width: '100%',
        height: '30%',
        position: "relative",
        justifyContent: 'flex-end'
    },
    map: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    joinTravelButtonContainer: {
        marginBottom: 15
    },
    joinTravelText: {
        fontSize: 24,
        backgroundColor: '#FFFFFF'
    }
})

export default {
    baseStyle: StyleSheet.create({
        ...baseStyle
    })
}