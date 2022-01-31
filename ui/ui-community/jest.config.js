const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testTimeout: helper.defaultTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/__mocks__",
  ],
};
