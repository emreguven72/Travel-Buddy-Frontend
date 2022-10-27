import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from './components/PressableButton';
import UserService from './services/userService';

export default function App() {

  const [users, setUsers] = useState({});

  useEffect(() => {
    let userService = new UserService();
    userService.getAllUsers().then(result => setUsers(result.data)).catch((error) => {
      console.log(error)
    })
  }, [])

  const handlePress = () => console.log("Text Pressed");

  const Container = styled.View({
    flex: 1,
    backgroundColor: '#BCE29E',
    alignItems: 'center',
    justifyContent: 'center'
  })

  const AppText = styled.Text({
    color: 'red',
    fontSize: 20
  })

  return (
    <Container>      

    {
      console.log(users)
    }

      <PressableButton onPress={() => console.log('Button Clicked')} title='Button' bgColor='pink' />
      <StatusBar style="auto" />
    </Container>
  );
}
