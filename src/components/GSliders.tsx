import React, { ReactNode, useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';
import { ms } from 'react-native-size-matters';

import { Roboto, base, blue } from '../config';
import GArea from './GArea';

type Props = {
  style?: StyleProp<ViewStyle>;
  data: SlidersData;
  onSelect: any;
};

type SliderData = {
  id: string;
  value?: number;
  text?: string;
}

export type SliderState = { [key: string]: number };
export type SlidersData = { [key: string]: SliderData };

function GSliders({ style, data, onSelect }: Props) {
  const [options, setOptions] = useState<SliderState>(Object.fromEntries(Object.keys(data).map((key) => [key, data[key].value || 0])));
  const onValueChange = (key: string, val: number) => {
    let opts: SliderState = {};
    Object.keys(options).forEach((key) => opts[key] = options[key]);
    opts[key] = val;
    setOptions(opts);
  }

  useEffect(() => onSelect(options), [options]);

  return (
    <GArea style={ style }>
      { Object.keys(data).map((key => {
        return (
          <View key={data[key].id}>
            { data[key].text ? <Text style={styles.label}>{data[key].text}</Text> : [] }
            <Slider
              style={{flex: 1, height: 20, marginHorizontal: ms(15), marginTop: ms(5)}}
              value={options[key]}
              tapToSeek={true}
              thumbTintColor={base.white}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={blue.regular}
              maximumTrackTintColor={(Platform.OS === 'ios' ? blue.regular + '5F' : blue.dark + '9F')}
              onSlidingComplete={(val) => onValueChange(key, val)}
            />
          </View>
        );
      })) }
    </GArea>
  );
}

const styles = StyleSheet.create({
  label: {
    ...Roboto.regular,
    fontSize: ms(16),
    color: base.black,
    marginTop: ms(5)
  }
});

export default GSliders;
