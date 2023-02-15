import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Person } from './People';

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
