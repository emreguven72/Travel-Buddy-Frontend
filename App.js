import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from './components/PressableButton';
import UserService from './services/userService';
import TextInput from './components/TextInput';

export default function App() {

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let userService = new UserService();
    userService.getAllUsers().then(result => setUsers(result.data)).catch((error) => {
      console.log(error)
    })
  }, [])

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

  const getInput = () => {
    console.log(email);
  }

  return (
    <Container>      
      

      {users.map((user) => (
        <View key={user.id}>
          <Text>{user.email}</Text>
          <Text>{user.username}</Text>
        </View>
      ))}

      <TextInput 
        placeholder="Email"
        label="email"
        value={email}
        onChangeText={email => setEmail(email)}
       />
      

      <PressableButton onPress={getInput} title='Button' bgColor='pink' />
      <StatusBar style="auto" />
    </Container>
  );
}
