import { ImageSourcePropType } from 'react-native';

const baseVideoPath = 'https://gshpublic.s3.us-east-2.amazonaws.com/video/';
const videoExt = '.mp4';
const baseThumbPath = '../../assets/video/';
const thumbExt = '.jpg';

const _intro = 'Meet_The_Founders_Gold_Standard_Health'; //+
const _tiffany = 'Meet_Dr_Tiffany_Asp'; //+
const _shari = 'Meet_Dr_Shari_Becker'; //+
const _ricky = 'Meet_Dr_Ricky_Yu'; // +

const _philippe = 'Meet_Dr_Philippe_Goldin'; //+
const _josh = 'Meet_Dr_Josh_Levin'; //+

const _wd40 = 'WD-40_For_The_Mind'; //+
const _carrot = 'Find_Your_Internal_Carrot'; //+
const _squat = 'Gold_Standard_Squat'; // +
const _sidelift = 'Gold_Standard_Side_Lift'; //+
const _bridge = 'Gold_Standard_Bridge'; //+
const _meditation = 'Guided_Meditation_Shari_Becker_10min'; //+

const videoName = {
  intro: _intro,
  tiffany: _tiffany,
  shari: _shari,
  philippe: _philippe,
  josh: _josh,
  ricky: _ricky,

  wd40: _wd40,
  carrot: _carrot,
  squat: _squat,
  sidelift: _sidelift,
  bridge: _bridge,
  meditation: _meditation
}

export type VideoName = keyof typeof videoName;

const thumbs = {
  intro: require(baseThumbPath + _intro + thumbExt),
  tiffany: require(baseThumbPath + _tiffany + thumbExt),
  shari: require(baseThumbPath + _shari + thumbExt),
  philippe: require(baseThumbPath + _philippe + thumbExt),
  josh: require(baseThumbPath + _josh + thumbExt),
  ricky: require(baseThumbPath + _ricky + thumbExt),
  wd40: require(baseThumbPath + _wd40 + thumbExt),
  carrot: require(baseThumbPath + _carrot + thumbExt),
  squat: require(baseThumbPath + _squat + thumbExt),
  sidelift: require(baseThumbPath + _sidelift + thumbExt),
  bridge: require(baseThumbPath + _bridge + thumbExt),
  meditation: require(baseThumbPath + _meditation + thumbExt),
}

export const getVideoThumb = (name: VideoName): ImageSourcePropType => thumbs[name] || thumbs.intro;
export const getVideoSource = (name: VideoName) => { return { uri: `${baseVideoPath}${(videoName[name] || videoName.intro)}${videoExt}`, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'}}};
