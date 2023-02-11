import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/config';

import IntroScreen from './src/pages/IntroScreen';
import WelcomeScreen from './src/pages/intro/WelcomeScreen';
import ExpertsScreen from './src/pages/intro/ExpertsScreen';
import MeetPersonScreen from './src/pages/intro/MeetPersonScreen';
import GoldieScreen from './src/pages/intro/GoldieScreen';
import TargetScreen from './src/pages/intro/TargetScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          orientation: "portrait",
          animation: "fade",
          headerTransparent: true
        }}>
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Experts" component={ExpertsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MeetPerson" component={MeetPersonScreen} options={{ animation: "flip", headerShown: false }} />
        <Stack.Screen name="Goldie" component={GoldieScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Target" component={TargetScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
