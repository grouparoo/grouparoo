const { helper } = require("./dist/index");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.defaultTime,
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/src", "<rootDir>/dist"],
};
