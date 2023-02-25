import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, StyleProp, ViewStyle } from 'react-native';

import ScreenBackground from './ScreenBackground';

type Props = {
  type: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>
}

function GFixedScreen({ type, children, style }: Props) {
  return (
    <ScreenBackground type={type}>
      <SafeAreaView style={[styles.container, style]}>
        { children }
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  }
});

export default GFixedScreen;
