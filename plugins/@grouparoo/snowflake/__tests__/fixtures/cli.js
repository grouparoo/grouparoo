const nock = require("nock");

nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/session/v1/login-request",
    /1f8b08000000000000.35591516f82301485ff4b9f5d430b8afa46b05930da12aaee9154600ed70101d44dc37fdf6d75d9f676cf39dfbdb9bdbda15cf50acd6f280843b1e59b94076b86e6e8f3eb4aa8eb8dd108adc473c47ffce54230f0e240ca17912cc079ef8eafc7e270c9c10e57118319411ca791c996eaac64d6964dff3fdcb14446820341f018bbbf21e3bb28117c0db559aaaaf3c2401e26143b809da720a7d8c3ae4f30993d1900930924a7b39de6ce2c77d5e5de6a8a0901bd6feb5e97d671f00c0cd5169d9564621b3eeafca4ad3535eb5487b7be6fa8253c62894a3566800fa5d6260501d33105a36e8aaaebf47d202607b0329db7a05ddf3697d909c4c4c76699fe6a5a1dea28b37755668f57ba161512ea5cb597b2b2eacfb1a8831f4c28e3742d16e647222e59b84d181a46483269d0340e12f8ae0d34c2158761f806cd5d1c5fe7010000/
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
        serverVersion: "5.4.1",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 11812616058232890,
        parameters: [
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
      "Fri, 19 Feb 2021 21:22:35 GMT",
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
      "3691",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    /1f8b08000000000000.3ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51d030d436d454482c5608710d0e51aa0500816b70973f000000/
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
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
            name: "TEST",
            database: "",
            schema: "",
            table: "",
            byteLength: null,
            scale: 0,
            precision: 2,
            type: "fixed",
            nullable: false,
            collation: null,
            length: null,
          },
        ],
        rowset: [["2"]],
        total: 1,
        returned: 1,
        queryId: "019a6722-05b2-dae5-0029-f7830014c056",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1613769755755,
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
      "Fri, 19 Feb 2021 21:22:35 GMT",
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
      "2542",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    /1f8b08000000000000.34d8dcb0a833014447fe572572d48c1add0451a22154c52344277a218353484b6d13e10ffbd8a9b6e661866863361637c555b2ddbd61aa7693fba9bc7a8adacd701fa8755fa336084394b1955406521d42ea767c6492908677b20398882439c490e898865c6894aa428b7d1613345e0ddeba786bfeb310a31c0dab8c6b86e614e18ae327cef7a012a76554bfdaaecb8c64b714a138af33cff00d448add2b3000000/
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
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
            name: "NUM",
            database: "",
            schema: "",
            table: "",
            byteLength: null,
            scale: 0,
            precision: 18,
            type: "fixed",
            nullable: false,
            collation: null,
            length: null,
          },
        ],
        rowset: [["1"]],
        total: 1,
        returned: 1,
        queryId: "019a6722-0577-2121-0029-f7830014c05a",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1613769758279,
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
      "Fri, 19 Feb 2021 21:22:38 GMT",
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
      "2542",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    /1f8b08000000000000.3258dcb0a833014447f25dc550b52702b741143a482498a89d09d2826353484b6d13e10ffbd5a3703c399e14cd0d9d0b44e0b639cf59af4a3bf05484ce3828e203c9cd29f011290b4a04421222aae760aa705ad3966748fb044bc62282b054339cf44c9b0ca05af253951860fffa944ef5e3f35da7e1b39263144d05adf597f5d8c13c46b0cdfbb5e748a5ed4825f8d1bd77aaed2222730cff30f5b597803b1000000/
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
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
            name: "NUM",
            database: "",
            schema: "",
            table: "",
            byteLength: null,
            scale: 0,
            precision: 18,
            type: "fixed",
            nullable: false,
            collation: null,
            length: null,
          },
        ],
        rowset: [["2"]],
        total: 1,
        returned: 1,
        queryId: "019a6722-059c-76ea-0029-f7830014c05e",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1613769759932,
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
      "Fri, 19 Feb 2021 21:22:39 GMT",
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
      "2542",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post("/session/logout-request")
  .once()
  .reply(200, { data: null, code: null, message: null, success: true }, [
    "Cache-Control",
    "no-cache, no-store",
    "Content-Type",
    "application/json",
    "Date",
    "Fri, 19 Feb 2021 21:22:40 GMT",
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
    "76",
    "Connection",
    "Close",
  ]);
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/session/v1/login-request",
    /1f8b08000000000000.35591516f82301485ff4b9f5d430b8afa46b05930da12aaee9154600ed70101d44dc37fdf6d75d9f676cf39dfbdb9bdbda15cf50acd6f280843b1e59b94076b86e6e8f3eb4aa8eb8dd108adc473c47ffce54230f0e240ca17912cc079ef8eafc7e270c9c10e57118319411ca791c996eaac64d6964dff3fdcb14446820341f018bbbf21e3bb28117c0db559aaaaf3c2401e26143b809da720a7d8c3ae4f30993d1900930924a7b39de6ce2c77d5e5de6a8a0901bd6feb5e97d671f00c0cd5169d9564621b3eeafca4ad3535eb5487b7be6fa8253c62894a3566800fa5d6260501d33105a36e8aaaebf47d202607b0329db7a05ddf3697d909c4c4c76699fe6a5a1dea28b37755668f57ba161512ea5cb597b2b2eacfb1a8831f4c28e3742d16e647222e59b84d181a46483269d0340e12f8ae0d34c2158761f806cd5d1c5fe7010000/
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
        serverVersion: "5.4.1",
        firstLogin: false,
        remMeToken: null,
        remMeValidityInSeconds: 0,
        healthCheckInterval: 45,
        newClientForUpgrade: null,
        sessionId: 11812616058232894,
        parameters: [
          { name: "CLIENT_PREFETCH_THREADS", value: 4 },
          {
            name: "TIMESTAMP_OUTPUT_FORMAT",
            value: "YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM",
          },
          { name: "JS_TREAT_INTEGER_AS_BIGINT", value: false },
          { name: "TIME_OUTPUT_FORMAT", value: "HH24:MI:SS" },
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
      "Fri, 19 Feb 2021 21:22:40 GMT",
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
      "3691",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    /1f8b08000000000000.32d8dd10a823018465f65fcd712782b7431c72f0ace855bd49d28ce1a8d514ca390bd7bb3baf9e0e31c382b8cc6f783d5629aac719a5d1777f3904dbdf53a01ffb04abf66c840628d4c1145f31abb867224452b38a99a42b49caa4a349d642572bafb2a929c4a6cf1efff08d9932c850406e346e32eb1b242bacdfcbeeb98507856113f7bbb6cf770cceb8a4108e103d25028bba5000000/
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
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
            name: "TABLE_NAME",
            database: "SAMPLE_SOURCES",
            schema: "INFORMATION_SCHEMA",
            table: "TABLES",
            byteLength: 16777216,
            scale: null,
            precision: null,
            type: "text",
            nullable: true,
            collation: null,
            length: 16777216,
          },
        ],
        rowset: [["PROFILES"], ["PURCHASES"]],
        total: 2,
        returned: 2,
        queryId: "019a6722-0527-8288-0029-f7830014c062",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1613769762300,
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
      "Fri, 19 Feb 2021 21:22:42 GMT",
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
      "2620",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post(
    "/queries/v1/query-request",
    /1f8b08000000000000.3258d5d0b82301885ffca78af25f056e862ad5714f62173515d89d2acd118c5340af1bfa77573e0709ec333c1c5c5b6f356f5bd77c1b2db18ee11b2bef5d126109fded8f70019d4c89119c2143f08d9482a30217b6a6863ce15925c2b414a992b2da829956c6a56a0a09b3f5e9363811a89a13b8ebf2fd9922c85043a172e2e5c17e104e91ac3e761179bc19359e657ebc7b5565ae525c71ae679fe029bbed6bdb2000000/
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
          { name: "TIMESTAMP_TZ_OUTPUT_FORMAT", value: "" },
          { name: "CLIENT_RESULT_CHUNK_SIZE", value: 160 },
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
          { name: "CLIENT_DISABLE_INCIDENTS", value: true },
          { name: "CLIENT_USE_V1_QUERY_API", value: true },
          { name: "CLIENT_RESULT_COLUMN_CASE_INSENSITIVE", value: false },
          { name: "BINARY_OUTPUT_FORMAT", value: "HEX" },
          { name: "CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS", value: false },
          { name: "JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS", value: false },
          { name: "CLIENT_CONSENT_CACHE_ID_TOKEN", value: false },
          { name: "CLIENT_FORCE_PROTECT_ID_TOKEN", value: true },
          { name: "DATE_OUTPUT_FORMAT", value: "YYYY-MM-DD" },
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
            precision: null,
            scale: null,
            type: "text",
            collation: null,
            nullable: true,
            length: 16777216,
          },
          {
            name: "DATA_TYPE",
            database: "SAMPLE_SOURCES",
            schema: "INFORMATION_SCHEMA",
            table: "COLUMNS",
            byteLength: 16777216,
            precision: null,
            scale: null,
            type: "text",
            collation: null,
            nullable: true,
            length: 16777216,
          },
        ],
        rowset: [
          ["ANDROID_APP", "BOOLEAN"],
          ["VIP", "BOOLEAN"],
          ["LTV", "FLOAT"],
          ["FIRST_NAME", "TEXT"],
          ["IOS_APP", "BOOLEAN"],
          ["LAST_NAME", "TEXT"],
          ["DATE", "DATE"],
          ["GENDER", "TEXT"],
          ["EMAIL", "TEXT"],
          ["ID", "NUMBER"],
          ["IP_ADDRESS", "TEXT"],
          ["STAMP", "TIMESTAMP_NTZ"],
        ],
        total: 12,
        returned: 12,
        queryId: "019a6722-05ed-53db-0029-f7830014b04a",
        databaseProvider: null,
        finalDatabaseName: "SAMPLE_SOURCES",
        finalSchemaName: "PUBLIC",
        finalWarehouseName: "COMPUTE_WH",
        finalRoleName: "SYSADMIN",
        numberOfBinds: 0,
        arrayBindSupported: false,
        statementTypeId: 4096,
        version: 1,
        sendResultTime: 1613769763127,
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
      "Fri, 19 Feb 2021 21:22:43 GMT",
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
      "3061",
      "Connection",
      "Close",
    ]
  );
nock("https://xyz12345.us-east-1.snowflakecomputing.com:443", {
  encodedQueryParams: true,
})
  .post("/session/logout-request")
  .once()
  .reply(200, { data: null, code: null, message: null, success: true }, [
    "Cache-Control",
    "no-cache, no-store",
    "Content-Type",
    "application/json",
    "Date",
    "Fri, 19 Feb 2021 21:22:43 GMT",
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
    "76",
    "Connection",
    "Close",
  ]);
