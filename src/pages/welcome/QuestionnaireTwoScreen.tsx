import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';

import { QuestionnaireTwoNavigationProps, font, doctors, doctorColors } from '../../config';
import ScreenBackground from '../../components/ScreenBackground';
import GSHRadioButton, { RadioButtonDataType } from '../../components/GSHRadioButton';
import CallOut from '../../components/CallOut';
import IntroButton from '../../components/IntroButton';
import JoshLevin from '../../components/JoshLevin';

const items: RadioButtonDataType = [
  {
    title: 'Less than 3 months',
    value: '3months'
  }, {
    title: '3-6 months',
    value: '6months'
  }, {
    title: '6-12 months',
    value: '12month'
  }, {
    title: '1-3 years',
    value: '3years'
  }, {
    title: 'More',
    value: 'more'
  }
];

function QuestionnaireTwoScreen({ navigation }: QuestionnaireTwoNavigationProps) {
  const [selected, setSelected] = useState(false);

  return (
    <ScreenBackground type="bg">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <JoshLevin />
          <CallOut index="1" placement="topRight" colors={ doctorColors } style={ styles.bubble }>
            <Text>How long have you been experiencing pain?</Text>
          </CallOut>
          <View style={styles.questions}>
            <GSHRadioButton data={items} onSelect={(value) => setSelected(true)}/>
          </View>
          <IntroButton title={"Continue"} onPress={() => navigation.replace('QuestionnaireOne')} disabled={!selected} />
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  bubble: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25
  },
  subText: {
    fontSize: 20,
    lineHeight: 30
  },
  questions: {
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#ffffff55'
  }
});

export default QuestionnaireTwoScreen;
