import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/config';

import IntroScreen from './src/pages/intro/IntroScreen';
import GoldieInitScreen from './src/pages/welcome/GoldieInitScreen';
import QuestionnaireOneScreen from './src/pages/welcome/QuestionnaireOneScreen';
import QuestionnaireTwoScreen from './src/pages/welcome/QuestionnaireTwoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          orientation: "portrait",
          animation: "fade",
          headerTransparent: true
        }}>
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeOne" component={GoldieInitScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="QuestionnaireOne" component={QuestionnaireOneScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="QuestionnaireTwo" component={QuestionnaireTwoScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
