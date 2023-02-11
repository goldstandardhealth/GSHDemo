import React from 'react';
import { StyleSheet, Image, View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { RobotoCondensed, Person, base } from '../config';
import { GLogoLabel, GSMedicineLabel } from './GLogo';

type Props = {
  person: Person;
  side: 'right' | 'left';
  logo?: 'smedicine' | 'gsh'
  onPress: any;
}

function GPerson({ person, side, logo, onPress }: Props) {
  const icon = <Image key={person.id + '-icon'} resizeMode='contain' source={ person.image } style={ styles.image } />;
  const logoLabel = logo === 'smedicine' ? <GSMedicineLabel size={ms(35)} style={ styles.logo } /> : <GLogoLabel size={ms(35)} style={ styles.logo } />;
  const label = (
    <View key={person.id + '-label'} style={styles.label}>
      <Text style={ styles.title }>{ person.name }</Text>
      <Text style={ styles.title }>{ person.title }</Text>
      { logoLabel }
    </View>
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        { side === 'left' ? [icon, label] : [label, icon]}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: ms(15),
    borderWidth: 0,
    borderRadius: ms(40),
    backgroundColor: base.white + '55',
    margin: ms(10)
  },
  label: {
    flex: 3,
    alignSelf: 'center'
  },
  image: {
    height: vs(120),
    flex: 2,
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

export default GPerson;
