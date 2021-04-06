module.exports = {
  testEnvironment: "node",
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/src", "<rootDir>/dist"],
};
