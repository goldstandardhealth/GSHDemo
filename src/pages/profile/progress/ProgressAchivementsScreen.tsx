import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { ms, scale } from 'react-native-size-matters';

import { Roboto } from '../../../config';

function ProgressAchivementsScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>Collected</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    ...Roboto.bold,
    alignSelf: 'center',
    fontSize: ms(20),
    marginVertical: ms(15)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: scale(30),
    marginVertical: ms(10)
  }
});

export default ProgressAchivementsScreen;
