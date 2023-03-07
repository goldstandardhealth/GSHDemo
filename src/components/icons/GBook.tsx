import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from "react-native-svg"

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

function GBook({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, alignSelf: 'center' }, style]} >
      <Svg
        height="35"
        width="35"
        transform={[ {scaleX: size/35}, {scaleY: size/35} ]}
      >
        <Path
          d="M29.1663 17.5V24.7917C29.1663 27.5415 29.1663 28.9165 28.3121 29.7707C27.4578 30.625 26.0829 30.625 23.333 30.625H9.47885C7.46531 30.625 5.83301 28.9927 5.83301 26.9792V26.9792C5.83301 24.9656 7.4653 23.3333 9.47884 23.3333H23.333C26.0829 23.3333 27.4578 23.3333 28.3121 22.4791C29.1663 21.6248 29.1663 20.2499 29.1663 17.5V10.2083C29.1663 7.45847 29.1663 6.08354 28.3121 5.22927C27.4578 4.375 26.0829 4.375 23.333 4.375H11.6663C8.91648 4.375 7.54155 4.375 6.68728 5.22927C5.83301 6.08354 5.83301 7.45847 5.83301 10.2083V26.9792"
          stroke="#222222"
          strokeWidth="1.5"
          fill="none"
        />
        <Path
          d="M13.125 11.668L21.875 11.668"
          stroke="#222222"
          strokeWidth="1.5"
        />
      </Svg>
    </View>
  );
}

export default GBook;
