const { helper } = require("@grouparoo/spec-helper");

module.exports = {
  testEnvironment: "node",
  testTimeout: helper.defaultTime,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/src/.*/*.ts",
    "<rootDir>/dist/.*/*.ts",
    "<rootDir>/dist/.*/*.js",
  ],
  globals: {
    "ts-jest": {
      transpileOnly: true,
      isolatedModules: true,
    },
  },
};
