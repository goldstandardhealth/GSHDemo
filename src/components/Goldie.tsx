import React, { useState } from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';

import { goldies } from '../config';

type Props = {
  type: string,
  style: StyleProp<ImageStyle>
  size: number;
};

type Dimension = { width: number; height: number; }

function Goldie({ type, style, size }: Props) {
  const [imageWidth, setImageWidth] = useState(size);

  const onLoad = ({nativeEvent: {source: {width, height}}}: {nativeEvent: {source: Dimension}}) => {
    setImageWidth(Math.round(size*(width/height)));
  }

  return <Image source={ goldies[type] } onLoad={onLoad} style={ [{
    resizeMode: 'contain',
    height: size,
    width: imageWidth
  }, style]} />;
}

export default Goldie;
