import { Context } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Person, Practitioner } from './People';

type CurrentContextType = {
  current: number;
}

export type RootStackParamList = {
  Intro: undefined;
  Welcome: undefined;
  Experts: undefined;
  MeetPerson: { person: Person, key: string };
  Goldie: undefined;
  Goal: undefined;
  Target: undefined;
  Period: undefined;
  Experience: undefined;
  TeaserOne: undefined;
  Mood: undefined;
  TeaserTwo: undefined;
  Loading: undefined;
  TeaserThree: undefined;
  ProfileTabs: undefined;
  Connect: { back: boolean };
  ConnectDetails: { person: Practitioner, key: string };
  VideoLesson: { title: string, video: string, tutor: Person, congrats: string, bonus?: boolean, survey?: string }
  VideoLessonCongrats: { congrats: string, bonus?: boolean }
  VideoLessonSurvey: { bonus?: boolean };
  VideoLessonSurvey1: { congrats: string, bonus?: boolean }
  WorkoutLesson: { reps: string; title: string, video: string, tutor: Person, survey?: string, bonus?: boolean }
  WorkoutLessonSurvey: { bonus?: boolean };
  WorkoutLessonSurvey1: { bonus?: boolean };
  BonusLesson: { title: string, video: string, tutor: Person, num: number }
  BonusLessonSurvey: { num: number; };
  FinalLesson: { bonus?: boolean };
};

export type IntroNavigationProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
export type WelcomeNavigationProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type ExpertsNavigationProps = NativeStackScreenProps<RootStackParamList, 'Experts'>;
export type MeetPersonNavigationProps = NativeStackScreenProps<RootStackParamList, 'MeetPerson'>;
export type GoldieNavigationProps = NativeStackScreenProps<RootStackParamList, 'Goldie'>;
export type GoalNavigationProps = NativeStackScreenProps<RootStackParamList, 'Goal'>;
export type TargetNavigationProps = NativeStackScreenProps<RootStackParamList, 'Target'>;
export type PeriodNavigationProps = NativeStackScreenProps<RootStackParamList, 'Period'>;
export type ExperienceNavigationProps = NativeStackScreenProps<RootStackParamList, 'Experience'>;
export type TeaserOneNavigationProps = NativeStackScreenProps<RootStackParamList, 'TeaserOne'>;
export type MoodNavigationProps = NativeStackScreenProps<RootStackParamList, 'Mood'>;
export type TeaserTwoNavigationProps = NativeStackScreenProps<RootStackParamList, 'TeaserTwo'>;
export type LoadingNavigationProps = NativeStackScreenProps<RootStackParamList, 'Loading'>;
export type TeaserThreeNavigationProps = NativeStackScreenProps<RootStackParamList, 'TeaserThree'>;

export type VideoLessonNavigationProps = NativeStackScreenProps<RootStackParamList, 'VideoLesson'>;
export type VideoLessonCongratsNavigationProps = NativeStackScreenProps<RootStackParamList, 'VideoLessonCongrats'>;
export type VideoLessonSurveyNavigationProps = NativeStackScreenProps<RootStackParamList, 'VideoLessonSurvey'>;
export type VideoLessonSurvey1NavigationProps = NativeStackScreenProps<RootStackParamList, 'VideoLessonSurvey1'>;
export type WorkoutLessonNavigationProps = NativeStackScreenProps<RootStackParamList, 'WorkoutLesson'>;
export type WorkoutLessonSurveyNavigationProps = NativeStackScreenProps<RootStackParamList, 'WorkoutLessonSurvey' | 'WorkoutLessonSurvey1'>;
export type BonusLessonNavigationProps = NativeStackScreenProps<RootStackParamList, 'BonusLesson'>;
export type BonusLessonSurveyNavigationProps = NativeStackScreenProps<RootStackParamList, 'BonusLessonSurvey'>;
export type FinalLessonNavigationProps = NativeStackScreenProps<RootStackParamList, 'FinalLesson'>;

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeNavigationProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export type ProgressStackParamList = {
  Progress: undefined;
};

export type ProgressNavigationProps = NativeStackScreenProps<ProgressStackParamList, 'Progress'>;

export type CommunityStackParamList = {
  Community: undefined;
};

export type CommunityNavigationProps = NativeStackScreenProps<CommunityStackParamList, 'Community'>;

export type ConnectStackParamList = {
  Connect: { back?: boolean };
  ConnectDetails: { person: Practitioner, key: string };
};

export type ConnectNavigationProps = NativeStackScreenProps<ConnectStackParamList, 'Connect'>;
export type ConnectDetailsNavigationProps = NativeStackScreenProps<ConnectStackParamList, 'ConnectDetails'>;

