import React, { ReactNode } from 'react';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

import { medals, gold, base, RobotoCondensed, Roboto } from '../config';

type Props = {
  type: 'mindset' | 'expert' | 'meditation';
  style?: StyleProp<ViewStyle>;
  level: number;
  total: number;
  color: string;
};

function GAchievement({ type, style, level, total, color }: Props) {
  let label, note: string;
  switch (type) {
    case 'mindset':
      label = 'PT Challenge';
      note = 'Collect Points';
      break;
    case 'expert':
      label = 'Back Expert';
      note = 'Earn 1,000 XP';
      break;
    case 'meditation':
      label = 'Facilitative Meditation';
      note = 'Course Completed';
      break;
  };

  const shorten = (num: number) => num % 1000 ? num : `${num/1000}K`;

  return (
    <View style={ [styles.box, {margin: ms(10)}, style] }>
      <View style={{}}>
        <Image style={styles.image} source={medals[type]} />
      </View>
      <View style={styles.text}>
        <Text style={{...Roboto.bold, lineHeight: ms(18), marginLeft: ms(15), fontSize: ms(13)}}>{ label }</Text>
        <Text style={{...Roboto.regular, lineHeight: ms(18), marginLeft: ms(15), fontSize: ms(13)}}>{ note }</Text>
        <View style={[styles.box, {marginTop: ms(15)}]}>
          <View style={styles.bar}>
            <View style={[styles.bar, {
              width: ms(150/total*level),
              backgroundColor: color,
              position: 'absolute',
              top: -1,
              left: -1
            }]}></View>
          </View>
          { level === total ? [] : <Text style={{marginLeft: ms(5)}}>{level}/{shorten(total)}</Text>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: ms(150),
    height: ms(15),
    borderWidth: 1,
    borderRadius: ms(7.5),
    backgroundColor: base.black + '1F'
  },
  box: {
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  image: {
    height: ms(110),
    width: ms(110),
    borderWidth: 3,
    borderRadius: ms(20),
    backgroundColor: gold.tabs,
    borderColor: base.black,
    resizeMode: 'contain'
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: ms(20)
  }
});

export default GAchievement;
