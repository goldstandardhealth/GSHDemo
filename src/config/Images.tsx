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
  lash: require(basePath + 'goldies/goldie1.png'),
  wonder: require(basePath + 'goldies/goldie3.png'),
  wave: require(basePath + 'goldies/goldie5.png'),
  cool: require(basePath + 'goldies/goldie6.png'),
  cute: require(basePath + 'goldies/goldie7.png'),
  friend: require(basePath + 'goldies/goldie8.png')
};

export const logo: ImageSources = {
  [company.gsh]: require(basePath + 'logo/gsh.png'),
  [company.smedicine]: require(basePath + 'logo/smedicine.png'),
  [company.ucdavis]: require(basePath + 'logo/ucdavis.png'),
  [company.somatic]: require(basePath + 'logo/somatic.png'),
  [company.ucsf]: require(basePath + 'logo/ucsf.png'),
  [company.univercity]: require(basePath + 'logo/univercity.png'),
  [company.ipsi]: require(basePath + 'logo/ipsi.png'),
  [company.ohio]: require(basePath + 'logo/ohio.png'),
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

export const icons: ImageSources = {
  info: require(basePath + 'icons/info.png'),
};

export const medals: ImageSources = {
  mindset: require(basePath + 'medals/medal2.png'),
  expert: require(basePath + 'medals/medal1.png'),
  meditation: require(basePath + 'medals/medal3.png')
};

export const sports: ImageSources = {
  running: require(basePath + 'sports/running.png'),
  yoga: require(basePath + 'sports/yoga.png'),
  mental: require(basePath + 'sports/mental.png')
};

export const social: ImageSources = {
  mental: require(basePath + 'social/mentalSocial.png'),
  motivation: require(basePath + 'social/motivationSocial.png'),
  physical: require(basePath + 'social/physicalSocial.png'),
};

export const excercises: ImageSources = {
  stretchbw: require(basePath + 'icons/stretchbw.png'),
  stretchwhite: require(basePath + 'icons/stretchbw.png'),
  crunchbw: require(basePath + 'icons/crunchbw.png'),
  crunchwhite: require(basePath + 'icons/crunchwhite.png'),
  mindbw: require(basePath + 'icons/mindbw.png'),
  mindwhite: require(basePath + 'icons/mindwhite.png'),
  yogabw: require(basePath + 'icons/yogabw.png'),
  yogawhite: require(basePath + 'icons/yogabw.png'),
  trophybw: require(basePath + 'icons/trophy.png'),
  trophywhite: require(basePath + 'icons/trophy.png'),
};

export const bonuses: ImageSources = {
  brainbw: require(basePath + 'icons/brainbonusbw.png'),
  braincolor: require(basePath + 'icons/brainbonusbw.png'),
  yogabw: require(basePath + 'icons/yogabonusbw.png'),
  yogacolor: require(basePath + 'icons/yogabonus.png'),
};

