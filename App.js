import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import StackNavigator from "./components/StackNavigator";

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StackNavigator />
      
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
