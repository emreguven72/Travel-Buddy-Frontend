import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelsScreen from "../screens/TravelsScreen";
import AddTravelScreen from "../screens/AddTravelScreen";


const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="TravelsScreen"
            >
                <Stack.Screen 
                    name="TravelsScreen" 
                    component={TravelsScreen}
                />
                <Stack.Screen 
                    name="AddTravelScreen"
                    component={AddTravelScreen}
                />
            </Stack.Navigator>
    );
}
export default AppStack;