import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from "react-native-svg"
import { moderateScale } from 'react-native-size-matters';

import { font, introColors, CalloutColorProps } from '../config';

type Props = {
  style?: StyleProp<ViewStyle>,
  index: string,
  placement: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft',
  children: JSX.Element | string,
  colors: CalloutColorProps
};

const defaults = {
  callout: {
    borderWidth: 1,
    borderColor: '#eec77e',
    backgroundColor: '#5793a3'
  }
};

function CallOut({ index, placement, children, style, colors }: Props) {
  const hook = colors.callout;
  return (
    <View style={ [style, { margin: 10}] }>
      <View style={ [styles.bubble, colors.callout] } key="{ index }">
        <Text style={ [styles.message, colors.calloutText] }>{ children }</Text>
        <Svg viewBox="0 1 26 16" height="16" width="25" style={ styles[placement] }>
          <Path
            d="M 0,0 C 5,9 13,14 23,15 c -2.5,-4 -4,-9 -4,-14 0,0 0,0 0,-1"
            strokeWidth={hook.borderWidth}
            stroke={hook.borderColor}
            fill={hook.backgroundColor}
            vectorEffect="non-scaling-stroke"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10
  },
  message: {
    fontSize: 25,
    textAlign: 'center',
    ...font.regular
  },
  bottomRight: {
    position: "absolute",
    bottom: -16,
    right: 0
  },
  bottomLeft: {
    position: "absolute",
    bottom: -16,
    left: 0,
    transform: [{scaleX: -1}]
  },
  topLeft: {
    position: "absolute",
    top: -16,
    left: 0,
    transform: [{scale: -1}]
  },
  topRight: {
    position: "absolute",
    top: -16,
    right: 0,
    transform: [{scaleY: -1}]
  }
});

export default CallOut;
