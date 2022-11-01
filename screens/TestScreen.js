import React, {useContext} from "react";
import { View, Text } from "react-native";
import BasicButton from "../components/BasicButton";
import { AuthContext } from "../contexts/AuthContext";

const TestScreen = () => {
    const {logout} = useContext(AuthContext);

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Test Screen</Text>
            <BasicButton
                title='Log Out'
                color='red'
                onPress={logout}
             />
        </View>
    );
}
export default TestScreen;