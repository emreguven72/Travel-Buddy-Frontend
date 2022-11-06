import { Formik } from "formik";
import React, {useContext, useState, useEffect, useMemo} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BasicButton from "../components/BasicButton";
import TextInputArea from "../components/TextInputArea";
import { AuthContext } from "../contexts/AuthContext";
import Styles from '../styles/TravelsScreenStyle'
import TravelService from "../services/TravelService";

const TravelsScreen = () => {
    const {userInfo,logout} = useContext(AuthContext);
    const [travels, setTravels] = useState([]);

    const TravelCard = ({ startLocation, destination }) => {
        return(
            <TouchableOpacity style={Styles.baseStyle.travelCardContainer} activeOpacity={0.8}>
                <Text style={Styles.baseStyle.travelCardLocationText}>{startLocation} --- {destination}</Text>
            </TouchableOpacity>
        );
    }

    const getAllTravels = async() => {
        let travelService = new TravelService();
        setTravels(await travelService.getAllTravels())
        console.log('calisti');
    }

    const createTravel = async(formValues) => {
        if(formValues.startLocation!=''&&formValues.endLocation!='') {
            let travelService = new TravelService();
            await travelService.createTravel(formValues.startLocation,formValues.endLocation,formValues.user);
        }
    }

    useEffect(() => {
        getAllTravels();
    }, []) //infinite loop if putting travels in array
    

    return(
        <View style={Styles.baseStyle.container}>
            {travels.map((travel) => (
                <TravelCard
                    key={travel.id}
                    startLocation={travel.startLocation}
                    destination={travel.endLocation}
                />
            ))}
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