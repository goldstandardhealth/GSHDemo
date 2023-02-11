import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';

import ScreenBackground from './ScreenBackground';

type Props = {
  type: string;
  children: ReactNode;
}

function GScrollable({ type, children }: Props) {
  return (
    <ScreenBackground type={type}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          { children }
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default GScrollable;
