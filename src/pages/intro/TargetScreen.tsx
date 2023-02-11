import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';
import uuid from 'react-native-uuid';
import { ms } from 'react-native-size-matters';

import { TargetNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GSliders, { SlidersData } from '../../components/GSliders';

function TargetScreen({ navigation }: TargetNavigationProps) {
  const slidersData: SlidersData = {
    physical: {
      id: `${uuid.v4()}`,
      text: 'Reducing physical pain'
    },
    anxiety: {
      id: `${uuid.v4()}`,
      text: 'Reducing anxiety'
    },
    strengthen: {
      id: `${uuid.v4()}`,
      text: 'Strengthening my body'
    },
    pain: {
      id: `${uuid.v4()}`,
      text: 'Becoming less afraid of pain'
    },
    mindset: {
      id: `${uuid.v4()}`,
      text: 'Improving my mindset'
    },
  }

  function nextScreen() {
    navigation.replace('Intro');
  }

  return (
    <GScrollable type="bg">
      <GExpert person={experts.heather} side='left' />
      <GCallOut placement="topLeft" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>What do you want to work on?</Text>
        <Text style={styles.note}>select and slide all that apply</Text>
      </GCallOut>
      <GSliders data={slidersData} />
      <GContinue  onPress={nextScreen} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.bold,
    fontSize: ms(25),
    color: base.white,
    textAlign: 'center'
  },
  note: {
    ...RobotoCondensed.bold,
    fontSize: ms(20),
    color: base.white + '8F',
    textAlign: 'center'
  }
});

export default TargetScreen;
