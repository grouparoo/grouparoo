const nock = require('nock');

nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246265873,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 18:31:40 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013258dd10a823018855f65fcd712782b74b1d62f0a6e1337a9ae4471d6688c621a85f8ee69dd1c389ceff0cdd0dbd076cec86170d61b769bfc3d4032b42e9808c2d369f31e21018505324d982c6a2e1a413946e448356df4a544925692935ca4b2e254e752348a65c8e9ee8f2b72cab042a2e9a1c0df97ec491243049df5bdf5d7553843bcc5f87998d5a6f1acd7f9d5ba69ab655db18c2a54b02ccb17124a2666b3000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"COLUMN_NAME","database":"SAMPLE_SOURCES","schema":"INFORMATION_SCHEMA","table":"COLUMNS","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"DATA_TYPE","database":"SAMPLE_SOURCES","schema":"INFORMATION_SCHEMA","table":"COLUMNS","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["STAMP","TIMESTAMP_NTZ"],["DATE","DATE"],["ID","NUMBER"],["AMOUNT","FLOAT"],["PURCHASE","TEXT"],["PROFILE_ID","NUMBER"]],"total":6,"returned":6,"queryId":"01973c77-04ea-bd80-0000-0029f783a289","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601317905959,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 18:31:45 GMT',
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
  '2934',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/queries/v1/query-request', "1f8b0800000000000013ab564ac92c4e4cca49f54f4bcbc9cc4b75ce28cdcb2e56b24a4bcc294ed5512a2ecc0949ad2851b2520a76f571750e51d052700bf2f75588510a080d72f6700c760d8e5152f0f1f4f50c51303450d2514acacc4bc9cc4b079a505d5b0b00d39a9a365d000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":null,"type":"fixed","scale":0,"precision":38,"nullable":false,"collation":null,"length":null},{"name":"PROFILE_ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":null,"type":"fixed","scale":0,"precision":38,"nullable":true,"collation":null,"length":null},{"name":"PURCHASE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"AMOUNT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":null,"type":"real","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":null,"type":"date","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PURCHASES","byteLength":null,"type":"timestamp_ntz","scale":9,"precision":0,"nullable":true,"collation":null,"length":null}],"rowset":[["1","1","Apple","1.54","18293","1580559194.000000000"],["2","2","Pear","0.78","18294","1580645594.000000000"],["3","3","Strawberry","2","18295","1580731994.000000000"],["4","4","Blueberry","2.23","18296","1580818394.000000000"],["5","5","Apple","3.14","18297","1580904794.000000000"],["6","1","Orange","1.42","18298","1580991194.000000000"],["7","2","Apple","1.54","18299","1581077594.000000000"],["8","3","Apple","1.54","18300","1581163994.000000000"],["9","4","Pear","0.78","18301","1581250394.000000000"],["10","5","Strawberry","2","18302","1581336794.000000000"]],"total":10,"returned":10,"queryId":"01973c77-0415-3b72-0000-0029f783d26d","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601317906316,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 18:31:46 GMT',
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
  '4118',
  'Connection',
  'Close'
]);