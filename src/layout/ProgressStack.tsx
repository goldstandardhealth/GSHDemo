import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProgressStackParamList } from '../config';

import ProgressScreen from '../pages/profile/ProgressScreen';

const ProgressStack = createNativeStackNavigator<ProgressStackParamList>();

function ProgressNavigationStack() {
  return (
    <ProgressStack.Navigator screenOptions={{
        orientation: "portrait",
        animation: "fade",
        headerTransparent: true
      }}>
      <ProgressStack.Screen name="Progress" component={ProgressScreen} options={{ headerShown: false }} />
    </ProgressStack.Navigator>
  );
}

export default ProgressNavigationStack;
