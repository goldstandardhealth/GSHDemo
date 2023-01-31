import { ImageSourcePropType } from 'react-native';

type ImageSources = {
  [key: string]: ImageSourcePropType
}

export const logo: ImageSourcePropType = require('../../assets/gdh_logo.png');

export const backgrounds: ImageSources = {
  goldie: require('../../assets/goldie_bg.png'),
  bg: require('../../assets/bg.png'),
  splash: require('../../assets/splash.png')
};

export const goldies: ImageSources = {
  wave: require('../../assets/goldie5.png'),
  cool: require('../../assets/goldie6.png'),
  cute: require('../../assets/goldie7.png'),
  friend: require('../../assets/goldie8.png')
};

export const doctors: ImageSources = {
  JoshLevin: require('../../assets/JoshLevin.png')
};
