import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { AuthProvider } from "./contexts/AuthContext";
import AppNav from "./navigations/AppNav";

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
