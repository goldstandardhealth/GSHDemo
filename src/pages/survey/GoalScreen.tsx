import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import uuid from 'react-native-uuid';
import { ms } from 'react-native-size-matters';

import { GoalNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GSliders, { SlidersData, SliderState } from '../../components/GSliders';

function GoalScreen({ navigation }: GoalNavigationProps) {
  const [disabled, setDisabled] = useState(true);
  const [options, setOptions] = useState<SliderState>({});
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

  const nextScreen = () => navigation.replace('Target');
  const onSelect = (opts: SliderState) => setOptions(opts);
  useEffect(() => setDisabled(!Object.values(options).reduce((t, c) => t + c, 0)), [options]);

  return (
    <GScrollable type="bg">
      <GExpert person={experts.heather} side='left' />
      <GCallOut placement="topLeft" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>What do you want to work on?</Text>
        <Text style={styles.note}>select and slide all that apply</Text>
      </GCallOut>
      <GSliders onSelect={onSelect} data={slidersData} />
      <GContinue disabled={disabled} onPress={nextScreen} />
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

export default GoalScreen;
