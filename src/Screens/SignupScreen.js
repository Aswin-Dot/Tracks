import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from '../Components/Spacer';

import { Entypo } from "@expo/vector-icons";

const SignupScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(true);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup to Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer style={styles.pass}>
        <Input
          label="Password"
          value={password}
          secureTextEntry={eye}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)}>
          <Entypo name={eye ? 'eye-with-line': 'eye'} size={26} color="grey" />
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <Button raised title="Signup" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 100,
  },
  pass: {
    flex: 1,
    flexDirection: 'row'
  },
  eye: {
    alignSelf: 'flex-end',
    marginTop: -55,
    marginRight: 15
  }
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
