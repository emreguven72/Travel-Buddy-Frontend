import React from "react";
import styles from '../styles/SignUpPageStyle';
import { View, TouchableOpacity, Image, Text } from "react-native";
import TextInputArea from "../components/TextInputArea";
import BasicButton from "../components/BasicButton";
import { Formik } from "formik";

const SignUpScreen = ({ navigation }) => {
    const goBack = () => {
        navigation.goBack();
    }

    const TopNav = () => {
        return(
            <View style={{flexDirection: 'row', alignContent: 'center', marginTop: 20}}>
                <View>
                    <TouchableOpacity onPress={goBack} style={{marginLeft: 10}} hitSlop={{left: 50, right: 50, bottom: 30, top: 50}}>
                        <Text style={{fontSize: 30}}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 60, alignSelf: 'center'}}> 
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

    const OrText = () => {
        return(
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 50, alignItems: 'center'}}>
                <View style={{height: 1, width: '42%', backgroundColor: '#CCCCCC'}}></View>
                <Text style={{color: '#CCCCCC', fontSize: 18}}>OR</Text>
                <View style={{height: 1, width: '42%', backgroundColor: '#CCCCCC'}}></View>
            </View>
        )
    }

    const GoogleButton = () => {
        return(
            <View style={{marginTop: 50}}>
                <TouchableOpacity style={{
                    backgroundColor: '#FFFFFF',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: 55,
                    width: 300,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#53D8A9',
                    flexDirection: 'row'
                }}
                onPress={null}
                >
                    <Image 
                        source={require('../images/icons8-google-192(-xxxhdpi).png')}
                        style={{height: 30, width: 30, marginLeft: -40}}
                    />
                    <Text style={{
                        fontSize: 14,
                        color: 'black',
                        marginLeft: 10
                    }}>Continue With Google</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const signUp = (formValues) => {
        navigation.navigate('SignUpDetailsScreen',{
            email: formValues.email
        })
    }

    return(
        <View style={styles.baseStyle.container}>
            <TopNav />
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={signUp}
            >
                {({ handleSubmit, handleBlur, handleChange, values }) => (
                    <View style={styles.baseStyle.formContainer}>
                        <View>
                            <TextInputArea
                                placeholder='Email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                        </View>
                        <View style={{marginTop: 50}}>
                            <BasicButton 
                                title='Continue With Email'
                                onPress={handleSubmit}
                                color='#53D8A9'
                            />
                        </View>
                    </View>
                )}
            </Formik>
            <OrText />
            <GoogleButton />
        </View>
    );
}
export default SignUpScreen;