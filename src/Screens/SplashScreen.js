import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../Context/authContext';

const SplashScreen = () => {

    const { autoSignin } = useContext(AuthContext);

    useEffect(() => {
        autoSignin();
    }, [])

    return null;
}

SplashScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({})

export default SplashScreen;