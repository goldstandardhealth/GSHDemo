import React from 'react';
import { Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

import { CommunityNavigationProps, base, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';

function CommunityScreen({ navigation }: CommunityNavigationProps) {
  return (
    <GScrollable type='bg'>
      <View style={{
        marginHorizontal: ms(10),
        borderBottomWidth: 1,
        paddingHorizontal: ms(30),
        paddingBottom: ms(10)
      }}>
        <Text style={{
          ...Roboto.bold,
          fontSize: ms(30),
          marginTop: ms(40)
        }}>Community Blog</Text>
        <Text style={{
          ...Roboto.regular,
          fontSize: ms(15),
          marginTop: ms(20)
        }}>View your feed!</Text>
      </View>
    </GScrollable>
  );
}

export default CommunityScreen;
