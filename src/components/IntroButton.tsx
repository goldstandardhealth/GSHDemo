import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  Text
} from 'react-native';

import { font, introColors } from '../config';

type Props = {
  title: string,
  style?: StyleProp<ViewStyle>,
  onPress?: ((event: GestureResponderEvent) => void),
  disabled: boolean
};

function IntroButton({ title, style, onPress, disabled }: Props) {
  return (
    <TouchableOpacity disabled={disabled} style={ [styles.wrapper, style] } onPress={onPress}>
      <View style={introColors.shadow}><Text style={ [styles.button, disabled ? styles.disabled : styles.enabled] }>{title}</Text></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 40
  },
  button: {
    ...font.bold,
    fontSize: 25,
    textAlign: 'center',
    textTransform: "uppercase",
    alignSelf: 'center',

    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 20,

    overflow: "hidden"
  },
  disabled: {
    ...introColors.buttonDisabled,
  },
  enabled: {
    ...introColors.buttonEnabled,
  }
});

export default IntroButton;
