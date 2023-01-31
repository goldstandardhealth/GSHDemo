import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { backgrounds } from '../config';

type Props = {
  type: string,
  children: JSX.Element,
};

function ScreenBackground({ type, children }: Props) {
  return (
    <ImageBackground source={backgrounds[type]} resizeMode="cover" style={styles.bg}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default ScreenBackground;
