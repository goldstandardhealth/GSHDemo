import React, { useRef, useState, useEffect } from 'react';
import {  Animated, StyleSheet, Text, TouchableWithoutFeedback, Dimensions, ViewStyle, StyleProp } from 'react-native';
import Video from 'react-native-video';
import { ms, vs } from 'react-native-size-matters';

import { RobotoCondensed, blue, gold, base } from '../config';

type Props = {
  source: any;
  onEnd?: any;
  stop?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GVideo({ source, style, onEnd = () => {}, stop = false }: Props) {
  const [pause, setPause] = useState(true);
  const [vHeight, setVHeight] = useState(0);
  const [border, setBorder] = useState(0);
  const d = Dimensions.get('window');
  const m = 10;

  const videoOpacityAnim = useRef(new Animated.Value(0)).current;
  const videoHeightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(videoOpacityAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(videoHeightAnim, {
        toValue: vHeight,
        duration: 750,
        useNativeDriver: true,
      }),
    ]).start();
  }, [vHeight]);

  const onLoad = (video: any) => {
    const { width, height } = video.naturalSize;
    setVHeight(Math.round((d.width - 2*m)/width * height));
    setBorder(1);
  }
  const videoError = (e: any) => console.error("Video error:", e);
  const play = () => setPause(!pause);

  return (
    <TouchableWithoutFeedback style={[styles.container, style]} onPress={play}>
      <Animated.View style={{opacity: videoOpacityAnim}}>
        <Video
          source={source}
          paused={pause || stop}
          resizeMode='cover'
          style={[styles.video, { height: vHeight, marginHorizontal: m, borderWidth: border }]}
          onEnd={onEnd}
          onError={videoError}
          onLoad={onLoad} />
        <Text style={styles.note}>Tap the video to play</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  video: {
    borderWidth: 0,
    borderColor: base.black,
    borderRadius: 20
  },
  note: {
    ...RobotoCondensed.bold,
    textAlign: 'center',
    fontSize: ms(15),
    color: base.black + '55'
  }
});

export default GVideo;
