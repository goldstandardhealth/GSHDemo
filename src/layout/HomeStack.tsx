import React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ms } from 'react-native-size-matters';

import { tabs, gold, blue, base, Roboto } from '../config';
import GScrollable from '../layout/GScrollable';
import GContinue from '../components/GContinue';

function HomeTab({ navigation }) {
  return (
    <GScrollable type='gold'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Home</Text>
      <GContinue onPress={() => navigation.replace('Loading')} />
    </GScrollable>
  );
}

function ProgressTab({ navigation }) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Progress</Text>
      <GContinue onPress={() => navigation.replace('Loading')} />
    </GScrollable>
  );
}

function CommunityTab({ navigation }) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Community</Text>
      <GContinue onPress={() => navigation.replace('Loading')} />
    </GScrollable>
  );
}

function ConnectTab({ navigation }) {
  return (
    <GScrollable type='bg'>
      <Text style={{...Roboto.bold, fontSize: 40, alignSelf: 'center', marginTop: ms(100)}}>Connect</Text>
      <GContinue onPress={() => navigation.replace('Loading')} />
    </GScrollable>
  );
}

const Tab = createBottomTabNavigator();

function HomeStack() {
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
          return (<Image style={{ width: ms(size), height: ms(size), resizeMode: 'contain' }} source={tabs[route.name]} />);
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Progress" component={ProgressTab} />
      <Tab.Screen name="Community" component={CommunityTab} />
      <Tab.Screen name="Connect" component={ConnectTab} />
    </Tab.Navigator>
  );
}

export default HomeStack;
