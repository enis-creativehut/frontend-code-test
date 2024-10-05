/* eslint-disable no-undef */
module.exports = {
  transform: {
    '^.+\\.(tsx?|jsx?)?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.storybook/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/jest-css-mock.js',
  },
}
