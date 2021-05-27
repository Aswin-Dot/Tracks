import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Overlay } from "react-native-elements";


const Modal = ({ visible, toggleOverlay, text, color, ok }) => {

    return (
      <View>
        <Overlay 
            overlayStyle={styles.modal} 
            isVisible={visible}
            onBackdropPress={() => {toggleOverlay(); ok();}}>
          <View style={styles.container}>
            <Text style={{fontSize: 18, padding:10, color:`${color}` }}>{text}</Text>
            <Button
              buttonStyle={{ paddingHorizontal: 30 }}
              title="ok"
              colors="error"
              titleStyle={{ fontSize: 20 }}
              onPress={() => {toggleOverlay(); ok();}}
            />
          </View>
        </Overlay>
      </View>
    );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    height: 200
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: 300,
  }
});

export default Modal;