import React, { useState } from 'react';
import { Alert, View, Text, Image, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

import { rootNavigate } from '../../../layout/RootNavigation';
import { icons, getLessonVideo, VideoLessonNavigationProps, base, Roboto, RobotoCondensed, practitioners, experts } from '../../../config';
import GScrollable from '../../../layout/GScrollable';
import GBack from '../../../components/icons/GBack';
import GVideo from '../../../components/GVideo';

function VideoLessonScreen({ navigation, route }: VideoLessonNavigationProps) {
  const { title, video, tutor, congrats, bonus, survey } = route.params;
  const getFirstName = (name: string) => name.split(' ')[0];
  const [complete, setComplete] = useState(false);
  const [stopVideo, setStopVideo] = useState(false);

  const confirm = (ask: boolean): Promise<string | undefined | void> => {
    return new Promise((resolve) => ask ? Alert.alert('Lesson incomplete', 'Do you stil want to continue?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: resolve }
    ]) : resolve());
  }

  const nextScreen = survey == '1' ? 'VideoLessonSurvey1' : 'VideoLessonCongrats';

  return (
    <GScrollable type='bg'>
      <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
        <TouchableOpacity style={{ flex: 1, marginLeft: ms(10), marginTop: ms(10) }} onPress={() => navigation.goBack()}>
          <GBack size={ms(25)} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, marginRight: ms(10), marginTop: ms(10) }} onPress={() => navigation.push("Connect", {back: true})}>
          <Image source={icons.info} style={{
            alignSelf: 'flex-end',
            height: ms(25),
            width: ms(25),
            resizeMode: "contain"
          }}/>
        </TouchableOpacity>
      </View>
      <View style={[styles.shadow, {
        backgroundColor: base.white + '99',
        borderColor: base.black,
        borderWidth: ms(0.3),
        borderRadius: ms(15),
        paddingVertical: ms(20),
        marginHorizontal: ms(10),
        marginTop: ms(40),
        marginBottom: ms(20),
      }]}>
        <Text style={{
          ...RobotoCondensed.bold,
          textAlign: 'center',
          fontSize: ms(25),
        }}>{ title }</Text>
        <Text style={{
          ...Roboto.regular,
          textAlign: 'center',
          fontSize: ms(18),
        }}>Delivered by Dr. { tutor.name }</Text>
      </View>
      <Text style={{
        ...RobotoCondensed.regular,
        textAlign: 'center',
        fontSize: ms(14),
        color: base.black + '8F',
        marginBottom: ms(60)
      }}>Click the info icon to learn more about { getFirstName(tutor.name) }!</Text>
      <GVideo onEnd={() => setComplete(true)} stop={stopVideo} source={ getLessonVideo(video) }/>
      <TouchableOpacity style={{
        marginTop: vs(120),
        alignSelf: 'center',
        backgroundColor: '#192E60',
        borderRadius: ms(25),
        paddingVertical: ms(10),
        paddingHorizontal: ms(20)
      }} onPress={() => confirm(!complete).then(() => setStopVideo(true)).then(() => navigation.navigate(nextScreen, { congrats: congrats, bonus: bonus }))}>
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
  shadow: {
    shadowColor: base.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  }
});

export default VideoLessonScreen;
