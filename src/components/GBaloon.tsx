import React, { ReactNode, useState, useEffect } from 'react';
import { View, Animated, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

import GCallOut from './GCallOut';
import Goldie from './Goldie';
import { base } from '../config';

export type GBaloonProps = {
  run: boolean;
  type: string;
  align?: 'left' | 'right'
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onHide?: any;
};

function GBaloon({ run, type, style, align = 'left', children, onHide }: GBaloonProps) {
  const [display, setDisplay] = useState<"flex" | "none">("none");
  const [opacityAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (run) {
      setDisplay('flex');
      Animated.sequence([
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.delay(2500),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 750,
          useNativeDriver: true,
        })
      ]).start(() => {
        setDisplay("none");
        opacityAnimation.resetAnimation();
        onHide && onHide();
      });
    }
  }, [run]);

  const alignSelf = align === 'left' ? 'flex-start' : 'flex-end';
  const placement = align === 'left' ? 'bottomLeft' : 'bottomRight';

  return (
    <View style={[{
      display: display,
      position: 'absolute'
    }, style]}>
      <Animated.View style={{
        opacity: opacityAnimation,
      }}>
        <GCallOut style={{
          marginLeft: ms(20),
          marginBottom: ms(10),
          width: ms(180),
          backgroundColor: base.white + "7D"
        }} placement={placement} palette={{
          stroke: "#7C2D01",
          fill: "#EEC77E7D",
        }}>{ children }</GCallOut>
        <Goldie size={ms(50)} type={type} style={{alignSelf: alignSelf}}/>
      </Animated.View>
    </View>
  );
}

export default GBaloon;
