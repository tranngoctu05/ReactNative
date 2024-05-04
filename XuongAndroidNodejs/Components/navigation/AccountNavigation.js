import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../main/tabs/account/Settings';

const CartNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CartNavigation;
