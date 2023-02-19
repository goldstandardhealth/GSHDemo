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

function GDiamond({ number, size, style }: Props) {
  return (
    <View style={ [{ height: size, width: size, alignSelf: 'center' }, style] }>
      <Svg
        height="35"
        width="35"
        transform={[ {scaleX: size/35}, {scaleY: size/35} ]}
      >
        <Defs>
          <LinearGradient
            id="diamondPaint"
            x1="16.5"
            y1="1"
            x2="16.5"
            y2="32"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#96E6FF"/>
            <Stop offset="1" stopColor="#F4F7F8"/>
          </LinearGradient>
        </Defs>
        <Path
          d="M1.75253 13.5657L14.7709 29.8387C15.5689 30.8361 15.9679 31.3348 16.5 31.3348C17.0321 31.3348 17.4311 30.8361 18.2291 29.8387L31.2475 13.5657C31.6156 13.1055 31.7997 12.8754 31.8491 12.5981C31.8986 12.3208 31.8054 12.0413 31.6191 11.4822L29.1344 4.02813C28.6472 2.56666 28.4036 1.83593 27.8237 1.41796C27.2439 1 26.4736 1 24.9331 1H8.06693C6.52641 1 5.75615 1 5.17625 1.41796C4.59636 1.83593 4.35278 2.56666 3.86562 4.02814L1.38094 11.4822C1.19458 12.0413 1.1014 12.3208 1.15085 12.5981C1.20031 12.8754 1.38438 13.1055 1.75253 13.5657Z"
          fill="url(#diamondPaint)"
          stroke="#222222"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </Svg>
      <Text style={{
        ...Roboto.bold,
        fontSize: ms(14.5),
        width: ms(32),
        textAlign: 'center',
        position: 'absolute',
        top: ms(5)
      }}>{ number }</Text>
    </View>
  );
}

export default GDiamond;
