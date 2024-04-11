import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './../History/index';


const HistoryNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HistoryStack" component={History} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HistoryNavigation;