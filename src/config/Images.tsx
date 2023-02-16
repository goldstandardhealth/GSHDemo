import { ImageSourcePropType } from 'react-native';

import { company } from './People';

type ImageSources = {
  [key: string]: ImageSourcePropType
}

const basePath = '../../assets/';

export const backgrounds: ImageSources = {
  gold: require(basePath + 'backgrounds/gold.png'),
  bg: require(basePath + 'backgrounds/bg.png'),
  splash: require(basePath + 'backgrounds/splash.png')
};

export const goldies: ImageSources = {
  lash: require(basePath + 'goldie1.png'),
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

export const tabs: ImageSources = {
  Home: require(basePath + 'icons/home.png'),
  Progress: require(basePath + 'icons/progress.png'),
  Community: require(basePath + 'icons/community.png'),
  Connect: require(basePath + 'icons/connect.png')
};
