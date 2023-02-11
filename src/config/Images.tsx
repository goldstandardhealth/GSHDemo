import { ImageSourcePropType } from 'react-native';

type ImageSources = {
  [key: string]: ImageSourcePropType
}

const basePath = '../../assets/';

export const backgrounds: ImageSources = {
  // goldie: require('../../assets/goldie_bg.png'),
  bg: require(basePath + 'bg.png'),
  splash: require(basePath + 'splash.png')
};

export const goldies: ImageSources = {
  wave: require(basePath + 'goldie5.png'),
  cool: require(basePath + 'goldie6.png'),
  cute: require(basePath + 'goldie7.png'),
  friend: require(basePath + 'goldie8.png')
};

export const logo: ImageSources = {
  logo: require(basePath + 'logo.png'),
  smedicine: require(basePath + 'smedicine.png')
};

export const doctors: ImageSources = {
  // JoshLevin: require(basePath + 'JoshLevin.png')
};
