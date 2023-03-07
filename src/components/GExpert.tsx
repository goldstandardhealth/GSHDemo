import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { RobotoCondensed, Person } from '../config';

type Props = {
  person: Person;
  side: 'right' | 'left';
}

function GExpert({ person, side }: Props) {
  const icon = <Image key={person.id + '-icon'} resizeMode='contain' source={ person.image } style={ styles.image } />;
  const label = (
    <View key={person.id + '-label'} style={styles.label}>
      <Text style={ styles.title }>Dr. { person.name }</Text>
      <Text style={ styles.title }>{ person.shortTitle }</Text>
      <Text style={ styles.title }>{ person.company }</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      { side === 'left' ? [icon, label] : [label, icon]}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: ms(15),
    marginHorizontal: ms(10)
  },
  label: {
    flex: 8,
    alignSelf: 'center'
  },
  image: {
    height: vs(120),
    flex: 3.5,
    alignSelf: 'center'
  },
  title: {
    ...RobotoCondensed.bold,
    fontSize: ms(21),
    textAlign: 'center'
  },
  logo: {
    marginTop: ms(10)
  }
});

export default GExpert;
