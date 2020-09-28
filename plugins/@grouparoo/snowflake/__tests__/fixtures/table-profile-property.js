const nock = require('nock');

nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249737,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:30 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10ac23014457fe5f16697ac0507695f30905a49223a144a4a530d86a0a415a5f4df4d970be79ee12c38f864fbe09a710c3ebaf231c767c262b421b91da67730ee3b61819a2495065ae44269d39d0e35b5083641d729d2176980aba6cefeac1a2e24e96caf475204f91355a63d140ca4a88501863bec7d1c7cbce7d6826c9be9f77239c4c58daaec3f36cc1b335cd7f50ff31ee3d9a7000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["Erie"]],"total":1,"returned":1,"queryId":"01973d5c-04ff-a51c-0000-0029f78383cd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331631050,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:31 GMT',
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
  '2589',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266165,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:31 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dcb0a833010457f6598b59b6c85ae74a4818825a68f852011631b1a424bb4b488ffde7173e1dcb3382b8e3ed921b8669a828fae782cf199309f6c482ec3f40ec67d67ccb1254585810e95b974083641df6b6acfca40a59b9ac549379554d4b2bd1e4913f0274ba603e40294aca50181190e3e8e3ede39b2a2d867febd1c172a79a392fdc786656781dbb6fd0193fb4210a0000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","scale":null,"precision":null,"byteLength":null,"type":"real","collation":null,"nullable":true,"length":null}],"rowset":[["259.12"]],"total":1,"returned":1,"queryId":"01973d5c-04c6-f33c-0000-0029f783d37d","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331632060,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:32 GMT',
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
  '2583',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266169,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:32 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dc10a833010057f65d9732fb90a3d145d6920124952da832011631b1a424bb4b488ffde7879300c8f5971f4c90ec1c9690a3ebaf2b1c467c262b221b903a67730ee3b63819a0495063ae452f7a7b6ed106c82be57a42fc240ad649365ab64cd05e96caf675204fba1ca74848281e00d37c0f080838fa38ff71c5a91ed33ff5e2e576a7ea32afb8f0dcbce0cb76dfb030479dd7ba4000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5c-04fd-d359-0000-0029f783a3e1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331632763,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:32 GMT',
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
  '2581',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249741,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:33 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dc10a833010057f65d9b3975c851e8aae3410b1c494f62048c4d88686d0122d2de2bf77bd3c9837875971f4c90ec135d3147c74c56389cf84f964437219a67730ee3b638e2d292a0c74581e0d75083641df6b6a2fca40a59b9acd59379554d4b2bd9e4813f0274ba603e40294aca50181190e3e8e3edeb9b2a2d867febd1c272a79a392fdc786656781dbb6fd0120de5f05a1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","scale":null,"precision":null,"byteLength":null,"type":"date","collation":null,"nullable":true,"length":null}],"rowset":[["18293"]],"total":1,"returned":1,"queryId":"01973d5c-044a-b6a6-0000-0029f783d381","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331633410,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:33 GMT',
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
  '2582',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257937,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:34 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f16697ac4287a29106224a92d20e82448c35348496686911ffbdcfe5c2b967381b8e3ed921b8669a828fae98d7f84c984f362497617a07e3be0be6a8b9e485810eb539d76d876013f4bde2fa2a0d54aaa949b5aaa984e49aecedc21507fa444974829c8114b530c030c3c1c7d1c707653664c72cbf97a34625eebc24ffb1613d98e1beef7faa1ae70ea2000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"timestamp_ntz","scale":9,"precision":0,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1580559194.000000000"]],"total":1,"returned":1,"queryId":"01973d5c-0445-f4fa-0000-0029f783d385","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331634446,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:34 GMT',
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
  '2600',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257941,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:34 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dcd0a824014465f65b86b89dc0a4122571a1833c6895a0432e6b5a6c69f9a94227cf7a6cd07df398bf385da385d59ca9bc69a8e92ebd8dd1d448db68e02700fabe8fd82080a149828768294cb4295db38c31330ed58594a2cf642b154e699f73b99a75c60e1ed618312996798c55c78b06251c804cfb86221045099ae36ddc5e7be10fee7f519c8b7141e95d793b6e3ffd28d9e536fdc724d6fdd0e9616e7be85799e7f0ab546f5bd000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["Erie"]],"total":1,"returned":1,"queryId":"01973d5c-0453-ff9a-0000-0029f78393e1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331635126,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:35 GMT',
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
  '2589',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257945,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:35 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158d5d0b82301846ffca78af25f256080a99244c8cb93e2e0499f95aab39ada918e27f6fde3cf09c737166a89495a5c6b4aeb532183e07f3b610d4525bf4c07eb4c0a9870032ca6828480e4c5c7220d292a2e0343b3341229e264e9c781ac58c66ce5e8f9453e2184d0e31736047029fb0388905f1c18352994a9987ebcce0afd3ff3a7411416fc2e951ea61bdf8c2efd82abbdde3249b4ee3e6de36b02ccb1f65f41e76b6000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"real","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["259.12"]],"total":1,"returned":1,"queryId":"01973d5c-045b-cf4e-0000-0029f78383d1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331635791,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:35 GMT',
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
  '2583',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257949,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:36 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158d5d0b82301846ffca78af25f25608129934984c74511782cc7cadd5fca89918e27f6fde3cf09c737116a8b5559541d1344677183dbeddcb42d02863d103fb3612e71102c829a7912405309197619a164094256599d1fccc2589339138996622669ce6ce5e4e34a3c4319a848c3b7020814f384b98243e7850e9aed6ddddb516f0b7197f03ba90a457e9f4a4cc77bbf8c4cfd46bbb3fe2acdac1e0eed6b7b0aeeb1f4dc77915ba000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5c-0493-367d-0000-0029f78383d5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331636573,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:36 GMT',
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
  '2581',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262053,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:37 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dcd0a824014465f65b86b89dc0a41625712460c9da88520635e6b6afca94931c4776fdc7cf09db3383354cac8525352d75ab5143c86f665c0aba536e480796b41d3173cc8906320580e075f600e4c1a56142966672e589826b135a73409238e99b59723a6c82cc3d88fb8053be6b98c477124980b0e94aaad547bb7a119dc75bebf9e6c45e055583d4a3dac979ef4193b65b67b9a64d36bdadcba069665f903ad795740b7000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"date","scale":null,"precision":null,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["18293"]],"total":1,"returned":1,"queryId":"01973d5c-0495-8e29-0000-0029f78393e5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331637463,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:37 GMT',
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
  '2582',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257953,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:38 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158dd10a823018465f65fcd712792b04894c12268a5bd48520337f6b35a73513437cf7e6cd07df391767814659596bccda562b83d1e36b5e1682566a8b1ed8b716388f1000a78c468294c04598e6251069495515949f99207191a54ee54516278c72672f275a50e2184dc384397020814f58922682f8e041ad4ca3ccdd9516f0b7197f03ba8ca057e1f424f577bbf8c4cfd42bbb3fe22cbb41e3eed677b0aeeb1f97f5e5eab8000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","scale":9,"precision":0,"byteLength":null,"type":"timestamp_ntz","collation":null,"nullable":true,"length":null}],"rowset":[["1580559194.000000000"]],"total":1,"returned":1,"queryId":"01973d5c-049e-799e-0000-0029f78383d9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331638531,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:38 GMT',
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
  '2600',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270201,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:39 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158ec10a824014457fe5f156092e722bb490f1590363133363b510c4702c699062340af1dfd3cd857bcee2de099bced7376765dbbaaeb7ec31f64f8f715b3b6f43f46f67ec77c01835096206984c0469469be4bcdf9498e4b2389a128310b601d41eaa4a912e84814cc91c4a3c158a1d124dba44b81c4811ac50c98c0baa78bad01dc411089e7303118678ebfaa6ebefcb8509a33586dfcb2efb19bf52baf84fedc6b54738cff31fa81579cbbe000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":null,"precision":null,"type":"real","nullable":false,"collation":null,"length":null}],"rowset":[["1.73"]],"total":1,"returned":1,"queryId":"01973d5c-0487-06aa-0000-0029f783a3e5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331639571,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:39 GMT',
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
  '2554',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253809,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:40 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165c5c850e122306625392483b08a218dbd0105aa2a545fcf79ae572efb9c35971b4a11f9c11d3e4ac37e4b1f867c06cea5d300986b7d3e63b63868a724a3410d19cf5a1c5bc8ea5c523f401ba4e52d5700da51435b4786924a97245558b70ada8a410a11425e3b463c54e4f90a5c059cd34a498e060fd68fd7df7ae98c6987f2fb34b4b76a3c5fe7f7ab7c49de2b66d7f57fd3269b3000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["6"]],"total":1,"returned":1,"queryId":"01973d5c-048b-1597-0000-0029f78383dd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331641198,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:41 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266173,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:41 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158ec10a833010447f65d99382877a157a90b8d2406c4a12690f8228c6561aa4255a5ac47faf5e06e6bdc3cc82dde09bd659d9f76e182d7bcce3d363d237cedb08fddb19fb9d30414d8298012653419a51a0cb22a8302d6479361586111c42683cd4b5225d0a03b99205547829153ba59a7485703d9122d8a192391754f36ca347486210bce006628cb01dc66e18efdb8505e33da6dfcb6efb39bf51b6f94fe3e6bdc7b8aeeb1fe1659a14be000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"real","scale":null,"precision":null,"nullable":false,"collation":null,"length":null}],"rowset":[["10.38"]],"total":1,"returned":1,"queryId":"01973d5c-049b-8193-0000-0029f78393e9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331641814,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:41 GMT',
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
  '2555',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262057,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:42 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165cb20a1d449f1888a62491760888d2d84a83b4444b8bf8efd5e5c23d67380bde86d076dec9bef7c3e8d2c73c3e03c67deb838b30bcbd71df0963d424283550f2ea603129655d198b476803348d225d0b03b99225583cd72a2d124dda225c0a52043b5432e7821a9e6df4043103c14b6e806184dd30de86f1be551764fb4cbf97db9239bf52b6f94febe7fd335cd7f50f3e27269db1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"real","scale":null,"precision":null,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["1.42"]],"total":1,"returned":1,"queryId":"01973d5c-04a8-64b5-0000-0029f783c3c9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331644417,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:44 GMT',
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
  '2553',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253813,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:44 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165c5c850ea24f0cc4a624913a0812696ca5415aa2a545fcf7c6e5c23d67382bde466f7a67c530b871b2d963999e1e93c1386f23f46fa7ed77c6041571ca345469736831ad447dd62d1ec178e83a49aae61a0a292a68f152cbac4c15a916e15a9224d8a11405e3d4b13cd01324317056310d3146d88fd36d9ceea1ba62bccffc7bd9902c584379f01fe396fdc7b86ddb1fd3253d70b1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":null,"precision":null,"type":"real","nullable":true,"collation":null,"length":null}],"rowset":[["2.23"]],"total":1,"returned":1,"queryId":"01973d5c-04d7-d904-0000-0029f78393ed","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331645310,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:45 GMT',
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
  '2553',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270205,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:46 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165c5c850ea24f0cc4a6249176104431b6a121b4444b8bf8efd5e5c23d67380b0e3674bd33621c9df5267bccfe1930193b174c84e1edb4f94e98a0224e99864cd4677d68304f353578842e40db4a5235d75048514183975a6665aa483508d79224c10ea52818a796e51b3d4112036715d3106384bdf583f5f7adba60bccff47b992d59b01be59bff746ede7f8cebbafe01a07abafeb1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["6"]],"total":1,"returned":1,"queryId":"01973d5c-0420-fc63-0000-0029f78383e1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331647013,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:47 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257957,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:47 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165c5c850ea24f0cc45a92483b044431b6d2105aa2a545fcf7c6e5c23d67382b0e93ef7a6bea71b49333d963714f8fc9d8596f22f46fabcc77c6042571ca1454ec7cd098a78a341ea1f3d0b68264c31514a2ae40e3a51159994a921ae15a9220d8a1a80bc6a96579a0274862e0ac620a628cb09fdc30b97b68ae18ef33ff5e26040b76a33cf84f6797fdc7b86ddb1fdfc1ee2baf000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"date","scale":null,"precision":null,"byteLength":null,"nullable":true,"collation":null,"length":null}],"rowset":[["18293"]],"total":1,"returned":1,"queryId":"01973d5c-047e-5334-0000-0029f783b3a5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331648615,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:48 GMT',
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
  '2554',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262061,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:49 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013158db10a833014457fe5f1a6165c5c850ea24f0c442c31528780448cad348496686911ffbd71b970cf19ce86e3ecf5604d3d4d7676267baceee93199b4f52642ffb6d27c174cb0214e99842aed4e0af35492c233680f7d2fa869b98442d41528bcb6222bd3861a85702b49101c50d405e3d4b33cd00b243170563109314638cc6e9cdd3d34378c8f597e2f138205eb280ffea3ed7afc18f77dff03bd352316af000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"date","scale":null,"precision":null,"nullable":true,"collation":null,"length":null}],"rowset":[["18312"]],"total":1,"returned":1,"queryId":"01973d5c-041b-c90b-0000-0029f78383e5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331650199,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:50 GMT',
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
  '2554',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249745,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:51 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebb0a834010457f65982a011b8534420ad111177c847525168228ae89649184d59020fe7bdc226073997bce1477c16ed04dab64d6f76a18a57f9fc78746b76f949616ea9712f233a18b39c5e40bf0b32215870abdc41c151ea1d150d79cf2221610f22c810a2f05f7232fa7bc42b846c4090ce459c862aa59b0d133b836786960c41f3810b38409b0d1c27618bb61bc6d4316b44d4cdfa7dc5684aca460f3ef46cda6dbb85ae8ec1e049562ef4fb8aeeb0fadbf577ce5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5c-0420-966a-0000-0029f783c3cd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331651733,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:51 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257961,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:52 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d8514a22b1ef813ce935808a2782692430ca72141eedda3a4b11966be996256ec06ddb44a667daf8651fa8f657c6a74fb466969a17e29213f33ba98534cbe003f2b5271aad04b7653e1191a0d75cd292f620121cf12a8f05a703ff272ca2b845b449c60873c0b594c350b367a01d7062f0de0b0fe630762963001365ad80e63378cf7edce8af62ef37792db979095146cfdbb51cb9e6d34163a8781a0521c7a6f9a944463cc0f9d238a48ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":0,"precision":18,"type":"fixed","nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5c-0439-6abb-0000-0029f78393f1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331652496,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:52 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253817,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:53 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d8514a22b1ef813ce93580872e299480e319c8604f1dda3a4b11966be9962166c7b231badb2aed3fda0fcc73c3c0dba9dd44659685e5aa8cf842ee614932fc0cf8a549c2af492dd54780669a0ae39e5452c20e45902155e0bee475e4e7985708b8813ec9067218ba966c1462fe0dae0a5011cd67fec40cc1226c0460b9b7e68fbe1bedd59d0de65fa8e6afb12b29282ad7f4b3defd9c6d542e73010548a432fc7512b5cd7f5073ea17bcaee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["0"]],"total":1,"returned":1,"queryId":"01973d5c-04fd-8a4b-0000-0029f78393f5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331653562,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:53 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262065,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:53 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30a7020377a18bd04174a405cd5857ea2088d15ad222c56a14e17fcfa54b97c7bcef9bc3fbe0b9b3cdc9e8bc6d4dd7ebe83af6378b41db18ab3db40fa3f46bc0000b4a295210e5e54e2d2a0c337754b884c6425d4b2aca544122f30c2adc9732da86051515c2614b92c041992722a55ac433dd40c020dcc54ec4a1a21fe2908a4c2860e8e1a9ebcf5d7f99a77c90b918de773def48c491e2d93f1b33bace70f290ff3d283aaa3fcf7deeaf7cbe626b9ca6e90b3dcd4c15ef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5c-045b-6ce0-0000-0029f783a3e9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331654339,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:54 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253821,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:54 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e418bc2301085ffca3027850a4d5c2f813d94768a81d64a92a28742a9986a31945da28b8bf4bf6fc35ebc3ce67ddf1cde0bcf83ef4ece567def86d1a6d7c778f328face791ba1ff76c63eef28505341a981b4aa7766d1605286a3c125741eda5691ae0b03b9aa4a68705fab749b68d20dc2614b8a204055e5b2a0566633fd04c120d96541689394fb7fc6a190a534c030c2d3309e87f1326f79210b71fffdb2f3905c1e299bfd4fe71ea1339c22e46f0f868ee6cdf398c7ab98afd80618176c2dd8074ed3f4070340d61af9000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5c-04f7-6cc4-0000-0029f783b3a9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331655007,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:55 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249749,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:55 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec10a824010865f6598538104465d840ea2232d68c6ba920741565c4b5aa4d88c427cf7dc43e065f8e7fb86e11fb1e98cacb54adb5677bd0a6e437f37e8b5521be5a0796aa13e2ff430a3980201419a9fc4aa443fb1a1c435480355c529cb6301114f1328f19cf3e0e867949508972371020b791ab1982a16cef4009e0bfe29b4e2ffcac22dc42c61025c74b0eefaa6ebaf7399115d3b5edf879a9b44aca070f66fa907bbbb3839b85d1c082ac4d26ff63b9ca6e90737dcc5a1eb000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":0,"precision":18,"type":"fixed","nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5c-0431-be57-0000-0029f78393f9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331655924,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:55 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249753,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:56 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca34a7022f065d840ea2232e68c6ba520741565c4b5aa4588d22fcefed76eaf298f77d73781fec06235bad8abed7c3a8a2eb3cde0c06bdd44679681e5aa8d7840196945124202aaa8358d718e6eea87103d240d3702aab4c40c28b1c6a3c563c4ac392ca1ae194122770901709cba861b1a57b087c080fb1133fb0b2640b19cb99001f3d6c87b11bc68b5df241dfc5f4be2b3b2361678aad7f4a3dbbeee3e2e1f6ef41d059fcfb1d2ecbf205224e8dc8e6000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":0,"precision":18,"type":"fixed","nullable":false,"collation":null,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5c-04ea-7b7a-0000-0029f783b3ad","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331656791,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:56 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249757,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:57 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65b35502365a0a2944573cf0279c27b11044f14c2487184e4382f8ee393b9b61e69b2966c56ed04dab64d6f76a18a5ff5cc69746b76f949616eab712f23ba38b39c5e40bf0b32215e70abd6437155ea0d150d79cf2221610f22c810a6f05f7232fa7bc42b847c40976c8b390c554b3c0d02bb83678690087b5c127c31d8859c204d868613b8cdd303ecc9f15ed5de6df24cd9990951498fed3a865cf366e163a8781a0521c7a6f9a94c46ddbfe0ee5a0e1ef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5c-04a7-122a-0000-0029f783c3d1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331658911,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:58 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249761,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:59 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401484ffcaeb9d0abce851e820faa48555635da983202bad252d62ac4611fef7d69b9761e69b39cc0f6fbd55add145d7997ed0f1631e9e16c34e19ab3db42f23f567c2104be2144b888b2a97fb1aa36c35351e4059681a4165c525a4a2c8a0c67325e253545259235c4e240856288a94716a58e2e811421fa23c81cddae19de301709631093e7ad8f6c3ad1feeeecf0ffd55a6efa8dd99945d2971fd5b9979cd3e2e1e069b81a4abdcf46a1c8dc66559fead675163ef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["6"]],"total":1,"returned":1,"queryId":"01973d5c-0429-d29f-0000-0029f78383e9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331659629,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:20:59 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262069,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:00 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca34a7020377a18bd04174a405cd5857ea2088d15ad222c55614e17f6ff7d6e531effbe6f0be781a6c7734baec7b338c3ab93cc7abc5a8ef8cd501dabb51fafdc0082bca29519094f556cd1b8c0b7f34b880ce42db4aaaea5c4126cb021adcd532d9c415550dc27e4392c043596622a756a48eae2162106f532fd258914333c738e4a2100a1806781cc6d3309edd962f321f8fcf4dbb21993850eafcab334fdf194e01f2bf074507f5e779c8c365c8976c85d334fd000e7ed2d6f0000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5d-04f5-41e1-0000-0029f783c3d5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331666294,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:06 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257965,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:06 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f65b3a7061cb0d4f422e8c1d86b22b0e320c92407837188dc9a0ad3a0a4b404ff7ba55b2ec3ce7b7b98075e263f9c9d6dc6d14db3cd3feff39747310ecedb04fdd519fb7b43819a2aca0de44dbb372f1d66753c3a5cc3e0a1ef15e9b63250aaa6860e0fadca779926dd211c77a40822544d292bea6511e83b0806d9be88429bac3e04b60a9043256b69806182e769be4cf34718f34016e3f6f76dc392529ea808fe6770f7d8192e09f2a7074327f3e479cad34dca37ec0d1817ec55b02d2ecbf20ff231e6f9fa000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5d-04c2-08cf-0000-0029f783b3b1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331667178,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:07 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253825,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:08 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec10a824010865f659a538104465d840ea2232e68c6ba52074114d7921629b6a210dfbddd43e065f8e7fb86e11fb1ed75dd2899759dea07195c5fc34da3d7d54a4b07f54309f979a2873925140808b2e2209625faa90d25aea0d650559cf2221110f12c85128f050f623fa7bc4438c5c4092ce459c412aa5868e81e3c17fc4368c5ff152c0cdd40c25226c045079b7e68fbe162da8ce8daf1fcdea5a912b13385c6bf6bf5b2bb8b93839bd981a0b398fbf56e8bd334fd003cbb047bec000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5d-04df-9eac-0000-0029f783b3b5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331669341,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:09 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257969,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:09 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30201478d9a08bd04174a4a535635da98320466b498b149b5188ff3db79397c7bcef9bc31bf0d2dafa6c74d634a6ed7474ebbbbbc5a0a98dd53edaa751faf3c2007312142988b262af162586a93b4a5c426da1aa24e5855090c82c85120f858cb6614e798970dc9224705066091754f178a21b081884fbd8893fe082ef088215089e72050c7d3cb7dda5edaed39801998bd7f7a1a725093f513cf9776d7ad7198e3eae660f8a4e6ae63db6f6701cc71f4503419aeb000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-04f9-f1a8-0000-0029f783a3ed","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331670013,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:10 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257973,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:10 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401484ffcae38150e0458f4207d1272dad19eb4a1e04d9702d6911632b8af0bfb7debc0c33dfcc617ed80d565d8c2efade0ca34e6eaff16e31ea95b1da47fb30527f9e1861499c120949511de5a6c1385f4c835b5016da565059710999287268f05489641f97543608e73d0982058a22639c5a963aba832880f898c26aed30e3ec401085c059ce2404e8e36518bb61bcba4b3f0c16797e27edfe64aca6d4f56f655e4b0e70f6315c0d24d572d57b6a9a3c9ce7f90f463a0f88f2000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-0437-8b41-0000-0029f783c3d9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331670773,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:10 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253829,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:11 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401484ffcae38150e0458f4207d1272dad19eb4a1e04d9702d6911632b8af0bfb7debc0c33dfcc617ed80d565d8c2efade0ca34e6eaff16e31ea95b1da47fb30527f9e1861499c120949511de5a6c1385f4c835b5016da565059710999287268f05489641f97543608e73d0982058a22639c5a963aba832880f898c26aed30e3ec401085c059ce2404e8e36518bb61bcba4b3f0c16797e27edfe64aca6d4f56f655e4b0e70f6315c0d24d572d57b6a9a3c9ce7f90f463a0f88f2000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":0,"precision":18,"type":"fixed","nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04d6-7d33-0000-0029f78393fd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331672251,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:12 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270209,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:12 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f65590824e08025c8c5d083b1d744548e8324d31c0cc621726b2a4c8b929012fcef956eb90c3befed619e7899fc7076b6194737cdb6f8bacddf1eb37170de26e87f9db18f2b66a8495261a068da83597798d7f1e870038387be57a45b69a0524d0d1d1e5b55ec734dba43f8d893228850359590d48b32d037c818e487320a6df2fa189890e29d20e320452d0c304cf03ccd9769fe0c7b9ec8625cff7e6c1853891395c1df07778b9de192207f793074322f7ec5539e6e53be65bb152ecbf20f721d521ef6000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-04fe-ced1-0000-0029f78383ed","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331673663,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:13 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257977,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:13 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f655908b4e080a5b617410fc65e1351390e924c72301887c88d89302d4a4a4bf0bf57bee532ecbcb787b9e3690cfdd1bb7a18fc38b9fc7c9b2e01c5d0fbe0120cdfdebadf2b0a34a428b790d7cdd63eb59855cbd1e233f401ba4e9369948552d715b4b86b74bec90c991661bf214db0405d975251278b48df4130c8b6c5228ccdaa5d6452c90f02c141c94a5a6098e0719c4ee3f419f7dc912d71fdfb72714c290f5444ffd3fbdbd219ce09f287074b07fbe0573ce5e93ae56bf6068c0bf622d8eb0ae779fe07cf49409fff000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-04ef-30f1-0000-0029f783a3f1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331674358,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:14 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253833,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:14 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30101448b05217a183e8484b6bc6ba5207418cd6921629d6a208ff7bee21e832bc79dfe3f13e786a6d7d343a6b1ad3763aba3cbaabc5a0a98dd51edabb51fad5638039098a144459b155d312c3d4891267505ba82a4979211424324ba1c45d21a37598535e22ecd724099c29b3840baa783cba2b081884dbd8815f1570c13704810f82a75c01430f8f6d776abbf338e883cc9dfe7dd3e39a841f281ef9b3360ff7331c3cf4ff028a0eea8f4fd87cb998e0300c5fcb7ba74ff1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04ef-3551-0000-0029f78383f1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331675511,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:15 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266177,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:16 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30101478d9a08bd04174a4a5d58d75a50e8228ad252d526c4511fef7dc4e5d1ef3be6f0eef83c7de35ad35b2eb6c3f98f8fc182e0ec3aeb1ce04e86e569bd71d432c4850ac219665aee71546993f2a5c40e3a0ae1515a5d0902a994185bb52c59ba8a0a242d86f481178a864ca05d53c99e81a4206519e78f103b9d4c005df12844b103ce31a1806d8f6c3b11f4ed3a00f321ff7f7d54c6b527ea064f2cfc63e7c673806b8fc7bd074d07f7ec656331cc7f10bc6cf36a6ef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5d-0465-5bb5-0000-0029f78383f5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331680615,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:20 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262073,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:21 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e418bc2301484ffcae381e0422ff558f050da570ca68da4297a289488a91643dc35ba28d2ff6e7aeb6598f9660ef3c1d3e0f5d11ad1f7767026bb3cddd563d26beb4d84fecf2af37a60823571ca1464a2a9d4b2c5b49c4c8b3fa03d749da4bae10a0a294a6871d7c86c93d654b708fb0d4982094a51304e1dcb035d4312435ae5305b075c09058cb32d41b202ce4aa620c6088f833b0dee1c6e7d309ee4f1fe35e153c10e9487fe5fdbe794631c235ccd068a0e6ad62f6e77ed16388ee31722186ef5f7000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5d-0451-dafc-0000-0029f783c3dd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331682019,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:22 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253837,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:22 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e418bc2301484ffcae381e0422ff558f050da570ca68da4297a289488a91643dc35ba28d2ff6e7aeb6598f9660ef3c1d3e0f5d11ad1f7767026bb3cddd563d26beb4d84fecf2af37a60823571ca1464a2a9d4b2c5b49c4c8b3fa03d749da4bae10a0a294a6871d7c86c93d654b708fb0d4982094a51304e1dcb035d4312435ae5305b075c09058cb32d41b202ce4aa620c6088f833b0dee1c6e7d309ee4f1fe35e153c10e9487fe5fdbe794631c235ccd068a0e6ad62f6e77ed16388ee31722186ef5f7000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5d-0438-ae9f-0000-0029f783b3b9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331683235,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:23 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257981,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:23 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f655908b4e08025e8c59083b1d74454b6822c931c0cc621726b2a4c8b92d212fcef916eb90c3befed61ee7899fd7876564d939b175b7cde962f8fd9343a6f13f43fced8bf2b66d892a4c240a1bac6bcf498d7f1e8f115460fc3a0a9eda4814aab1a7a3c74bad8e72db53dc2714f9a2042ad2a21691065a03bc818e44d1945991b0aa851068414ef041907296a61806182e779b9cccb4798744716e3faff6dc39e4a9ca80cfe7774b7d819ae09f2a7074327f3e4373ce5e936e55bf6b6c1755d1fd19ac1b6f9000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5d-04a1-1a49-0000-0029f783a3f5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331684119,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:24 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270213,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:25 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f655908b4e080a5b617410fc69689a86c05492639188c43e4d654981625a525f8df2bdd721976dedbc3dcf03c87f1e49d9a263f2faefcb82e9f01d934fae0320cdfdebadf0b32345cf2d242a9bad63ef45834e9e8f111c600c3a0b9e9a4855aab067adc77badc15869b1ee1b0e39a43825ad542f2415491be022350b45512c616cd3eb256591052bc716014a468840582199ee6e53c2fef71d30d498acbdf978b836a71e455f43fa3bfa64e70cd90de3d587eb4777e43739a6f73ba252f4028234f8c3c6f705dd77f0065421703010000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["5"]],"total":1,"returned":1,"queryId":"01973d5d-043a-21f3-0000-0029f78383f9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331685721,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:25 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270217,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:26 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e418b83301085ffca3050e8821422dd8bb007d111c346b3c4483d0862696c65837449bbb414ff7bcda1d0cbf0e67d8fc77be06174fdde1a390c769c4c72ba4ebf0ea3a1b7ce04e8feac36b70b465891a0444322eb52af5b8c0b2f5afc80de41d729aa6aa12153b280167f6a95e47145558bb0cb49117853c98c0bea78bab85f103188cbd483571594520317fc9b200a41f0826b6018e07e9c0ee3745c463d90f973b99fcdb228e30da50bffefedd5ff0ce700c3b780a646bff115db7c6e5738cff313759be6c4f5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5d-0468-7867-0000-0029f783d389","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331686474,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:26 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249765,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:26 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebb0a834010457f65982a011b8534420ad111177c847525168228ae89649184d59020fe7bdc226073997bce1477c16ed04dab64d6f76a18a57f9fc78746b76f949616ea9712f233a18b39c5e40bf0b32215870abdc41c151ea1d150d79cf2221610f22c810a2f05f7232fa7bc42b846c4090ce459c862aa59b0d133b836786960c41f3810b38409b0d1c27618bb61bc6d4316b44d4cdfa7dc5684aca460f3ef46cda6dbb85ae8ec1e049562ef4fb8aeeb0fadbf577ce5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-04a2-daed-0000-0029f783d38d","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331687339,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:27 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249769,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:27 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d8514a22b1ef813ce935808a2782692430ca72141eedda3a4b11966be996256ec06ddb44a667daf8651fa8f657c6a74fb466969a17e29213f33ba98534cbe003f2b5271aad04b7653e1191a0d75cd292f620121cf12a8f05a703ff272ca2b845b449c60873c0b594c350b367a01d7062f0de0b0fe630762963001365ad80e63378cf7edce8af62ef37792db979095146cfdbb51cb9e6d34163a8781a0521c7a6f9a944463cc0f9d238a48ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04f2-ac26-0000-0029f783c3e1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331688067,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:28 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266181,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:28 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d8514a22b1ef813ce93580872e299480e319c8604f1dda3a4b11966be9962166c7b231badb2aed3fda0fcc73c3c0dba9dd44659685e5aa8cf842ee614932fc0cf8a549c2af492dd54780669a0ae39e5452c20e45902155e0bee475e4e7985708b8813ec9067218ba966c1462fe0dae0a5011cd67fec40cc1226c0460b9b7e68fbe1bedd59d0de65fa8e6afb12b29282ad7f4b3defd9c6d542e73010548a432fc7512b5cd7f5073ea17bcaee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["0"]],"total":1,"returned":1,"queryId":"01973d5d-040a-2bf9-0000-0029f783a3f9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331688897,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:28 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253841,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:29 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30a7020377a18bd04174a405cd5857ea2088d15ad222c56a14e17fcfa54b97c7bcef9bc3fbe0b9b3cdc9e8bc6d4dd7ebe83af6378b41db18ab3db40fa3f46bc0000b4a295210e5e54e2d2a0c337754b884c6425d4b2aca544122f30c2adc9732da86051515c2614b92c041992722a55ac433dd40c020dcc54ec4a1a21fe2908a4c2860e8e1a9ebcf5d7f99a77c90b918de773def48c491e2d93f1b33bace70f290ff3d283aaa3fcf7deeaf7cbe626b9ca6e90b3dcd4c15ef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-041b-9652-0000-0029f783c3e5","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331689714,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:29 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249773,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:30 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e418bc2301085ffca3027850a4d5c2f813d94768a81d64a92a28742a9986a31945da28b8bf4bf6fc35ebc3ce67ddf1cde0bcf83ef4ece567def86d1a6d7c778f328face791ba1ff76c63eef28505341a981b4aa7766d1605286a3c125741eda5691ae0b03b9aa4a68705fab749b68d20dc2614b8a204055e5b2a0566633fd04c120d96541689394fb7fc6a190a534c030c2d3309e87f1326f79210b71fffdb2f3905c1e299bfd4fe71ea1339c22e46f0f868ee6cdf398c7ab98afd80618176c2dd8074ed3f4070340d61af9000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["1"]],"total":1,"returned":1,"queryId":"01973d5d-041a-fa4b-0000-0029f783b3bd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331690611,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:30 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246266185,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:30 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec10a824010865f6598538104465d840ea2232d68c6ba920741565c4b5aa4d88c427cf7dc43e065f8e7fb86e11fb1e98cacb54adb5677bd0a6e437f37e8b5521be5a0796aa13e2ff430a3980201419a9fc4aa443fb1a1c435480355c529cb6301114f1328f19cf3e0e867949508972371020b791ab1982a16cef4009e0bfe29b4e2ffcac22dc42c61025c74b0eefaa6ebaf7399115d3b5edf879a9b44aca070f66fa907bbbb3839b85d1c082ac4d26ff63b9ca6e90737dcc5a1eb000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04d4-56db-0000-0029f783a3fd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331691228,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:31 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257985,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:31 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e4d0b82401445ffcae3ad0adc28b4110a449f38e0478c23b91044712c699062340af1bfe7b46a7379f79cb7b80b76836e5a25b3be57c328fddb3cde35ba7da3b4b4503f9590ef095dcc29265f809f15a9d855e825e6a8700f8d86bae69417b18090670954782eb81f7939e515c225224e6020cf421653cd828d1ec1b5c14b03237ee004ae03314b98001b2d6c87b11bc6eb366441dbc4f479c86d45c84a0a36ff6ad46cba8dab85cedf83a052fcfb03aeebfa058691058ee5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-0446-5a68-0000-0029f783d391","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331692050,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:32 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262077,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:33 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d850444573cf0279c27b11044f14c2487184e4382f8ee393b9b61e69b2966c56ed04dab64d6f76a18a5ff5cc69746b76f949616eab712f23ba38b39c5e40bf0b32215a70abd6437159ea1d150d79cf2221610f22c810a6f05f7232fa7bc42b847c40976c8b390c554b3c0d00bb83678690087b5c157701d8859c204d868613b8cdd303ecc9d15ed5de6df24cd9790951498fed3a865cf366e163a8781a0521c7a6f9a94c46ddbfe9ab3f0f2ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["4"]],"total":1,"returned":1,"queryId":"01973d5d-0429-c410-0000-0029f783d395","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331693539,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:33 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262081,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:34 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e4f0b824014c4bfcae39d0abce85128107de2827f625dc983202bae252d62ac45117ef7d69b9761e63773981ff6a3919d56c530e87152e1fd353d0cfa83d44639689e5aa8cf823e96945228202caa5c1c1a0cb2cd34780469a06d3995552a20e645060d5e2a1e2641496583704d88136c9017314ba96591a527f05d08f208766b8bcfe07b90b28c0970d1c16e9cfa71bad93b3f743759beb3b25f62565364fbb7d4af2dbbb83ae8ed06826ab1ebe53c6b85ebbafe0139310170ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["0"]],"total":1,"returned":1,"queryId":"01973d5d-04fd-1cb4-0000-0029f783c3e9","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331696174,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:36 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246262085,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:36 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30a7020377a18b50203ad28266ac2b7510c4682d6991622b8af0bfb77bebf298f77d73785f3c0db63b1a5df6bd19469d5c9ee3d562d477c6ea00eddd28fd7e608415e5942848ca7aab660dc6853f1a9c4367a16d255575ae209365010dee6a996ce28aaa0661bf2149e0a12c3391532b524757103188b7a91769acc8a135441c725108050c033c0ee36918cf6eca17998fc7e7a6dd8e4c1c2875fed599a7ef0ca700f9df83a283faf33ce4e122e40bb6c4699a7e3d5b605def000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04fa-0fff-0000-0029f78383fd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331697570,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:37 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270221,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:38 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f65d953030e586a7b11b460ec3511d87190649283c138444e4d844951525a82ffbdd22d9761e7bd3dcc034f931f8ece36e3e8a6d9e65ff7f9e2518c83f33641ffed8cfdbda1404d15e506f2a6dd9a970eb33a1e1dae60f0d0f78a745b192855534387bb56e59b4c93ee10f61b520411aaa69415f5b208f40304836c5b44a14d56ef02fb04c1a192b534c030c1e3349fa6f91cb63c90c5b8fd5d6d1852ca0315c1ff0cee1e3bc32541fef460e8609e3c4f79ba4ef99abd03e382bd0af686cbb2fc039c262f18f9000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-0413-5dca-0000-0029f783d399","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331698805,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:38 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249777,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:39 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e4f0b824010c5bfca30a7020994ba0805a2232ef827d6953a2c88e25ad222c55614e177cf3d045d8637eff778bc0f7683695aad8abed7c3a8c2f363bc18f4fb461be5a0b969a15e77f4b1a49442016151e5622131c8ac90b884c6405d732aab5440cc8b0c24ee2b1e264149a5443824c409acc98b98a554b36876b7e0bb10e49105bf2ad881ef41ca3226c04507db61ec86f1348ff9a06bcffd7d55f392981d299af9b3d10ffbbb3839e8fd05041dc53f5f6dd6384dd317c3de630beb000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","scale":0,"precision":18,"byteLength":null,"type":"fixed","collation":null,"nullable":false,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04f0-04c0-0000-0029f783a401","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331700161,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:40 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246270225,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:40 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e4d0b82401445ffcae3ad0adc28b4915a883e71c08f1847722188e258d220c56814e27fcf69d5e6f2ee396f7117ec06ddb44a667daf8651fab779bc6b74fb466969a17e2a21df13ba98534cbe003f2b52b1abd04bcc51e11e1a0d75cd292f620121cf12a8f05c703ff272ca2b844b449cc0409e852ca69a051b3d816b83970646fcc0115c0762963001365ad80e63378cd76dc882b689e9f390db8a9095146cfed5a8d9741b570b9dbf0741a5f8f7075cd7f50bb4a5992de5000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"scale":0,"precision":18,"type":"fixed","nullable":false,"collation":null,"length":null}],"rowset":[["3"]],"total":1,"returned":1,"queryId":"01973d5d-04fc-2c84-0000-0029f7839401","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331700872,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:40 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246253845,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:41 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ebd0a834010845f65d92a011b2d252944573cf0279c27b11044f14c2487184e4382f8ee393b9b61e69b2966c56ed04dab64d6f76a18a5ff5cc69746b76f949616eab712f23ba38b39c5e40bf0b32215a70abd6437159ea1d150d79cf2221610f22c810a6f05f7232fa7bc42b847c40976c8b390c554b3c0d02bb83678690087b5c117701d8859c204d868613b8cdd303ecc9d15ed5de6df24cd9790951498fed3a865cf366e163a8781a0521c7a6f9a94c46ddbfe5fae8c97ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","byteLength":null,"type":"fixed","scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["0"]],"total":1,"returned":1,"queryId":"01973d5d-048d-3250-0000-0029f783b3c1","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331702123,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:42 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249781,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:42 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e3f0b833014c4bfcae34d2db8e828ed20fac4807f4a8cd4419088b19506b1c49696e2776fdc5c8ebbdfdd703fec47233bad8a61d0e3a4c2fb6b7a18f407a98d72d03cb5509f057d2c29a550405854b9383418649b69f008d240db722aab5440cc8b0c1abc543c4c8292ca06e19a1027d8202f629652cb224bcfe0bb10e411ecd6169fc0f720651913e0a283dd38f5e374b3777ee86eb27c6765bfc4aca6c8f66fa95f5b767175d0db0d04d562d7cb79d60ad775fd03fc2c7d15ee000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["6"]],"total":1,"returned":1,"queryId":"01973d5d-0406-845b-0000-0029f7838401","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331703810,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:43 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257989,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:44 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e410b82401085ffca30a7020377a18bd44174a405cd5857ea2088d15ad222c55614e17f6ff7d6e531effbe6f0be781a6c7734baec7b338c3ab93cc7abc5a8ef8cd501dabb51fafdc0082bca29519094f556cd1a8c0b7f343887ce42db4aaaea5c4126cb021adcd532d9c415550dc27e4392c043596622a756a48eae2162106f532fd25891432b8838e4a2100a1806781cc6d3309edd942f321f8fcf4dbb1d993850eafcab334fdf194e01f2bf074507f5e779c8c345c8176c89d334fd0002bd879bef000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["3"]],"total":1,"returned":1,"queryId":"01973d5d-044d-246a-0000-0029f783a405","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331704935,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:44 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246249785,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:45 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8ec16ac33010447f65d953030e586a7b11edc1d86b22b0e320c924078371889c9a0893a2a4b404ff7ba55b2ec3ce7b7b98079e263f1c9d6dc6d14db3cdbfeef3c5a31807e76d82fedb19fb7b43819a2aca0de44dbb352f1d66753c3a5cc1e0a1ef15e9b63250aaa6860e77adca379926dd21ec37a40822544d292bea6511e8270806d9b688429bacde05f6018243256b69806182c7693e4df3396c79208b71fbbbda30a494072a82ff19dc3d76864b82fce9c1d0c13c799ef2749df2357b07c6057b15ec0d9765f9074960aeadf9000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","scale":0,"precision":18,"byteLength":null,"nullable":false,"collation":null,"length":null}],"rowset":[["3"]],"total":1,"returned":1,"queryId":"01973d5d-0432-a03d-0000-0029f783c3ed","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331705926,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:45 GMT',
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
  '2547',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257993,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:46 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e4f0b824010c5bfca30a7020994ba481d44475cf04fac2b755810c5b5a4458aad28c2ef9e7b08ba0c6fdeeff1781fec06d3b45a157daf875185e7c77831e8f78d36ca4173d342bdeee86349298502c2a2cac5426290592171098d81bae65456a98098171948dc573c4c82924a8970488813589317314ba966d1eceec07721c8230b7e55b005df8394654c808b0eb6c3d80de3691ef341d79efbfbaae625313b5234f367a31ff6777172d0fb0b083a8a7fbedaac719aa62f9bdda7c7eb000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"__RESULT","database":"","schema":"","table":"","type":"fixed","byteLength":null,"scale":0,"precision":18,"nullable":false,"collation":null,"length":null}],"rowset":[["2"]],"total":1,"returned":1,"queryId":"01973d5d-04c4-a5ca-0000-0029f7838405","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601331707448,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 22:21:47 GMT',
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
  '2547',
  'Connection',
  'Close'
]);