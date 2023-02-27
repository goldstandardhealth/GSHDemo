import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import uuid from 'react-native-uuid';
import { ms, vs } from 'react-native-size-matters';

import { WorkoutLessonSurveyNavigationProps, base, goldieCallout, Roboto, RobotoCondensed } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import Goldie from '../../../components/Goldie';
import GCallOut from '../../../components/GCallOut';
import GSliders, { SlidersData, SliderState } from '../../../components/GSliders';
import GBack from '../../../components/icons/GBack';

function WorkoutLessonSurveyScreen({ navigation, route }: WorkoutLessonSurveyNavigationProps) {
  const { bonus } = route.params;
  const [disabled, setDisabled] = useState(false);
  const [step, setStep] = useState(1);
  const [difficulty, setDifficulty] = useState<SliderState>();
  const [displayDifficulty, setDisplayDifficulty] = useState<"flex" | "none">("flex");
  const [displayPain, setDisplayPain] = useState<"flex" | "none">("none");
  const [pain, setPain] = useState<SliderState>();
  const difficultyData: SlidersData = {
    difficulty: {
      id: `${uuid.v4()}`
    }
  }
  const painData: SlidersData = {
    pain: {
      id: `${uuid.v4()}`
    }
  }

  const difficultyAnim = useRef(new Animated.Value(0)).current;
  const difficultyOpacity = useRef(new Animated.Value(1)).current;
  const painAnim = useRef(new Animated.Value(0)).current;
  const painOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(difficultyAnim, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }, []);

  let slideLeftX = difficultyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-ms(300), 0],
  });

  let slideLeftY = difficultyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [ms(100), 0],
  });

  let slideRightX = painAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [ms(300), 0],
  });

  let slideRightY = painAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [ms(100), 0],
  });

  const onDifficultySelect = (opts: SliderState) => {
    setDifficulty(opts);
  }

  const nextStep = () => {
    if (difficulty === undefined) {
      setDifficulty({difficulty: 0});
    }
    switch (step) {
      case 1:
        Animated.timing(difficultyAnim, {
          toValue: 0,
          duration: 750,
          useNativeDriver: true,
        }).start();
        setDisplayPain("flex");
        Animated.parallel([
          Animated.timing(difficultyOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(painOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        ]).start();
        setDisplayDifficulty("none");
        Animated.timing(painAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }).start();
        setStep(2);
        break;
      case 2:
        if (pain === undefined) {
          setPain({pain: 0});
        }
        navigation.navigate('FinalLesson', {bonus: bonus});
        break;
    }
  }

  return (
    <GScrollable type='bg'>
{/*
      <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
        <TouchableOpacity style={{ flex: 1, marginLeft: ms(10), marginTop: ms(10) }} onPress={() => navigation.goBack()}>
          <GBack size={ms(25)} />
        </TouchableOpacity>
      </View>
*/}
      <Text style={{
        ...RobotoCondensed.regular,
        fontSize: ms(25),
        textAlign: 'center',
        marginVertical: ms(80),
        marginHorizontal: ms(30)
      }}>Nice workout! Help us personalize your path to recovery!</Text>
      <View>
        <Animated.View style={{ opacity: difficultyOpacity, display: displayDifficulty }}>
          <Animated.View style={{
            transform: [ {translateX: slideLeftX}, {translateY: slideLeftY} ]
          }}>
            <GCallOut placement="bottomLeft" palette={goldieCallout} style={ [styles.chatRowLeft, {
              marginHorizontal: ms(50),
              marginBottom: ms(10)
            }] }>
              <Text style={styles.text}>Rate the difficulty of the exercise you just performed:</Text>
            </GCallOut>
            <Goldie size={ms(60)} type="wonder" style={ [styles.chatRowLeft, { marginBottom: ms(40) }] } />
          </Animated.View>
          <GSliders style={{backgroundColor: 'transparent'}} onSelect={onDifficultySelect} data={difficultyData} />
        </Animated.View>
        <Animated.View style={{ opacity: painOpacity, display: displayPain }}>
          <Animated.View style={{
            transform: [ {translateX: slideRightX}, {translateY: slideRightY} ]
          }}>
            <GCallOut placement="bottomRight" palette={goldieCallout} style={ [styles.chatRowRight, {
              marginHorizontal: ms(50),
              marginBottom: ms(10)
            }] }>
              <Text style={styles.text}>Rate your pain level during the exercise you just performed:</Text>
            </GCallOut>
            <Goldie size={ms(60)} type="wonder" style={ [styles.chatRowRight, { marginBottom: ms(40) }] } />
          </Animated.View>
          <GSliders style={{backgroundColor: 'transparent'}} onSelect={onDifficultySelect} data={difficultyData} />
        </Animated.View>
      </View>
      <TouchableOpacity style={{
        alignSelf: 'center',
        backgroundColor: '#192E60',
        borderRadius: ms(25),
        paddingVertical: ms(10),
        paddingHorizontal: ms(20),
        marginTop: ms(50)
      }} onPress={nextStep} disabled={disabled}>
        <Text style={{
          ...RobotoCondensed.bold,
          color: base.white,
          fontSize: ms(24),
        }}>Continue</Text>
      </TouchableOpacity>
    </GScrollable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...RobotoCondensed.regular,
    fontSize: ms(25),
    color: base.black,
    textAlign: 'center'
  },
  chatRowRight: {
    flex: 0.3,
    alignSelf: "flex-end"
  },
  chatRowLeft: {
    flex: 0.3,
    alignSelf: "flex-start"
  }
});

export default WorkoutLessonSurveyScreen;
