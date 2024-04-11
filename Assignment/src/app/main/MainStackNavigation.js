import { View, Text, Image } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// tabs
import Home from './tabs/Home'
import Cart from './tabs/Cart'
import Favorite from './tabs/Favorite'
import History from './tabs/History'

const Tab = createBottomTabNavigator()
const MainTabNavigation = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#0C0F14', height: 50, borderColor: '#0C0F14' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? require('./../../assets/home2.png') : require('./../../assets/home.png');
                    } else if (route.name === 'Cart') {
                        iconName = focused ? require('./../../assets/bag2.png') : require('./../../assets/bag-2.png');
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? require('./../../assets/heart2.png') : require('./../../assets/heart.png');
                    } else if (route.name === 'History') {
                        iconName = focused ? require('./../../assets/notification2.png') : require('./../../assets/notification.png');
                    }

                    return <Image source={iconName} style={{ width: 24, height: 24 }} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Tab.Screen name="History" component={History} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

// stacks
import Detail from './stacks/Detail'
import Payment from './stacks/Payment'
import Settings from './stacks/Settings'
import Personal from './stacks/Personal'
import styles from '../authen/style'
const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Payment" component={Payment} />


        </Stack.Navigator>
    )
}

export default MainStackNavigation