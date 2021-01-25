const { defaultTime } = require("./dist/index");

module.exports = {
  testEnvironment: "node",
  testTimeout: defaultTime,
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/src", "<rootDir>/dist"],
};
