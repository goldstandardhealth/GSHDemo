import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import GLogo from './GLogo';
import { RobotoCondensed, blue } from '../config';

type Props = {
  style?: StyleProp<ViewStyle>
  onPress: any
};

function GContinue({ style, onPress }: Props) {
  return (
    <TouchableOpacity style={ [{ marginVertical: vs(30), alignSelf: 'center' }, style] } onPress={onPress}>
      <View style={styles.center}>
        <GLogo size={ms(95)} />
        <Text style={[styles.label, styles.center]}>Continue</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: { alignSelf: 'center' },
  label: {
    ...RobotoCondensed.bold,
    color: blue.dark,
    fontSize: ms(25),
    position: 'absolute',
    top: (ms(95) - ms(30))/2
  }
});


export default GContinue;
