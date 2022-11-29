import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TravelsScreen from '../screens/TravelsScreen';
import useAuthStore from '../contexts/AuthStore';

const MainTabNav = () => {
    const logout = useAuthStore((state) => state.logout)

    function SettingsScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
            <View>
                          <TouchableOpacity onPress={logout} style={{backgroundColor: 'red', width: '75%', alignItems: 'center', height: 30, justifyContent: 'center', marginTop: 20}}>
                              <Text>Logout</Text>
                          </TouchableOpacity>
                      </View>
          </View>
        );
      }
      
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
                    if(route.name === 'Profile') {
                        return <Image 
                            source={require('../images/addIcon.png')}
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
            <Tab.Screen options={{headerShown:false}} name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
export default MainTabNav