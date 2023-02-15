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

import { MoodNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GCheckBoxes, { CheckBoxesDataType, CheckBoxesState } from '../../components/GCheckBoxes';

function MoodScreen({ navigation }: MoodNavigationProps) {
  const [disabled, setDisabled] = useState(true);
  const [options, setOptions] = useState<CheckBoxesState>(new Set<string>());
  const checkboxData: CheckBoxesDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'I am optimistic that my pain will improve',
      value: 'optimistic',
    }, {
      id: `${uuid.v4()}`,
      title: 'I am regaining my strength',
      value: 'strength',
    }, {
      id: `${uuid.v4()}`,
      title: 'My pain increases when I exercise',
      value: 'pain',
    }, {
      id: `${uuid.v4()}`,
      title: 'I am afraid to do physical activity without hurting myself',
      value: 'afraid',
    }, {
      id: `${uuid.v4()}`,
      title: 'I have lost hope my pain is going to get better',
      value: 'lost hope',
    }, {
      id: `${uuid.v4()}`,
      title: 'My pain is getting worse not better',
      value: 'worse',
    }, {
      id: `${uuid.v4()}`,
      title: 'I feel like I have tried everything - Help!',
      value: 'tried everything',
    }
  ];

  const nextScreen = () => navigation.replace('TeaserTwo');
  useEffect(() => setDisabled(!options.size), [options]);

  return (
    <GScrollable type="bg">
      <GExpert person={experts.heather} side='right' />
      <GCallOut placement="topRight" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>Let us know all{ '\n' }that applies to you</Text>
      </GCallOut>
      <GCheckBoxes data={checkboxData} onSelect={setOptions} type='wide'/>
      <GContinue disabled={disabled} onPress={nextScreen} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.bold,
    fontSize: ms(25),
    color: base.white,
    textAlign: 'center',
    marginHorizontal: ms(10)
  },
  note: {
    ...RobotoCondensed.bold,
    fontSize: ms(20),
    color: base.white + '8F',
    textAlign: 'center'
  }
});

export default MoodScreen;
