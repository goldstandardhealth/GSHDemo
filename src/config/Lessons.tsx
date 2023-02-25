const videoPath = '../../assets/video/';

export const getLessonVideo = (name: string) => {
  switch (name) {
    case 'carrot':
      return require(videoPath + 'Chronic_pain_recovery.mp4');
  }
}
