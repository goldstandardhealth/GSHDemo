import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GLightning({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="37"
        width="28"
        transform={[ {scale: size/37} ]}
      >
        <Path d="M13.5003 23.0737H4.18765C2.62608 23.0737 1.8453 23.0737 1.55782 22.5676C1.27034 22.0616 1.67014 21.3909 2.46973 20.0496L13.0708 2.26623C13.4457 1.63744 13.6331 1.32304 13.8167 1.37362C14.0003 1.42419 14.0003 1.79021 14.0003 2.52225V13.4237C14.0003 13.6594 14.0003 13.7773 14.0735 13.8505C14.1468 13.9237 14.2646 13.9237 14.5003 13.9237H23.813C25.3746 13.9237 26.1553 13.9237 26.4428 14.4298C26.7303 14.9358 26.3305 15.6065 25.5309 16.9478L14.9298 34.7312C14.555 35.36 14.3675 35.6744 14.1839 35.6238C14.0003 35.5732 14.0003 35.2072 14.0003 34.4751V23.5737C14.0003 23.338 14.0003 23.2201 13.9271 23.1469C13.8539 23.0737 13.736 23.0737 13.5003 23.0737Z"
          fill="#FFF850"
          stroke="#33363F"
          strokeWidth="2"/>
      </Svg>
    </View>
  );
}
