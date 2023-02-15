import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import GLogo from './GLogo';
import { RobotoCondensed, blue } from '../config';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: any;
  disabled?: boolean;
};

function GContinue({ style, onPress, disabled }: Props) {
  const buttonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: disabled ? 0 : 1,
        duration: 750,
        useNativeDriver: true,
      })
    ]).start();
  }, [disabled]);

  return (
    <Animated.View style={{opacity: buttonAnim}}>
      <TouchableOpacity disabled={disabled} style={ [{ marginVertical: vs(30), alignSelf: 'center' }, style] } onPress={onPress}>
        <View style={styles.center}>
          <GLogo size={ms(95)} />
          <Text style={[styles.label, styles.center]}>Continue</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  center: { alignSelf: 'center' },
  label: {
    ...RobotoCondensed.bold,
    color: blue.dark,
    fontSize: ms(25),
    position: 'absolute',
    top: (ms(95) - ms(30))/2
  }
});


export default GContinue;
