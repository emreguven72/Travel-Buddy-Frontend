import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from '../components/PressableButton';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Container = styled.View({
        flex: 1,
        backgroundColor: '#BCE29E',
        flexDirection: 'column',
    })

    const InputAreas = styled.View({
        marginTop: 200,
    })

    const FlexRowContainer = styled.View({
        flexDirection: 'row'
    })

    const TextBox = styled.TextInput({
        paddingHorizontal: 12,
        backgroundColor: 'pink',
        marginRight: 'auto',
        marginLeft: 'auto',
        flexBasis: '60%',
        marginTop: 10,
        borderRadius: 10,
        fontSize: 16,
        height: 35
    })

    const SignInButton = styled.TouchableOpacity({
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        backgroundColor: 'pink',
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    })

    const BasicText = styled.Text({
        fontSize: 14,
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    })

    const BoldText = styled.Text({
        fontSize: 14,
        fontWeight: 'bold',
    })

    const Touchable = styled.TouchableOpacity({
        
    })

    return(
        <Container>      
            <InputAreas>
                <FlexRowContainer>
                    <TextBox
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                    />
                    </FlexRowContainer>
                    <FlexRowContainer>
                    <TextBox
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                    />
                </FlexRowContainer>

                <SignInButton>
                    <Text>Sign In</Text>
                </SignInButton>

                <BasicText>if you don't have an account <Touchable><BoldText>Sign Up</BoldText></Touchable></BasicText>
            </InputAreas>
        </Container>
    );
}