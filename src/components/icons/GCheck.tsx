import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

function GCheck({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="12"
        width="12"
        transform={[ {scale: size/12} ]}
      >
        <Path
          d="M1.40632 7.25146L4.04698 9.23196C4.13362 9.29694 4.25607 9.28207 4.32465 9.19826L10.4922 1.66016"
          fill="none"
          stroke="white"
          strokeWidth="1.61676"
          strokeLinecap="round"/>
      </Svg>
    </View>
  );
}

export default GCheck;
