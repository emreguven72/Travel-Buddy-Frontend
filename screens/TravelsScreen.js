import { Formik } from "formik";
import React, {useContext, useState, useEffect, useMemo} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BasicButton from "../components/BasicButton";
import TextInputArea from "../components/TextInputArea";
import { AuthContext } from "../contexts/AuthContext";
import Styles from '../styles/TravelsScreenStyle'
import useTravelStore from "../contexts/TravelStore";

const TravelsScreen = () => {
    const {userInfo,logout} = useContext(AuthContext);
    const travels = useTravelStore((state) => state.travels);
    const getTravels = useTravelStore((state) => state.fetch);
    const addTravel = useTravelStore((state) => state.addTravel);

    const TravelCard = ({ startLocation, destination }) => {
        return(
            <TouchableOpacity style={Styles.baseStyle.travelCardContainer} activeOpacity={0.8}>
                <Text style={Styles.baseStyle.travelCardLocationText}>{startLocation} --- {destination}</Text>
            </TouchableOpacity>
        );
    }

    const createTravel = (formValues) => {
        if(formValues.startLocation!=''&&formValues.endLocation!='') {
            addTravel(formValues.startLocation,formValues.endLocation,formValues.user);
        }
    }

    useEffect(() => {
        getTravels();
    }, []) 
    

    return(
        <View style={Styles.baseStyle.container}>
            {travels ? travels.map((travel) => (
                <TravelCard
                    key={travel.id}
                    startLocation={travel.startLocation}
                    destination={travel.endLocation}
                />
            )) : <View></View>}
            <Formik
                initialValues={{
                    startLocation: '',
                    endLocation: '',
                    user: userInfo
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