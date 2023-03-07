import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { Roboto } from '../../../config';
import GAchievement from '../../../components/GAchievement';

function ProgressAchievementsScreen() {
  return (
    <ScrollView contentContainerStyle={{paddingVertical: ms(15)}}>
      <GAchievement type="mindset" level={29} total={40} color='#669FE4' />
      <GAchievement type="expert" level={900} total={1000} color='#EEC77E' />
      <GAchievement type="meditation" level={10} total={10} color='#669FE4' />
    </ScrollView>
  );
}

export default ProgressAchievementsScreen;
