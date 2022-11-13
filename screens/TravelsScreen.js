import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";
import shallow from 'zustand/shallow';

const TravelsScreen = ({ navigation }) => {
    const travels = useTravelStore((state) => state.travels, shallow);
    const getTravels = useTravelStore((state) => state.fetch);
    const addTravel = useTravelStore((state) => state.addTravel);

    //TODO: add this method to the addTravelScreen when you create it.
    const createTravel = (formValues) => {
        if(formValues.startLocation!=''&&formValues.endLocation!='') {
            addTravel(formValues.startLocation,formValues.endLocation,formValues.user);
            getTravels();
        }
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
                    <TouchableOpacity onPress={null} style={Styles.baseStyle.addTravelButtonContainer} hitSlop={{left: 30, right: 30, bottom: 20, top: 30}}>
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
    
    const TravelCard = ({ startLocation, endLocation, userName }) => {
        return(
            <TouchableOpacity style={Styles.baseStyle.travelCardContainer} activeOpacity={0.5}>
                <View style={Styles.baseStyle.travelCardTravelImage}>
                    <Text>Picture About Travel</Text>
                </View>
                <View style={Styles.baseStyle.travelCardUserInfoContainer}>
                    <View style={Styles.baseStyle.travelCardUserImage}>
                        <Image 
                            source={null}
                            style={null}
                            //TODO: add source and style for the pic and fetch it from db
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

    const Travels = () => {
        return(
            <View style={Styles.baseStyle.travelCardsContainer}>
                {travels ? travels.map((travel) => (
                    <TravelCard 
                        key={travel.id}
                        startLocation={travel.startLocation}
                        endLocation={travel.endLocation}
                        userInfo={travel.user}
                    />
                )) : <View></View>}
            </View>
        )
    }

    useEffect(() => {
        //TODO: SWR kutuphanesine bak ve veri guncellemesinde refresh icin kullan.
        //NOTE: veri degisiminde istek atma yontemi yok interval ile birkac dakikada veya saniyede bir cagiracaksin mecburen. yani swr kullanmana gerek yok ama bir arastir.
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