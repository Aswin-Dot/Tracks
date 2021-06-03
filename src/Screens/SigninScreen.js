import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../Context/authContext";
import AuthForm from "../Components/AuthForm";
import Modal from "../Components/Modal";
import NavLink from "../Components/NavLink";

const SigninScreen = () => {
  const { state, signIn, clearError } = useContext(AuthContext);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    state.errorMessage ? setVisible(true) : setVisible(false);
  }, [state.errorMessage]);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <Modal
        visible={visible}
        color={state.errorMessage ? "red" : "black"}
        toggleOverlay={() => setVisible(!visible)}
        text={state.errorMessage}
        ok={clearError}
      />
      <AuthForm
        heading="SignIn to your Tracks account"
        buttonText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        text="Don't have an account, Go to Sign Up!"
        routeName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 80,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
