import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ms } from 'react-native-size-matters';

import GScrollable from '../../layout/GScrollable';
import { MeetPersonNavigationProps, RobotoCondensed, getExpertVideo, base, blue, gold } from '../../config';

import GContinue from '../../components/GContinue';
import GVideo from '../../components/GVideo';
import GTitle from '../../components/GTitle';

function MeetPersonScreen({ route, navigation }: MeetPersonNavigationProps) {

  const { person, key } = route.params;

  const getFirstName = (name: string) => name.split(' ')[0];

  return (
    <GScrollable type="bg">
      <GTitle style={styles.title}>{`Meet ${getFirstName(person.name)}!`}</GTitle>
      <GVideo source={getExpertVideo(key)}/>
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
