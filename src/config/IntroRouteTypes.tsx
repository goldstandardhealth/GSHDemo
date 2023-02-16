import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Person } from './People';

export type IntroStackParamList = {
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
};

export type IntroNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Intro'>;
export type WelcomeNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Welcome'>;
export type ExpertsNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Experts'>;
export type MeetPersonNavigationProps = NativeStackScreenProps<IntroStackParamList, 'MeetPerson'>;
export type GoldieNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Goldie'>;
export type GoalNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Goal'>;
export type TargetNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Target'>;
export type PeriodNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Period'>;
export type ExperienceNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Experience'>;
export type TeaserOneNavigationProps = NativeStackScreenProps<IntroStackParamList, 'TeaserOne'>;
export type MoodNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Mood'>;
export type TeaserTwoNavigationProps = NativeStackScreenProps<IntroStackParamList, 'TeaserTwo'>;
export type LoadingNavigationProps = NativeStackScreenProps<IntroStackParamList, 'Loading'>;
export type TeaserThreeNavigationProps = NativeStackScreenProps<IntroStackParamList, 'TeaserThree'>;
