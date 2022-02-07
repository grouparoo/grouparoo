module.exports = {
  testEnvironment: "node",
  testTimeout: 10000,
  maxWorkers: "50%",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
