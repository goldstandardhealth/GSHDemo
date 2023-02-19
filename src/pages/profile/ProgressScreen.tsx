import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, SafeAreaView } from 'react-native';
import { ms } from 'react-native-size-matters';

import ProgressProgressScreen from './progress/ProgressProgressScreen';
import ProgressAchivementsScreen from './progress/ProgressAchivementsScreen';
import ProgressBadgesScreen from './progress/ProgressBadgesScreen';

import { ProgressNavigationProps, base, gold, Roboto, founders } from '../../config';
import ScreenBackground from '../../layout/ScreenBackground';
import GContinue from '../../components/GContinue';
import GAvatar from '../../components/GAvatar';

function ProgressScreen({ navigation }: ProgressNavigationProps) {

  const ProgressTab = createMaterialTopTabNavigator();
  const tabLabel = (title: string, focused: boolean, color: string) => {
    return <Text style={{
      ...(focused ? Roboto.bold : Roboto.regular),
      color: color,
      textTransform: 'uppercase',
      fontSize: ms(13)
    }}>{title}</Text>;
  }

  return (
    <ScreenBackground type="bg">
      <SafeAreaView style={{ flex: 1, alignItems: 'flex-start', paddingVertical: ms(10)}}>
        <GAvatar style={{marginLeft: ms(25)}} size={ms(50)} color={gold.tabs} person={founders.carrie} />
        <View style={{ flex: 1, width: '100%' }}>
          <ProgressTab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: { backgroundColor: gold.screenTabs },
              tabBarStyle: { backgroundColor: 'transparent', height: ms(40) }
            }}
            style={{ flex: 1 }}
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
          >
            <ProgressTab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Progress", focused, color)}} name="ProgressTopTab" component={ProgressProgressScreen} />
            <ProgressTab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Achivements", focused, color)}} name="AchivementsTopTab" component={ProgressAchivementsScreen} />
            <ProgressTab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Badges", focused, color)}} name="BadgesTopTab" component={ProgressBadgesScreen} />
          </ProgressTab.Navigator>
        </View>
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default ProgressScreen;
