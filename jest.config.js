/**
 * The configuration for the Jest test runner.
 */

module.exports = {
  preset: 'ts-jest',
  modulePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'dist'
  ],
  collectCoverageFrom: [
    'src/**',
  ],
  coveragePathIgnorePatterns: [
    'index.ts',
    'generated',
    'test',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 95,
      lines: 85,
      statements: 90,
    }
  },
  reporters: [
    'default',
    ['jest-junit', {
      suiteName: 'jest tests',
      outputDirectory: 'test-results',
      outputName: 'sdk-test-results.xml'
    }]
  ],
};