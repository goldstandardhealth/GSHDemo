import React, { ReactNode } from 'react';
import { Text, View, Image, StyleSheet, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { ms } from 'react-native-size-matters';

import { Person, RobotoCondensed } from '../config';

type Props = {
  person: Person;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
};

const getFirstName = (name: string) => name.split(' ')[0];

function GAvatar({ person, size, color, style }: Props) {
  return (
    <View style={ [styles.box, style] }>
      <Image source={person.image} style={{
        //flex: 1,
        height: size,
        width: size,
        resizeMode: 'contain',
        backgroundColor: color,
        borderRadius: size/2
      }} />
      <View style={styles.text}>
        <Text style={[styles.name, {fontSize: size/4}]}>Hello {getFirstName(person.name)}!</Text>
        <Text style={[styles.status, {fontSize: size/4}]}>Pro Healer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10
  },
  name: {
    ...RobotoCondensed.regular
  },
  status: {
    ...RobotoCondensed.bold
  }
});

export default GAvatar;
