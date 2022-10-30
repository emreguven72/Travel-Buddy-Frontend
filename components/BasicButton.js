import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const BasicButton = ({ onPress, color, title }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles({color}).SignUpButton} activeOpacity={0.8}>
                <Text >{title}</Text>
        </TouchableOpacity>
    );
}
export default BasicButton;

const styles = ({ color, title }) => {
    return(
        StyleSheet.create({
            SignUpButton: {
                backgroundColor: color,
                marginLeft: 'auto',
                marginRight: 'auto',
                height: 55,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
            },
            SignUpButtonText: {
                fontSize: 16,
                color: 'white'
            }
        })
    );
}