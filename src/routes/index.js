import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import MacarronadaFit from '../pages/macarronadaFit';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#777',
        showLabel: false,
        style: {
          backgroundColor: '#CCEB9D',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MacarronadaFit"
        component={MacarronadaFit}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
