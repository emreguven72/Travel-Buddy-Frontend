import react, { useEffect, useState } from "react";
import { View, Text, Image, } from "react-native";
import Styles from '../styles/AccountScreenStyle'
import useAuthStore from "../contexts/AuthStore";

const AccountScreen = () => {
    const authInfo = useAuthStore((state) => state.authInfo)
    const authTravels = useAuthStore((state) => state.authTravels)

    const UserImageAndUsername = () => {
        return(
            <View style={Styles.baseStyle.userInfoSection}>
                    <View style={Styles.baseStyle.userImageSection}>
                        <Image 
                            source={require('../images/default.png')}
                            style={Styles.baseStyle.userImage}
                        />
                    </View>
                <Text style={Styles.baseStyle.usernameText}>{authInfo.username}</Text>
            </View>
        )
    }

    const AccountInformations = () => {
        return(
            <View style={Styles.baseStyle.accountInformationContainer}>
                <Information 
                    header='Email'
                    userInfo={authInfo.email}
                />
                <Information 
                    header='Username'
                    userInfo={authInfo.username}
                />
                <Information 
                    header='Password'
                    userInfo={authInfo.password}
                />
                <Information 
                    header='Name'
                    userInfo={authInfo.name}
                />
                <Information 
                    header='Surname'
                    userInfo={authInfo.surname}
                />
                <Information 
                    header='Phone number'
                    userInfo={authInfo.phoneNumber}
                />
            </View>
        )
    }

    const Information = ({header, userInfo}) => {
        return(
            <View style={Styles.baseStyle.information}>
                    <View style={Styles.baseStyle.informaitonHeaderContainer}>
                        <Text style={Styles.baseStyle.informationHeaderText}>{header}:</Text>
                    </View>
                    <Text style={Styles.baseStyle.informationUserText}>{userInfo}</Text>
                </View>
        )
    }

    useEffect(() => {
        console.log(authTravels.length)
    }, [])
    

    return(
        <View style={Styles.baseStyle.container}>
            <UserImageAndUsername />
            <AccountInformations />
        </View>
    )
}
export default AccountScreen