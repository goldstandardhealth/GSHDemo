import React, { useState, useEffect, useContext, ReactNode } from 'react';
import { Animated, View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Line, Circle } from 'react-native-svg';

import { rootNavigate, PathContext, incPathValue, decPathValue, resetPath } from '../../layout/RootNavigation';
import { HomeNavigationProps, base, blue, Roboto, RobotoCondensed, founders, experts } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GContinue from '../../components/GContinue';

import GAvatar from '../../components/GAvatar';
import GBaloon from '../../components/GBaloon';
import GDiamond from '../../components/icons/GDiamond';
import GFire from '../../components/icons/GFire';
import GBook from '../../components/icons/GBook';
import GLock from '../../components/icons/GLock';
import GStep, { GStepProps, GStepLockedProps, GStepLocked } from '../../components/GStep';
import GBonus, { GBonusProps } from '../../components/GBonus';

type SessionPathProps = {
  start?: number;
  points: GStepProps[];
  bonuses?: GBonusProps[];
  motivations?: any;
  style?: StyleProp<ViewStyle>;
  current?: number;
  bonus?: number;
  motivation?: number;
  locked?: boolean;
};

type CoordinateProps = {
  top: number;
  left: number;
};

type DrawLineType = {
  line: ReactNode;
  width: number;
  height: number;
  straight: boolean;
}

function SessionPath({ style, start = 0, points, bonuses = [], motivations = [], current = 0, bonus = 0, motivation = 0, locked }: SessionPathProps) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const getWidth = (e: any) => setWidth(e.nativeEvent.layout.width);

  const stretch = ms(1);
  const pointPerPI = 3.5;
  const step = Math.PI/pointPerPI;
  const first = Math.PI * (start/pointPerPI - 0.5);
  const w = width/2;
  const topAdjust = Math.sin(first);
  const centers = new Set<number>();
  const coords = points.map((p, i): CoordinateProps => {
    const sign = Math.floor(i/pointPerPI) % 2 ? -1 : 1;
    const center = Math.floor(i/pointPerPI)*2 - topAdjust;
    centers.add(center * w * stretch);
    const x = first + step * i;

    return {
      top: (sign * Math.sin(x) + center) * w * stretch,
      left: (Math.cos(x) + 1) * w
    };
  });

  const curr = coords[current], prev = coords[current - 1] || curr;
  const currPoint = points[current], prevPoint = points[current - 1] || currPoint;
  const [slideAnimation, setSlideAnimation] = useState(new Animated.Value(0));
  useEffect(() => {
    slideAnimation.resetAnimation();
    if (coords[current - 1] && points[current - 1]) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  }, [current]);

  const slideTop = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [prev.top - curr.top - (prevPoint.size/2 + ms(30)), -(currPoint.size/2 + ms(30))],
  });
  const slideLeft = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [prev.left - curr.left, 0],
  });

  const context = useContext(PathContext);

  const drawLine = (c: CoordinateProps, c1: CoordinateProps): DrawLineType => {
    if (c1 === undefined) {
      return {
        line: [],
        width: 0,
        height: 0,
        straight: true
      };
    } else {
      const straight = c.left < c1.left;
      const start = straight ? "0,0" : `${c1.left},0`;
      const end = straight ? `${c1.top},${c1.left}` : `${c1.top},${c.left}`;
      const lHeight = Math.abs(c.top - c1.top), lWidth = Math.abs(c.left - c1.left);
      return {
        line: (
          <Line fill="none"
            stroke={blue.regular}
            strokeWidth="6"
            strokeDasharray="20,6"
            strokeDashoffset="0"
            x1={straight ? 0 : lWidth}
            y1="0"
            x2={straight ? lWidth : 0}
            y2={lHeight} />
        ),
        width: lWidth,
        height: lHeight,
        straight: straight
      };
    }
  }

  const logCurrent = (c, l) => {console.log("current: ", c, l); return false;}

  return (
    <View onLayout={getWidth} style={[style, {
      height: coords[coords.length - 1].top
    }]}>
      { coords.map((c, j, arr) => {
        const l = drawLine(c, arr[j + 1]);
        const point = points[j];
        const stepStyle: StyleProp<ViewStyle> = {
          position: 'absolute',
          top: c.top - point.size/2,
          left: c.left - point.size/2
        };
        return (
          <View key={`step-${j}`}>
            <Svg width={l.width} height={l.height} viewBox={`0 0 ${l.width} ${l.height}`} key={`point-${j}`} style={{
              position: 'absolute',
              top: c.top,
              left: (l.straight ? c.left : arr[j + 1].left)
            }}>
              { l.line }
            </Svg>
            { locked
              ? <GStepLocked size={point.size} style={stepStyle} />
              : <GStep
                  style={stepStyle}
                  image={point.image}
                  complete={j < current}
                  disabled={j > current}
                  size={point.size}
                  onPress={point.onPress} /> }
          </View>
        );
      })}

      { locked || current === coords.length - 1 ? [] : <Animated.View style={[styles.shadow, {
        position: 'absolute',
        top: curr.top,
        left: curr.left - ms(30),
        backgroundColor: '#081c59',
        borderRadius: ms(20),
        paddingVertical: ms(10),
        paddingHorizontal: ms(15),
        transform: [ {translateX: slideLeft}, {translateY: slideTop} ]
      }]}><Text style={{
        ...Roboto.bold,
        color: '#ffde6d',
        fontSize: ms(10),
      }}>You are here</Text></Animated.View> }

      { bonuses ? Array.from(centers).map((c, k) => {
        const left = w - (k % 2 ? -40 : 40);
        const b = bonuses[k];
        return b ? (
          <View key={`bonus-${k}`}>
            <GBonus style={{
              position: 'absolute',
              top: c - b.size/2,
              left: left - b.size/2
            }} image={b.image} complete={k < bonus} size={b.size} onPress={b.onPress} />
          </View>
        ) : [];
      }) : [] }

      { motivations.map((m: any, l) =>
        <View key={`motivation-${l}`}>
          <GBaloon style={{
            top: coords[m.link].top - ms(150),
            left: coords[m.link].left > width/2 ? width*0.3 : width*0.1
          }}
          type={m.type}
          run={current === m.link}
          align={coords[m.link].left > width/2 ? 'left' : 'right'}>
            <Text style={{
            ...RobotoCondensed.bold,
            fontSize: ms(18),
            color: base.black,
            textAlign: 'center',
            padding: ms(10)
          }}>{ m.message }</Text>
          </GBaloon>
        </View>
      ) }
    </View>
  );
}

