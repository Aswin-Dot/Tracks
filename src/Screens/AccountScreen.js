import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Header } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";

import Spacer from '../Components/Spacer';
import { Context as AuthContext } from '../Context/authContext';

const AccountScreen = () => { 
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "PROFILE",
          style: { color: "#fff", fontSize: 20 },
        }}
      />
      <Text style={styles.title}>AccountScreen</Text>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
      </Spacer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginTop: 15
  }
});

AccountScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AccountScreen;
