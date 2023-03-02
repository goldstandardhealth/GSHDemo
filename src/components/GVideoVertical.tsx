import React, { useRef, useState, useEffect } from 'react';
import { Animated, ActivityIndicator, StyleSheet, View, Text, Image, TouchableWithoutFeedback, Dimensions, ViewStyle, StyleProp, NativeSyntheticEvent, ImageLoadEventData } from 'react-native';
import Video, { OnLoadData } from 'react-native-video';
import Svg, { Path } from 'react-native-svg';
import { ms, vs } from 'react-native-size-matters';
import { GLogoLabel, GCompanyLogo } from './GLogo';

import { RobotoCondensed, blue, gold, base, VideoName, getVideoThumb, getVideoSource } from '../config';

type Props = {
  source: VideoName;
  company: string;
  onEnd?: any;
  stop?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GVideoVertical({ source, style, onEnd = () => {}, stop = false, company }: Props) {
  const [pause, setPause] = useState(true);
  const [started, setStarted] = useState(false);
  const d = Dimensions.get('window');
  const m = 10;
  const [iDimension, setIDimension] = useState({ width: d.width/2, height: 1});
  const [border, setBorder] = useState(0);

  const [loading, setLoading] = useState(true);

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
        toValue: iDimension.height,
        duration: 750,
        useNativeDriver: true,
      }),
    ]).start();
  }, [iDimension]);

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = event.nativeEvent.source;
    setIDimension({ width: iDimension.width, height: Math.round(iDimension.width/width * height)});
    setBorder(1);
  }
  const onVideoLoad = (video: OnLoadData) => {
    console.log(video.naturalSize)
    const { width, height, orientation } = video.naturalSize;
    setIDimension({ width: iDimension.width, height: Math.round(iDimension.width/width * height)});
    setTimeout(() => setLoading(false), 500);
  }

  const videoError = (e: any) => console.error("Video error:", e);
  const play = () => {
    setStarted(true);
    setPause(!pause);
  };

  return (
    <TouchableWithoutFeedback style={[styles.container, style]} onPress={play}>
      <View style={{
        flexDirection: 'row',
      }}>
        <GLogoLabel size={20} width={iDimension.width/2-10} style={{marginHorizontal: 5, justifyContent: 'center'}}/>
        <Animated.View style={{
          opacity: videoOpacityAnim,
          width: iDimension.width,
          height: iDimension.height,
        }}>

          <Image onLoad={onImageLoad} source={getVideoThumb(source)} style={[styles.video, {
            display: loading || !started ? 'flex' : 'none',
            resizeMode: 'cover',
            width: iDimension.width,
            height: iDimension.height,
            //marginHorizontal: m,
            borderWidth: border
          }]} />
          <Video
            source={getVideoSource(source)}
            paused={pause || stop}
            resizeMode='cover'
            style={[styles.video, {
              display: !loading && started ? 'flex' : 'none',
              width: iDimension.width,
              height: iDimension.height,
              //marginHorizontal: m,
              borderWidth: border
            }]}
            onEnd={onEnd}
            onError={videoError}
            onLoad={onVideoLoad} />
          <Svg width="25" height="30" transform={[ {scale: 3} ]} style={{
            display: pause && !loading ? 'flex' : 'none',
            alignSelf: 'center',
            position: 'absolute',
            top: iDimension.height/2 - 10,
            left: iDimension.width/2
          }}>
            <Path
              fill="#0000005f"
              strokeWidth="0"
              d="M 25,14.99851 0,30 V 0" />
          </Svg>
          <ActivityIndicator size="large" style={{
            display: loading ? 'flex' : 'none',
            alignSelf: 'center',
            position: 'absolute',
            top: iDimension.height/2 - 10,
            left: iDimension.width/2 - 10
          }}/>
        </Animated.View>
        <GCompanyLogo width={iDimension.width/2 - 10} company={company} style={{marginHorizontal: 5, justifyContent: 'center'}}/>
        {/*<Text style={styles.note}>Tap the video to play</Text>*/}
      </View>
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

export default GVideoVertical;
