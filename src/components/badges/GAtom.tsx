import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Ellipse, Path, Circle } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export function GAtom({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="42"
        width="44"
        transform={[ {scale: size/42} ]}
      >
        <Ellipse cx="22.0003" cy="21" rx="1.83333" ry="1.75" fill="#222222" />
        <Path
          d="M30.1663 21C30.1663 25.7043 29.1654 29.9136 27.5957 32.9104C26.0011 35.9545 23.9725 37.5 21.9997 37.5C20.0268 37.5 17.9983 35.9545 16.4037 32.9104C14.8339 29.9136 13.833 25.7043 13.833 21C13.833 16.2957 14.8339 12.0864 16.4037 9.08964C17.9983 6.04548 20.0268 4.5 21.9997 4.5C23.9725 4.5 26.0011 6.04548 27.5957 9.08964C29.1654 12.0864 30.1663 16.2957 30.1663 21Z"
          fill="#ABFB9E"
          stroke="#222222"
          stroke-width="2"/>
        <Path
          d="M26.0659 27.7217C21.7853 30.0808 17.4511 31.3628 13.9336 31.5644C10.341 31.7702 7.95649 30.8503 6.99882 29.2669C6.04115 27.6836 6.39877 25.2525 8.38186 22.3855C10.3234 19.5785 13.6537 16.6366 17.9344 14.2775C22.215 11.9184 26.5492 10.6364 30.0667 10.4348C33.6593 10.229 36.0438 11.1489 37.0015 12.7323C37.9591 14.3156 37.6015 16.7467 35.6184 19.6137C33.6769 22.4207 30.3466 25.3626 26.0659 27.7217Z"
          fill="#ABFB9E"
          stroke="#222222"
          stroke-width="2"/>
        <Path
          d="M26.0659 14.2783C21.7853 11.9192 17.4511 10.6372 13.9336 10.4356C10.341 10.2298 7.9565 11.1497 6.99882 12.7331C6.04115 14.3164 6.39878 16.7475 8.38185 19.6145C10.3234 22.4215 13.6537 25.3634 17.9344 27.7225C22.215 30.0816 26.5492 31.3636 30.0667 31.5652C33.6593 31.771 36.0438 30.8511 37.0015 29.2677C37.9591 27.6844 37.6015 25.2533 35.6184 22.3863C33.6769 19.5793 30.3466 16.6374 26.0659 14.2783Z"
          fill="#ABFB9E"
          stroke="#222222"
          stroke-width="2"/>
        <Circle cx="22" cy="21" r="3" fill="black" />
      </Svg>
    </View>
  );
}
