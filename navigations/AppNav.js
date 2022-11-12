import React, { useEffect } from "react";
import AppStack from "./AppStack";
import { View, ActivityIndicator, Text } from "react-native";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import useAuthStore from "../contexts/AuthStore";

const AppNav = () => {
  const authToken = useAuthStore((state) => state.authToken)
  const isLoading = useAuthStore((state) => state.isLoading)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  useEffect(() => {
    isLoggedIn()
  },[])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNav;
