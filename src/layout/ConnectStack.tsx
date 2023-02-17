import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConnectStackParamList } from '../config';

import ConnectScreen from '../pages/profile/ConnectScreen';

const ConnectStack = createNativeStackNavigator<ConnectStackParamList>();

function ConnectNavigationStack() {
  return (
    <ConnectStack.Navigator screenOptions={{
        orientation: "portrait",
        animation: "fade",
        headerTransparent: true
      }}>
      <ConnectStack.Screen name="Connect" component={ConnectScreen} options={{ headerShown: false }} />
    </ConnectStack.Navigator>
  );
}

export default ConnectNavigationStack;
