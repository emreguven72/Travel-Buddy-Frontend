import React, { createContext, useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserService from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = async(email, password) => {
        let userService = new UserService();
        let user = await userService.getByEmail(email);
        setIsLoading(true);
        if(user.password === password) {
            setUserInfo(user);
            setUserToken(user.token);
            await AsyncStorage.setItem('userToken', user.token); //bug var setUserToken 'lk refreshde calismiyor.
            console.log(userToken);
            await AsyncStorage.setItem('userInfo', JSON.stringify(user))
        }
        setIsLoading(false);
    }

    const logout = async() => {
        setIsLoading(true);
        setUserInfo(null);
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);
            if(userInfo) {
                setUserInfo(userInfo);
                setUserToken(userToken);
            }            
            setIsLoading(false);
        } catch(e) {
            console.log(`isLoggedIn error ${e}`);
        }

    }

    useEffect(() => {
      isLoggedIn();
      console.log('userInfo : ', userInfo);
      console.log('userToken : ', userToken);
    }, [])
    
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
}

