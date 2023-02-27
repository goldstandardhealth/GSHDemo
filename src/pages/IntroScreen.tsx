import React, { useContext, useEffect } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

import { PathContext } from '../layout/RootNavigation';
import ScreenBackground from '../layout/ScreenBackground';
import { IntroNavigationProps, RobotoCondensed, blue, gold } from '../config';

function IntroScreen({ navigation }: IntroNavigationProps) {
  let timer: number | null = setTimeout(nextScreen, 5000);
  const context = useContext(PathContext);

  useEffect(() => context.setPath({current: 0, bonus: 0}), []);

  function nextScreen() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    navigation.replace('Welcome');
  }

  return (
    <ScreenBackground type="splash">
      <TouchableWithoutFeedback onPress={nextScreen}>
        <View style={styles.container}>
          <Text style={styles.message}>
            Welcome to the{'\n'}
            <Text style={styles.highlight}>Gold Standard</Text>{'\n'}
            path toward pain{'\n'}
            recovery</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  message: {
    color: blue.darker,
    fontSize: 35,
    lineHeight: 41,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginRight: ms(10),
    paddingTop: ms(100),
    ...RobotoCondensed.bold
  },
  highlight: {
    color: gold.lighter
  }
});

export default IntroScreen;
