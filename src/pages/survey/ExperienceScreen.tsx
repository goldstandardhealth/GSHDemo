import React, { useState, useEffect } from 'react';
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

import { ExperienceNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GCheckBoxes, { CheckBoxesDataType, CheckBoxesState } from '../../components/GCheckBoxes';

function ExperienceScreen({ navigation }: ExperienceNavigationProps) {
  const [disabled, setDisabled] = useState(true);
  const [options, setOptions] = useState<CheckBoxesState>(new Set<string>());
  const checkboxData: CheckBoxesDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Medication',
      value: 'neck',
    }, {
      id: `${uuid.v4()}`,
      title: 'Natural remedies',
      value: 'natural',
    }, {
      id: `${uuid.v4()}`,
      title: 'Injections',
      value: 'injections',
    }, {
      id: `${uuid.v4()}`,
      title: 'Physcial therapy',
      value: 'physcial',
    }, {
      id: `${uuid.v4()}`,
      title: 'Surgery',
      value: 'surgery',
    }, {
      id: `${uuid.v4()}`,
      title: 'Chiropractic Therapy',
      value: 'chiropractic',
    }, {
      id: `${uuid.v4()}`,
      title: 'Psychotherapy',
      value: 'psychotherapy',
    }, {
      id: `${uuid.v4()}`,
      title: 'Holistic practices',
      value: 'holistic'
    }, {
      id: `${uuid.v4()}`,
      title: 'Meditation',
      value: 'meditation'
    }, {
      id: `${uuid.v4()}`,
      title: 'Other',
      value: 'other'
    }
  ];

  const nextScreen = () => navigation.replace('TeaserOne');
  useEffect(() => setDisabled(!options.size), [options]);

  return (
    <GScrollable type="bg">
      <GExpert person={experts.josh} side='right' />
      <GCallOut placement="topRight" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>Please indicate all that you’ve explored to relieve your pain:</Text>
      </GCallOut>
      <GCheckBoxes data={checkboxData} onSelect={setOptions} />
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

export default ExperienceScreen;
