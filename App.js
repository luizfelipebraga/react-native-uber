import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store.js';
import { Provider } from 'react-redux';

//Set up redux

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hi Uber app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
