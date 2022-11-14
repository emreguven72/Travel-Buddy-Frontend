import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppNav from "./navigations/AppNav";

const App = () => {
  return (
    <SafeAreaView style={style.container}>
        <AppNav />
        
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
    </SafeAreaView>
  );
}
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})
