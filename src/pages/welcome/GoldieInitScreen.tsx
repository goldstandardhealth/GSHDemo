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

import { WelcomeOneNavigationProps, introColors, goldies } from '../../config';
import ScreenBackground from '../../components/ScreenBackground';
import GSHLogo from '../../components/GSHLogo';
import CallOut from '../../components/CallOut';
import Goldie from '../../components/Goldie';
import IntroButton from '../../components/IntroButton';

function GoldieInitScreen({ navigation }: WelcomeOneNavigationProps) {
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

  return (
    <ScreenBackground type="goldie">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView ref={scrollViewRef}>
          <GSHLogo />
          <Animated.View style={{opacity: sayOneAnim}}>
            <CallOut index="1" placement="bottomRight" colors={introColors} style={ [
                styles.chatRowRight,
                { marginRight: 100, marginBottom: 0 }
              ] }>
              <Text>Hi! I'm your buddy{ '\n' }Baxter!</Text>
            </CallOut>
            <Goldie type="wave" style={ styles.chatRowRight } />
          </Animated.View>
          <Animated.View style={{opacity: sayTwoAnim}}>
            <CallOut index="2" placement="topRight" colors={introColors} style={ [styles.chatRowRight, { marginRight: 50 }] }>
              <Text>Let’s go! It’s time to start{ '\n' }your journey towards{ '\n' }healing and recovery</Text>
            </CallOut>
          </Animated.View>
          <Animated.View style={{opacity: sayThreeAnim}}>
            <CallOut index="3" placement="bottomLeft" colors={introColors} style={ [
                styles.chatRowLeft,
                { marginLeft: 100, marginBottom: 0 }
              ] }>
              <Text>Before we begin, our GOLD STANDARD Pain Experts will ask you some questions…</Text>
            </CallOut>
            <Goldie type="friend" style={ styles.chatRowLeft } />
          </Animated.View>
          <Animated.View style={{opacity: sayButtonAnim}}>
            <IntroButton title="Continue" onPress={() => navigation.replace('QuestionnaireOne')}/>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  chatRowRight: {
    flex: 1,
    alignSelf: "flex-end"
  },
  chatRowLeft: {
    flex: 1,
    alignSelf: "flex-start"
  }
});

export default GoldieInitScreen;
