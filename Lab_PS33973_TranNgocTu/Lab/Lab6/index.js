import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Detail from './Detail';
const Drawer = createDrawerNavigator();
export default function App() {
    return (
        // <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Detail} />
            </Drawer.Navigator>
        // </NavigationContainer>
    );
}
