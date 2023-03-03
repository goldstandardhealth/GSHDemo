import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, Animated, Easing, StyleProp, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { LinearGradient, RadialGradient, Path, Circle, Defs, Stop } from 'react-native-svg'

import GStar from './icons/GStar';
import GCallOut from './GCallOut';
import Goldie from './Goldie';
import GBaloon from './GBaloon';
import { bonuses, base, RobotoCondensed } from '../config';

export type GBonusProps = {
  size: number;
  image: string;
  style?: StyleProp<ImageStyle>;
  onPress?: any;
};

type GBonusPropsInternal = GBonusProps & { complete: boolean; available: boolean; }

function GBonus({ size, available, complete, image, style, onPress }: GBonusPropsInternal) {
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
    <Pressable style={ [{
      width: size,
      height: size
    }, style] } onPress={onPress} disabled={!available}>
      <Animated.Image
        source={bonuses[source]}
        style={[style, {
          opacity: (available ? 1 : 0.4),
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
      <GBaloon run={available} type="friend" style={{top: -size*1.5, left: -size*0.5}}>
        <Text style={{
          ...RobotoCondensed.bold,
          fontSize: ms(18),
          color: base.black,
          textAlign: 'center',
          padding: ms(10)
        }}>Click on the floating item for a bonus activity!</Text>
      </GBaloon>
    </Pressable>
  );
}

export default GBonus;
