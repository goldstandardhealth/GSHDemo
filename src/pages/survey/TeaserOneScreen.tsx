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

import { TeaserOneNavigationProps, goldieCallout, gold, RobotoCondensed } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GCallOut from '../../components/GCallOut';
import Goldie from '../../components/Goldie';
import GContinue from '../../components/GContinue';

function TeaserOne({ navigation }: TeaserOneNavigationProps) {
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

  const nextScreen = () => navigation.replace('Mood');

  return (
    <GScrollable type="bg">
      <View>
        <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [
            styles.chatRowRight,
            { marginLeft: ms(80), marginBottom: 0, marginTop: ms(150), marginRight: ms(50) }
          ] }>
          <Text style={styles.text}>Awesome! We’re making great progress! Just a few more questions…</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="cute" style={ [styles.chatRowLeft, {transform: [{scaleX: -1}]}] } />
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

export default TeaserOne;
