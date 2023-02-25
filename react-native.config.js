module.exports = {
  project: {
    ios: {
      sourceDir: './ios',
    },
  },
  assets: [
    './assets/fonts/',
    './assets/video/',
    './assets/logo/',
    './assets/people/',
    './assets/backgrounds/',
    './assets/icons/',
    './assets/medals/',
    './assets/sports/',
    './assets/social/',
  ],
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? {
          'react-native-flipper': {
            platforms: {
              ios: null,
            },
          },
        }
      : {}),
  },
};
