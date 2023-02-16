import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LoadingNavigationProps, goldieCallout, gold, base, RobotoCondensed, Roboto } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GCallOut from '../../components/GCallOut';
import Goldie from '../../components/Goldie';
import GLoading from '../../components/GLoading';

function LoadingScreen({ navigation }: LoadingNavigationProps) {

  const nextScreen = () => navigation.replace('TeaserThree');
  useEffect(() => { setTimeout(nextScreen, 3000) }, []);

  return (
    <GScrollable type="bg">
      <View>
        <Goldie size={ms(100)} type="cool" style={ [
          styles.chatRowLeft,
          { marginTop: ms(100) }
        ] } />
        <GCallOut placement="topLeft" palette={goldieCallout} style={ [
          styles.chatRowLeft,
          { marginLeft: ms(50), marginTop: ms(10), marginRight: ms(50) }
        ] }>
          <Text style={styles.text}>Carrie, we can chill here for a moment as the Gold Standard team prepares our first journey together!</Text>
        </GCallOut>
      </View>
      <Text style={[ styles.message, { marginTop: ms(50) } ]}>Loading your journey...</Text>
      <GLoading size={ms(100)} style={{ alignSelf: 'center', marginTop: ms(10) }} />
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  message: {
    ...Roboto.bold,
    alignSelf: 'center',
    fontSize: ms(20),
    color: base.black + '55'
  },
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

export default LoadingScreen;
