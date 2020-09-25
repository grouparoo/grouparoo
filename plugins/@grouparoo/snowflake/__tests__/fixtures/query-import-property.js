const nock = require('nock');

nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246245461,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:34 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b080000000000001305c1cb0a40501000d05f99666d63abac7465410a65a92b33998ceb3194927f77ce8b93981f956a669540d97c87c53061af4611daa11d3d1726d8bad2651db09c760dc1af04795357b09f1b8b92415fb8c6814c90428cdf0f76739e9b57000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","scale":null,"precision":null,"byteLength":16777216,"nullable":true,"collation":null,"length":16777216}],"rowset":[["Erie"]],"total":1,"returned":1,"queryId":"019728ca-0492-77c3-0000-0029f78344f5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015674984,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:34 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2591',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246220933,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:35 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b0800000000000013ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51c8292953700bf2f7552828ca4fcbcc492d5608f7700d7255c84c51b0553054aa0500666b6ca550000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"real","scale":null,"precision":null,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["259.12"]],"total":1,"returned":1,"queryId":"019728ca-044e-3f24-0000-0029f78344f9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015676165,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:36 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2578',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246245465,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:36 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b0800000000000013ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51c8cc2f8e4f2c2850700bf2f7552828ca4fcbcc492d5608f7700d7255c84c51b0553054aa0500435b21e254000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"019728ca-04d8-2855-0000-0029f7832525","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015676806,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:36 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2580',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246245469,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:37 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b080000000000001305c1410ac2301005d0ab0cb3e946c47541104ac48552a8059725ea0f8e4e929aa9a520deddf7be7c17f357451b824a42f3f8a497711dbc1a566c6fedb14c5cf3d91d5dd3539062d3907c04edbbf64463c94114469783eb1c217a51da528527ca9cc5363b2c3e8e8af52dc78a7f7fa9ce8bcd70000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["Erie"]],"total":1,"returned":1,"queryId":"019728ca-04e5-bc4a-0000-0029f783751d","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015677482,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:37 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2591',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246237297,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:38 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b080000000000001305c1c10a82401006e05719e6e225a2b31008b2d2a11054e8bce5bf3435eb9a632248efeef76ddc8bf987a20e416540f9fa0d1fe33c78351cd8beda619d39e7d65d5dd991ce0b554d7da3714a411446f78b6b1c217a513a538637a625899d0aac3e8e8ae333c58cff3b2b7c7f3269000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"real","scale":null,"precision":null,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["259.12"]],"total":1,"returned":1,"queryId":"019728ca-0417-9ae9-0000-0029f7836595","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015678373,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:38 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2578',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b0800000000000013558ecb0ac2301045ff65d6a5506b37dd85344a4a9b0949adcb10ac8a75235a7c95fcbb938588bbe19ccb9d3bc3e0270fe50c8c73dca8ce29d60a28e1f97a678b7c5940020daea5faf2ba42414c336bb7682a22e7db7818f7c7c7409837525007d3dac9e86a7ff776773d5da67fd90b63252a4a646991e63f29542f0daa96ee380ab9d5aec52a7e5e31d938d4424148c00a1b0b9c668676755447f110c2070d2883ffd0000000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246229069,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:38 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '3631',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b080000000000001305c1410ac2400c05d0ab846cba11715d280865c48552a8059712f50f46339db151298877f7bd2f5fd5e56ce862341dd1dedee3c3b98e628e05fbd306cc2faef91076a11d48b39fa414daf4dd9eca94a31a9c8edbd0074212356aa8c21dd327abafd6982515c3f29253c5bf3f9365116c6d000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"019728ca-0410-89c7-0000-0029f78334dd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601015679591,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 25 Sep 2020 06:34:39 GMT',
  'Expect-CT',
  'enforce, max-age=3600',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Vary',
  'Accept-Encoding, User-Agent',
  'X-Content-Type-Options',
  'nosniff',
  'X-Frame-Options',
  'deny',
  'X-XSS-Protection',
  ': 1; mode=block',
  'Content-Length',
  '2580',
  'Connection',
  'Close'
]);