import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from '../styles/MyTravelsScreenStyle'

const MyTravelsScreen = ({ navigation,route }) => {
    const { authTravels } = route.params

    const goTravelDetails = (startLocation,endLocation,userName,userImage,description,carDetails,userId,name,email) => {
        navigation.navigate('TravelDetailsScreen', {
            userImage: userImage,
            startLocation: startLocation,
            endLocation: endLocation,
            description: description,
            carDetails: carDetails,
            username: userName,
            userId: userId,
            name: name,
            email: email
        })
    }

    const TopNav = () => {
        return(
            <View style={Styles.baseStyle.topNavContainer}>
                <View style={Styles.baseStyle.logoContainer}> 
                    <Image 
                        source={require('../images/travelbuddy-logo.png')}
                        style={{
                            height: 40,
                            width: 180,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
            </View>
        );
    }

    const TravelCard = ({ startLocation, endLocation, userName, userImage, description, carDetails, userId, name, email }) => {
        return(
            <TouchableOpacity onPress={() => goTravelDetails(startLocation,endLocation,userName,userImage,description,carDetails,userId,name,email)} style={Styles.baseStyle.travelCardContainer} activeOpacity={0.5}>
                <View style={Styles.baseStyle.travelCardTravelImage}>
                    <Text>Picture About Travel</Text>
                </View>
                <View style={Styles.baseStyle.travelCardUserInfoContainer}>
                    <View style={Styles.baseStyle.travelCardUserImage}>
                        <Image 
                            source={require('../images/default.png')}
                            style={Styles.baseStyle.userImage}
                        />
                    </View>
                    <Text style={Styles.baseStyle.travelCardUserNameText}>{userName}</Text>
                </View>
                <View style={Styles.baseStyle.travelCardLocationsContainer}>
                    <Text style={Styles.baseStyle.travelCardLocationsTexts}>{startLocation} ------{'>'} {endLocation}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        console.log(authTravels)
    }, []) 
    

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.topNavContainer}>
                <TopNav />
            </View>
            <View style={Styles.baseStyle.travelCardsContainer}>   
                <FlatList
                    data={authTravels.reverse()}
                    renderItem={({item}) => (
                        <TravelCard
                            key={item.user.id}
                            startLocation={item.startLocation}
                            endLocation={item.endLocation}
                            userName={item.user.username}
                            userImage={item.user.image}
                            description={item.description}
                            carDetails={item.carDetails}
                            userId={item.user.id}
                            name={item.user.name}
                            email={item.user.email}
                        />
                    )}
                />
            </View>
        </View>
    );
}
export default MyTravelsScreen;