import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

export type RadioButtonDataType = [
  {
    title?: string,
    value: string
  }
];

type Props = {
  data: RadioButtonDataType,
  onSelect: ((value: string) => void)
};


function GSHRadioButton({ data, onSelect }: Props) {
  const [userOption, setUserOption] = useState<string|null>(null);
  const selectHandler = (value: string) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable key={item.value}
            style={[
              styles.button,
              item.value === userOption ? styles.selected : styles.unselected
            ]}
            onPress={() => selectHandler(item.value)}>
            <Text style={styles.option}> {item.title || item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 25,
    margin: 10,
    padding: 10
  },
  unselected: {
    backgroundColor: '#ead19a',
    borderColor: '#000000'
  },
  selected: {
    backgroundColor: '#5793a3',
    borderColor: '#ffffff'
  }
});

export default GSHRadioButton;
