import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from './components/PressableButton';

export default function App() {
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
      <AppText onPress={() => console.log('Text Clicked')} >Travel Buddy</AppText>
      <PressableButton onPress={() => console.log('Button Clicked')} title='Button' bgColor='pink' />
      <StatusBar style="auto" />
    </Container>
  );
}
