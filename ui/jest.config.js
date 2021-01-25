const { defaultTime } = require("@grouparoo/spec-helper");

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testTimeout: defaultTime,
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/__mocks__",
  ],
};
