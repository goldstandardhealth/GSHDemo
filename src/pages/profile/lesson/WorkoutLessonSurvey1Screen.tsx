import React, { useState, useEffect } from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import uuid from 'react-native-uuid';
import { ms, vs } from 'react-native-size-matters';

import { WorkoutLessonSurveyNavigationProps, goldieCallout, base, RobotoCondensed, experts, expertCallout } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import GContinue from '../../../components/GContinue';
import Goldie from '../../../components/Goldie';
import GCallOut from '../../../components/GCallOut';
import GBack from '../../../components/icons/GBack';
import GRadioButtons, { RadioButtonsDataType } from '../../../components/GRadioButtons';

function WorkoutLessonSurvey1Screen({ navigation, route }: WorkoutLessonSurveyNavigationProps) {
  const { bonus } = route.params;
  const [disabled, setDisabled] = useState(true);
  const [selection, setSelection] = useState<string>();

  const radioData: RadioButtonsDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Easy',
      value: 'easy'
    }, {
      id: `${uuid.v4()}`,
      title: 'Moderate',
      value: 'moderate'
    }, {
      id: `${uuid.v4()}`,
      title: 'Hard',
      value: 'hard'
    }
  ];

  useEffect(() => setDisabled(!selection), [selection])

  return (
    <GScrollable type="bg">
      <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
        <TouchableOpacity style={{ flex: 1, marginLeft: ms(10), marginTop: ms(10) }} onPress={() => navigation.goBack()}>
          <GBack size={ms(25)} />
        </TouchableOpacity>
      </View>
      <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginHorizontal: ms(50), marginVertical: ms(60), marginBottom: ms(20) }] }>
        <Text style={styles.text}>How easy was the exercise?</Text>
      </GCallOut>
      <Goldie size={ms(100)} type="cool" style={ [styles.chatRowRight, { marginBottom: ms(40) }] } />
      <GRadioButtons data={radioData} onSelect={setSelection} optionStyle={{
        ...RobotoCondensed.regular
      }}/>
      <TouchableOpacity style={{
        marginTop: vs(60),
        alignSelf: 'center',
        backgroundColor: '#192E60',
        borderRadius: ms(25),
        paddingVertical: ms(10),
        paddingHorizontal: ms(20)
      }} onPress={() => navigation.navigate('FinalLesson', {bonus: bonus})} disabled={disabled}>
        <Text style={{
          ...RobotoCondensed.bold,
          color: base.white,
          fontSize: ms(24),
        }}>Continue</Text>
      </TouchableOpacity>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.regular,
    fontSize: ms(25),
    color: base.black,
    textAlign: 'center'
  },
  chatRowRight: {
    flex: 0.3,
    alignSelf: "flex-end"
  },
  chatRowLeft: {
    flex: 0.3,
    alignSelf: "flex-start"
  }
});

export default WorkoutLessonSurvey1Screen;
