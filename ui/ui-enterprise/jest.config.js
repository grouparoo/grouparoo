module.exports = {
  preset: "jest-puppeteer",
  testTimeout: 10000,
  maxWorkers: "50%",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/__mocks__",
  ],
};
