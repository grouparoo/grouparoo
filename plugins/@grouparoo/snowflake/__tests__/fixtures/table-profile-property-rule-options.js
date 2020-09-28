const nock = require("nock");

nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/session/v1/login-request",
    "1f8b0800000000000013558ecb0e82301045ff65d68404910dbba64c4c09b44d0bb86c1a51236e8c125fa4ffee74618cbbc9b98fb90b8c7ef6502ec03857bdec9c642d4209cfd73b5be5eb021268d446c82faf2b85c434b376ab4c45e47c9b0ed3fef81809f346207530ad9d885aedefdeeeaea7cbfc2f0e68ac50921c595aa4f94f443908a3644b771ca5b8d5ae5555fc2ca445de1b849080451bf34e3343b33a6a237708e1039f6be621cf000000"
  )
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
        serverVersion: "4.31.3",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 180246250145,
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
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
          databaseName: "SAMPLE_SOURCES",
          schemaName: "PUBLIC",
          warehouseName: "COMPUTE_WH",
          roleName: "SYSADMIN",
        },
        idToken: null,
        idTokenValidityInSeconds: 0,
        responseData: null,
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
      "Mon, 28 Sep 2020 23:03:23 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "3631",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    "1f8b0800000000000013ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51d052700bf2f75588510a080d72f6700c760d8e5152f0f1f4f50c51303450d2514acacc4bc9cc4b079a505d5b0b00d39a9a365d000000"
  )
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
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
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "fixed",
            scale: 0,
            precision: 38,
            nullable: false,
            collation: null,
            length: null,
          },
          {
            name: "PROFILE_ID",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "fixed",
            scale: 0,
            precision: 38,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "PURCHASE",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: 16777216,
            type: "text",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: 16777216,
          },
          {
            name: "AMOUNT",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "real",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "DATE",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "date",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "STAMP",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "timestamp_ntz",
            scale: 9,
            precision: 0,
            nullable: true,
            collation: null,
            length: null,
          },
        ],
        rowset: [
          ["1", "1", "Apple", "1.54", "18293", "1580559194.000000000"],
          ["2", "2", "Pear", "0.78", "18294", "1580645594.000000000"],
          ["3", "3", "Strawberry", "2", "18295", "1580731994.000000000"],
          ["4", "4", "Blueberry", "2.23", "18296", "1580818394.000000000"],
          ["5", "5", "Apple", "3.14", "18297", "1580904794.000000000"],
          ["6", "1", "Orange", "1.42", "18298", "1580991194.000000000"],
          ["7", "2", "Apple", "1.54", "18299", "1581077594.000000000"],
          ["8", "3", "Apple", "1.54", "18300", "1581163994.000000000"],
          ["9", "4", "Pear", "0.78", "18301", "1581250394.000000000"],
          ["10", "5", "Strawberry", "2", "18302", "1581336794.000000000"],
        ],
        total: 10,
        returned: 10,
        queryId: "01973d87-0484-7f37-0000-0029f783b4d5",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1601334204272,
        queryResultFormat: "json",
      },
      code: null,
      message: null,
      success: true,
    },
    [
      "Content-Type",
      "application/json",
      "Date",
      "Mon, 28 Sep 2020 23:03:24 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "4118",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/session/v1/login-request",
    "1f8b0800000000000013558ecb0e82301045ff65d68404910dbba64c4c09b44d0bb86c1a51236e8c125fa4ffee74618cbbc9b98fb90b8c7ef6502ec03857bdec9c642d4209cfd73b5be5eb021268d446c82faf2b85c434b376ab4c45e47c9b0ed3fef81809f346207530ad9d885aedefdeeeaea7cbfc2f0e68ac50921c595aa4f94f443908a3644b771ca5b8d5ae5555fc2ca445de1b849080451bf34e3343b33a6a237708e1039f6be621cf000000"
  )
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
        serverVersion: "4.31.3",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 180246258289,
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
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
          databaseName: "SAMPLE_SOURCES",
          schemaName: "PUBLIC",
          warehouseName: "COMPUTE_WH",
          roleName: "SYSADMIN",
        },
        idToken: null,
        idTokenValidityInSeconds: 0,
        responseData: null,
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
      "Mon, 28 Sep 2020 23:03:24 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "3631",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/session/v1/login-request",
    "1f8b0800000000000013558ecb0e82301045ff65d68404910dbba64c4c09b44d0bb86c1a51236e8c125fa4ffee74618cbbc9b98fb90b8c7ef6502ec03857bdec9c642d4209cfd73b5be5eb021268d446c82faf2b85c434b376ab4c45e47c9b0ed3fef81809f346207530ad9d885aedefdeeeaea7cbfc2f0e68ac50921c595aa4f94f443908a3644b771ca5b8d5ae5555fc2ca445de1b849080451bf34e3343b33a6a237708e1039f6be621cf000000"
  )
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
        serverVersion: "4.31.3",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 180246258293,
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
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
          databaseName: "SAMPLE_SOURCES",
          schemaName: "PUBLIC",
          warehouseName: "COMPUTE_WH",
          roleName: "SYSADMIN",
        },
        idToken: null,
        idTokenValidityInSeconds: 0,
        responseData: null,
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
      "Mon, 28 Sep 2020 23:03:25 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "3631",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    "1f8b0800000000000013ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51d052700bf2f75588510a080d72f6700c760d8e5152f0f1f4f50c51303450d2514acacc4bc9cc4b079a505d5b0b00d39a9a365d000000"
  )
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
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
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
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "fixed",
            scale: 0,
            precision: 38,
            nullable: false,
            collation: null,
            length: null,
          },
          {
            name: "PROFILE_ID",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "fixed",
            scale: 0,
            precision: 38,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "PURCHASE",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: 16777216,
            type: "text",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: 16777216,
          },
          {
            name: "AMOUNT",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "real",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "DATE",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "date",
            scale: null,
            precision: null,
            nullable: true,
            collation: null,
            length: null,
          },
          {
            name: "STAMP",
            database: "SAMPLE_SOURCES",
            schema: "PUBLIC",
            table: "PURCHASES",
            byteLength: null,
            type: "timestamp_ntz",
            scale: 9,
            precision: 0,
            nullable: true,
            collation: null,
            length: null,
          },
        ],
        rowset: [
          ["1", "1", "Apple", "1.54", "18293", "1580559194.000000000"],
          ["2", "2", "Pear", "0.78", "18294", "1580645594.000000000"],
          ["3", "3", "Strawberry", "2", "18295", "1580731994.000000000"],
          ["4", "4", "Blueberry", "2.23", "18296", "1580818394.000000000"],
          ["5", "5", "Apple", "3.14", "18297", "1580904794.000000000"],
          ["6", "1", "Orange", "1.42", "18298", "1580991194.000000000"],
          ["7", "2", "Apple", "1.54", "18299", "1581077594.000000000"],
          ["8", "3", "Apple", "1.54", "18300", "1581163994.000000000"],
          ["9", "4", "Pear", "0.78", "18301", "1581250394.000000000"],
          ["10", "5", "Strawberry", "2", "18302", "1581336794.000000000"],
        ],
        total: 10,
        returned: 10,
        queryId: "01973d87-0497-ef05-0000-0029f783a529",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1601334205783,
        queryResultFormat: "json",
      },
      code: null,
      message: null,
      success: true,
    },
    [
      "Content-Type",
      "application/json",
      "Date",
      "Mon, 28 Sep 2020 23:03:25 GMT",
      "Expect-CT",
      "enforce, max-age=3600",
      "Strict-Transport-Security",
      "max-age=31536000",
      "Vary",
      "Accept-Encoding, User-Agent",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "deny",
      "X-XSS-Protection",
      ": 1; mode=block",
      "Content-Length",
      "4118",
      "Connection",
      "Close",
    ]
  );
