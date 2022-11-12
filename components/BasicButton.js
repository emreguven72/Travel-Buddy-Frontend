import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const BasicButton = ({ onPress, color, title }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles({color}).SignUpButton} activeOpacity={0.8}>
                <Text style={styles({color}).SignUpButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default BasicButton;

const styles = ({ color }) => {
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
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#53D8A9'
            },
            SignUpButtonText: {
                fontSize: 14,
                color: 'black'
            }
        })
    );
}