module.exports = {
  project: {
    ios: {
      sourceDir: './ios',
    },
  },
  assets: ['./assets/fonts/'],
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
