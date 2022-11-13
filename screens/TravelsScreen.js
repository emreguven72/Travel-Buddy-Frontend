import { Formik } from "formik";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BasicButton from "../components/BasicButton";
import TextInputArea from "../components/TextInputArea";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";
import useAuthStore from "../contexts/AuthStore";
import shallow from 'zustand/shallow';

const TravelsScreen = () => {
    const authInfo = useAuthStore((state) => state.authInfo)
    const logout = useAuthStore((state) => state.logout)
    const travels = useTravelStore((state) => state.travels, shallow);
    const getTravels = useTravelStore((state) => state.fetch);
    const addTravel = useTravelStore((state) => state.addTravel);

    const TravelCard2 = ({ startLocation, destination, userInfo }) => {
        return(
            <TouchableOpacity style={Styles.baseStyle.travelCardContainer} activeOpacity={0.8}>
                <Text style={Styles.baseStyle.travelCardLocationText}>{userInfo.username}</Text>
            </TouchableOpacity>
        );
    }

    const createTravel = (formValues) => {
        if(formValues.startLocation!=''&&formValues.endLocation!='') {
            addTravel(formValues.startLocation,formValues.endLocation,formValues.user);
            getTravels();
        }
    }
    
    const TravelCard = ({ startLocation, destionation, userInfo }) => {
        return(
            <View>

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
            {travels ? travels.map((travel) => (
                <View key={travel.id}></View>
            )) : <View></View>}
            <Formik
                initialValues={{
                    startLocation: '',
                    endLocation: '',
                    user: authInfo
                }}
                onSubmit={createTravel}
            >
                {({ handleSubmit, handleBlur, handleChange, values }) => (
                    <View>
                        <TextInputArea 
                            placeholder='Start Location'
                            value={values.startLocation}
                            onChangeText={handleChange('startLocation')}
                            onBlur={handleBlur('startLocation')}
                        />
                        <TextInputArea
                            placeholder='End Location'
                            value={values.endLocation}
                            onChangeText={handleChange('endLocation')}
                            onBlur={handleBlur('endLocation')}
                        />
                        <BasicButton
                            title='Add Travel'
                            color='yellow'
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
            <BasicButton
                title='Log Out'
                color='red'
                onPress={logout}
            />
        </View>
    );
}
export default TravelsScreen;