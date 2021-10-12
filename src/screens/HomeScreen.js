import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { NavOptions } from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin, setTravelTime } from '../slices/navSlice';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain", }}
                    source={{ uri: "https://links.papareact.com/gzs", }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Origin'
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            height: 50,
                            fontSize: 18,
                            backgroundColor: '#eee',
                            marginVertical: 5,
                            marginHorizontal: 10,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    query={{
                        key: 'AIzaSyAbf9ovjbl5rXIh_Jzo1Loh18aaCVtlKwE',
                        language: 'en',
                    }}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 15
    }
})
