import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CommunityStackParamList } from '../config';

import CommunityScreen from '../pages/profile/CommunityScreen';

const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();

function CommunityNavigationStack() {
  return (
    <CommunityStack.Navigator screenOptions={{
        orientation: "portrait",
        animation: "fade",
        headerTransparent: true
      }}>
      <CommunityStack.Screen name="Community" component={CommunityScreen} options={{ headerShown: false }} />
    </CommunityStack.Navigator>
  );
}

export default CommunityNavigationStack;
