import React from 'react';
import { Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ConnectNavigationProps, base, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

function ConnectScreen({ navigation }: ConnectNavigationProps) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Connect</Text>
      <GContinue onPress={() => navigation.replace('Connect')} />
    </GScrollable>
  );
}

export default ConnectScreen;
