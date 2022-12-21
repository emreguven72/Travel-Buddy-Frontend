import React from "react";
import { Text,View, Image, TouchableOpacity } from "react-native";
import Styles from '../styles/SettingsScreenStyle';
import useAuthStore from "../contexts/AuthStore";

const SettingsScreen = ({ navigation }) => {
    const logout = useAuthStore((state) => state.logout)

    const goAccountScreen = () => {
        navigation.navigate('AccountScreen')
    }
    
    const SettingsHeader = () => {
        return(
            <View style={Styles.baseStyle.settingsHeaderContainer}>
                <Text style={Styles.baseStyle.settingsHeaderText}>
                    Settings
                </Text>
            </View>
        )
    }

    return(
        <View style={Styles.baseStyle.container}>
            <SettingsHeader />
            <View style={Styles.baseStyle.optionsContainer}>
                <TouchableOpacity onPress={goAccountScreen} style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/accountIcon.png')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>Account</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>

                <TouchableOpacity style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/notificationBellLogo.jpeg')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>Notifications</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>

                <TouchableOpacity style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/securitySettingsLogo.png')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>Security</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>

                <TouchableOpacity style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/informationLogo.png')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>About</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>

                <TouchableOpacity style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/themesSettingsLogo.png')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>Themes</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>

                <TouchableOpacity onPress={logout} style={Styles.baseStyle.option}>
                    <Image 
                        source={require('../images/logoutLogo.jpeg')}
                        style={Styles.baseStyle.optionIcon}
                    />
                    <Text style={Styles.baseStyle.optionText}>Logout</Text>
                </TouchableOpacity>
                <View style={Styles.baseStyle.wrapper}/>
            </View>
        </View>
    )
}
export default SettingsScreen

//GOOGLE API KEY = AIzaSyA4kojC9WKLpgXhq7GnRqbVspxtaEdOA24