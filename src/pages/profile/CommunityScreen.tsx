import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Tile } from 'react-native-elements';

import { CommunityNavigationProps, base, blue, Roboto, RobotoCondensed, social } from '../../config';
import GScrollable from '../../layout/GScrollable';
import GBookmark from '../../components/icons/GBookmark';

type PostProps = {
  icon: 'mental' | 'motivation' | 'physical';
  topic: string;
  title: string;
  author: string;
  time: number;
  date: string;
  bookmark: boolean;
};

function Post({ icon, topic, title, author, time, date, bookmark }: PostProps) {
  return (
    <View style={{
      alignSelf: 'flex-start',
      flexDirection: 'row',
      //paddingHorizontal: ms(15),
      paddingVertical: ms(5),
    }}>
      <Image style={{height: ms(120), width: ms(120), resizeMode: 'contain'}} source={social[icon]} />
      <View style={{flex: 1, justifyContent: 'center', marginLeft: ms(10), paddingBottom: ms(10)}}>
        <Text style={{...Roboto.bold, fontSize: ms(16), color: base.black + '80'}}>{topic}</Text>
        <Text style={{...Roboto.bold, fontSize: ms(13), color: base.black}}>{title}</Text>
        <Text style={{...Roboto.bold, fontSize: ms(13), color: base.black, marginTop: ms(5)}}>{author}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...RobotoCondensed.bold, flex: 2, fontSize: ms(14), color: base.black + '80'}}>{date}</Text>
          <Text style={{...RobotoCondensed.regular, flex: 1, fontSize: ms(13), color: base.black + '80'}}>{time} mins read</Text>
        </View>
      </View>
      <View style={{marginTop: ms(15)}}>
        <GBookmark size={ms(20)} fill={bookmark} />
      </View>
    </View>
  );
}

function CommunityScreen({ navigation }: CommunityNavigationProps) {
  const categories = ['Trending', 'Yoga', 'Back Pain', 'Develop'];
  return (
    <GScrollable type='bg'>
      <View style={{
        marginHorizontal: ms(10),
        borderBottomWidth: 1,
        borderColor: base.black,
        paddingHorizontal: ms(30),
        paddingBottom: ms(10)
      }}>
        <Text style={{
          ...Roboto.bold,
          color: base.black,
          fontSize: ms(30),
          marginTop: ms(40)
        }}>Community Blog</Text>
        <Text style={{
          ...Roboto.regular,
          color: base.black,
          fontSize: ms(15),
          marginTop: ms(20)
        }}>View your feed!</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
        marginVertical: ms(10),
        paddingVertical: 2,
        flexDirection: 'row'
      }}>
        { categories.map((c, i) => <View style={{
          marginHorizontal: ms(15),
          alignSelf: 'center',
          borderWidth: 0.3,
          borderColor: base.black,
          borderRadius: ms(20),
          backgroundColor: i ? base.white : blue.lighter,
          paddingHorizontal: ms(15),
          paddingVertical: ms(10),
          shadowColor: base.black,
          shadowOffset: {width: 1, height: 3},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 2
        }}><Text key={`category-${i}`} style={{
          ...Roboto.bold,
          color: base.black,
          fontSize: ms(13)
        }}>{c}</Text></View>) }
      </ScrollView>
      <Tile featured
        imageSrc={require('../../../assets/social/basket.png')}
        caption={`How I beat mental health\nstruggles while injured`}
        captionStyle={{
          ...Roboto.bold,
          textAlign: 'left',
          fontSize: ms(13),
          position: 'absolute',
          top: 30,
          left: 30,
        }}
        height={ms(140)}
        containerStyle={{ marginHorizontal: ms(0) }}
        imageProps={{ resizeMode: 'contain' }}
        imageContainerStyle={{
          borderRadius: ms(50),
          padding: 0,
        }}
      />
      <View style={{
        marginVertical: ms(10),
        marginHorizontal: ms(30)
      }}>
        <Text style={{
          ...Roboto.regular,
          fontSize: ms(12),
          color: base.black
        }}>Rhoncus dolor purus non enim praesent elementum facilisis. Faucibus vitae aliquet nec ullamcorper sit amet. Arcu risus quis.</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: ms(5) }}>
          <Text style={{...Roboto.bold, color: base.black, fontSize: ms(13)}}>Klay Thompson</Text>
          <Text style={{...Roboto.bold, marginHorizontal: ms(5)}}>●</Text>
          <Text style={{...Roboto.regular, color: base.black + 'A0', fontSize: ms(13)}}>3 mins read</Text>
          <Text style={{...Roboto.bold, marginHorizontal: ms(5)}}>●</Text>
          <Text style={{...Roboto.regular, color: base.black + 'A0', fontSize: ms(13)}}>January 10, 2023</Text>
        </View>
      </View>
      <View style={{
        margin: ms(10)
      }}>
        <Post
          icon='mental'
          topic='Mental Health'
          title='Why the Silicon Valley needs to meditate'
          author='Ori Spector'
          time={3}
          date='March 10, 2022'
          bookmark={true} />
        <Post
          icon='physical'
          topic='Physical Therapy'
          title='Swimmer’s Shoulder: How to recover in the offseason'
          author='Kenji Zaharchuk'
          time={6}
          date='November 7, 2022'
          bookmark={false} />
        <Post
          icon='motivation'
          topic='Motivational Story'
          title='Former Stanford Running Back Christian McCaffrey’s Incredible Comeback Story'
          author='Sf Chronical'
          time={7}
          date='December 20, 2022'
          bookmark={false} />
      </View>
    </GScrollable>
  );
}

export default CommunityScreen;
