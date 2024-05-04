import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../main/tabs/cart/Cart';

const CartNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CartNavigation;
