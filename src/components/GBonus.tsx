import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing, StyleProp, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { LinearGradient, RadialGradient, Path, Circle, Defs, Stop } from 'react-native-svg'

import GStar from './icons/GStar';
import GCallOut from './GCallOut';
import Goldie from './Goldie';
import { bonuses, base, RobotoCondensed } from '../config';

export type GBonusProps = {
  size: number;
  complete: boolean;
  image: string;
  style?: StyleProp<ImageStyle>;
};

function GBonus({ size, complete, image, style }: GBonusProps) {
  const [bounceAnimation, setBounceAnimation] = useState(new Animated.Value(0));
  const source = complete ? `${image}color` : `${image}bw`;
  const [display, setDisplay] = useState<"flex" | "none">("none");
  const [opacityAnimation, setOpacityAnimation] = useState(new Animated.Value(0));

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

  useEffect(() => {
    if (complete) {
      setDisplay('flex');
      Animated.sequence([
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.delay(1500),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 750,
          useNativeDriver: true,
        })
      ]).start(() => setDisplay("none"));
    }
  }, [complete]);

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
      <View style={{
        display: display,
        position: 'absolute',
        top: -size*1.5,
        left: -size*0.5
      }}>
        <Animated.View style={{
          opacity: opacityAnimation,
        }}>
          <GCallOut style={{
            marginLeft: ms(20),
            marginBottom: ms(10),
            width: ms(180),
            backgroundColor: "#EEC77E7D"
          }} placement="bottomLeft" palette={{
            stroke: "#7C2D01",
            fill: "#EEC77E7D",
          }}>
            <Text style={{
              ...RobotoCondensed.bold,
              fontSize: ms(18),
              color: base.black,
              textAlign: 'center',
              padding: ms(10)
            }}>Click on the floating item for a bonus activity!</Text>
          </GCallOut>
          <Goldie size={ms(50)} type="friend" />
        </Animated.View>
      </View>
    </View>
  );
}

export default GBonus;
