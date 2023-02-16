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

import { TeaserThreeNavigationProps, goldieCallout, gold, RobotoCondensed } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GCallOut from '../../components/GCallOut';
import Goldie from '../../components/Goldie';
import GContinue from '../../components/GContinue';

function TeaserThree({ navigation }: TeaserThreeNavigationProps) {
  const sayButtonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(sayButtonAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const nextScreen = () => navigation.replace('Intro');

  return (
    <GScrollable type="bg">
      <View>
        <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [
            styles.chatRowLeft,
            { marginLeft: ms(80), marginBottom: ms(10), marginTop: ms(150), marginRight: ms(50) }
          ] }>
          <Text style={styles.text}>Congratulations! You’re one step further along on your path to pain recovery!</Text>
        </GCallOut>
        <Goldie size={ms(150)} type="lash" style={ [styles.chatRowLeft, {marginLeft: ms(-50)}] } />
        <GCallOut placement="topLeft" palette={goldieCallout} style={ [
            styles.chatRowLeft,
            { marginLeft: ms(100), marginTop: ms(-100), marginRight: ms(50) }
          ] }>
          <Text style={styles.text}>Let’s go! Let’s go!</Text>
        </GCallOut>
      </View>
      <Animated.View style={{opacity: sayButtonAnim}}>
        <GContinue onPress={nextScreen} style={{ marginTop: ms(100)}} />
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
    flex: 1,
    alignSelf: "flex-end"
  },
  chatRowLeft: {
    flex: 1,
    alignSelf: "flex-start"
  }
});

export default TeaserThree;
