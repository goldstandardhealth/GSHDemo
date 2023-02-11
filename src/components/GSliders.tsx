import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';
import { ms } from 'react-native-size-matters';

import { Roboto, base, blue } from '../config';

type Props = {
  style?: StyleProp<ViewStyle>;
  data: SlidersData;
};

type SliderData = {
  id: string;
  value?: number;
  text: string;
}

export type SlidersData = { [key: string]: SliderData };

function GSliders({ style, data }: Props) {
  return (
    <View style={ [styles.area, style] }>
      { Object.keys(data).map((key => {
        return (
          <View key={data[key].id}>
            <Text style={styles.label}>{data[key].text}</Text>
            <Slider
              style={{flex: 1, height: 20, marginHorizontal: ms(15), marginTop: ms(10)}}
              value={data[key].value || 0}
              tapToSeek={true}
              thumbTintColor={base.white}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={blue.regular}
              maximumTrackTintColor={blue.regular + '1F'}
            />
          </View>
        );
      })) }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    ...Roboto.regular,
    fontSize: ms(20),
    color: base.black,
    marginTop: ms(10)
  },
  area: {
    padding: ms(15),
    borderWidth: 0,
    backgroundColor: base.white + '47',
    margin: ms(10)
  }
});

export default GSliders;
