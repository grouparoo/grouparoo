module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/__mocks__"
  ]
};
