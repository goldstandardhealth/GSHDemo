import React, { useState, useEffect, Context, createContext } from 'react';
import { Linking, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import NavigationStack from './NavigationStack';

type PathType = {current: number, bonus: number, motivation: number};
type PathContextType = PathType & {setPath: any};
type PathContextKeyType = keyof PathType;

const defaultPath = {current: 0, bonus: 0, motivation: 0};

export const PathContext = createContext<PathContextType>({
  ...defaultPath,
  setPath: () => {}
});
export const incPathValue = (ctx: PathContextType, key: PathContextKeyType) => {
  ctx.setPath({...ctx, [key]: ctx[key] + 1 });
};
export const incPathValues = (ctx: PathContextType, ...keys: PathContextKeyType[]) => {
  ctx.setPath({...ctx, ...keys.reduce((obj, k) => {
    if (k) {
      obj[k] = ctx[k] + 1;
    }
    return obj;
  }, ctx)});
};
export const decPathValue = (ctx: PathContextType, key: PathContextKeyType) => {
  ctx.setPath({...ctx, [key]: ctx[key] - 1 });
};
export const resetPath = (ctx: PathContextType) => {
  ctx.setPath({...ctx, ...defaultPath});
};

const navigationRef = createNavigationContainerRef()

export function rootNavigate(name: string, params: any = undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const restoreStateCommon = async (persistenceKey: string, setInitialState: any, setPath: any, setIsReady: any) => {
  try {
    const initialUrl = await Linking.getInitialURL();

    if (Platform.OS !== 'web' && initialUrl == null) {
      // Only restore state if there's no deep link and we're not on web
      const savedStateString = await AsyncStorage.getItem(persistenceKey);
      const savedPathString = await AsyncStorage.getItem(persistenceKey + '_PATH');
      const state = savedStateString ? JSON.parse(savedStateString) : undefined;
      const path = savedPathString ? JSON.parse(savedPathString) : undefined;

      if (state !== undefined) {
        setInitialState(state);
      }
      if (path) {
        setPath(path);
      }
    }
  } finally {
    setIsReady(true);
  }
};

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

function RootNavigation(): JSX.Element | null {
  const [isReady, setIsReady] = useState(false);
  const [path, setPath] = useState({current: 0, bonus: 0, motivation: 0});
  const [initialState, setInitialState] = useState();
  const restoreState = async () => restoreStateCommon(PERSISTENCE_KEY, setInitialState, setPath, setIsReady);

  useEffect(() => {
    SystemNavigationBar.stickyImmersive();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      AsyncStorage.setItem(PERSISTENCE_KEY + '_PATH', JSON.stringify(path));
    }
  }, [path]);

  if (!isReady) {
    return null;
  }

  return (
    <PathContext.Provider value={{...path, setPath: setPath}}>
      <NavigationContainer
        ref={navigationRef}
        initialState={ initialState }
        onStateChange={ (state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)) }
      >
        <NavigationStack />
      </NavigationContainer>
    </PathContext.Provider>
  );
}

export default RootNavigation;
