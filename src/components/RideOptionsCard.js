import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Image } from 'react-native-elements/dist/image/Image';

export const RideOptionsCard = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: "Uber-x",
            title: "uberx",
            multiplier: 1,
            image: "https://links.papareact.com/3pn",
        },

        {
            id: "Uber-y",
            title: "ubery",
            multiplier: 1.2,
            image: "https://links.papareact.com/5wn",
        },

        {
            id: "Uber-z",
            title: "uberz",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf",
        },
    ]

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                    style={tw`absolute top3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
            </View>


            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
                        <Image
                            style={{ width: 100, height: 100, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <View>
                            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                            <Text>Travel Time...</Text>
                        </View>
                        <Text style={tw`text-xl`}>$30</Text>
                    </TouchableOpacity>
                )} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
