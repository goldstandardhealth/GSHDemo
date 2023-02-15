import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

import { base } from '../config';

type Props = {
  type?: 'transparent';
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

function GArea({ style, type, children }: Props) {
  return <View style={[ styles.area, type === 'transparent' ? {} : styles.color, style ]}>{ children }</View>;
}

const styles = StyleSheet.create({
  area: {
    padding: ms(5),
    margin: ms(10)
  },
  color: {
    borderWidth: 0,
    backgroundColor: base.white + '47',
  }
});

export default GArea;


