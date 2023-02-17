import React from 'react';
import { Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import { rootNavigate } from '../../layout/RootNavigation';
import { HomeNavigationProps, base, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

function HomeScreen({ navigation }: HomeNavigationProps) {
  return (
    <GScrollable type='gold'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Home</Text>
      <GContinue onPress={() => rootNavigate('Intro')} />
    </GScrollable>
  );
}

export default HomeScreen;
