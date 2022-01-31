module.exports = {
  testEnvironment: "node",
  testTimeout: 240000,
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
