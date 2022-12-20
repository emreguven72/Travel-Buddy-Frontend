import React, { useEffect,useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";
import shallow from 'zustand/shallow';
import SelectDropdown from "react-native-select-dropdown";

const TravelsScreen = ({ navigation }) => {
    const travels = useTravelStore((state) => state.travels, shallow)
    const getTravels = useTravelStore((state) => state.fetch)
    const [isSearched, setIsSearched] = useState(false)
    const [selectedStartLocation, setSelectedStartLocation] = useState(null)
    const [selectedEndLocation, setSelectedEndLocation] = useState(null)

    const cities = ["Adana","Adiyaman","Afyonkarahisar","Ağrı","Amasya","Ankara","Antalya","Artvin","Aydın",
                    "Balıkesir","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı",
                    "Çorum","Denizli","Diyarbakır","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir",
                    "Gaziantep","Giresun","Günüşhane","Hakkari","Hatay","Isparta","Mersin","İstanbul",
                    "İzmir","Kars","Kastamonu","Kayseri","Kırklareli","Kırşehir","Kocaeli","Konya",
                    "Kütahya","Malatya","Malatya","Manisa","Kahramanmaraş","Mardin","Muğla","Muş",
                    "Nevşehir","Niğde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas",
                    "Tekirdağ","Tokat","Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozxgat",
                    "Zonguldak","Aksaray","Bayburt","Karaman","Kırıkkale","Batman","Şırnak",
                    "Bartın","Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye","Düzce"]

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

    const CityDropDown = () => {
        return(
            <View style={Styles.baseStyle.cityDropdownContainer}>
                <SelectDropdown
                    data={cities}
                    dropdownStyle={Styles.baseStyle.cityDropdown}
                    onSelect={(selectedItem, index) => {
                        setSelectedStartLocation(selectedItem)
                        console.log(selectedStartLocation)
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
                        console.log(selectedEndLocation)
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
            </View>
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
    }, [selectedStartLocation,selectedEndLocation]) 
    

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.topNavContainer}>
                <TopNav />
            </View>
            {
                isSearched ? <CityDropDown /> : (
                travels ? (
                <View style={Styles.baseStyle.travelCardsContainer}>
                    <View style={Styles.baseStyle.cityDropdownContainer}>
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
                        <TouchableOpacity onPress={null}>
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