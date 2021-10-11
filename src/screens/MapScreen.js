import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import { Maps } from '../components/Map';

export const MapScreen = () => {
    return (
        <View>
            <Text>Map Screen</Text>

            <View style={tw`h-1/2`}>
                <Maps />
            </View>

            <View style={tw`h-1/2`}></View>

        </View>
    )
}

const styles = StyleSheet.create({})
