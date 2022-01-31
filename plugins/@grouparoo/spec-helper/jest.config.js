const { helper } = require("./dist/index");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.defaultTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/src", "<rootDir>/dist"],
};
