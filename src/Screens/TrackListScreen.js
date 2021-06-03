import React from "react";
import { Text, StyleSheet, StatusBar } from "react-native";
import { Header } from 'react-native-elements'
import SafeAreaView from "react-native-safe-area-view";

const TrackListScreen = () => {
  return (
    <SafeAreaView>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "TRACK LIST",
          style: { color: "#fff", fontSize: 20 },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      {/* <StatusBar
        backgroundColor='gray'
        barStyle='light-content'
      /> */}
      <Text>TrackListScreen</Text>
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}
const styles = StyleSheet.create({});

export default TrackListScreen;
