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
        displayUserName: "BRIAN",
        serverVersion: "5.32.4",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 11812616058443146,
        parameters: [
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_SESSION_KEEP_ALIVE", value: false },
          { name: "CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED", value: false },
          { name: "CLIENT_METADATA_USE_SESSION_DATABASE", value: false },
          { name: "ENABLE_STAGE_S3_PRIVATELINK_FOR_US_EAST_1", value: false },
          { name: "CLIENT_RESULT_PREFETCH_THREADS", value: 1 },
          {
            name: "TIMESTAMP_NTZ_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3",
          },
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
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_STAGE_ARRAY_BINDING_THRESHOLD", value: 65280 },
          {
            name: "CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY",
            value: 3600,
          },
          { name: "AUTOCOMMIT", value: true },
          { name: "CLIENT_SESSION_CLONE", value: false },
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
      "Thu, 02 Sep 2021 20:51:29 GMT",
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
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_SESSION_KEEP_ALIVE", value: false },
          { name: "CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED", value: false },
          { name: "CLIENT_METADATA_USE_SESSION_DATABASE", value: false },
          { name: "ENABLE_STAGE_S3_PRIVATELINK_FOR_US_EAST_1", value: false },
          { name: "CLIENT_RESULT_PREFETCH_THREADS", value: 1 },
          {
            name: "TIMESTAMP_NTZ_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3",
          },
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
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_STAGE_ARRAY_BINDING_THRESHOLD", value: 65280 },
          {
            name: "CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY",
            value: 3600,
          },
          { name: "AUTOCOMMIT", value: true },
          { name: "CLIENT_SESSION_CLONE", value: false },
          { name: "TIMESTAMP_LTZ_OUTPUT_FORMAT", value: "" },
        ],
        rowtype: [
          {
            name: "COLUMN_NAME",
            database: "SAMPLE_SOURCES",
            schema: "INFORMATION_SCHEMA",
            table: "COLUMNS",
            byteLength: 16777216,
            scale: null,
            precision: null,
            type: "text",
            length: 16777216,
            collation: null,
            nullable: true,
          },
          {
            name: "DATA_TYPE",
            database: "SAMPLE_SOURCES",
            schema: "INFORMATION_SCHEMA",
            table: "COLUMNS",
            byteLength: 16777216,
            scale: null,
            precision: null,
            type: "text",
            length: 16777216,
            collation: null,
            nullable: true,
          },
        ],
        rowset: [
          ["STAMP", "TIMESTAMP_NTZ"],
          ["DATE", "DATE"],
          ["ID", "NUMBER"],
          ["AMOUNT", "FLOAT"],
          ["PURCHASE", "TEXT"],
          ["PROFILE_ID", "NUMBER"],
        ],
        total: 6,
        returned: 6,
        queryId: "019eafe3-0401-104e-0029-f7830019b56a",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1630615889761,
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
      "Thu, 02 Sep 2021 20:51:29 GMT",
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
      "3001",
      "Connection",
      "Close",
    ]
  );
