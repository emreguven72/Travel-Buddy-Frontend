import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const TextInputArea = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={style.textInputArea}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}

export default TextInputArea;

const style = StyleSheet.create({
  textInputArea: {
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    height: 40,
    width: 250,
    marginTop: 15,
    paddingHorizontal: 6
  },
});
