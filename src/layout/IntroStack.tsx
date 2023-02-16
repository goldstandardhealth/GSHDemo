import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IntroStackParamList } from '../config';

import IntroScreen from '../pages/IntroScreen';
import WelcomeScreen from '../pages/intro/WelcomeScreen';
import ExpertsScreen from '../pages/intro/ExpertsScreen';
import MeetPersonScreen from '../pages/intro/MeetPersonScreen';
import GoldieScreen from '../pages/intro/GoldieScreen';
import GoalScreen from '../pages/survey/GoalScreen';
import TargetScreen from '../pages/survey/TargetScreen';
import PeriodScreen from '../pages/survey/PeriodScreen';
import ExperienceScreen from '../pages/survey/ExperienceScreen';
import TeaserOneScreen from '../pages/survey/TeaserOneScreen';
import MoodScreen from '../pages/survey/MoodScreen';
import TeaserTwoScreen from '../pages/survey/TeaserTwoScreen';
import LoadingScreen from '../pages/survey/LoadingScreen';
import TeaserThreeScreen from '../pages/survey/TeaserThreeScreen';

const Stack = createNativeStackNavigator<IntroStackParamList>();

function IntroStack() {
  return (
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
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TeaserThree" component={TeaserThreeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default IntroStack;
