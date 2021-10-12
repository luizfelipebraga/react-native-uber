import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from '@react-navigation/stack';

import { Maps } from '../components/Map';
import { NavigateCard } from '../components/NavigateCard';
import { RideOptionsCard } from '../components/RideOptionsCard';

export const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View>
            <View style={tw`h-1/2`}>
                <Maps />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
                </Stack.Navigator>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})
