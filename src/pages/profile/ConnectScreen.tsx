import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ms } from 'react-native-size-matters';

import { rootNavigate } from '../../layout/RootNavigation';
import { ConnectNavigationProps, base, Roboto, practitioners, Practitioner } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GGear from '../../components/icons/GGear';
import GPractitioner from '../../components/GPractitioner';

function ConnectScreen({ navigation }: ConnectNavigationProps) {
  const handlePress = (key: string) => {
    if (practitioners[key].imageColor) {
      navigation.push("ConnectDetails", { person: practitioners[key], key: key });
    }
  }
  return (
    <GScrollable type='bg'>
      <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: ms(10), marginTop: ms(10) }} onPress={() => rootNavigate('Intro')}>
        <GGear size={ms(25)} />
      </TouchableOpacity>
      <Text style={{
        ...Roboto.regular,
        textAlign: 'center',
        fontSize: ms(18),
        marginTop: ms(10)
      }}>Gold Practitioners Network</Text>
      { Object.keys(practitioners).map((key) => <GPractitioner key={practitioners[key].id} person={practitioners[key]} onPress={() => handlePress(key)} />)}
    </GScrollable>
  );
}

export default ConnectScreen;
