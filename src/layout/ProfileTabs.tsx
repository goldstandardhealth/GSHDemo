import React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ms } from 'react-native-size-matters';

import { tabs, gold, blue, base, Roboto } from '../config';
import GScrollable from '../layout/GScrollable';
import GContinue from '../components/GContinue';

import HomeStack from '../layout/HomeStack';
import ProgressStack from '../layout/ProgressStack';
import CommunityStack from '../layout/CommunityStack';
import ConnectStack from '../layout/ConnectStack';

const Tab = createBottomTabNavigator();

function ProfileTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {...{
          backgroundColor: gold.tabs,
        }},
        tabBarActiveTintColor: base.black,
        tabBarInactiveTintColor: blue.darker,
        tabBarLabelStyle: {...{
          ...Roboto.regular,
          fontSize: ms(14)
        }},
        tabBarIcon: ({ focused, color, size }) => {
          return (<Image style={{ width: ms(size), height: ms(size), resizeMode: 'contain' }} source={tabs[route.name.substr(0, route.name.length - 3)]} />);
        }
      })}
    >
      <Tab.Screen options={{tabBarLabel: "Home"}} name="HomeTab" component={HomeStack} />
      <Tab.Screen options={{tabBarLabel: "Progress"}} name="ProgressTab" component={ProgressStack} />
      <Tab.Screen options={{tabBarLabel: "Community"}} name="CommunityTab" component={CommunityStack} />
      <Tab.Screen options={{tabBarLabel: "Connect"}} name="ConnectTab" component={ConnectStack} />
    </Tab.Navigator>
  );
}

export default ProfileTabs;
