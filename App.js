import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from './components/PressableButton';
import UserService from './services/userService';

export default function App() {

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState();
  let userService = new UserService();

  useEffect(() => {
    userService.getAllUsers().then(result => setUsers(result.data)).catch((error) => {
      console.log(error)
    })
  }, [])

  const createUser = (email) => {
    userService.createUser(email);
  }

  const deleteUser = () => {
    userService.deleteUser(9);
  }

  const Container = styled.View({
    flex: 1,
    backgroundColor: '#BCE29E',
    alignItems: 'center',
    justifyContent: 'center'
  })

  const FlexRowContainer = styled.View({
    flexDirection: 'row'
  })

  const FlexColumnContainer = styled.View({
    flexDirection: 'column'
  })

  const AppText = styled.Text({
    color: 'red',
    fontSize: 20
  })

  const EmailText = styled.TextInput({
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'pink',
    flexBasis: '70%',
    height: '80%',
    borderRadius: 10
  })

  return (
    <Container>      
      {users.map((user) => (
        <View key={user.id}>
          <AppText>{user.username}</AppText>
        </View>
      ))}
      
      <FlexRowContainer>
        <EmailText
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </FlexRowContainer>
      
      <PressableButton onPress={() => createUser(email)} title='Create User' bgColor='pink' />
      <PressableButton onPress={() => deleteUser()} title='Delete User' bgColor='pink' />
      <StatusBar style="auto" />
    </Container>
  );
}
