import React, { useEffect } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import useTravelStore from "../contexts/TravelStore";
import Styles from '../styles/TravelDetailsScreenStyle'
import BasicButton from '../components/BasicButton'

const TravelDetailsScreen = ({ navigation, route }) => {

    const {
        userImage,
        startLocation,
        endLocation,
        description,
        carDetails,
        username,
        userId
    } = route.params

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.imageSectionContainer}>
                <Image 
                    source={require('../images/carImagExample.jpg')} //TODO: add the car image dynamically here
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
            <View style={Styles.baseStyle.travelDetailsSectionContainer}>
                <Text style={Styles.baseStyle.locationTexts}>{startLocation} {"--->"} {endLocation}</Text>
                <Text style={Styles.baseStyle.descriptionText}>{description}</Text>
                <Text style={Styles.baseStyle.carDetailsText}>{carDetails}</Text>
            </View>
            <View style={Styles.baseStyle.mapSection}>
                <View style={Styles.baseStyle.map}>
                    <Text style={{fontSize: 24, alignSelf: 'center',marginTop: 'auto',marginBottom: 'auto'}}>Map Component</Text>
                </View> 

                <View style={Styles.baseStyle.joinTravelButtonContainer}>
                    <BasicButton 
                        title="Join Travel"
                        color="#53D8A9"
                        onPress={null}
                    />
                </View>
            </View>
        </View>
    )
}
export default TravelDetailsScreen