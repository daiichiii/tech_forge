module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup/jest.setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/app/src/$1',
    '^@/components/(.*)$': '<rootDir>/app/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/src/hooks/$1',
    '^@/services/(.*)$': '<rootDir>/app/src/services/$1',
    '^@/types/(.*)$': '<rootDir>/app/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/app/src/utils/$1',
  },
  testMatch: [
    '<rootDir>/tests/**/*.test.{ts,tsx}',
    '<rootDir>/app/src/**/*.test.{ts,tsx}',
  ],
  collectCoverageFrom: [
    'app/src/**/*.{ts,tsx}',
    '!app/src/**/*.d.ts',
    '!app/src/**/*.stories.{ts,tsx}',
    '!app/src/main.tsx',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};