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

import { TargetNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GCheckBoxes, { CheckBoxesDataType, CheckBoxesState } from '../../components/GCheckBoxes';

function TargetScreen({ navigation }: TargetNavigationProps) {
  const [disabled, setDisabled] = useState(true);
  const [options, setOptions] = useState<CheckBoxesState>(new Set<string>());
  const checkboxData: CheckBoxesDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Neck',
      value: 'neck',
    }, {
      id: `${uuid.v4()}`,
      title: 'Upper Back',
      value: 'upperback',
    }, {
      id: `${uuid.v4()}`,
      title: 'Lower Back',
      value: 'lowerback',
    }, {
      id: `${uuid.v4()}`,
      title: 'Mid Back',
      value: 'midback',
    }, {
      id: `${uuid.v4()}`,
      title: 'Knee',
      value: 'knee',
    }, {
      id: `${uuid.v4()}`,
      title: 'Foot',
      value: 'foot',
    }, {
      id: `${uuid.v4()}`,
      title: 'Shoulder',
      value: 'shoulder',
    }, {
      id: `${uuid.v4()}`,
      title: 'Arm',
      value: 'arm'
    }, {
      id: `${uuid.v4()}`,
      title: 'Hand',
      value: 'hand'
    }, {
      id: `${uuid.v4()}`,
      title: 'Head',
      value: 'head'
    }, {
      id: `${uuid.v4()}`,
      title: 'Joint',
      value: 'joint'
    }, {
      id: `${uuid.v4()}`,
      title: 'Calf',
      value: 'calf'
    }
  ];

  const nextScreen = () => navigation.replace('Period');
  useEffect(() => setDisabled(!options.size), [options]);

  return (
    <GScrollable type="bg">
      <GExpert person={experts.josh} side='right' />
      <GCallOut placement="topRight" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>Please tell us where you’re experiencing pain...</Text>
        <Text style={styles.note}>select all that apply</Text>
      </GCallOut>
      <GCheckBoxes data={checkboxData} onSelect={setOptions} style={{paddingHorizontal: ms(15)}} />
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

export default TargetScreen;
