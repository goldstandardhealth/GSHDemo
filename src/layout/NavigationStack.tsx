import React, { createContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../config';

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

import VideoLessonScreen from '../pages/profile/lesson/VideoLessonScreen';
import VideoLessonCongratsScreen from '../pages/profile/lesson/VideoLessonCongratsScreen';
import VideoLessonSurveyScreen from '../pages/profile/lesson/VideoLessonSurveyScreen';
import VideoLessonSurvey1Screen from '../pages/profile/lesson/VideoLessonSurvey1Screen';
import WorkoutLessonScreen from '../pages/profile/lesson/WorkoutLessonScreen';
import WorkoutLessonSurveyScreen from '../pages/profile/lesson/WorkoutLessonSurveyScreen';
import WorkoutLessonSurvey1Screen from '../pages/profile/lesson/WorkoutLessonSurvey1Screen';
import BonusLessonScreen from '../pages/profile/lesson/BonusLessonScreen';
import FinalLessonScreen from '../pages/profile/lesson/FinalLessonScreen';

import ConnectScreen from '../pages/profile/ConnectScreen';
import ConnectDetailsScreen from '../pages/profile/ConnectDetailsScreen';

import ProfileTabs from './ProfileTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigationStack() {
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

      <Stack.Screen name="ProfileTabs" component={ProfileTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Connect" component={ConnectScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ConnectDetails" component={ConnectDetailsScreen} options={{ headerShown: false }} />

      <Stack.Screen name="VideoLesson" component={VideoLessonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoLessonCongrats" component={VideoLessonCongratsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoLessonSurvey" component={VideoLessonSurveyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoLessonSurvey1" component={VideoLessonSurvey1Screen} options={{ headerShown: false }} />
      <Stack.Screen name="WorkoutLesson" component={WorkoutLessonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WorkoutLessonSurvey" component={WorkoutLessonSurveyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WorkoutLessonSurvey1" component={WorkoutLessonSurvey1Screen} options={{ headerShown: false }} />
      <Stack.Screen name="BonusLesson" component={BonusLessonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FinalLesson" component={FinalLessonScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
