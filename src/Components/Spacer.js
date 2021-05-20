import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={styles.spacing}>{children}</View>;
}

const styles = StyleSheet.create({
    spacing: {
        margin: 16
    }
})

export default Spacer;