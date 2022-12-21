import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelsScreen from "../screens/TravelsScreen";
import AddTravelScreen from "../screens/AddTravelScreen";
import MainTabNav from "./MainTabNav";
import TravelDetailsScreen from "../screens/TravelDetailsScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="TravelsScreen"
            >
                <Stack.Screen 
                    name="TravelsScreen" 
                    component={MainTabNav}
                />
                <Stack.Screen 
                    name="AddTravelScreen"
                    component={AddTravelScreen}
                />
                <Stack.Screen 
                    name="TravelDetailsScreen"
                    component={TravelDetailsScreen}
                />
                <Stack.Screen 
                    name="AccountScreen"
                    component={AccountScreen}
                />
            </Stack.Navigator>
    );
}
export default AppStack;