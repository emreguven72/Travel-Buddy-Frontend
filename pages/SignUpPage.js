import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from '../components/PressableButton';
import UserService from '../services/userService'

export default function SignUpPage(){
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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
    userService.deleteUser(5);
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

    const TextBox = styled.TextInput({
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
          <TextBox
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </FlexRowContainer>
        <FlexRowContainer>
          <TextBox
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
          />
        </FlexRowContainer>
        <FlexRowContainer>
          <TextBox
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          />
        </FlexRowContainer>
      <FlexRowContainer>
          <TextBox
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
        </FlexRowContainer>
        <FlexRowContainer>
          <TextBox
            value={surname}
            onChangeText={(text) => setSurname(text)}
            placeholder="Surname"
          />
        </FlexRowContainer>
        <FlexRowContainer>
          <TextBox
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            placeholder="Phone Number"
          />
        </FlexRowContainer>

      <PressableButton onPress={() => createUser(email)} title='Create User' bgColor='pink' />
      <PressableButton onPress={() => deleteUser()} title='Delete User' bgColor='pink' />

    </Container>
    );
}
