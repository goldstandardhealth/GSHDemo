import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import { IntroNavigationProps, font } from '../../config';

function IntroScreen({ navigation }: IntroNavigationProps) {
  let timer: number | null = setTimeout(nextScreen, 5000);

  function nextScreen() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    navigation.replace('WelcomeOne');
  }

  return (
    <ScreenBackground type="splash">
      <TouchableWithoutFeedback onPress={nextScreen}>
        <View style={styles.container}>
          <Text style={styles.message}>
            Welcome to the{'\n'}
            <Text style={font.bold}>Gold Standard</Text>{'\n'}
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  message: {
    fontSize: 35,
    lineHeight: 41,
    alignSelf: 'stretch',
    textAlign: 'right',
    marginRight: 10,
    flex: 0.55,
    ...font.regular
  }
});

export default IntroScreen;
