import React, { useState } from "react";
import { View } from "react-native-web";
import styled from "styled-components/native";

const InputArea = styled.TextInput({
    height: 40,
    width: 250,
    marginVertical: 40,
    borderRadius: 10,
    backgroundColor: 'pink',
    paddingHorizontal: 15,
})

const TextInput = ({ value,placeholder,onChangeText }) => {
    
    return(
        <InputArea
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
         />
    )
}

export default TextInput;