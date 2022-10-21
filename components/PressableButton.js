import React from "react";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity({
    marginVertical: 40,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: props => props.bgColor
})

const ButtonText = styled.Text({
    fontSize: 16,
})

const PressableButton = ({ bgColor , onPress, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor} >
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
)
export default PressableButton;