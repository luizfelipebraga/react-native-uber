import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { NavOptions } from '../components/NavOptions';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain", }}
                    source={{ uri: "https://links.papareact.com/gzs", }}
                />

                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white'
    },
})
