import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Person } from './People';

export type RootStackParamList = {
  Intro: undefined;
  Welcome: undefined;
  Experts: undefined;
  MeetPerson: { person: Person };
  Goldie: undefined;
  Target: undefined;
};

export type IntroNavigationProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
export type WelcomeNavigationProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type ExpertsNavigationProps = NativeStackScreenProps<RootStackParamList, 'Experts'>;
export type MeetPersonNavigationProps = NativeStackScreenProps<RootStackParamList, 'MeetPerson'>;
export type GoldieNavigationProps = NativeStackScreenProps<RootStackParamList, 'Goldie'>;
export type TargetNavigationProps = NativeStackScreenProps<RootStackParamList, 'Target'>;
