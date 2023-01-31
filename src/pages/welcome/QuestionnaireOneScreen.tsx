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

import { QuestionnaireOneNavigationProps, font, doctors, doctorColors } from '../../config';
import ScreenBackground from '../../components/ScreenBackground';
import GSHCheckBox from '../../components/GSHCheckBox';
import CallOut from '../../components/CallOut';
import IntroButton from '../../components/IntroButton';
import JoshLevin from '../../components/JoshLevin';

const items: { [key: string]: string } = {
  'Neck': 'neck',
  'Upper Back': 'upperback',
  'Mid Back': 'midback',
  'Lower Back': 'lowerback',
  'Knees': 'knees',
  'Foot': 'foot',
  'Shoulder': 'shoulder',
  'Arm/Hand': 'hand'
};

function QuestionnaireOneScreen({ navigation }: QuestionnaireOneNavigationProps) {
  const [options, setOptions] = useState(new Set<string>());

  return (
    <ScreenBackground type="bg">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <JoshLevin />
          <CallOut index="1" placement="topRight" colors={ doctorColors } style={ styles.bubble }>
            <Text>Please tell us where you’re experiencing pain…{ '\n' }<Text style={[doctorColors.calloutSubtext, styles.subText]}>select all that apply</Text></Text>
          </CallOut>
          <View style={styles.questions}>
            { Object.keys(items).map((item) => <GSHCheckBox
              key={items[item]}
              name={items[item]}
              onSelect={(value) => {
                const [key, val] = Object.entries(value)[0];
                if (val) {
                  setOptions(opts => new Set(opts.add(key)));
                } else {
                  setOptions(opts => new Set([...opts].filter(x => x !== key)))
                }
              }}>
              { item }
            </GSHCheckBox>) }
          </View>
          <IntroButton title="Continue" onPress={() => navigation.replace('QuestionnaireTwo')} disabled={!Array.from(options).length} />
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
    backgroundColor: '#ffffff55'
  }
});

export default QuestionnaireOneScreen;
