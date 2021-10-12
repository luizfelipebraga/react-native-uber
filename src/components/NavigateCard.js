import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';

export const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-red-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Destiny"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
