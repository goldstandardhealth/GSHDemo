import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

import { Roboto } from '../../config';
type Props = {
  number: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

function GFire({ number, size, style }: Props) {
  return (
    <View style={ [{ height: size, width: size/35*26, alignSelf: 'center' }, style]} >
      <Svg
        height="35"
        width="26"
        transform={[ {scaleX: size/35}, {scaleY: size/35} ]}
      >
        <Defs>
          <LinearGradient
            id="firePaint"
            x1="13"
            y1="0.5"
            x2="18.5"
            y2="31.35"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#FA1717"/>
            <Stop offset="0.56" stopColor="#F5AB3A"/>
          </LinearGradient>
        </Defs>
        <Path
          d="M19.0413 10.8227C19.0413 9.01613 21.5856 8.53727 22.2605 10.2277C23.8933 14.3167 25.083 17.9746 25.083 19.9522C25.083 26.2549 19.6731 31.3642 12.9997 31.3642C6.32623 31.3642 0.91634 26.2549 0.91634 19.9522C0.91634 17.8275 2.28955 13.7633 4.11011 9.3088C6.46845 3.53843 7.64763 0.653246 9.10322 0.497843C9.56898 0.448117 10.0771 0.53752 10.4927 0.742313C11.7913 1.38233 11.7913 4.52913 11.7913 10.8227C11.7913 12.7135 13.4143 14.2464 15.4163 14.2464C17.4184 14.2464 19.0413 12.7135 19.0413 10.8227Z"
          fill="url(#firePaint)"
          stroke="#FF0000"
          strokeWidth="0.56"
          strokeLinecap="round"
        />
      </Svg>
      <Text style={{
        ...Roboto.bold,
        fontSize: ms(14.5),
        width: ms(26),
        textAlign: 'center',
        position: 'absolute',
        top: ms(12)
      }}>{ number }</Text>
    </View>
  );
}

export default GFire;
