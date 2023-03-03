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
import BonusLessonSurveyScreen from '../pages/profile/lesson/BonusLessonSurveyScreen';
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
        headerTransparent: true,
        headerShown: false,
        gestureEnabled: false
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Experts" component={ExpertsScreen} />
      <Stack.Screen name="MeetPerson" component={MeetPersonScreen} options={{ animation: "flip" }} />
      <Stack.Screen name="Goldie" component={GoldieScreen} />
      <Stack.Screen name="Goal" component={GoalScreen} />
      <Stack.Screen name="Target" component={TargetScreen} />
      <Stack.Screen name="Period" component={PeriodScreen} />
      <Stack.Screen name="Experience" component={ExperienceScreen} />
      <Stack.Screen name="TeaserOne" component={TeaserOneScreen} />
      <Stack.Screen name="Mood" component={MoodScreen} />
      <Stack.Screen name="TeaserTwo" component={TeaserTwoScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="TeaserThree" component={TeaserThreeScreen} />

      <Stack.Screen name="ProfileTabs" component={ProfileTabs} />
      <Stack.Screen name="Connect" component={ConnectScreen} />
      <Stack.Screen name="ConnectDetails" component={ConnectDetailsScreen} />

      <Stack.Screen name="VideoLesson" component={VideoLessonScreen} />
      <Stack.Screen name="VideoLessonCongrats" component={VideoLessonCongratsScreen} />
      <Stack.Screen name="VideoLessonSurvey" component={VideoLessonSurveyScreen} />
      <Stack.Screen name="VideoLessonSurvey1" component={VideoLessonSurvey1Screen} />
      <Stack.Screen name="WorkoutLesson" component={WorkoutLessonScreen} />
      <Stack.Screen name="WorkoutLessonSurvey" component={WorkoutLessonSurveyScreen} />
      <Stack.Screen name="WorkoutLessonSurvey1" component={WorkoutLessonSurvey1Screen} />
      <Stack.Screen name="BonusLesson" component={BonusLessonScreen} />
      <Stack.Screen name="BonusLessonSurvey" component={BonusLessonSurveyScreen} />
      <Stack.Screen name="FinalLesson" component={FinalLessonScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
