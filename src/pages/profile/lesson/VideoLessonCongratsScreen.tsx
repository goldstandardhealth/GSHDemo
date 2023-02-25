import React, {useRef, useEffect, MutableRefObject} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { VideoLessonCongratsNavigationProps, goldieCallout, gold, base, RobotoCondensed } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import GCallOut from '../../../components/GCallOut';
import Goldie from '../../../components/Goldie';
import GContinue from '../../../components/GContinue';

function VideoLessonCongratsScreen({ navigation, route }: VideoLessonCongratsNavigationProps) {
  const { congrats } = route.params;
  const scrollViewRef: MutableRefObject<ScrollView | null> = useRef(null);
  const sayOneAnim = useRef(new Animated.Value(0)).current;
  const sayTwoAnim = useRef(new Animated.Value(0)).current;
  const sayButtonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(sayOneAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.delay(750),
      Animated.timing(sayTwoAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(sayButtonAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      })
    ]).start();
    setTimeout(() => scrollViewRef?.current?.scrollToEnd({ animated: true }), 4500);
  }, []);

  return (
    <GScrollable type="bg">
      <Animated.View style={{opacity: sayOneAnim}}>
        <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [
            styles.chatRowLeft,
            { marginLeft: ms(100), marginBottom: 0, marginTop: ms(80) }
          ] }>
          <Text style={styles.text}>Congrats finishing the exercise. { congrats }</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="friend" style={ styles.chatRowLeft } />
      </Animated.View>
      <Animated.View style={{opacity: sayTwoAnim}}>
        <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginRight: ms(50), marginVertical: ms(20) }] }>
          <Text style={styles.text}>Please answer a quick survey question so we can keep improving your experience</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="cute" style={ styles.chatRowRight } />
      </Animated.View>
      <Animated.View style={{opacity: sayButtonAnim}}>
        <TouchableOpacity style={{
          marginTop: vs(60),
          alignSelf: 'center',
          backgroundColor: '#192E60',
          borderRadius: ms(25),
          paddingVertical: ms(10),
          paddingHorizontal: ms(20)
        }} onPress={() => navigation.navigate('VideoLessonSurvey')}>
          <Text style={{
            ...RobotoCondensed.bold,
            color: base.white,
            fontSize: ms(24),
          }}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.regular,
    fontSize: ms(25),
    color: base.black,
    textAlign: 'center'
  },
  chatRowRight: {
    flex: 0.3,
    alignSelf: "flex-end"
  },
  chatRowLeft: {
    flex: 0.3,
    alignSelf: "flex-start"
  }
});

export default VideoLessonCongratsScreen;
