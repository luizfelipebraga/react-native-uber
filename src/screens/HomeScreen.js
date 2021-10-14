import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { NavOptions } from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CONFIG } from '../../config/index';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { NavFavourites } from '../components/NavFavourites';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain", }}
                    source={{ uri: "https://links.papareact.com/gzs", }}
                />

                <View>
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
                        onPress={(data, details) => {
                            console.log(data, details)
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            dispatch(setDestination(null))
                        }}
                        query={{
                            key: CONFIG.GOOGLE_KEY,
                            language: 'en',
                        }}
                    />
                </View>


                <NavOptions />
                <NavFavourites />
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
