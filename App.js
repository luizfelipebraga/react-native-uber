import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//react-redux
import { store } from './src/store.js';
import { Provider } from 'react-redux';
 
//pages
import { HomeScreen } from './src/screens/HomeScreen.js';
import { MapScreen } from './src/screens/MapScreen';

//navigator
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>

        <SafeAreaProvider>

          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen} options={{
                headerShown: false,
              }} />

            <Stack.Screen
              name="EatsScreen"
              component={MapScreen} options={{
                headerShown: false,
              }} />
          </Stack.Navigator>

        </SafeAreaProvider>

      </NavigationContainer>
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
