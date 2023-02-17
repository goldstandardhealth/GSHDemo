import React from 'react';
import { Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import { CommunityNavigationProps, base, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

function CommunityScreen({ navigation }: CommunityNavigationProps) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Community</Text>
      <GContinue onPress={() => navigation.replace('Community')} />
    </GScrollable>
  );
}

export default CommunityScreen;
