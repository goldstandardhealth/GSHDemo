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

import { PeriodNavigationProps, base, RobotoCondensed, experts, expertCallout } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';
import GExpert from '../../components/GExpert';
import GCallOut from '../../components/GCallOut';
import GRadioButtons, { RadioButtonsDataType } from '../../components/GRadioButtons';

function PeriodScreen({ navigation }: PeriodNavigationProps) {
  const [disabled, setDisabled] = useState(true);
  const [selection, setSelection] = useState<string>();

  const radioData: RadioButtonsDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Less than 3 months',
      value: '3months'
    }, {
      id: `${uuid.v4()}`,
      title: '3-6 months',
      value: '6months'
    }, {
      id: `${uuid.v4()}`,
      title: '6-12 months',
      value: '12month'
    }, {
      id: `${uuid.v4()}`,
      title: '1-3 years',
      value: '3years'
    }, {
      id: `${uuid.v4()}`,
      title: '3+ years',
      value: 'more'
    }
  ];

  const nextScreen = () => navigation.replace('Experience');
  useEffect(() => setDisabled(!selection), [selection])

  return (
    <GScrollable type="bg">
      <GExpert person={experts.josh} side='right' />
      <GCallOut placement="topRight" palette={expertCallout} style={{alignSelf: 'center'}}>
        <Text style={styles.text}>How long have you been experiencing pain?</Text>
      </GCallOut>
      <GRadioButtons data={radioData} onSelect={setSelection}/>
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

export default PeriodScreen;
