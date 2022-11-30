import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";
import shallow from 'zustand/shallow';

const TravelsScreen = ({ navigation }) => {
    const travels = useTravelStore((state) => state.travels, shallow);
    const getTravels = useTravelStore((state) => state.fetch);

    const goAddTravelScreen = () => {
        navigation.navigate('AddTravelScreen')
    }

    const goTravelDetails = (startLocation,endLocation,userName,userImage,description,carDetails,userId) => {
        navigation.navigate('TravelDetailsScreen', {
            userImage: userImage,
            startLocation: startLocation,
            endLocation: endLocation,
            description: description,
            carDetails: carDetails,
            username: userName,
            userId: userId
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
                <View>
                    <TouchableOpacity onPress={goAddTravelScreen} style={Styles.baseStyle.addTravelButtonContainer} hitSlop={{left: 30, right: 30, bottom: 20, top: 30}}>
                        <Image 
                        source={require('../images/addIcon.png')}
                        style={{
                            backgroundColor: '#53D8A9',
                            height: 30,
                            width: 30
                        }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const TravelCard = ({ startLocation, endLocation, userName, userImage, description, carDetails, userId }) => {
        return(
            <TouchableOpacity onPress={() => goTravelDetails(startLocation,endLocation,userName,userImage,description,carDetails,userId)} style={Styles.baseStyle.travelCardContainer} activeOpacity={0.5}>
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
        getTravels()
        const interval = setInterval(() => {
            getTravels()
        },10000)
        return () => {
            clearInterval(interval)
        }
    }, []) 
    

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.topNavContainer}>
                <TopNav />
            </View>
            {
                travels ? 
                <View style={Styles.baseStyle.travelCardsContainer}>
                    <FlatList
                        data={travels.reverse()}
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
                            />
                        )}
                    />
                </View>
                : <View></View>
            }
        </View>
    );
}
export default TravelsScreen;