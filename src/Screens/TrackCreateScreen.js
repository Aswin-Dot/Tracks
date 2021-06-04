import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { withNavigationFocus } from 'react-navigation';
import { Header } from 'react-native-elements'

import Map from '../Components/Map';
import Spacer from '../Components/Spacer';
import { Context as locationContext } from "../Context/locationContext";
import useLocation from '../Hooks/useLocation';
import TrackForm from '../Components/TrackForm';
// import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {

  const { state: { recording }, addLocation } = useContext(locationContext);
  const [error] = useLocation(isFocused, (location) => addLocation(location, recording) );

  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "TRACK CREATE",
          style: { color: "#fff", fontSize: 20 },
        }}
      />
      {/* <Text style={styles.title}>TrackCreateScreen</Text> */}
      <Map />
      {error ? (
        <Spacer>
          <Text>{error}</Text>
        </Spacer>
      ) : null}
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 15,
  }
});

export default withNavigationFocus(TrackCreateScreen);
