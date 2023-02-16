import React, { useState, useEffect } from 'react';
import { Animated, Easing, StyleProp, ImageStyle, StyleSheet } from 'react-native';

type Props = {
  size: number;
  style?: StyleProp<ImageStyle>;
}

function GLoading({ size, style }: Props) {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={require('../../assets/loading.png')}
      style={[style, { height: size, width: size }, {transform: [{ rotate: interpolateRotating }]}]}
      resizeMode="contain"
      resizeMethod="resize"
    />
  );
}

export default GLoading;
