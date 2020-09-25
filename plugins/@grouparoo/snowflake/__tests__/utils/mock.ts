jest.mock("snowflake-sdk/lib/services/sf", () => {
  // connectionConfig is changing all the time an messing up nock
  const mockConfig = function (connectionConfig) {
    connectionConfig.getClientVersion = jest.fn(() => "1.5.3");
    connectionConfig.getClientEnvironment = jest.fn(() => {
      return { OCSP_MODE: "FAIL_OPEN" };
    });
  };

  const SfService = jest.requireActual("snowflake-sdk/lib/services/sf");
  const newMethod = function (connectionConfig, httpClient, config) {
    mockConfig(connectionConfig);
    return new SfService(connectionConfig, httpClient, config);
  };
  return newMethod;
});
