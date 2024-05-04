import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourite from '../main/tabs/favourite/Favourite';

const FavouriteNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default FavouriteNavigation;
