module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/src", "<rootDir>/dist"]
};
