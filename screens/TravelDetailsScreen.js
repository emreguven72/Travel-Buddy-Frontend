import React, { useEffect } from "react";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import Styles from '../styles/TravelDetailsScreenStyle'
import BasicButton from '../components/BasicButton'
//import Map from "../components/Map";
import useAuthStore from "../contexts/AuthStore";
import { Linking } from 'react-native'

const TravelDetailsScreen = ({ navigation, route }) => {
    const authInfo = useAuthStore((state) => state.authInfo)

    const {
        userImage,
        startLocation,
        endLocation,
        description,
        carDetails,
        username,
        userId,
        name,
        email
    } = route.params

    const sendEmail = () => {
        const sendTo = email
        const defaultSubject = `TravelBuddy join request`
        const defaultBody = `Hi ${name},\nI am ${authInfo.name} and i want to join your travel from ${startLocation} to ${endLocation}. Please let me know if i can join you.`
        Linking.openURL(`mailto:${sendTo}?subject=${defaultSubject}&body=${defaultBody}`)
    }

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.imageSectionContainer}>
                <Image 
                    source={require('../images/karavan1.jpeg')} //TODO: add the car image dynamically here
                    style={Styles.baseStyle.carImage}
                />
                <View style={Styles.baseStyle.userInfoSection}>
                    <TouchableOpacity style={Styles.baseStyle.userImageSection}>
                        <Image 
                            source={require('../images/default.png')}
                            style={Styles.baseStyle.userImage}
                        />
                    </TouchableOpacity>
                    <Text style={Styles.baseStyle.usernameText}>{username}</Text>
                </View>
            </View>
            <ScrollView style={Styles.baseStyle.travelDetailsSectionContainer}>
                <Text style={Styles.baseStyle.locationTexts}>{startLocation} {"--->"} {endLocation}</Text>
                <Text style={Styles.baseStyle.descriptionText}>{description}</Text>
                <Text style={Styles.baseStyle.carDetailsText}>Araç: {carDetails}</Text>
            </ScrollView>
            <View style={Styles.baseStyle.mapSection}>
                <View style={Styles.baseStyle.map}>
                    <Text style={{textAlign:'center',fontSize:24,marginTop:'auto',marginBottom:'auto'}}>Map Component</Text>
                </View> 
                {
                    username != authInfo.username ? (
                        <View style={Styles.baseStyle.joinTravelButtonContainer}>
                            <BasicButton 
                                title="Join Travel"
                                color="#53D8A9"
                                onPress={sendEmail}
                            />
                        </View>
                    ) : null
                }
            </View>
        </View>
    )
}
export default TravelDetailsScreen