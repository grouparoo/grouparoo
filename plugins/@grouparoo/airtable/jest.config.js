const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.mediumTime,
  maxWorkers: process.env.NOCK ? "1" : "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/__tests__/utils",
  ],
};
