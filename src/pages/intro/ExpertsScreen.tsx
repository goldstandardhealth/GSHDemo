import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import GScrollable from '../../layout/GScrollable';
import { ExpertsNavigationProps, RobotoCondensed, base, blue, gold } from '../../config';

import { experts, Person } from '../../config/People';
import GPerson from '../../components/GPerson';
import GContinue from '../../components/GContinue';
import { GLogoLabel } from '../../components/GLogo';
import GTitle from '../../components/GTitle';

function ExpertsScreen({ navigation }: ExpertsNavigationProps) {

  function nextScreen() {
    navigation.replace('Goldie');
  }

  const meetPerson = (person: Person) => {
    navigation.push('MeetPerson', { person: person })
  }

  return (
    <GScrollable type="bg">
      <GLogoLabel style={{marginTop: ms(10)}} size={vs(50)} />
      <GTitle>Meet the experts</GTitle>
      <Text style={styles.note}>Click any of the pictures to learn more{ '\n' }about our Experts</Text>
      {Object.values(experts).map((person, i) => <GPerson key={person.id} person={person} logo="smedicine" side={i % 2 ? 'right' : 'left'} onPress={() => meetPerson(person)} />)}
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
