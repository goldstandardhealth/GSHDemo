import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

function GBack({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="20"
        width="20"
        transform={[ {scale: size/20} ]}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.13623 7.13282L7.47214 11.4687L6.31362 12.6272L0.579258 6.89288L0 6.31362L0.579258 5.73436L6.31362 0L7.47214 1.15852L3.13623 5.49443L9.35047 5.49443C15.2096 5.49443 20 10.2848 20 16.144L20 18.6016H18.3616L18.3616 16.144C18.3616 11.1897 14.3047 7.13282 9.35047 7.13282L3.13623 7.13282Z"
          fill="black"
          fillOpacity="0.8"/>
      </Svg>
    </View>
  );
}

export default GBack;
