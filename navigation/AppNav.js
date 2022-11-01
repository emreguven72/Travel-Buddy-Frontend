import React, {useContext} from "react";
import AppStack from "./AppStack";
import { AuthContext } from "../contexts/AuthContext";
import { View, ActivityIndicator, Text } from "react-native";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if(isLoading) {
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator
            size={'large'}
        />
    </View>
  }

    return(
        <NavigationContainer>
            {(userToken !== null) ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
export default AppNav;