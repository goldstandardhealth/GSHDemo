import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { Roboto } from '../../../config';

function ProgressProgressScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>Activity Report</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    ...Roboto.bold,
    alignSelf: 'flex-start',
    fontSize: ms(20),
    margin: ms(15)
  }
});

export default ProgressProgressScreen;
