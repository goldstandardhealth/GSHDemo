import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { RobotoCondensed, base } from '../config';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

function GTitle({ style, children }: Props) {
  return (
    <View style={ [styles.label, style] }>
      <Text  style={styles.name}>{ children }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    ...RobotoCondensed.bold,
    fontSize: ms(38),
    textAlign: 'center'
  },
  label: {
    padding: ms(15),
    borderWidth: 0,
    borderRadius: ms(100),
    backgroundColor: base.white + '55',
    margin: ms(10)
  }
});

export default GTitle;
