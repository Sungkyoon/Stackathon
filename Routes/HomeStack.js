import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import Home from '../Screens/Home.js';
import Flip from '../Screens/Flip.js';
import Rental from '../Screens/Rental.js';
import Repair from '../Screens/Repair.js';
import FlipProfit from '../Screens/FlipProfit.js';
import Header from '../Screens/Header.js';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerBackground: () => (
        <Image
          source={require('../assets/Profit-background.png')}
          style={{ height: '100%', width: '100%' }}
        />
      ),
    },
  },
  Flip: {
    screen: Flip,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerBackground: () => (
        <Image
          source={require('../assets/Profit-background.png')}
          style={{ height: '100%', width: '100%' }}
        />
      ),
    },
  },
  Rental: {
    screen: Rental,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerBackground: () => (
        <Image
          source={require('../assets/Profit-background.png')}
          style={{ height: '100%', width: '100%' }}
        />
      ),
    },
  },
  Repair: {
    screen: Repair,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerBackground: () => (
        <Image
          source={require('../assets/Profit-background.png')}
          style={{ height: '100%', width: '100%' }}
        />
      ),
    },
  },
  Profit: {
    screen: FlipProfit,
    navigationOptions: {
      title: 'Profit for Flip',
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'green',
    headerStyle: { backgroundColor: 'green' },
  },
});

export default createAppContainer(HomeStack);
