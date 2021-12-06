module.exports = {
  verbose: true,
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
    '<rootDir>/lib/',
    '<rootDir>/es/',
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
  moduleNameMapper: {
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^primitives/(.*)$': '<rootDir>/src/extras/primitives/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '/es/',
    '/lib/',
    '/types/',
    '.storybook',
    '/stories',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '/es/',
    '/lib/',
    '/types/',
    '.storybook',
    '/stories',

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
  ],
};