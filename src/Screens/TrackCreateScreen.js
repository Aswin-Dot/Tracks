import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from 'react-native-elements'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

import Map from '../Components/Map';
import Spacer from '../Components/Spacer';
import { Context as locationContext } from "../Context/locationContext";
// import '../_mockLocation';

const TrackCreateScreen = () => {

  const { addLocation } = useContext(locationContext);

  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        setError("Location permission not granted");
        return;
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        addLocation(location);
      })
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  },[])

  return (
    <View>
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{
        text: "TRACK CREATE",
        style: { color: "#fff", fontSize: 20 },
      }}/>
      <Text style={styles.title}>TrackCreateScreen</Text>
      <Map/>
      <Spacer>
        {error ? <Text>{error}</Text>: null}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 15,
  }
});

export default TrackCreateScreen;
