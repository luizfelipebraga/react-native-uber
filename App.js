import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';

//react-redux
import { store } from './src/store.js';
import { Provider } from 'react-redux';

//pages
import { HomeScreen } from './src/screens/HomeScreen.js';
import { MapScreen } from './src/screens/MapScreen';
import { EatScreen } from './src/screens/EatScreen.js';

//navigator
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >

            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />

              <Stack.Screen name="EatScreen" component={EatScreen} options={{ headerShown: false }} />
            </Stack.Navigator>

          </KeyboardAvoidingView>
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
