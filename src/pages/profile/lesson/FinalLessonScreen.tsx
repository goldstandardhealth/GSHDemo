 import React, {useRef, useEffect, useContext} from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { PathContext, incPathValues } from '../../../layout/RootNavigation';
import { FinalLessonNavigationProps, goldieCallout, gold, base, RobotoCondensed } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import GCallOut from '../../../components/GCallOut';
import Goldie from '../../../components/Goldie';

function FinalLesson({ navigation, route }: FinalLessonNavigationProps) {
  const { bonus } = route.params;
  const sayButtonAnim = useRef(new Animated.Value(0)).current;
  const context = useContext(PathContext);

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

  return (
    <GScrollable type="gold">
      <View>
        <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [
            styles.chatRowRight,
            { marginLeft: ms(80), marginTop: ms(150), marginRight: ms(60) }
          ] }>
          <Text style={styles.text}>Congrats on finishing the activity!</Text>
        </GCallOut>
        <Goldie size={ms(100)} type="friend" style={ styles.chatRowLeft } />
      </View>
      <Animated.View style={{opacity: sayButtonAnim}}>
        <TouchableOpacity style={{
          marginTop: vs(160),
          alignSelf: 'center',
          backgroundColor: '#192E60',
          borderRadius: ms(25),
          paddingVertical: ms(10),
          paddingHorizontal: ms(20)
        }} onPress={() => {
          if (bonus) {
            incPathValues(context, 'current', 'bonus');
          } else if (bonus !== false) {
            incPathValues(context, 'current');
          }
          navigation.navigate('ProfileTabs');
        }}>
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

export default FinalLesson;
