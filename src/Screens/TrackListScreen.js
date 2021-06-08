import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Header, ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation';
import SafeAreaView from "react-native-safe-area-view";

import { LinearGradient } from "expo-linear-gradient";

import { Context as TrackContext } from '../Context/trackContext'

const TrackListScreen = ({ navigation }) => {

  const { state,fetchTrackData } = useContext(TrackContext);

  return (
    <SafeAreaView>
      <NavigationEvents onWillFocus={fetchTrackData} />
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
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem
                bottomDivider
                linearGradientProps={{
                  colors: ["#2574a9", "#6bb9f0"],
                  start: { x: 1, y: 0 },
                  end: { x: 0.2, y: 0 },
                }}
                ViewComponent={LinearGradient}
                containerStyle={styles.container}
              >
                <ListItem.Content>
                  <ListItem.Title
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {item.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>hello</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 10
  }
});

export default TrackListScreen;
