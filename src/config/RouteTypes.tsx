import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Intro: undefined;
  WelcomeOne: undefined;
  QuestionnaireOne: undefined;
  QuestionnaireTwo: undefined;
};

export type IntroNavigationProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
export type WelcomeOneNavigationProps = NativeStackScreenProps<RootStackParamList, 'WelcomeOne'>;
export type QuestionnaireOneNavigationProps = NativeStackScreenProps<RootStackParamList, 'QuestionnaireOne'>;
export type QuestionnaireTwoNavigationProps = NativeStackScreenProps<RootStackParamList, 'QuestionnaireTwo'>;
