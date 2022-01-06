const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: process.env.CI ? helper.longTime : helper.hugeTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
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
