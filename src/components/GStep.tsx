import React, { useState } from 'react';
import { Pressable, View, Image, StyleProp, ViewStyle } from 'react-native';
import Svg, { LinearGradient, RadialGradient, Circle, Defs, Stop } from 'react-native-svg'

import { excercises } from '../config';
import GLock from '../components/icons/GLock';

export type GStepProps = {
  size: number;
  image: string;
  style?: StyleProp<ViewStyle>;
  onPress: any;
};

type GStepPropsInternal = GStepProps & { complete: boolean; disabled: boolean; }

type GStepCircleProps = {
  size: number;
  complete: boolean;
  pressed: boolean;
};

export type GStepLockedProps = {
  size: number;
  style?: StyleProp<ViewStyle>;
};


function GStepCircle({ size, complete, pressed }: GStepCircleProps) {
  const color = complete ? 'blue' : 'white';
  return (
    <Svg height={ size } width={ size }>
      <Defs>
        <LinearGradient id="linearGrad-white" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#fff9e3" stopOpacity="1" />
          <Stop offset="1" stopColor={pressed ? "#9B8C55" : "#8f8f8f"} stopOpacity="1" />
        </LinearGradient>
        <RadialGradient
          id="radialGrad-white"
          cx={ size/2*0.8 }
          cy={ size/2*0.8 }
          rx={ size/2 }
          ry={ size/2 }
          fx={ size/2 }
          fy={ size/2 }
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <LinearGradient id="linearGrad-blue" x1="0" y1="0" x2="0" y2="1">
          <Stop stopColor="#4d79ff" stopOpacity="1" />
          <Stop stopColor="#4d79ff" stopOpacity="1" />
        </LinearGradient>
        <RadialGradient
          id="radialGrad-blue"
          cx={ size/2*0.8 }
          cy={ size/2*0.8 }
          rx={ size/2 }
          ry={ size/2 }
          fx={ size/2*0.8 }
          fy={ size/2*0.8 }
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx={ size/2 } cy={ size/2 } r={ size/2 } fill={`url(#linearGrad-${color})`} />
      <Circle cx={ size/2 } cy={ size/2 } r={ size/2 } fill={`url(#radialGrad-${color})`} />
    </Svg>
  );
}

function GStep({ size, complete, image, style, onPress, disabled }: GStepPropsInternal) {
  const [pressed, setPressed] = useState(false);
  const source = complete ? `${image}white` : `${image}bw`;

  return (
    <Pressable style={ [{
      width: size,
      height: size,
      borderRadius: size/2,
    }, style] } onPress={onPress} disabled={complete || disabled}
    onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} >
      <View>
        <GStepCircle pressed={pressed} size={size} complete={complete} />
        <Image source={excercises[source]} style={{
          resizeMode: 'contain',
          height: size*0.85,
          width: size*0.85,
          position: 'absolute',
          top: size/2,
          left: size/2,
          marginTop: -size*0.85/2,
          marginLeft: -size*0.85/2
        }} />
      </View>
    </Pressable>
  );
}

export function GStepLocked({ size, style }: GStepLockedProps) {
  return (
    <View style={ [{
      width: size,
      height: size,
      borderRadius: size/2,
    }, style] }>
    <GStepCircle pressed={false} size={size} complete={false} />
      <GLock size={size*0.5} style={{
        position: 'absolute',
        top: size/2,
        left: size/2,
        marginTop: -size*0.5/2,
        marginLeft: -size*0.5/2
      }} />
    </View>
  );
}

export default GStep;
