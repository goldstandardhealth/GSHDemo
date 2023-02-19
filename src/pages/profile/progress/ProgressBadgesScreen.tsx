import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { ms, scale } from 'react-native-size-matters';

import { Roboto } from '../../../config';
import GBadge from '../../../components/GBadge';

const activeBadge = "#E9CE70";
const inactiveBadge = "#BBBBBB";

function ProgressBadgesScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>Collected</Text>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="medal" subType="bronze" color={activeBadge} />
        <GBadge size={ms(60)} type="medal" subType="silver" color={activeBadge} />
        <GBadge size={ms(60)} type="medal" subType="gold" color={activeBadge} />
      </View>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="fire" color={activeBadge} />
        <GBadge size={ms(60)} type="lightning" color={activeBadge} />
        <GBadge size={ms(60)} type="watch" color={activeBadge} />
      </View>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="atom" color={activeBadge} />
        <GBadge size={ms(60)} type="mortarboard" color={activeBadge} />
        <GBadge size={ms(60)} type="diamond" color={activeBadge} />
      </View>
      <Text style={styles.title}>Locked</Text>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
      </View>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
      </View>
      <View style={styles.row}>
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
        <GBadge size={ms(60)} type="medal" color={inactiveBadge} />
      </View>
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
    paddingVertical: ms(10)
  }
});

export default ProgressBadgesScreen;
