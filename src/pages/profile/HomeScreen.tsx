import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { HomeNavigationProps, base, blue, Roboto, founders } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

import GAvatar from '../../components/GAvatar';
import GDiamond from '../../components/icons/GDiamond';
import GFire from '../../components/icons/GFire';
import GBook from '../../components/icons/GBook';

function HomeScreen({ navigation }: HomeNavigationProps) {
  return (
    <GScrollable type='gold' style={{paddingVertical: ms(10)}}>
      <View style={styles.header}>
        <GAvatar style={{flex: 1, marginLeft: ms(25) }} size={ms(50)} color={blue.icon} person={founders.carrie} />
        <View style={{height: ms(50), marginRight: ms(25), flex: 0.7, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <GDiamond number="0" size={ms(35)} />
          <GFire number="4" size={ms(35)} />
          <GBook size={ms(35)} />
        </View>
       </View>
      <Text style={{...Roboto.bold, fontSize: ms(35), alignSelf: 'center', marginTop: ms(20)}}>Session 1</Text>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default HomeScreen;
