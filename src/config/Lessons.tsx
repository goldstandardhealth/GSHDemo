const videoPath = '../../assets/video/';

export const getLessonVideo = (name: string) => {
  switch (name) {
    case 'carrot':
      return require(videoPath + 'Chronic_pain_recovery.mp4');
    case 'sidelift':
      return require(videoPath + 'Side_Lift.mp4');
    case 'wd40':
      return require(videoPath + 'WD-40.mp4');
    case 'bridge':
      return require(videoPath + 'Bridge.mp4');
    case 'squat':
      return require(videoPath + 'Squat.mp4');
  }
}
