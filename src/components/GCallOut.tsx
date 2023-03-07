import React, { useState, useEffect, ReactNode } from 'react';
import { StyleSheet, View, LayoutRectangle, ColorValue, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, ClipPath, Use } from "react-native-svg"
import { ms } from 'react-native-size-matters';

export type Palette = {
  stroke?: ColorValue;
  fill?: ColorValue;
  strokeWidth?: number;
  radius?: number;
};

type Props = {
  padding?: number;
  palette?: Palette;
  placement: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  children: ReactNode;
  style?: StyleProp<ViewStyle>
};

type Dimension = {
  width: number,
  height: number
}

function GCallOut({ padding, palette, placement, children, style }: Props) {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0
  });
  const [path, setPath] = useState('');
  const pad = { padding: padding || ms(10)};
  const t: Palette = {
    stroke: "#000",
    fill: '#fff',
    strokeWidth: ms(2),
    radius: ms(10),
    ...palette
  }
  const r = Math.abs(t.radius || 0);

  useEffect(() => {
    let w = dimension.width;
    let h = dimension.height;
    if (w >= r && h >= r) {
      setPath(`M ${r},0 A ${r},${r} 0 0 0 0,${r} v ${h-2*r} a ${r},${r} 0 0 0 ${r},${r} l -${r/2} ${r} l ${r*1.5} -${r} h ${w-3*r} a ${r},${r} 0 0 0 ${r},-${r} v -${h-2*r} a ${r},${r} 0 0 0 -${r},-${r} Z`);
    }
  }, [dimension]);

  const dimensions = (layout: LayoutRectangle) => {
    setDimension({width: layout.width + 1, height: layout.height + 1});
  }

  return (
    <View style={[{alignSelf: 'flex-start'}, style]}>
      <Svg
        height={(dimension.height || 0) + r }
        width={(dimension.width || 0) + 1}
        style={[styles.bubble, styles[placement]]}>
        <Defs>
          <Path id="path" d={path} />
          <ClipPath id="insidePath">
            <Use xlinkHref="#path" />
          </ClipPath>
        </Defs>
        <Use
          xlinkHref="#path"
          strokeWidth={t.strokeWidth}
          stroke={t.stroke}
          fill={t.fill}
          vectorEffect="non-scaling-stroke"
          clipPath="url(#insidePath)" />
      </Svg>
      <View
        onLayout={(e) => dimensions(e.nativeEvent.layout)}
        style={pad}>
        { children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: { position: 'absolute' },
  bottomLeft: {},
  bottomRight: { transform: [{scaleX: -1}] },
  topRight: { bottom: 0, transform: [{scale: -1}] },
  topLeft: { bottom: 0, transform: [{scaleY: -1}] }
});

export default GCallOut;
