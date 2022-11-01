import React from "react";
import TestScreen from "../screens/TestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="TestScreen"
            >
                <Stack.Screen 
                    name="TestScreen" 
                    component={TestScreen}
                />
            </Stack.Navigator>
    );
}
export default AppStack;