module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testTimeout: 1000 * 10,
  maxWorkers: "50%",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/__utils__",
    "<rootDir>/__tests__/__mocks__",
  ],
};
