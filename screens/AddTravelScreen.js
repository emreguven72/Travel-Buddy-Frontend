import React, { useEffect } from "react";
import { Text,View, Image, TouchableOpacity } from "react-native";
import useTravelStore from "../contexts/TravelStore";
import TextInputArea from "../components/TextInputArea";
import Styles from '../styles/AddTravelScreenStyle';
import { Formik } from 'formik';
import BasicButton from "../components/BasicButton";
import useAuthStore from "../contexts/AuthStore";

const AddTravelScreen = ({ navigation }) => {
    const addTravel = useTravelStore((state) => state.addTravel);
    const getTravels = useTravelStore((state) => state.fetch)
    const authInfo = useAuthStore((state) => state.authInfo)

    const goBack = () => {
        navigation.goBack();
    }

    //TODO: send also description and carDetails to addTravel function
    const createTravel = (formValues) => {
        if(formValues.startLocation!=''&&formValues.endLocation!=''&&formValues.description!=''&&formValues.carDetails!='') {
            addTravel(formValues.startLocation,formValues.endLocation,authInfo,formValues.description,formValues.carDetails);
            getTravels();
            goBack();
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
            </View>
        );
    }

    useEffect(() => {
    }, [])

    return(
        <View style={Styles.baseStyle.container}>
            <View style={Styles.baseStyle.topNavContainer}>
                <TopNav />
            </View>
            <Formik
                initialValues={{
                    startLocation: '',
                    endLocation: '',
                    description: '',
                    carDetails: ''
                }}
                onSubmit={createTravel}
            >
                {({ handleSubmit, handleBlur, handleChange, values }) => (
                    <View style={Styles.baseStyle.formContainer}>
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
                        <TextInputArea
                            placeholder='Description'
                            value={values.description}
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                        />
                        <TextInputArea
                            placeholder='Car Details'
                            value={values.carDetails}
                            onChangeText={handleChange('carDetails')}
                            onBlur={handleBlur('carDetails')}
                        />
                        <View style={{marginTop: 50}}>
                            <BasicButton 
                                title='Add Travel'
                                onPress={handleSubmit}
                                color='#53D8A9'
                            />
                        </View>
                    </View>
                )}
            </Formik>
            <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={goBack} style={Styles.baseStyle.cancelButton} activeOpacity={0.8}>
                    <Text style={Styles.baseStyle.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddTravelScreen