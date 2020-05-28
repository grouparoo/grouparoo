module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/__tests__/utils",
  ],
};
