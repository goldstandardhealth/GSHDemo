import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GMortarboard({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="49"
        width="49"
        transform={[ {scale: size/40} ]}
      >
      <Path d="M41.8545 17.3555V25.5221"
        fill="none"
        stroke="#33363F"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <Path d="M13.2705 21.4375V31.6458C13.2705 31.6458 14.2913 35.7292 24.4997 35.7292C34.708 35.7292 35.7288 31.6458 35.7288 31.6458V21.4375"
        fill="none"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <Path d="M6.96799 16.9795L23.6877 9.54851C24.2049 9.31868 24.7951 9.31868 25.3123 9.54851L42.032 16.9795C42.3567 17.1238 42.3567 17.5845 42.032 17.7288L25.3123 25.1598C24.7951 25.3897 24.2049 25.3897 23.6877 25.1598L6.96799 17.7288C6.64335 17.5845 6.64335 17.1238 6.96799 16.9795Z"
        fill="#872571"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      </Svg>
    </View>
  );
}
