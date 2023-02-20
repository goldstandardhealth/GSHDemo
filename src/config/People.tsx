import { ImageSourcePropType } from 'react-native';
import uuid from 'react-native-uuid';

export const company = {
  gsh: 'Gold Standard Health',
  smedicine: 'Stanford Medicine',
  ucdavis: 'UC Davis Health',
  somatic: 'Somatic Experiencing',
  ucsf: 'UCSF',
  univercity: 'Stanford Univercity',
  ipsi: 'Integrative Pain science Institute',
  ohio: 'Ohio Univercity',
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

export type Practitioner = {
  id: string;
  name: string;
  title: string;
  shortTitle: string;
  company: string;
  imageBw: ImageSourcePropType;
  imageColor?: ImageSourcePropType;
  brief: string;
  biography: string;
  phone: string;
  location: { lat: number, lon: number };
}

type Practitioners = { [key: string]: Practitioner };

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

export const practitioners: Practitioners = {
  ricky: {
    id: `${uuid.v4()}`,
    name: 'Ricky Yu',
    title: 'Doctor of Physical Therapy & Orthopedic Clinical Specialist',
    shortTitle: 'DPT, OCS',
    company: company.smedicine,
    imageBw: require(basePath + 'practitioner/bw/RickyYuBw.png'),
    imageColor: require(basePath + 'practitioner/color/RickyYuC.png'),
    brief: 'I received my Doctor of Physical Therapy from Columbia University where I specialized in orthopedic and sports rehabilitation, and myBachelor of Science from The University at Buffalo graduating Magna Cum Laude. I joined Stanford in 2013 and I am an orthopedic clinical specialist. I...',
    biography: '',
    phone: '(650) 723-6469',
    location: { lat: 37.43399116659287, lon: -122.17560779629487 },
  },
  paz: {
    id: `${uuid.v4()}`,
    name: 'Paz Alster',
    title: 'Doctor of Physical Therapy & Orthopedic Clinical Specialist',
    shortTitle: 'Physical Therapy',
    company: company.ipsi,
    imageBw: require(basePath + 'practitioner/bw/PazAlsterBw.png'),
    //imageColor: require(basePath + 'practitioner/color/PazAlsterC.png'),
    brief: '',
    biography: '',
    phone: '',
    location: { lat: 37.43399116659287, lon: -122.17560779629487 },
  },
  allison: {
    id: `${uuid.v4()}`,
    name: 'Allison Marsden',
    title: 'Doctor of Physical Therapy & Orthopedic Clinical Specialist',
    shortTitle: 'Physical Therapy',
    company: company.ohio,
    imageBw: require(basePath + 'practitioner/bw/AllisonMarsdenBw.png'),
    //imageColor: require(basePath + 'practitioner/color/AllisonMarsdenC.png'),
    brief: '',
    biography: '',
    phone: '',
    location: { lat: 37.43399116659287, lon: -122.17560779629487 },
  },
  tiffany: {
    id: `${uuid.v4()}`,
    name: 'Tiffany Asp',
    title: 'Doctor of Physical Therapy & Orthopedic Clinical Specialist',
    shortTitle: 'PT & DPT',
    company: company.smedicine,
    imageBw: require(basePath + 'practitioner/bw/TiffanyAspBw.png'),
    //imageColor: require(basePath + 'practitioner/color/TiffanyAspC.png'),
    brief: '',
    biography: '',
    phone: '',
    location: { lat: 37.43399116659287, lon: -122.17560779629487 },
  },
  corinne: {
    id: `${uuid.v4()}`,
    name: 'Corinne Cooley',
    title: 'Doctor of Physical Therapy & Orthopedic Clinical Specialist',
    shortTitle: 'DPT',
    company: company.smedicine,
    imageBw: require(basePath + 'practitioner/bw/CorinneCooleyBw.png'),
    //imageColor: require(basePath + 'practitioner/color/CorinneCooleyC.png'),
    brief: '',
    biography: '',
    phone: '',
    location: { lat: 37.43399116659287, lon: -122.17560779629487 },
  }
};
