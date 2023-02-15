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
