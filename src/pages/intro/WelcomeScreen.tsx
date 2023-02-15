import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import GScrollable from '../../layout/GScrollable';
import { WelcomeNavigationProps, RobotoCondensed, base, blue, gold, blueCallout } from '../../config';

import GVideo from '../../components/GVideo';
import GCallOut from '../../components/GCallOut';
import GContinue from '../../components/GContinue';

function WelcomeScreen({ navigation }: WelcomeNavigationProps) {

  const nextScreen = () => navigation.replace('Experts');

  return (
    <GScrollable type="bg">
      <GCallOut
        style={styles.callout}
        palette={blueCallout}
        padding={10}
        placement='bottomLeft'
        >
        <Text style={ styles.message }>
          Welcome!{ '\n' }
          We’re excited to{ '\n' }
          introduce you to{ '\n' }
          <Text style={ styles.highlight }>Gold Standard Health</Text>
        </Text>
      </GCallOut>
      <GVideo source={require('../../../assets/video/Introducing_the_Founders.mp4')}/>
      <GContinue onPress={nextScreen} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  callout: {
    marginTop: vs(80),
    marginBottom: ms(30),
    alignSelf: 'center'
  },
  message: {
    ...RobotoCondensed.regular,
    textAlign: 'center',
    color: base.black,
    fontSize: ms(30)
  },
  highlight: {
    ...RobotoCondensed.bold,
    color: gold.light
  }
});

export default WelcomeScreen;
