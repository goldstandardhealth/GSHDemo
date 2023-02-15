import { ImageSourcePropType } from 'react-native';
import uuid from 'react-native-uuid';

export const company = {
  gsh: 'Gold Standard Health',
  smedicine: 'Stanford Medicine',
  ucdavis: 'UC Davis Health',
  somatic: 'Somatic Experiencing',
  ucsf: 'UCSF',
  univercity: 'Stanford Univercity',
}

export type Person = {
  id: string;
  name: string;
  title: string;
  shortTitle?: string;
  company: string;
  image: ImageSourcePropType;
}

type People = { [key: string]: Person };

const basePath = '../../assets/people/';
const videoPath = '../../assets/video/';

export const getExpertVideo = (name: string) => {
  switch (name) {
    case 'tiffany':
      return require(videoPath + 'Meet_Tiffany_Asp.mp4');
    case 'philippe':
      return require(videoPath + 'Introducing_Philippe_Goldin.mp4');
    case 'josh':
      return require(videoPath + 'Introducing_Josh_Levin.mp4');
    case 'shari':
      return require(videoPath + 'Meet_Shari_Becker.mp4');
    default:
      return require(videoPath + 'Introducing_the_Founders.mp4');
  }
}

export const founders: People = {
  yuval: {
    id: `${uuid.v4()}`,
    name: 'Yuval Spector',
    title: 'CEO, Founder',
    company: company.gsh,
    image: require(basePath + 'YuvalSpector.png')
  },
  carrie: {
    id: `${uuid.v4()}`,
    name: 'Carrie Tice',
    title: 'CRO, Founder',
    company: company.gsh,
    image: require(basePath + 'CarrieTice.png')
  }
};

export const experts: People = {
  tiffany: {
    id: `${uuid.v4()}`,
    name: 'Tiffany Asp',
    title: 'PT, DPT, OCS',
    company: company.smedicine,
    image: require(basePath + 'TiffanyAsp.png')
  },
  josh: {
    id: `${uuid.v4()}`,
    name: 'Josh Levin',
    title: 'MD, Orthopedic Surgery & Neurosurgery',
    shortTitle: 'MD, Stanford Orthopedics',
    company: company.smedicine,
    image: require(basePath + 'JoshLevin.png')
  },
  ricky: {
    id: `${uuid.v4()}`,
    name: 'Ricky Yu',
    title: 'DPT, OCS',
    company: company.smedicine,
    image: require(basePath + 'RickyYu.png')
  },
  shari: {
    id: `${uuid.v4()}`,
    name: 'Shari Becker',
    title: 'PHD, Clinical Psychologist, Yoga Instructor',
    company: company.somatic,
    image: require(basePath + 'ShariBecker.png')
  },
  philippe: {
    id: `${uuid.v4()}`,
    name: 'Philippe Goldin',
    title: 'PHD, Psychology',
    company: company.ucdavis,
    image: require(basePath + 'PhilippeGoldin.png')
  },
  heather: {
    id: `${uuid.v4()}`,
    name: 'Heather King',
    title: 'PHD, Pain Medicine & Anesthesiology',
    shortTitle: 'Pain Psychologist',
    company: company.smedicine,
    image: require(basePath + 'HeatherKing.png')
  },
  stephen: {
    id: `${uuid.v4()}`,
    name: 'Stephen Baxter',
    title: 'PT, Msc, DPT',
    company: company.ucsf,
    image: require(basePath + 'StephenBaxter.png')
  },
  mike: {
    id: `${uuid.v4()}`,
    name: 'Michael Fredericson',
    title: 'PM, PM&R Sports Medicine',
    company: company.smedicine,
    image: require(basePath + 'MichaelFredericson.png')
  },
  corinne: {
    id: `${uuid.v4()}`,
    name: 'Corinne Cooley',
    title: 'DPT',
    company: company.smedicine,
    image: require(basePath + 'CorinneCooley.png')
  },
  dave: {
    id: `${uuid.v4()}`,
    name: 'Dave Paunesku',
    title: 'PhD, Sr. Behavioral Scientist, PERTS',
    company: company.univercity,
    image: require(basePath + 'DavePaunesku.png')
  },
};
