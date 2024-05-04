import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../main/tabs/seach/Seach';

const SeachNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Seach" component={Search} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default SeachNavigation;
