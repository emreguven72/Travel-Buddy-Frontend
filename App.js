import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import StackNavigator from "./components/StackNavigator";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import AppNav from "./navigation/AppNav";
import TestScreen from "./screens/TestScreen";

const App = () => {

  return (
    <AuthProvider>
      <SafeAreaView style={style.container}>
        <AppNav />
        
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      </SafeAreaView>
    </AuthProvider>
  );
}
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})
