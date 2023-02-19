import React, { useState, useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

import NavigationStack from './NavigationStack';

const navigationRef = createNavigationContainerRef()

export function rootNavigate(name: string, params: any = undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const restoreStateCommon = async (persistenceKey: string, setInitialState: any, setIsReady: any) => {
  try {
    const initialUrl = await Linking.getInitialURL();

    if (Platform.OS !== 'web' && initialUrl == null) {
      // Only restore state if there's no deep link and we're not on web
      const savedStateString = await AsyncStorage.getItem(persistenceKey);
      const state = savedStateString ? JSON.parse(savedStateString) : undefined;

      if (state !== undefined) {
        setInitialState(state);
      }
    }
  } finally {
    setIsReady(true);
  }
};

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

function RootNavigation(): JSX.Element | null {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const restoreState = async () => restoreStateCommon(PERSISTENCE_KEY, setInitialState, setIsReady);

  useEffect(() => SplashScreen.hide(), []);
  useEffect(() => {
    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={ initialState }
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <NavigationStack />
    </NavigationContainer>
  );
}

export default RootNavigation;
