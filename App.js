import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import SignInPage from "./pages/SignInPage";
import TextInputArea from "./components/TextInputArea";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <WelcomePage />

      
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
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
