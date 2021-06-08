import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView, { Polyline, Circle, Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

import { Context as locationContext } from '../Context/locationContext';

const Map = () => {

  const { state: { currentLocation, locations } } = useContext(locationContext);

  if(!currentLocation){
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" style={{ marginTop: 150 }} />
      </View>
    )
  }

  return (
    <MapView
      style={styles.maps}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      {/* <Circle
        center={currentLocation.coords}
        radius={50}
        strokeColor="rgba(0, 0, 0, 1.0)"
        fillColor="rgba(0, 0, 0, 0.3)"
      /> */}
      <Marker coordinate={currentLocation.coords}>
        <Ionicons name="ios-location-sharp" size={34} color="black" />
      </Marker>
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    },
    maps: {
        height: 250,
        margin:5,
        borderRadius: 5
    }
});

export default Map;
