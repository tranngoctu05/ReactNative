import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../Home/index';


const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};


export default HomeNavigation;
