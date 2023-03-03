import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import { ms } from 'react-native-size-matters';

import { Roboto, base, blue, gold } from '../config';
import GArea from './GArea';

type RadioButtonDataType = {
  id: string;
  title?: string;
  value: string;
};

export type RadioButtonsDataType = Array<RadioButtonDataType>;

type Props = {
  data: RadioButtonsDataType;
  onSelect: ((value: string) => void);
  style?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<TextStyle>;
};

function GRadioButtons({ style, optionStyle, buttonStyle, data, onSelect }: Props) {
  const [userOption, setUserOption] = useState<string|null>(null);
  const selectHandler = (value: string) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <GArea type='transparent' style={ style }>
      {data.map((item) => {
        return (
          <Pressable key={item.value}
            style={[
              styles.button,
              buttonStyle,
              item.value === userOption ? styles.selected : styles.unselected
            ]}
            onPress={() => selectHandler(item.value)}>
            <Text style={[styles.option, optionStyle]}> {item.title || item.value}</Text>
          </Pressable>
        );
      })}
    </GArea>
  );
}

const styles = StyleSheet.create({
  option: {
    ...Roboto.black,
    fontSize: ms(16),
    color: base.black,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    margin: ms(10),
    padding: ms(10)
  },
  unselected: {
    backgroundColor: base.white + '47',
    borderColor: base.black
  },
  selected: {
    backgroundColor: gold.light,
    borderColor: base.white,
    color: base.white
  }
});

export default GRadioButtons;
