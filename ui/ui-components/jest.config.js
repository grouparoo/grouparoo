module.exports = {
  maxWorkers: "50%",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/__mocks__",
    "<rootDir>/__tests__/__pageObjects__",
    "<rootDir>/__tests__/__utils__",
  ],
};
