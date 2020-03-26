module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/factories",
    "<rootDir>/src/.*/*.ts",
    "<rootDir>/dist/.*/*.ts",
    "<rootDir>/dist/.*/*.js"
  ]
};
