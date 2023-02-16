import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle
} from 'react-native';
import { ms } from 'react-native-size-matters';

import { Roboto, base, blue } from '../config';
import GArea from './GArea';

type CheckBoxDataType = {
  id: string;
  title?: string;
  value: string;
};

export type CheckBoxesDataType = Array<CheckBoxDataType>;
export type CheckBoxesState = Set<string>;

type Props = {
  type?: 'wide';
  data: CheckBoxesDataType;
  onSelect: ((options: CheckBoxesState) => void);
  style?: StyleProp<ViewStyle>;
};

function GCheckBoxes({ style, data, onSelect, type }: Props) {
  const [options, setOptions] = useState(new Set<string>());
  const selectHandler = (key: string) => options.has(key) ? setOptions(opts => new Set([...opts].filter(x => x !== key))) : setOptions(opts => new Set(opts.add(key)));
  useEffect(() => onSelect(options), [options]);

  return (
    <GArea style={ [styles.container, type === 'wide' ? styles.containerWide : {}] }>
      {data.map((item) => {
        return (
          <Pressable key={item.id}
            style={[
              styles.button,
              type === 'wide' ? styles.buttonWide : {},
              style,
              options.has(item.value) ? styles.selected : styles.unselected
            ]}
            onPress={() => selectHandler(item.value)}>
            <Text style={styles.option}> {item.title || item.value}</Text>
          </Pressable>
        );
      })}
    </GArea>
  );
}

const styles = StyleSheet.create({
  option: {
    ...Roboto.bold,
    fontSize: ms(13),
    color: '#000000',
    textAlign: 'center',
  },
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  containerWide: {
    flexWrap: 'nowrap',
    flexDirection:'column'
  },
  button: {
    borderWidth: 1,
    borderColor: base.black,
    borderRadius: ms(25),
    margin: ms(10),
    padding: ms(10),
    paddingHorizontal: ms(15)
  },
  buttonWide: {
    flex: 1,
    marginVertical: ms(5)
  },
  unselected: {
  },
  selected: {
    backgroundColor: blue.lighter + '4d',
    borderColor: blue.darker2,
  }
});

export default GCheckBoxes;
