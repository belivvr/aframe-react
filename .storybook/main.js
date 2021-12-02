const path = require('path');

module.exports = {
  stories: [
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
  typescript: { reactDocgen: false },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
    };
  
    return config;
  },
}