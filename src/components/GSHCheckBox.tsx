import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import CheckBox from '@react-native-community/checkbox';

type Props = {
  name: string;
  children: JSX.Element | string;
  onSelect: ((value: {[key: string]: boolean}) => void);
};

function GSHCheckBox({ children, onSelect, name }: Props) {
  return (
    <View style={styles.checkboxRow}>
      <CheckBox
        boxType="square"
        lineWidth={1}
        style={styles.checkbox}
        animationDuration={0.3}
        onValueChange={(value: boolean) => onSelect({ [name]: value })}>
      </CheckBox>
      <Text style={styles.checkboxText}>{ children }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    lineWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: '#ffffff'
  },
  checkboxRow: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    marginRight: 50,
    marginLeft: 50
  },
  checkboxText: {
    fontSize: 16,
    paddingLeft: 20,
    alignSelf: 'center'
  },
});

export default GSHCheckBox;
