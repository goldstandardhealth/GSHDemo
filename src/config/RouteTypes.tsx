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
  Loading: undefined;
  TeaserThree: undefined;
  ProfileTabs: undefined;
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

//export type ProfileTabsNavigationProps = NativeStackScreenProps<RootStackParamList, 'ProfileTabs'>;

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
  Connect: undefined;
};

export type ConnectNavigationProps = NativeStackScreenProps<ConnectStackParamList, 'Connect'>;

