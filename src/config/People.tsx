import { ImageSourcePropType } from 'react-native';
import uuid from 'react-native-uuid';

enum Company {
  gsh = 'Gold Standard Health',
  smedicine = 'Stanford Medicine'
}

export type Person = {
  id: string;
  name: string;
  title: string;
  shortTitle?: string;
  company: Company;
  image: ImageSourcePropType;
}

type People = { [key: string]: Person };

const basePath = '../../assets/people/';

export const founders: People = {
  yuval: {
    id: `${uuid.v4()}`,
    name: 'Yuval Spector',
    title: 'CEO, Founder',
    company: Company.gsh,
    image: require(basePath + 'YuvalSpector.png')
  },
  carrie: {
    id: `${uuid.v4()}`,
    name: 'Carrie Tice',
    title: 'CRO, Founder',
    company: Company.gsh,
    image: require(basePath + 'CarrieTice.png')
  }
};

export const experts: People = {
  tiffany: {
    id: `${uuid.v4()}`,
    name: 'Tiffany Asp',
    title: 'PT, DPT, OCS',
    company: Company.smedicine,
    image: require(basePath + 'TiffanyAsp.png')
  },
  josh: {
    id: `${uuid.v4()}`,
    name: 'Josh Levin',
    title: 'MD, Orthopedic Surgery & Neurosurgery',
    company: Company.smedicine,
    image: require(basePath + 'JoshLevin.png')
  },
  ricky: {
    id: `${uuid.v4()}`,
    name: 'Ricky Yu',
    title: 'DPT, OCS',
    company: Company.smedicine,
    image: require(basePath + 'RickyYu.png')
  },
  heather: {
    id: `${uuid.v4()}`,
    name: 'Heather King',
    title: 'PHD, Pain Medicine & Anesthesiology',
    shortTitle: 'Pain Psychologist',
    company: Company.smedicine,
    image: require(basePath + 'HeatherKing.png')
  }
};
