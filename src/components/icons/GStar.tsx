import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';

import { base } from '../../config';

type Props = {
  size: number;
  complete: boolean;
  style?: StyleProp<ViewStyle>;
}

function GStar({ style, complete, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="12"
        width="12"
        transform={[ {scale: size/12} ]}
      >
      <Path
        d="M5.20244 0.995268C5.45364 0.222159 6.54738 0.22216 6.79858 0.995269L7.5077 3.17772C7.62004 3.52346 7.94223 3.75755 8.30577 3.75755L10.6005 3.75755C11.4134 3.75755 11.7514 4.79776 11.0938 5.27557L9.23726 6.6244C8.94315 6.83808 8.82009 7.21684 8.93243 7.56258L9.64155 9.74503C9.89275 10.5181 9.00789 11.161 8.35024 10.6832L6.49374 9.33439C6.19963 9.12071 5.80138 9.12071 5.50727 9.33439L3.65077 10.6832C2.99313 11.161 2.10827 10.5181 2.35947 9.74503L3.06859 7.56258C3.18093 7.21684 3.05786 6.83808 2.76375 6.6244L0.90725 5.27557C0.249604 4.79776 0.58759 3.75755 1.40049 3.75755L3.69525 3.75755C4.05879 3.75755 4.38098 3.52346 4.49332 3.17772L5.20244 0.995268Z"
        stroke={ base.black }
        strokeWidth={ complete ? ms(0.5) : 0 }
        fill={ complete ? "#FFC700" : "#BBBBBB"}/>
      </Svg>
    </View>
  );
}

export default GStar;
