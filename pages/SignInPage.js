import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TextInput, StatusBar, View } from "react-native";
import styles from "../styles/SignInPageStyle";
import TextInputArea from "../components/TextInputArea";

const SignInPage = () => {
    const [text, setText] = useState('');

  return (
    <View style={styles.light.container}>
      <View style={styles.base.inputArea} >
        <TextInputArea
            value={text}
            onChangeText={setText}
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
}

export default SignInPage;
