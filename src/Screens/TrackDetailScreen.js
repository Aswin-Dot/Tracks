import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from '../Context/trackContext';

const TrackDetailScreen = ({ navigation }) => {

  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={styles.name}>{track.name}</Text>

      <MapView
        style={styles.maps}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      ></MapView>
      <Polyline coordinates={track.locations.map(loc => loc.coords)} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    margin: 10
  },
  maps: {
    height: 250,
    margin: 5,
    borderRadius: 5,
  },
});

export default TrackDetailScreen;
