import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import GScrollable from '../../layout/GScrollable';
import { ExpertsNavigationProps, RobotoCondensed, base, VideoName } from '../../config';

import { experts } from '../../config/People';
import GPerson from '../../components/GPerson';
import GContinue from '../../components/GContinue';
import { GLogoLabel } from '../../components/GLogo';
import GTitle from '../../components/GTitle';

function ExpertsScreen({ navigation }: ExpertsNavigationProps) {

  const nextScreen = () => navigation.replace('Goldie');
  const meetPerson = (name: string) => navigation.push('MeetPerson', { person: experts[name], key: name as VideoName });

  return (
    <GScrollable type="bg">
      <GLogoLabel style={{marginTop: ms(10)}} size={vs(50)} />
      <GTitle>Meet the experts</GTitle>
      <Text style={styles.note}>Click any of the pictures to learn more{ '\n' }about our Experts</Text>
      {Object.keys(experts).map((name, i) => <GPerson key={experts[name].id} person={experts[name]} side={i % 2 ? 'right' : 'left'} onPress={() => meetPerson(name)} />)}
      <GContinue onPress={nextScreen} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  note: {
    ...RobotoCondensed.bold,
    fontSize: ms(15),
    textAlign: 'center',
    color: base.black + '47',
    marginBottom: ms(20)
  }
});

export default ExpertsScreen;
