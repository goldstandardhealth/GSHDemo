import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';

import { goldies } from '../config';

type Props = {
  type: string,
  style: StyleProp<ImageStyle>
};

function Goldie({ type, style }: Props) {
  return <Image source={ goldies[type] } style={ style } />;
}

export default Goldie;
