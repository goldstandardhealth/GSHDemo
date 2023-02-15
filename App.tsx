import React, { useState, useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from './src/config';

import IntroScreen from './src/pages/IntroScreen';
import WelcomeScreen from './src/pages/intro/WelcomeScreen';
import ExpertsScreen from './src/pages/intro/ExpertsScreen';
import MeetPersonScreen from './src/pages/intro/MeetPersonScreen';
import GoldieScreen from './src/pages/intro/GoldieScreen';
import GoalScreen from './src/pages/survey/GoalScreen';
import TargetScreen from './src/pages/survey/TargetScreen';
import PeriodScreen from './src/pages/survey/PeriodScreen';
import ExperienceScreen from './src/pages/survey/ExperienceScreen';
import TeaserOneScreen from './src/pages/survey/TeaserOneScreen';
import MoodScreen from './src/pages/survey/MoodScreen';
import TeaserTwoScreen from './src/pages/survey/TeaserTwoScreen';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element | null {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
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
        <Stack.Screen name="Goal" component={GoalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Target" component={TargetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Period" component={PeriodScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Experience" component={ExperienceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeaserOne" component={TeaserOneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Mood" component={MoodScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeaserTwo" component={TeaserTwoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
