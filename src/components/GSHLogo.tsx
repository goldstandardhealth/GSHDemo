import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { logo } from '../config';

function GSHLogo() {
  return <Image style={ styles.logo } source={ logo }></Image>;
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    margin: 5
  }
});

export default GSHLogo;
