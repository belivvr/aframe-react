module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.yarn/**',
    '!**/dist/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/types/**',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    'jest-useragent-mock',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.yarn/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
    '<rootDir>/lib/',
    '<rootDir>/types/',
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
    '.storybook',

    '/__snapshots__/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '/es/',
    '/lib/',
    '.storybook',

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
    '/__snapshots__/',
  ],
};