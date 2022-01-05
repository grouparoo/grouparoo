const nock = require("nock");

nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post("/session/v1/login-request", /1f8b08000000000000.+/)
  .query({
    requestId: /.+/g,
    warehouse: "COMPUTE_WH",
    databaseName: "SAMPLE_SOURCES_001",
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
        serverVersion: "5.45.0",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 11812616058680314,
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_TELEMETRY_SESSIONLESS_ENABLED", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
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
          databaseName: "SAMPLE_SOURCES_001",
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
      "Wed, 22 Dec 2021 22:35:15 GMT",
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
      "3918",
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_TELEMETRY_SESSIONLESS_ENABLED", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
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
            name: "COLUMN_NAME",
            database: "SAMPLE_SOURCES_001",
            schema: "INFORMATION_SCHEMA",
            table: "COLUMNS",
            byteLength: 16777216,
            scale: null,
            precision: null,
            type: "text",
            nullable: true,
            collation: null,
            length: 16777216,
          },
          {
            name: "DATA_TYPE",
            database: "SAMPLE_SOURCES_001",
            schema: "INFORMATION_SCHEMA",
            table: "COLUMNS",
            byteLength: 16777216,
            scale: null,
            precision: null,
            type: "text",
            nullable: true,
            collation: null,
            length: 16777216,
          },
        ],
        rowset: [
          ["PROFILE_ID", "NUMBER"],
          ["STAMP", "TIMESTAMP_NTZ"],
          ["ID", "NUMBER"],
          ["DATE", "DATE"],
          ["PURCHASE", "TEXT"],
          ["AMOUNT", "FLOAT"],
        ],
        total: 6,
        returned: 6,
        queryId: "01a120ab-0601-8417-0029-f783001dd9d6",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES_001",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1640212518666,
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
      "Wed, 22 Dec 2021 22:35:18 GMT",
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
      "3074",
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_TELEMETRY_SESSIONLESS_ENABLED", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
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
            name: "ID",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: 0,
            precision: 38,
            type: "fixed",
            length: null,
            byteLength: null,
            nullable: false,
            collation: null,
          },
          {
            name: "PROFILE_ID",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: 0,
            precision: 38,
            type: "fixed",
            length: null,
            byteLength: null,
            nullable: true,
            collation: null,
          },
          {
            name: "PURCHASE",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: null,
            precision: null,
            type: "text",
            length: 16777216,
            byteLength: 16777216,
            nullable: true,
            collation: null,
          },
          {
            name: "AMOUNT",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: null,
            precision: null,
            type: "real",
            length: null,
            byteLength: null,
            nullable: true,
            collation: null,
          },
          {
            name: "DATE",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: null,
            precision: null,
            type: "date",
            length: null,
            byteLength: null,
            nullable: true,
            collation: null,
          },
          {
            name: "STAMP",
            database: "SAMPLE_SOURCES_001",
            schema: "PUBLIC",
            table: "PURCHASES",
            scale: 9,
            precision: 0,
            type: "timestamp_ntz",
            length: null,
            byteLength: null,
            nullable: true,
            collation: null,
          },
        ],
        rowset: [
          ["1", "1", "Apple", "1.54", "18293", "1580559194.000000000"],
          ["2", "2", "Pear", "0.78", "18294", "1580645594.000000000"],
          ["3", "3", "Strawberry", "2", "18295", "1580731994.500000000"],
          ["4", "4", "Blueberry", "2.23", "18296", "1580818394.560000000"],
          ["5", "5", "Apple", "3.14", "18297", "1580904794.567000000"],
          ["6", "1", "Orange", "1.42", "18298", "1580991194.567800000"],
          ["7", "2", "Apple", "1.54", "18299", "1581077594.567890000"],
          ["8", "3", "Apple", "1.54", "18300", "1581163994.000000000"],
          ["9", "4", "Pear", "0.78", "18301", "1581250394.000000000"],
          ["10", "5", "Strawberry", "2", "18302", "1581336794.000000000"],
        ],
        total: 10,
        returned: 10,
        queryId: "01a120ab-0601-8417-0029-f783001dd9f2",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES_001",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1640212518792,
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
      "Wed, 22 Dec 2021 22:35:18 GMT",
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
      "4274",
      "Connection",
      "Close",
    ]
  );
