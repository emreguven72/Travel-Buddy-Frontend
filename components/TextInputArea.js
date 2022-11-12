import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextInputArea = ({ value, onChangeText, placeholder, onBlur }) => {
  return (
    <TextInput
      style={style.textInputArea}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
}

export default TextInputArea;

const style = StyleSheet.create({
  textInputArea: {
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    height: 45,
    width: 300,
    marginTop: 15,
    paddingHorizontal: 6
  },
});
