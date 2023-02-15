import React, {useRef, useEffect, MutableRefObject} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';
import { ms } from 'react-native-size-matters';

import { GoldieNavigationProps, goldieCallout, gold, RobotoCondensed } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GCallOut from '../../components/GCallOut';
import Goldie from '../../components/Goldie';
import GContinue from '../../components/GContinue';

function GoldieScreen({ navigation }: GoldieNavigationProps) {
  const scrollViewRef: MutableRefObject<ScrollView | null> = useRef(null);
  const sayOneAnim = useRef(new Animated.Value(0)).current;
  const sayTwoAnim = useRef(new Animated.Value(0)).current;
  const sayThreeAnim = useRef(new Animated.Value(0)).current;
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
      Animated.delay(750),
      Animated.timing(sayThreeAnim, {
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

  const nextScreen = () => navigation.replace('Goal');

  return (
    <GScrollable type="bg">
      <Animated.View style={{opacity: sayOneAnim}}>
        <GCallOut placement="bottomRight" palette={goldieCallout} style={ [
            styles.chatRowRight,
            { marginRight: ms(100), marginBottom: 0, marginTop: ms(20) }
          ] }>
          <Text style={styles.text}>Hi! I'm your buddy{ '\n' }Baxter!</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="wave" style={ styles.chatRowRight } />
      </Animated.View>
      <Animated.View style={{opacity: sayTwoAnim}}>
        <GCallOut placement="topRight" palette={goldieCallout} style={ [styles.chatRowRight, { marginRight: ms(50), marginTop: ms(20) }] }>
          <Text style={styles.text}>Let’s go! It’s time to start{ '\n' }your journey towards{ '\n' }healing and recovery</Text>
        </GCallOut>
      </Animated.View>
      <Animated.View style={{opacity: sayThreeAnim}}>
        <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [
            styles.chatRowLeft,
            { marginLeft: ms(100), marginBottom: 0, marginTop: ms(30) }
          ] }>
          <Text style={styles.text}>Before we begin, our GOLD STANDARD Pain Experts will ask you some questions…</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="friend" style={ styles.chatRowLeft } />
      </Animated.View>
      <Animated.View style={{opacity: sayButtonAnim}}>
        <GContinue onPress={nextScreen} style={{ marginTop: 0}} />
      </Animated.View>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.regular,
    fontSize: ms(25),
    color: gold.dark,
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

export default GoldieScreen;
