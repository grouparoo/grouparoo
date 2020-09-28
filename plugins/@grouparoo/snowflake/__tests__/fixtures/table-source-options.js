const nock = require('nock');

nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249533,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 20:26:06 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000132d8dd10a823018465f65fcd712782b7431c72f0ace855bd49d28ce1a8d514ca390bd7bb3baf9e0e31c382b8cc6f783d5629aac719a5d1777f3904dbdf53a01ffb04abf66c840628d4c1145f31abb867224452b38a99a42b49caa4a349d642572bafb2a929c4a6cf1efff08d9932c850406e346e32eb1b242bacdfcbeeb98507856113f7bbb6cf770cceb8a4108e103d25028bba5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"TABLE_NAME","database":"SAMPLE_SOURCES","schema":"INFORMATION_SCHEMA","table":"TABLES","type":"text","scale":null,"precision":null,"byteLength":16777216,"nullable":true,"collation":null,"length":16777216}],"rowset":[["PROFILES"],["PURCHASES"]],"total":2,"returned":2,"queryId":"01973cea-0412-3df0-0000-0029f783c2b9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601324772533,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 20:26:12 GMT',
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
  '2620',
  'Connection',
  'Close'
]);