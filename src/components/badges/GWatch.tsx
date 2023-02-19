import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path, Circle } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GWatch({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="55"
        width="55"
        transform={[ {scale: size/45} ]}
      >
        <Circle
          cx="27.5003"
          cy="27.5013"
          r="12.4583"
          fill="#C96969"
          stroke="#222222"
          strokeWidth="2"/>
        <Path
          d="M19.4795 17.1862L20.5323 8.7641C20.5854 8.33874 20.947 8.01953 21.3757 8.01953H33.625C34.0536 8.01953 34.4152 8.33874 34.4684 8.7641L35.5212 17.1862"
          fill="none"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"/>
        <Path
         d="M19.4795 37.8138L20.5323 46.2359C20.5854 46.6613 20.947 46.9805 21.3757 46.9805H33.625C34.0536 46.9805 34.4152 46.6613 34.4684 46.2359L35.5212 37.8138"
          fill="none"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"/>
        <Path
          d="M42.692 25.207H40.1045V29.7904H42.692C43.1614 29.7904 43.542 29.4098 43.542 28.9404V26.057C43.542 25.5876 43.1614 25.207 42.692 25.207Z"
         fill="#222222"/>
        <Path
          d="M27.5 27.5L22.9167 21.7708"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"/>
        <Path
          d="M27.5003 27.5017L33.2295 28.6484"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"/>
      </Svg>
    </View>
  );
}
