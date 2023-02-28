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

import { VideoLessonSurvey1NavigationProps, goldieCallout, base, RobotoCondensed, experts, expertCallout } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import GContinue from '../../../components/GContinue';
import Goldie from '../../../components/Goldie';
import GCallOut from '../../../components/GCallOut';
import GRadioButtons, { RadioButtonsDataType } from '../../../components/GRadioButtons';

function VideoLessonSurvey1Screen({ navigation, route }: VideoLessonSurvey1NavigationProps) {
  const { bonus } = route.params;
  const [disabled, setDisabled] = useState(true);
  const [selection, setSelection] = useState<string>();

  const radioData: RadioButtonsDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Extremely helpful',
      value: 'extremely'
    }, {
      id: `${uuid.v4()}`,
      title: 'A little helpful',
      value: 'little'
    }, {
      id: `${uuid.v4()}`,
      title: 'Not helpful',
      value: 'not'
    }
  ];

  useEffect(() => setDisabled(!selection), [selection])

  return (
    <GScrollable type="bg">
      <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginLeft: ms(50), marginRight: ms(70), marginVertical: ms(60), marginBottom: ms(20) }] }>
        <Text style={styles.text}>Please indicate how you found the excercise to be:</Text>
      </GCallOut>
      <Goldie size={ms(100)} type="cool" style={ [styles.chatRowRight, { marginBottom: ms(20) }] } />
      <Text style={{
        ...RobotoCondensed.regular,
        color: base.black + '9F',
        fontSize: ms(16),
        textAlign: 'center',
        marginHorizontal: ms(30)
      }}>Take a moment to check in with yourself. How challenging did you find that exercise?</Text>
      <GRadioButtons data={radioData} onSelect={setSelection} optionStyle={{
        ...RobotoCondensed.regular
      }}/>
      <TouchableOpacity style={{
        marginTop: vs(20),
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

export default VideoLessonSurvey1Screen;
