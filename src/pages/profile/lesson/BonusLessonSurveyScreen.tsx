import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { ms } from 'react-native-size-matters';

import { PathContext, incPathValue } from '../../../layout/RootNavigation';
import { BonusLessonSurveyNavigationProps, goldieCallout, base, RobotoCondensed } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import Goldie from '../../../components/Goldie';
import GCallOut from '../../../components/GCallOut';
import GBack from '../../../components/icons/GBack';
import GRadioButtons, { RadioButtonsDataType } from '../../../components/GRadioButtons';

function BonusLessonSurveyScreen({ navigation, route }: BonusLessonSurveyNavigationProps) {
  const { num } = route.params;
  const [disabled, setDisabled] = useState(true);
  const [selection, setSelection] = useState<string>();
  const context = useContext(PathContext);

  const radioData: RadioButtonsDataType = [
    {
      id: `${uuid.v4()}`,
      title: 'Great experience',
      value: 'great'
    }, {
      id: `${uuid.v4()}`,
      title: 'It was fun',
      value: 'fun'
    }, {
      id: `${uuid.v4()}`,
      title: 'The excercise felt too long',
      value: 'long'
    }, {
      id: `${uuid.v4()}`,
      title: 'I\'m more relaxed',
      value: 'relaxed'
    }, {
      id: `${uuid.v4()}`,
      title: 'I got bored',
      value: 'bored'
    }, {
      id: `${uuid.v4()}`,
      title: 'I couldn\'t finish it',
      value: 'not_finish'
    }, {
      id: `${uuid.v4()}`,
      title: 'I feel much better now',
      value: 'better'
    }, {
      id: `${uuid.v4()}`,
      title: 'I would love more activities like that',
      value: 'more'
    }
  ];

  useEffect(() => setDisabled(!selection), [selection])

  const nextScreen = () => {
    if (context.complete < num) {
      incPathValue(context, 'complete');
    }
    navigation.navigate('FinalLesson', {bonus: false});
  }

  return (
    <GScrollable type="bg">

      <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
        <TouchableOpacity style={{ flex: 1, marginLeft: ms(10), marginTop: ms(10) }} onPress={() => navigation.goBack()}>
          <GBack size={ms(25)} />
        </TouchableOpacity>
      </View>

      <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginHorizontal: ms(50), marginVertical: ms(10) }] }>
        <Text style={styles.text}>How easy was the exercise?</Text>
      </GCallOut>
      <Goldie size={ms(60)} type="cool" style={styles.chatRowRight} />
      <GRadioButtons data={radioData} onSelect={setSelection} optionStyle={{
        ...RobotoCondensed.regular
      }} />
      <TouchableOpacity style={{
        alignSelf: 'center',
        backgroundColor: '#192E60',
        borderRadius: ms(25),
        paddingVertical: ms(10),
        paddingHorizontal: ms(20)
      }} onPress={nextScreen} disabled={disabled}>
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

export default BonusLessonSurveyScreen;
