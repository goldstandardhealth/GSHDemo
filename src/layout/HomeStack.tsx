import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../config';

import HomeScreen from '../pages/profile/HomeScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigationStack() {
  return (
    <HomeStack.Navigator screenOptions={{
        orientation: "portrait",
        animation: "fade",
        headerTransparent: true
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigationStack;
