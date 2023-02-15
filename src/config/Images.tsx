import { ImageSourcePropType } from 'react-native';

import { company } from './People';

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
  [company.gsh]: require(basePath + 'logo/gsh.png'),
  [company.smedicine]: require(basePath + 'logo/smedicine.png'),
  [company.ucdavis]: require(basePath + 'logo/ucdavis.png'),
  [company.somatic]: require(basePath + 'logo/somatic.png'),
  [company.ucsf]: require(basePath + 'logo/ucsf.png'),
  [company.univercity]: require(basePath + 'logo/univercity.png'),
}

export const doctors: ImageSources = {
  // JoshLevin: require(basePath + 'JoshLevin.png')
};
