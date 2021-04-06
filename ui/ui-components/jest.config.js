const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testTimeout: helper.defaultTime,
  maxWorkers: "50%",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/__utils__",
    "<rootDir>/__tests__/__mocks__",
  ],
};
