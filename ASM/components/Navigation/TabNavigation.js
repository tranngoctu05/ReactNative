
import React from 'react'

import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AccountNavigation from './AccountNavigation';
import HomeNavigation from './HomeNavigation';
import HistoryNavigation from './HistoryNavigation';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBarIcon = (route, focused, size) => {
    let iconSource;
    if (route.name === 'Home') {
      iconSource = focused ? require('./../../Img/fi_home.png') : require('./../../Img/fi_home_none.png');
    } else if (route.name === 'History') {
      iconSource = focused ? require('./../../Img/order.png') : require('./../../Img/order_none.png');
    } else if (route.name === 'Account') {
      iconSource = focused ? require('./../../Img/user.png') : require('./../../Img/fi_user.png');
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding:10, }}>
        <Image source={iconSource} style={{ width: 24, height: 24 }} />
      </View>
    )
  };


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, focused, size),
        tabBarStyle: { height: 60, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        tabBarItemStyle: { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        tabBarActiveTintColor: '#5D4037',
        tabBarInactiveTintColor: '#CACACA',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold',fontFamily: 'Poppins', },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} options={{ headerTitle: 'Home' }} />
      <Tab.Screen name="History" component={HistoryNavigation} options={{ headerTitle: 'History' }} />
      <Tab.Screen name="Account" component={AccountNavigation} options={{ headerTitle: 'Account' }} />
    </Tab.Navigator>

  );
};

export default TabNavigation

