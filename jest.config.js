module.exports = {
  coverageDirectory: '__coverage__',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/mocks/**',
    '!<rootDir>/src/**/*.json',
    '!<rootDir>/functional/**',
    '!<rootDir>/src/**/__snapshots__/**',
    '!<rootDir>/src/**/*.mock.js',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/lib',
    '<rootDir>/config',
    '<rootDir>/functional',
  ],
  // setupFilesAfterEnv: [
  //   '<rootDir>/jest.setup.shared.js',
  //    '<rootDir>/jest.setup.js',
  //  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
