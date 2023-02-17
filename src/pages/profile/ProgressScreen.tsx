import React from 'react';
import { Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ProgressNavigationProps, base, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

function ProgressScreen({ navigation }: ProgressNavigationProps) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Progress</Text>
      <GContinue onPress={() => navigation.replace('Progress')} />
    </GScrollable>
  );
}

export default ProgressScreen;