function HomeScreen({ navigation, route }: HomeNavigationProps) {
  const context = useContext(PathContext);

  const proceed = (screen: string, config: any) => rootNavigate(screen, config);

  return (
    <GScrollable type='gold' style={{paddingVertical: ms(10)}}>
      <View style={styles.header}>
        <GAvatar style={{flex: 1, marginLeft: ms(25) }} size={ms(50)} color={blue.icon} person={founders.carrie} />
        <View style={{height: ms(50), marginRight: ms(25), flex: 0.7, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => resetPath(context)}>
           <GDiamond number="0" size={ms(35)} />
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => context.bonus > 0 && decPathValue(context, 'bonus')}>
            <GFire number="4" size={ms(35)} />
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => context.current > 0 && decPathValue(context, 'current')}>
            <GBook size={ms(35)} />
          </TouchableOpacity>
        </View>
       </View>
      <Text style={{...Roboto.bold, color: base.black, fontSize: ms(35), alignSelf: 'center', marginTop: ms(20)}}>Session 1</Text>
      <SessionPath current={context.current} bonus={context.bonus} start={0.2} style={{ marginHorizontal: ms(50), marginVertical: ms(80) }}
        points={[
          { image: "mind", size: 75, onPress: () => proceed('VideoLesson', {
              title: 'Finding Your Internal Carrot',
              video: 'carrot',
              tutor: experts.heather,
              congrats: 'Congrats finishing the exercise. We hope you can find your internal carrot.'
            }) },
          { image: "crunch", size: 50, onPress: () => proceed('WorkoutLesson', {
              reps: '3 x 3',
              title: 'Side Core Lift',
              video: 'sidelift',
              tutor: experts.tiffany
            }) },
          { image: "mind", size: 60, onPress: () => proceed('VideoLesson', {
              title: 'WD40 for your mind',
              video: 'wd40',
              tutor: experts.philippe,
              congrats: 'Can you find your personal WD40?',
              survey: '1'
            }) },
          { image: "crunch", size: 50, onPress: () => proceed('WorkoutLesson', {
              reps: '3 x 12',
              title: 'Bridge',
              video: 'bridge',
              tutor: experts.ricky,
              survey: '1',
              bonus: true
            }) },
          { image: "stretch", size: 75, onPress: () => proceed('WorkoutLesson', {
              reps: '3 x 10',
              title: 'Functionsl Squat',
              video: 'squat',
              tutor: experts.ricky,
              survey: '1'
            }) },
          { image: "yoga", size: 50, onPress: () => {} },
          { image: "trophy", size: 100, onPress: () => {} },
        ]}
        bonuses={[
          { image: "meditation", size: 80, onPress: () => proceed('BonusLesson', {
              title: 'Guided Meditation',
              video: 'meditation',
              tutor: experts.shari,
              survey: '1'
            }) },
          { image: "brain", size: 80 },
        ]}
        motivations={[
          {
            type: "friend",
            message: "You are on a roll! Continue with the program to unlock a bonus activity",
            link: 2
          },
          {
            type: "cool",
            message: "You rock! Keep the great work going to unlock a special bonus activity!",
            link: 5
          },
        ]}/>
      <Text style={{...Roboto.bold, color: base.black, fontSize: ms(35), alignSelf: 'center', marginTop: ms(50)}}><GLock size={ms(35)} /> Session 2</Text>
      <SessionPath locked={true} start={0.9} style={{ marginHorizontal: ms(50), marginVertical: ms(50), marginBottom: ms(100) }}
        points={[
          { image: "mind", size: 75, onPress: () => {} },
          { image: "crunch", size: 50, onPress: () => {} },
          { image: "mind", size: 60, onPress: () => {} },
          { image: "crunch", size: 50, onPress: () => {} },
          { image: "yoga", size: 50, onPress: () => {} },
          { image: "trophy", size: 100, onPress: () => {} },
        ]}/>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  shadow: {
    shadowColor: base.black,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2
  }
});

export default HomeScreen;
