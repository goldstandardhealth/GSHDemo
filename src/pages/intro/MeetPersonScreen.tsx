import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import GScrollable from '../../layout/GScrollable';
import { MeetPersonNavigationProps, RobotoCondensed, base, blue, gold } from '../../config';

import GContinue from '../../components/GContinue';
import GVideo from '../../components/GVideo';
import GTitle from '../../components/GTitle';

function MeetPersonScreen({ route, navigation }: MeetPersonNavigationProps) {

  const { person } = route.params;

  const getName = (name: string) => name.split(' ')[0];

  return (
    <GScrollable type="bg">
      <GTitle style={styles.title}>{`Meet ${getName(person.name)}!`}</GTitle>
      <GVideo source={require('../../../assets/video/Introducing_the_Founders.mp4')}/>
      <GContinue onPress={() => navigation.goBack()} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: ms(75),
    marginBottom: ms(100)
  }
});

export default MeetPersonScreen;
