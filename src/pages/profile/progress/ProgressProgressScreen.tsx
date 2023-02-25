import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Divider } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

import { Roboto, RobotoCondensed, base, gold, blue, sports } from '../../../config';
import { GFire } from '../../../components/badges';
import GCheck from '../../../components/icons/GCheck';

type ProgressProps = {
  day: string;
  complete: boolean;
};

function ProgressMark({ day, complete }: ProgressProps) {
  const size = 25;
  return (
    <View style={{alignSelf: 'center'}}>
      <Text style={{...Roboto.bold, fontSize: ms(size/2), textAlign: 'center'}}>{ day }</Text>
      <View style={{
        justifyContent: 'center',
        height: ms(size),
        width: ms(size),
        margin: ms(5),
        backgroundColor: complete ? gold.expert : '#D9D9D999',
        borderRadius: ms(size/2)
      }}>{complete ? <GCheck size={size*0.75} style={{alignSelf: 'center'}}/> : []}</View>
    </View>
  );
}

type ActivityProps = {
  icon: string;
  time: number;
  title: string;
};

function Activity({ icon, time, title }: ActivityProps) {
  return (
    <View style={[styles.box, {
      borderColor: base.black,
      borderRadius: ms(5),
      borderWidth: 0.2,
      backgroundColor: base.white + '1F',
      paddingHorizontal: ms(15),
      paddingVertical: ms(10),
    }]}>
      <Image style={{height: ms(50), width: ms(50), resizeMode: 'contain'}} source={sports[icon]} />
      <View style={{justifyContent: 'center', marginLeft: ms(10)}}>
        <Text style={{...Roboto.regular, fontSize: ms(13), color: base.black}}>{time}mins</Text>
        <Text style={{...Roboto.bold, fontSize: ms(14), color: base.black}}>{title}</Text>
      </View>
    </View>
  );
}

type ResultProps = {
  count: number;
  title: string;
};

function Result({ count, title }: ResultProps) {
  return (
    <View style={[styles.box, {
      backgroundColor: base.black + '4A',
      paddingVertical: ms(15),
      paddingHorizontal: ms(25),
      margin: ms(10),
      marginHorizontal: ms(30),
      borderRadius: ms(15),
      borderColor: base.black,
      borderWidth: 0.3
    }]}>
      <Text style={{...RobotoCondensed.bold, fontSize: ms(19), color: base.white, flex: 1}}>{title}</Text>
      <Text style={{...RobotoCondensed.bold, fontSize: ms(19), color: base.white}}>{count}</Text>
    </View>
  );
}

function ProgressProgressScreen() {
  return (
    <ScrollView>
      <View>
        <View style={[styles.box, {margin: ms(15)}]}>
          <Text style={styles.title}>Activity Report</Text>
            <View style={[styles.dropdown, {
              shadowColor: base.black,
              shadowOffset: {
                width: 1,
                height: 3,
              },
              shadowOpacity: 0.4,
              shadowRadius: 4,
              elevation: 4,
            }]}>
              <Text style={{...Roboto.bold, color: base.black, fontSize: ms(16)}}>Weekly ▾</Text>
            </View>
        </View>
        <View style={styles.activity}>
          <View style={{flex: 1}}>
            <View style={[styles.box, {marginBottom: ms(15)}]}>
              <GFire size={ms(20)} style={{alignSelf: 'center', margin: ms(10)}} />
              <View style={{flex: 1}}>
                <Text style={{...Roboto.bold, color: base.black, fontSize: ms(16)}}>Current Streak</Text>
                <Text style={{...Roboto.regular, color: base.black, fontSize: ms(14)}}>Keep the steak alive!</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <ProgressMark day="T" complete={true} />
              <ProgressMark day="W" complete={true} />
              <ProgressMark day="T" complete={true} />
              <ProgressMark day="F" complete={false} />
              <ProgressMark day="S" complete={false} />
            </View>
          </View>
          <Image style={{height: ms(90), width: ms(90), resizeMode: 'contain', alignSelf: 'center'}} source={sports.running} />
        </View>
      </View>
      <Text style={{...RobotoCondensed.regular, fontSize: ms(25), color: base.black, marginHorizontal: ms(40)}}>Weekly Totals</Text>
      <Divider style={{ backgroundColor: base.black, height: 2, marginTop: ms(10), marginBottom: ms(20), marginHorizontal: ms(20) }}/>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: ms(20)}}>
        <Activity icon="yoga" title="Physical" time={312} />
        <Activity icon="mental" title="Mental" time={207} />
      </View>
      <Result title="Pain Education" count={4} />
      <Result title="Meditation" count={2} />
      <Result title="Physical Therapy" count={3} />
      <Result title="Excercises Completed" count={12} />
      <Divider style={{ backgroundColor: base.black, height: 2, marginTop: ms(10), marginBottom: ms(20), marginHorizontal: ms(20) }}/>
      <Text style={{...Roboto.bold, fontSize: ms(20), color: base.black, marginHorizontal: ms(25)}}>Calendar</Text>
      <Calendar style={{ marginHorizontal: ms(25), paddingBottom: ms(20) }} theme={{
        backgroundColor: base.white + '00',
        calendarBackground: base.white + '00',
        textSectionTitleColor: base.black,
        textSectionTitleDisabledColor: base.black + '90',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: base.white,
        todayTextColor: base.white,
        dayTextColor: base.black,
        textDisabledColor: base.black + '90',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: base.black,
        disabledArrowColor: base.black + '90',
        monthTextColor: base.black,
        indicatorColor: 'blue',
        textDayFontFamily: 'Roboto-Bold',
        textMonthFontFamily: 'Roboto-Bold',
        textDayHeaderFontFamily: 'RobotoCondensed-Bold',
        textDayFontWeight: '400',
        textMonthFontWeight: '400',
        textDayHeaderFontWeight: '700',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}
      minDate={'2023-01-01'}
      initialDate={'2023-02-01'}
      markedDates={{
        '2023-02-14': {marked: true},
        '2023-02-15': {selected: true, marked: true, selectedColor: blue.regular},
        '2023-02-16': {marked: true, dotColor: 'red'},
        '2023-02-17': {marked: true},
        '2023-02-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2023-02-19': {disabled: true, disableTouchEvent: true}
      }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  activity: {
    flexDirection: 'row',
    marginHorizontal: ms(35),
    marginTop: ms(15),
    marginBottom: ms(25),
    borderWidth: 0.3,
    borderColor: base.black,
    borderRadius: ms(20),
    backgroundColor: blue.icon,
    padding: ms(10),
    paddingVertical: ms(20)
  },
  title: {
    ...Roboto.bold,
    alignSelf: 'center',
    fontSize: ms(20),
    color: base.black,
    flex: 1
  },
  dropdown: {
    alignSelf: 'center',
    borderWidth: 0.3,
    borderColor: base.black,
    borderRadius: ms(20),
    backgroundColor: gold.expert,
    paddingHorizontal: ms(15),
    paddingVertical: ms(7.5),
  },
  shadow: {
    shadowColor: base.black,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2
  }
});

export default ProgressProgressScreen;
