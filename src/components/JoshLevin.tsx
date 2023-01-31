import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { font, doctors, doctorColors } from '../config';

function JoshLevin() {
	return (
    <View style={styles.doctorAvatar}>
      <Text style={styles.doctorText}>Dr. Josh Levin, MD{ '\n' }Stanford Orthopedics</Text>
      <Image source={ doctors.JoshLevin } style={ styles.doctorImage } />
    </View>
	);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  doctorAvatar: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    flex: 1
  },
  doctorText: {
    ...font.bold,
    fontSize: 25,
    ...doctorColors.header,
    alignSelf: 'center',
    flex: 0.6
  },
  doctorImage: {
    width: scale(75),
    height: verticalScale(90),
    resizeMode: 'contain',
    flex: 0.3
  }
});

export default JoshLevin;
