module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testTimeout: 10000,
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/__utils__",
    "<rootDir>/__tests__/__mocks__",
  ],
};
