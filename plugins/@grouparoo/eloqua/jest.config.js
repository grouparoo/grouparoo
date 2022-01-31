const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.longTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/__tests__/utils",
  ],
};
