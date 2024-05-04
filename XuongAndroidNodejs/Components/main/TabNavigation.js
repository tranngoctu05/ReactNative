import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccountNavigation from '../navigation/AccountNavigation';
import CartNavigation from '../navigation/CartNavigation';
import FavouriteNavigation from '../navigation/FavouriteNavigation';
import SeachNavigation from '../navigation/SeachNavigation';
import ShopNavigation from '../navigation/ShopNavigation';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const renderTabBarIcon = (route, focused, size) => {
    let iconSource;
    if (route.name === 'Home') {
      iconSource = focused ? require('../../assets/Image/ic_shop.png') : require('../../assets/Image/ic_shop.png');
    } else if (route.name === 'Cart') {
      iconSource = focused ? require('../../assets/Image/ic_cart.png') : require('../../assets/Image/ic_cart.png');
    } else if (route.name === 'Heart') {
      iconSource = focused ? require('../../assets/Image/ic_heart.png') : require('../../assets/Image/ic_heart.png');
    } else if (route.name === 'User') {
      iconSource = focused ? require('../../assets/Image/ic_user.png') : require('../../assets/Image/ic_user.png');
    } else if (route.name === 'Search') {
      iconSource = focused ? require('../../assets/Image/ic_search.png') : require('../../assets/Image/ic_search.png');
    } else if (route.name === 'Settings') {
      iconSource = focused ? require('../../assets/Image/ic_user.png') : require('../../assets/Image/ic_user.png');
    }
    else {
      iconSource = require('../../assets/Image/warning.png');
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={iconSource} style={{ width: size, height: size, marginRight: 5 }} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, focused, size),
      })}>
      <Tab.Screen name="Home" component={ShopNavigation} options={{ headerTitle: 'Home' }} />
      <Tab.Screen name="Search" component={SeachNavigation} options={{ headerTitle: 'Search' }} />
      <Tab.Screen name="Cart" component={CartNavigation} options={{ headerTitle: 'Cart' }} />
      <Tab.Screen name="Heart" component={FavouriteNavigation} options={{ headerTitle: 'Heart' }} />
      <Tab.Screen name="Settings" component={AccountNavigation} options={{ headerTitle: 'Settings' }} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
