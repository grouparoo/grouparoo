const { defaultTime } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: defaultTime,
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/fixtures",
  ],
};
