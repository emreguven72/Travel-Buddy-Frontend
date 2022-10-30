import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TextInput, StatusBar, View, TouchableOpacity } from "react-native";
import styles from "../styles/SignInPageStyle";
import TextInputArea from "../components/TextInputArea";

const SignInPage = ({ navigation }) => {
    const [text, setText] = useState('');

  return (
    <View style={styles.light.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 10, marginLeft: 10}} >
        <Text>go Back</Text>
      </TouchableOpacity>
      <View style={styles.base.inputArea} >
        <TextInputArea
            placeholder='email'
            value={text}
            onChangeText={setText}
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
}

export default SignInPage;
