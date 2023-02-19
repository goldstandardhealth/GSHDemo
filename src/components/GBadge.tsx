import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

import { GAtom, GDiamond, GFire, GLightning, GMedal, GMortarboard, GWatch } from './badges';

type Props = {
  size: number;
  color: string;
  type: string;
  subType?: string;
  style?: StyleProp<ViewStyle>;
};

function GBadge({ size, color, type, subType, style }: Props) {
  const pickBadge = (type: string, subType: string | undefined): ReactNode => {
    const s = size * 0.55;
    switch (type) {
      case 'atom':
        return <GAtom size={ms(s)} style={styles.icon} />;
      case 'diamond':
        return <GDiamond size={ms(s)} style={styles.icon} />;
      case 'fire':
        return <GFire size={ms(s)} style={styles.icon} />;
      case 'lightning':
        return <GLightning size={ms(s)} style={styles.icon} />;
      case 'medal':
        return <GMedal size={ms(s)} style={styles.icon} color={subType} />;
      case 'mortarboard':
        return <GMortarboard size={ms(s)} style={styles.icon} />;
      case 'watch':
        return <GWatch size={ms(s)} style={styles.icon} />;
      default:
        return <Text>unknown</Text>;
    }
  }

  return (
    <View style={ [{
      height: size,
      width: size,
      backgroundColor: color,
      borderWidth: 2,
      borderRadius: size/2,
      justifyContent: 'center'
    }, style] }>
      { pickBadge(type, subType) }
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { alignSelf: 'center' }
});

export default GBadge;
