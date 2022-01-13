const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.defaultTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/src",
    "<rootDir>/dist",
    "<rootDir>/__tests__/utils",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/__tests__/tsconfig.json",
    },
  },
};
