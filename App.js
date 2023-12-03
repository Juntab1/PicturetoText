import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePickerComponent from './ImagePickerComponent';

export default function App() {
  return (
    // send user input to googleVision
    <View style={styles.container}>
      <ImagePickerComponent onSubmit={console.log} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
