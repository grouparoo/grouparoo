module.exports = {
  testEnvironment: "node",
  testTimeout: 10000,
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/src/.*/*.ts",
    "<rootDir>/dist/.*/*.ts",
    "<rootDir>/dist/.*/*.js",
  ],
};
