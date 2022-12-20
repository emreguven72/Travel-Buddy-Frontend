import React, { useEffect,useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";
import shallow from 'zustand/shallow';
import SelectDropdown from "react-native-select-dropdown";

const TravelsScreen = ({ navigation }) => {
    const travels = useTravelStore((state) => state.travels, shallow)
    const getTravels = useTravelStore((state) => state.fetch)
    const getTravelsByLocations = useTravelStore((state) => state.fetchByLocations)
    const [isSearched, setIsSearched] = useState(false)
    const [selectedStartLocation, setSelectedStartLocation] = useState(null)
    const [selectedEndLocation, setSelectedEndLocation] = useState(null)

    const cities = ["Adana","Adiyaman","Afyon","Agri","Amasya","Ankara","Antalya","Artvin","Aydin",
                    "Balikesir","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri",
                    "Corum","Denizli","Diyarbakir","Edirne","Elaziğ","Erzincan","Erzurum","Eskisehir",
                    "Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Isparta","Mersin","Istanbul",
                    "Izmir","Kars","Kastamonu","Kayseri","Kirklareli","Kirşehir","Kocaeli","Konya",
                    "Kutahya","Malatya","Manisa","Maras","Mardin","Mugla","Mus",
                    "Nevsehir","Nigde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas",
                    "Tekirdag","Tokat","Trabzon","Tunceli","Sanliurfa","Usak","Van","Yozgat",
                    "Zonguldak","Aksaray","Bayburt","Karaman","Kirikkale","Batman","Sirnak",
                    "Bartin","Ardahan","Igdir","Yalova","Karabuk","Kilis","Osmaniye","Duzce"]

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
        getTravelsByLocations(selectedStartLocation,selectedEndLocation)
        //console.log(travels)
        //console.log(selectedStartLocation, " ", selectedEndLocation)
        const interval = setInterval(() => {
            getTravelsByLocations(selectedStartLocation,selectedEndLocation)
        },10000)
        return () => {
            clearInterval(interval)
        }
    }, [selectedStartLocation,selectedEndLocation,isSearched]) 
    

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.topNavContainer}>
                <TopNav />
            </View>
            {
                !isSearched ? (<View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 150
                }}>
                    <SelectDropdown
                        data={cities}
                        dropdownStyle={Styles.baseStyle.cityDropdown}
                        onSelect={(selectedItem, index) => {
                            setSelectedStartLocation(selectedItem)
                        }}
                        buttonStyle={Styles.baseStyle.cityDropdown}
                        defaultButtonText="Select a city"
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />

                    <SelectDropdown
                        data={cities}
                        dropdownStyle={Styles.baseStyle.cityDropdown}
                        onSelect={(selectedItem, index) => {
                            setSelectedEndLocation(selectedItem)
                        }}
                        buttonStyle={Styles.baseStyle.cityDropdown}
                        defaultButtonText="Select a city"
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                    <TouchableOpacity onPress={() => {
                        setIsSearched(true)
                        getTravelsByLocations(selectedStartLocation,selectedEndLocation)
                    }}>
                        <Image 
                            source={require('../images/searchIcon.png')}
                            style={Styles.baseStyle.searchIcon}
                        />
                    </TouchableOpacity>
                </View>) : (
                travels ? (
                <View style={Styles.baseStyle.travelCardsContainer}>
                    <View style={Styles.baseStyle.cityDropdownContainer}>
                        <SelectDropdown
                            data={cities}
                            dropdownStyle={Styles.baseStyle.cityDropdown}
                            defaultValue={selectedStartLocation}
                            onSelect={(selectedItem, index) => {
                                setSelectedStartLocation(selectedItem)
                            }}
                            buttonStyle={Styles.baseStyle.cityDropdown}
                            defaultButtonText="Select a city"
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />

                        <SelectDropdown
                            data={cities}
                            dropdownStyle={Styles.baseStyle.cityDropdown}
                            defaultValue={selectedEndLocation}
                            onSelect={(selectedItem, index) => {
                                setSelectedEndLocation(selectedItem)
                            }}
                            buttonStyle={Styles.baseStyle.cityDropdown}
                            defaultButtonText="Select a city"
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                        <TouchableOpacity onPress={() => {
                            setIsSearched(true)
                            getTravelsByLocations(selectedStartLocation,selectedEndLocation)
                        }}>
                            <Image 
                                source={require('../images/searchIcon.png')}
                                style={Styles.baseStyle.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>
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
                ): null
                )
            }
        </View>
    );
}
export default TravelsScreen;