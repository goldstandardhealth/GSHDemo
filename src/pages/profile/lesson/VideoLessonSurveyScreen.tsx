import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { ms, vs } from 'react-native-size-matters';

import { VideoLessonSurveyNavigationProps, goldieCallout, base, RobotoCondensed } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import Goldie from '../../../components/Goldie';
import GCallOut from '../../../components/GCallOut';
import GRadioButtons, { RadioButtonsDataType } from '../../../components/GRadioButtons';

function VideoLessonSurveyScreen({ navigation, route }: VideoLessonSurveyNavigationProps) {
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
      <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginHorizontal: ms(50), marginVertical: ms(60), marginBottom: ms(20) }] }>
        <Text style={styles.text}>How helpful was this activity?</Text>
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

export default VideoLessonSurveyScreen;
