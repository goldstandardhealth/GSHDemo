import React from 'react';
import { Text, View, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { ms } from 'react-native-size-matters';

import { rootNavigate } from '../../layout/RootNavigation';
import { ConnectDetailsNavigationProps, base, Roboto, RobotoCondensed, practitioners } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GGear from '../../components/icons/GGear';
import GBack from '../../components/icons/GBack';
import GLink from '../../components/GLink';

function ConnectDetailsScreen({ navigation, route }: ConnectDetailsNavigationProps) {
  const { person } = route.params;
  return (
    <GScrollable type='bg'>
      <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: ms(10), marginTop: ms(10) }} onPress={() => navigation.goBack()}>
        <GBack size={ms(25)} />
      </TouchableOpacity>
      <View style={{
        alignSelf: 'center',
        flexDirection: 'row',
        margin: ms(10),
        marginTop: ms(30),
        maxWidth: ms(300)
      }}>
        <View style={styles.photoContainer}>
          <View style={[styles.colorBox, {
            top: 0,
            left: 0,
            backgroundColor: '#F5E97A'
          }]}>
          </View>
          <View style={[styles.colorBox, {
            bottom: 0,
            right: 0,
            backgroundColor: '#7280AA'
          }]}>
          </View>
          <Image resizeMode='contain' source={ person.imageColor } style={{
            position: 'absolute',
            top: ms(10),
            left: ms(10),
            height: ms(100),
            width: ms(100)
          }} />
        </View>
        <View style={styles.label}>
          <Text style={{
            ...RobotoCondensed.bold,
            color: '#88302A',
            fontSize: ms(16),
            textAlign: 'center',
            marginBottom: ms(5)
          }}>{person.name}</Text>
          <Text style={{
            ...RobotoCondensed.regular,
            color: base.black,
            fontSize: ms(16),
            textAlign: 'center'
          }}>{person.title}</Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <Text style={[styles.highlight, { fontSize: ms(20) }]}>Biography</Text>
        <Text style={{ ...RobotoCondensed.regular, fontSize: ms(14), marginVertical: ms(15) }}>{person.brief}</Text>
        <Text style={[styles.highlight, { fontSize: ms(16) }]}>View Full Biography...</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={{...Roboto.regular, marginBottom: ms(15), fontSize: ms(20)}}>Get In Touch</Text>
        <TouchableOpacity style={{backgroundColor: '#762921'}} onPress={() => {}}>
          <Text style={{
            ...RobotoCondensed.bold,
            textTransform: 'uppercase',
            fontSize: ms(16),
            margin: ms(10),
            textAlign: 'center',
            color: base.white
          }}>Make an appointment</Text>
        </TouchableOpacity>
        <Text style={{fontSize: ms(16), marginVertical: ms(15)}}>
          <Icon iconStyle={{fontSize: ms(20), marginRight: ms(5)}} type='material' name='phone' />
          <GLink target={'tel://' + person.phone}>
            <Text style={[styles.highlight, {fontSize: ms(16)}]}>{person.phone}</Text>
          </GLink>
        </Text>
        <Text style={[styles.highlight, {fontSize: ms(16), marginBottom: ms(10)}]}>
          <Icon iconStyle={{fontSize: ms(20), marginRight: ms(5)}} type='material' name='place' />
          <GLink target={`https://www.google.com/maps/search/?api=1&query=${person.location.lat}%2C${person.location.lon}`}>
            <Text style={[styles.highlight, {fontSize: ms(16)}]}>{person.phone}</Text>
          </GLink>
        </Text>
        <Divider style={{ backgroundColor: base.black + '35', height: 2, marginVertical: ms(10) }} />
        <Text style={[styles.highlight, {fontSize: ms(16)}]}>How to Message Your Care Team ➤</Text>
      </View>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    height: ms(120),
    width: ms(120),
  },
  label: {
    flex: 3,
    justifyContent: 'center',
    borderRadius: ms(15),
    borderWidth: 1,
    backgroundColor: base.white,
    marginLeft: ms(25),
    marginVertical: ms(10)
  },
  highlight: {
    ...RobotoCondensed.regular,
    color: '#762921'
  },
  infoBox: {
    borderRadius: ms(15),
    borderWidth: 1,
    backgroundColor: base.white,
    padding: ms(15),
    paddingHorizontal: ms(20),
    margin: ms(10)
  },
  colorBox: {
    position: 'absolute',
    height: ms(110),
    width: ms(110),
  }
});
export default ConnectDetailsScreen;
