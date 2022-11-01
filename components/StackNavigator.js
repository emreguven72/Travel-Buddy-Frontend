import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../screens/WelcomeScreen";
import SignUpPage from "../screens/SignUpScreen";
import SignInPage from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName="WelcomeScreen"
            >
                <Stack.Screen 
                    name="WelcomeScreen" 
                    component={WelcomePage}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpPage}
                />
                <Stack.Screen 
                    name="SignInScreen"
                    component={SignInPage} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigator;