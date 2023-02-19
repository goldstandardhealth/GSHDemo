import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GDiamond({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="31"
        width="30"
        transform={[ {scale: size/35} ]}
      >
        <Path
          d="M15 29L1.6797 12.3496C1.34718 11.934 1.18092 11.7262 1.13625 11.4757C1.09159 11.2252 1.17575 10.9728 1.34407 10.4678L3.5883 3.73509C4.02832 2.41505 4.24832 1.75503 4.7721 1.37752C5.29587 1 5.99159 1 7.38304 1H22.617C24.0084 1 24.7041 1 25.2279 1.37752C25.7517 1.75503 25.9717 2.41505 26.4117 3.73509L28.6559 10.4678L28.6559 10.4678C28.8243 10.9728 28.9084 11.2252 28.8637 11.4757C28.8191 11.7262 28.6528 11.934 28.3203 12.3496L15 29Z"
          fill="#96E6FF"/>
        <Path
          d="M15 29L1.6797 12.3496C1.34718 11.934 1.18092 11.7262 1.13625 11.4757C1.09159 11.2252 1.17575 10.9728 1.34407 10.4678L3.5883 3.73509C4.02832 2.41505 4.24832 1.75503 4.7721 1.37752C5.29587 1 5.99159 1 7.38304 1H22.617C24.0084 1 24.7041 1 25.2279 1.37752C25.7517 1.75503 25.9717 2.41505 26.4117 3.73509L28.6559 10.4678C28.8243 10.9728 28.9084 11.2252 28.8637 11.4757C28.8191 11.7262 28.6528 11.934 28.3203 12.3496L15 29ZM15 29L21.125 9.75M15 29L8.875 9.75M28.125 11.5L21.125 9.75M21.125 9.75L18.5 2.75M21.125 9.75H8.875M11.5 2.75L8.875 9.75M8.875 9.75L1.875 11.5"
          fill="none"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"/>
      </Svg>
    </View>
  );
}
