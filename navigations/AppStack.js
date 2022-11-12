import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelsScreen from "../screens/TravelsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="TravelsScreen"
            >
                <Stack.Screen 
                    name="TestScreen" 
                    component={TravelsScreen}
                />
            </Stack.Navigator>
    );
}
export default AppStack;