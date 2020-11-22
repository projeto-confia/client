module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleNameMapper: {
    '^@/components$': '<rootDir>/src/components/index.ts',
    '^@/containers$': '<rootDir>/src/containers/index.ts',
    '^@/layouts$': '<rootDir>/src/types/index.ts',
  },
}
