import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const data = [
    //TODO: NEED TO CHANGE IN THE FUTURE ://

    {
        id: "123",
        title: "Uber",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },

    {
        id: "456",
        title: "Uber Eats",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
]

export const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <View>
                        <Image
                            style={{ width: 100, height: 100, resizeMode: "contain", }}
                            source={{ uri: item.image }}
                        />

                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-5`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                        />

                    </View>
                </TouchableOpacity>
            )}
        />
    );
}
