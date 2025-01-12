module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@svg': './src/assets/svg',
          '@themes': './src/themes',
          '@components': './src/components',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@storage': './src/storage',
          '@styles': './src/styles',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@screens': './src/screens'
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
