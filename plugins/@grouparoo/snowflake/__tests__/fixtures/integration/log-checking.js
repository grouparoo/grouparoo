const nock = require("nock");

nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post("/session/v1/login-request", /1f8b08000000000000.+/)
  .query({
    requestId: /.+/g,
    warehouse: "COMPUTE_WH",
    databaseName: "SAMPLE_SOURCES",
    schemaName: "PUBLIC",
  })
  .once()
  .reply(
    200,
    {
      data: {
        masterToken: "master_token_here",
        token: "token_here",
        validityInSeconds: 3600,
        masterValidityInSeconds: 14400,
        displayUserName: "JDOE",
        serverVersion: "5.39.3",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 11812616058568926,
        parameters: [
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
          { name: "CLIENT_SESSION_KEEP_ALIVE", value: false },
          { name: "CLIENT_METADATA_USE_SESSION_DATABASE", value: false },
          { name: "CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED", value: false },
          { name: "ENABLE_STAGE_S3_PRIVATELINK_FOR_US_EAST_1", value: false },
          {
            name: "TIMESTAMP_NTZ_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3",
          },
          { name: "CLIENT_RESULT_PREFETCH_THREADS", value: 1 },
          { name: "CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX", value: false },
          { name: "CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ", value: true },
          { name: "CLIENT_MEMORY_LIMIT", value: 1536 },
          { name: "CLIENT_TIMESTAMP_TYPE_MAPPING", value: "TIMESTAMP_LTZ" },
          { name: "TIMEZONE", value: "America/Los_Angeles" },
          { name: "CLIENT_RESULT_PREFETCH_SLOTS", value: 2 },
          { name: "CLIENT_TELEMETRY_ENABLED", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_STAGE_ARRAY_BINDING_THRESHOLD", value: 65280 },
          {
            name: "CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY",
            value: 3600,
          },
          { name: "CLIENT_SESSION_CLONE", value: false },
          { name: "AUTOCOMMIT", value: true },
          { name: "TIMESTAMP_LTZ_OUTPUT_FORMAT", value: "" },
        ],
        sessionInfo: {
          databaseName: "SAMPLE_SOURCES",
          schemaName: "PUBLIC",
          warehouseName: "COMPUTE_WH",
          roleName: "SYSADMIN",
        },
        idToken: null,
        idTokenValidityInSeconds: 0,
        responseData: null,
        mfaToken: null,
        mfaTokenValidityInSeconds: 0,
      },
      code: null,
      message: null,
      success: true,
    },
    [
      "Cache-Control",
      "no-cache, no-store, no-transform",
      "Content-Type",
      "application/json",
      "Date",
      "Fri, 05 Nov 2021 05:32:54 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Country",
      "United States",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "3835",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post("/queries/v1/query-request", /1f8b08000000000000.+/)
  .query({ requestId: /.+/g })
  .once()
  .reply(
    200,
    {
      data: {
        parameters: [
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
          { name: "CLIENT_SESSION_KEEP_ALIVE", value: false },
          { name: "CLIENT_METADATA_USE_SESSION_DATABASE", value: false },
          { name: "CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED", value: false },
          { name: "ENABLE_STAGE_S3_PRIVATELINK_FOR_US_EAST_1", value: false },
          {
            name: "TIMESTAMP_NTZ_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3",
          },
          { name: "CLIENT_RESULT_PREFETCH_THREADS", value: 1 },
          { name: "CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX", value: false },
          { name: "CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ", value: true },
          { name: "CLIENT_MEMORY_LIMIT", value: 1536 },
          { name: "CLIENT_TIMESTAMP_TYPE_MAPPING", value: "TIMESTAMP_LTZ" },
          { name: "TIMEZONE", value: "America/Los_Angeles" },
          { name: "CLIENT_RESULT_PREFETCH_SLOTS", value: 2 },
          { name: "CLIENT_TELEMETRY_ENABLED", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_STAGE_ARRAY_BINDING_THRESHOLD", value: 65280 },
          {
            name: "CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY",
            value: 3600,
          },
          { name: "CLIENT_SESSION_CLONE", value: false },
          { name: "AUTOCOMMIT", value: true },
          { name: "TIMESTAMP_LTZ_OUTPUT_FORMAT", value: "" },
        ],
        rowtype: [
          {
            name: "FIRST_NAME",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PROFILES",
            type: "text",
            byteLength: 16777216,
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: 16777216,
          },
        ],
        rowset: [["Erie"]],
        total: 1,
        returned: 1,
        queryId: "01a0144c-0601-4f8a-0029-f783001c351e",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1636090374930,
        queryResultFormat: "json",
      },
      code: null,
      message: null,
      success: true,
    },
    [
      "Cache-Control",
      "no-cache, no-store",
      "Content-Type",
      "application/json",
      "Date",
      "Fri, 05 Nov 2021 05:32:54 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Country",
      "United States",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "2658",
      "Connection",
      "Close",
    ]
  );
