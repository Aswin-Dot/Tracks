import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import { Context as locationContext } from '../Context/locationContext';
import useSaveTracks from "../Hooks/useSaveTracks";
import Spacer from './Spacer';

const TrackForm = () => {

  const {
    state: { recording, name, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(locationContext);

  const [saveTrackData] = useSaveTracks();

  return (
    <View>
      <Spacer>
        <Input
          inputStyle={styles.input}
          disabledInputStyle
          placeholder="Enter Name..."
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button
          title="Stop"
          buttonStyle={styles.button}
          onPress={stopRecording}
        />
      ) : (
        <Button
          title="Start Recording"
          buttonStyle={styles.button}
          onPress={startRecording}
        />
      )}
      <Spacer>
        {!recording && locations.length ? (
          <Button
            title="Save Recording"
            buttonStyle={styles.button}
            onPress={saveTrackData}
          />
        ) : null}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 250,
        alignSelf: 'center'
    },
    input: {
        padding: 5,
        fontSize: 20,
    }
});

export default TrackForm;
