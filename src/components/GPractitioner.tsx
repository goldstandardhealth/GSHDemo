import React from 'react';
import { StyleSheet, Image, View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { RobotoCondensed, Practitioner, base, company } from '../config';
import { GCompanyLogo } from './GLogo';

type Props = {
  person: Practitioner;
  onPress: any;
}

function GPractitioner({ person, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View key={person.id + '-label'} style={styles.label}>
          <Text style={ styles.title }>{ person.name }</Text>
          <Text style={ styles.title }>{ person.shortTitle }</Text>
          <GCompanyLogo size={ms(25)} style={ styles.logo } company={person.company} />
        </View>
        <Image key={person.id + '-icon'} resizeMode='contain' source={ person.imageBw } style={ styles.image } />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //padding: ms(10),
    paddingHorizontal: ms(20),
    borderWidth: 1,
    borderRadius: ms(40),
    backgroundColor: base.white,
    marginHorizontal: ms(15),
    marginVertical: ms(10)
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

export default GPractitioner;
