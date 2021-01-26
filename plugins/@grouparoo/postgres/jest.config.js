const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.defaultTime,
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/utils",
  ],
};
