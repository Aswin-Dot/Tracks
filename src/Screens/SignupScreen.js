import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext} from '../Context/authContext'
import AuthForm from '../Components/AuthForm';
import Modal from '../Components/Modal';
import NavLink from "../Components/NavLink";

const SignupScreen = () => {

  const {state, signUp, clearError} = useContext(AuthContext)

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    state.errorMessage ? setVisible(true) : setVisible(false);
  }, [state.errorMessage])

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <StatusBar backgroundColor="gray" barStyle="light-content" />
      <Modal
        visible={visible}
        color={state.errorMessage ? "red" : "black"}
        toggleOverlay={() => setVisible(!visible)}
        text={state.errorMessage}
        ok={clearError}
      />
      <AuthForm
        heading="Create a Tracks account"
        buttonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        text="Already have an account, Go to Sign in!"
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 80,
  }
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
