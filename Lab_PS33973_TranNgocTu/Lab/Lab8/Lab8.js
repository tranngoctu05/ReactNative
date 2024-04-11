import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'

import Lab8List from './Lab8List';
import Lab8Create from './Lab8Create';
import Lab8Update from './Lab8Update';
import Lab8Detail from './Lab8Detail';
const Stack = createNativeStackNavigator()


const Lab8 = () => {
    return (
 
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Lab8List" component={Lab8List} />
                <Stack.Screen name="Lab8Create" component={Lab8Create} />
                <Stack.Screen name="Lab8Update" component={Lab8Update} />
                <Stack.Screen name="Lab8Detail" component={Lab8Detail} />


            </Stack.Navigator>

    )
}

export default Lab8