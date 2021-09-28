// jest.config.js
module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
    // 'node_modules/(?!(react-native|@react-native-community/art)/)',
  ],
  cacheDirectory: '.jest/cache',
};
