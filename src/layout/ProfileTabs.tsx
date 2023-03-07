import React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ms } from 'react-native-size-matters';

import { tabs, gold, base, Roboto } from '../config';

import HomeStack from '../layout/HomeStack';
import ProgressStack from '../layout/ProgressStack';
import CommunityStack from '../layout/CommunityStack';
import ConnectStack from '../layout/ConnectStack';

const Tab = createBottomTabNavigator();
const tabLabel = (title: string, focused: boolean, color: string) => {
  return <Text style={{
    ...(focused ? Roboto.bold : Roboto.regular),
    color: color
  }}>{title}</Text>;
}

function ProfileTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {...{
          backgroundColor: gold.tabs,
        }},
        tabBarActiveTintColor: base.black,
        tabBarLabelStyle: {...{
          ...Roboto.regular,
          fontSize: ms(14)
        }},
        tabBarIcon: ({ focused, color, size }) => {
          return <Image style={{ width: ms(size), height: ms(size), resizeMode: 'contain', marginTop: ms(10) }} source={tabs[route.name.substr(0, route.name.length - 3)]} />;
        }
      })}
    >
      <Tab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Home", focused, color)}} name="HomeTab" component={HomeStack} />
      <Tab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Progress", focused, color)}} name="ProgressTab" component={ProgressStack} />
      <Tab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Community", focused, color)}} name="CommunityTab" component={CommunityStack} />
      <Tab.Screen options={{tabBarLabel: ({focused, color}) => tabLabel("Connect", focused, color)}} name="ConnectTab" component={ConnectStack} />
    </Tab.Navigator>
  );
}

export default ProfileTabs;
