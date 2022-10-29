import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const TextInputArea = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={style.textInputArea}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default TextInputArea;

const style = StyleSheet.create({
  textInputArea: {
    backgroundColor: "red",
    flex: 1,
    borderRadius: 10,
    fontSize: 18
  },
});
