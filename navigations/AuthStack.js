import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpDetailsScreen from "../screens/SignUpDetailsScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="WelcomeScreen"
            >
                <Stack.Screen 
                    name="WelcomeScreen" 
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                />
                <Stack.Screen 
                    name="SignUpDetailsScreen"
                    component={SignUpDetailsScreen}
                />
                <Stack.Screen 
                    name="SignInScreen"
                    component={SignInScreen} 
                />
            </Stack.Navigator>
    );
}
export default AuthStack;