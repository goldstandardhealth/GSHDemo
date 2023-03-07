import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GFire({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="37"
        width="30"
        transform={[ {scale: size/37} ]}
      >
      <Defs>
        <LinearGradient
          id="fireBadgePaint"
          x1="15"
          y1="1.675"
          x2="20.95"
          y2="35.5"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#FA1717"/>
          <Stop offset="0.56" stopColor="#F5AB3A"/>
          <Stop offset="1" stopColor="#FFC90A"/>
        </LinearGradient>
      </Defs>
      <Path
        d="M21.6663 12.9998C21.6663 11.0209 24.4737 10.4964 25.2186 12.3479C27.0203 16.8268 28.333 20.8334 28.333 22.9996C28.333 29.9031 22.3635 35.4996 14.9997 35.4996C7.63588 35.4996 1.66634 29.9031 1.66634 22.9996C1.66634 20.6723 3.1816 16.2207 5.1905 11.3415C7.79281 5.021 9.09397 1.86075 10.7001 1.69053C11.2141 1.63607 11.7748 1.73399 12.2333 1.95831C13.6663 2.65934 13.6663 6.10614 13.6663 12.9998C13.6663 15.0708 15.4572 16.7498 17.6663 16.7498C19.8755 16.7498 21.6663 15.0708 21.6663 12.9998Z"
        fill="url(#fireBadgePaint)"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"/>
      </Svg>
    </View>
  );
}
