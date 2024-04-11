import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './../Account/index';


const AccountNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="AccountStack" component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AccountNavigation;