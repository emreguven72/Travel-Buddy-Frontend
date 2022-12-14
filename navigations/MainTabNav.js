import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TravelsScreen from '../screens/TravelsScreen';
import useAuthStore from '../contexts/AuthStore';
import SettingsScreen from '../screens/SettingsScreen';

const MainTabNav = () => {
    const logout = useAuthStore((state) => state.logout)
      
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if(route.name === 'MainTabs') {
                        return <Image
                            source={require('../images/default.png')}
                            style={{
                                width: size,
                                height: size
                            }}
                        />
                    }
                    if(route.name === 'Settings') {
                        return <Image 
                            source={require('../images/settingsLogo.png')}
                            style={{
                                width: size,
                                height: size
                            }}
                        />
                    }
                },
                tabBarActiveTintColor: '#53D8A9',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {backgroundColor: 'white'}
            })}
        >
            <Tab.Screen options={{headerShown:false}} name="MainTabs" component={TravelsScreen} />
            <Tab.Screen options={{headerShown:false}} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
export default MainTabNav