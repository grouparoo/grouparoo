if (!process.env.SNOWFLAKE_MOCKED) {
  process.env.SNOWFLAKE_MOCKED = "true";
  jest.mock("snowflake-sdk/lib/services/sf", () => {
    // connectionConfig is changing all the time and messing up nock
    const mockConfig = function (connectionConfig) {
      connectionConfig.getClientVersion = jest.fn(() => "1.5.3");
      connectionConfig.getClientEnvironment = jest.fn(() => {
        return { OCSP_MODE: "INSECURE" };
      });
    };

    const SfService = jest.requireActual("snowflake-sdk/lib/services/sf");
    const newMethod = function (connectionConfig, httpClient, config) {
      mockConfig(connectionConfig);
      return new SfService(connectionConfig, httpClient, config);
    };
    return newMethod;
  });
}
