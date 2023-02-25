import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleProp, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { LinearGradient, RadialGradient, Path, Circle, Defs, Stop } from 'react-native-svg'

import GStar from './icons/GStar';
import { bonuses } from '../config';

export type GBonusProps = {
  size: number;
  complete: boolean;
  image: string;
  style?: StyleProp<ImageStyle>;
};

function GBonus({ size, complete, image, style }: GBonusProps) {
  const [bounceAnimation, setBounceAnimation] = useState(new Animated.Value(0));
  const source = complete ? `${image}color` : `${image}bw`;

  useEffect(() => {
    Animated.loop(
      Animated.timing(bounceAnimation, {
        toValue: 1,
        duration: 2500,
        easing: Easing.elastic(10),
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const interpolateBounce = bounceAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-1, 1],
  });

  return (
    <View style={[style, {width: size, height: size}]}>
      <Animated.Image
        source={bonuses[source]}
        style={[style, {
          height: size,
          width: size,
          position: 'absolute',
          top: 0,
          left: 0
        }, {transform: [ {translateY: interpolateBounce} ]}]}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <View style={{
        position: 'absolute',
        top: size,
        left: 0,
        width: size,
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'center'

      }}>
        <GStar complete={complete} size={ms(15)} />
        <GStar style={{marginTop: ms(3)}} complete={complete} size={ms(15)} />
        <GStar complete={complete} size={ms(15)} />
      </View>
    </View>
  );
}

export default GBonus;
