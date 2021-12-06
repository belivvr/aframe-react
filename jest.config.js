module.exports = {
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.{ts,tsx}',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.yarn/',
    '<rootDir>/dist/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '/es/',
    '/lib/',
    '/types/',
    '.storybook',
    '/stories'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '/es/',
    '/lib/',
    '/types/',
    '.storybook',
    '/stories'

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
  ],
};