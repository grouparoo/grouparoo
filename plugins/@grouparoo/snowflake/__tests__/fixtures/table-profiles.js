const nock = require('nock');

nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246257737,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:49 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013458eb10ac23014457fe5f126950c75ed56d34402ad294916a1505a9ada600c481485d27f37e2e076ce810b77c1d1c57ef0564e9377c1d2f919ae11f3a9f7d1128c776fecfb81396a56316a60478016da6c5ad4a6a89b16a18fa08d12a7e3f68b2d76dd7c7ba5ce95ac93364a7251319d8a5425537038c37f5c684a928af2c750895a18d8671948ce35339021c1c185d1854b7ab5aceb073b667ea7b1000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"fixed","byteLength":null,"scale":0,"precision":38,"nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"real","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"date","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"timestamp_ntz","byteLength":null,"scale":9,"precision":0,"nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["1","Erie","Jervois","ejervois0@example.com","Male","15.247.38.72","1","0","1","259.12","18293","1580559194.000000000","2020-02-01 12:13:14.000"],["2","Cacilie","Eate","ceate1@example.com","Female","253.146.41.201","0","1","0","94.36","18294","1580645594.000000000","2020-02-02 12:13:14.000"],["3","Gretel","Groucock","ggroucock2@example.com","Female","211.89.110.134","1","0","1","668.3","18295","1580731994.000000000","2020-02-03 12:13:14.000"],["4","Amata","Cotesford","acotesford3@example.com","Female","193.9.240.246","1","1","1","489","18296","1580818394.000000000","2020-02-04 12:13:14.000"],["5","Lira","Johnston","ljohnston4@example.com","Female","53.161.58.99","0","1","0","823.16","18297","1580904794.000000000","2020-02-05 12:13:14.000"],["6","Deni","Scalia","dscalia5@example.com","Female","138.131.148.74","1","0","1","273.98","18298","1580991194.000000000","2020-02-06 12:13:14.000"],["7","Helga","Kleis","hkleis6@example.com","Female","85.248.8.158","1","1","1","407.05","18299","1581077594.000000000","2020-02-07 12:13:14.000"],["8","Gertie","Cubitt","gcubitt7@example.com","Female","123.255.130.24","0","0","1","841.45","18300","1581163994.000000000","2020-02-08 12:13:14.000"],["9","Lurleen","Browell","lbrowell8@example.com","Female","231.159.55.43","1","0","0","623.34","18301","1581250394.000000000","2020-02-09 12:13:14.000"],["10","Dorthy","Iston","diston9@example.com","Female","45.241.64.163","0","1","0","290.53","18302","1581336794.000000000","2020-02-10 12:13:14.000"]],"total":10,"returned":10,"queryId":"01973d14-0458-1901-0000-0029f7838311","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327330362,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:50 GMT',
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
  '6415',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246261817,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:51 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8edd4ac34014845fe570ae54d272360ac282424c371a48dcb27bc02a8192d28d0dae41d9d61f4adedd0d5ee8cd30df0c0373c46d1fda8d77baeb7c3fb87c77185e02caaef5c12518de3dbbaf3d4ab4aa5239c359027966f9a441cb59bd6c10da00964d797f7b3ad906d7ebddeb67cc0ba3eb884ba38bb25236260f77ca28f85b5e5f8114a0cd4219b879fc5764364f22968b5f0f5559970c8208745158c54098e0a61fb6fdf01cbf1e514cb2ff7e73f128ab15c7faa3f58709534a6946e98c2e59a4529c4b713127a2271cc7f107324b3342fd000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"fixed","byteLength":null,"scale":0,"precision":38,"nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"boolean","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"real","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"date","byteLength":null,"scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","type":"timestamp_ntz","byteLength":null,"scale":9,"precision":0,"nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","type":"text","byteLength":16777216,"scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["7","Helga","Kleis","hkleis6@example.com","Female","85.248.8.158","1","1","1","407.05","18299","1581077594.000000000","2020-02-07 12:13:14.000"],["8","Gertie","Cubitt","gcubitt7@example.com","Female","123.255.130.24","0","0","1","841.45","18300","1581163994.000000000","2020-02-08 12:13:14.000"],["9","Lurleen","Browell","lbrowell8@example.com","Female","231.159.55.43","1","0","0","623.34","18301","1581250394.000000000","2020-02-09 12:13:14.000"],["10","Dorthy","Iston","diston9@example.com","Female","45.241.64.163","0","1","0","290.53","18302","1581336794.000000000","2020-02-10 12:13:14.000"]],"total":4,"returned":4,"queryId":"01973d14-0479-753d-0000-0029f783a2dd","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327331454,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:51 GMT',
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
  '5507',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246265905,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:51 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e514bc3301485ffcae53ea97492549f020e6a976aa03523b930370aa363a92bc6a2647393d1ff6e8a0ff3e570be733870ceb8ed42b3f14eb7adef7a97ef0efd7b40d1363eb804c3972777daa3402b4b9913dc24906796ae6ab49455f31aa10960c9a897a7ebd1d6b85eef3e8e312f8cae22ce8d2e54296d4c16cfd248b82ca70f2038683393061e97ff8acce6494435fbf350aa4a1170c640178595040c13dc74fdb6ebdfe2d733f251f63f9f2e1e25f94ab1fe6efc61c494a56cc2d209e7c453c1ef04bfbf658cad7018865f677b88bafd000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":0,"precision":38,"type":"fixed","nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"real","nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"date","nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":9,"precision":0,"type":"timestamp_ntz","nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216}],"rowset":[],"total":0,"returned":0,"queryId":"01973d14-040a-e49f-0000-0029f7839329","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327332384,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:52 GMT',
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
  '4906',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246265909,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:52 GMT',
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
  .post('/queries/v1/query-request', "1f8b0800000000000013458eb10ac23014457fe5f126950c0e4edd6a9a94406b4a9245289496a63618031245a1f4df8d38b89d73e0c25d7074b11fbc95d3e45db0747e866bc46cea7db404e3dd1bfb7e60869a558c1ad811a0b9369b16b5c9eba645e82368a3c4a9dc7eb1c5ae9b6fafd4b99275d246492e2aa65391aa600a8e67f88f734d495251fc182a510b0307909c6b66608f04071746172ee9d3b2ae1fb174c1daaf000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"fixed","scale":0,"precision":38,"nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"real","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"date","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"timestamp_ntz","scale":9,"precision":0,"nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["1","Erie","Jervois","ejervois0@example.com","Male","15.247.38.72","1","0","1","259.12","18293","1580559194.000000000","2020-02-01 12:13:14.000"],["2","Cacilie","Eate","ceate1@example.com","Female","253.146.41.201","0","1","0","94.36","18294","1580645594.000000000","2020-02-02 12:13:14.000"],["3","Gretel","Groucock","ggroucock2@example.com","Female","211.89.110.134","1","0","1","668.3","18295","1580731994.000000000","2020-02-03 12:13:14.000"],["4","Amata","Cotesford","acotesford3@example.com","Female","193.9.240.246","1","1","1","489","18296","1580818394.000000000","2020-02-04 12:13:14.000"]],"total":4,"returned":4,"queryId":"01973d14-04b8-6454-0000-0029f7838315","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327333042,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:53 GMT',
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
  '5508',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246261821,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:53 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e5f4bc33014c5bfcae53ea97492d43e051cd42ed5406b46724185c2e858ba95c5a264f30fa3dfdd943db897c3f99dc38173c24d1fdab577baeb7c3fb862771cf60145d7fae0120c9f9edccf01055a59c982e0268122b774d5a0a5bc5e36086d004b463d3f5e4fb6c1d56af7fe1df3d2e83ae2d2e85255d2c6e4e5491a09ffcbf93d080eda2ca48187b78b22b74512512dce1e2a552b820c74595a49c030c1753f6cfa611b9f9e904f72f8fd70f126c9578af557eb8f13a62c653396ce58063c15fc4ef0ec963186e338fe0124061d5afa000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"fixed","scale":0,"precision":38,"nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"boolean","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"real","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"date","scale":null,"precision":null,"nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"type":"timestamp_ntz","scale":9,"precision":0,"nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","byteLength":16777216,"type":"text","scale":null,"precision":null,"nullable":true,"collation":null,"length":16777216}],"rowset":[["4","Amata","Cotesford","acotesford3@example.com","Female","193.9.240.246","1","1","1","489","18296","1580818394.000000000","2020-02-04 12:13:14.000"],["5","Lira","Johnston","ljohnston4@example.com","Female","53.161.58.99","0","1","0","823.16","18297","1580904794.000000000","2020-02-05 12:13:14.000"],["6","Deni","Scalia","dscalia5@example.com","Female","138.131.148.74","1","0","1","273.98","18298","1580991194.000000000","2020-02-06 12:13:14.000"],["7","Helga","Kleis","hkleis6@example.com","Female","85.248.8.158","1","1","1","407.05","18299","1581077594.000000000","2020-02-07 12:13:14.000"]],"total":4,"returned":4,"queryId":"01973d14-04d2-9191-0000-0029f783932d","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327333729,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:53 GMT',
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
  '5506',
  'Connection',
  'Close'
]);
nock('https://xyz12345.us-east-1.snowflakecomputing.com:443', {"encodedQueryParams":true})
  .post('/session/v1/login-request', "1f8b08000000000000135591516f82301485ff4b9f5d030545f646b059304a0955f7482a3087eb8000eaa6e1bfefde9ac5edade7bbe79e7bdbde48a106459e6f240843b18d37591cac3979265fdf579b39ee944cc84abc44f12f5f2e0407960452be8a7401e4a33fbe1dcbc3a5001cae220e1941926411d696eaac64de55edf0bfb8e3a98c440c0e9b4ea9f328f27817a5225ec31997aa9ba24413a3f6ccd8ce73901e9d53e6f994394f68a00e6e793a9b34c7a50cd455577ba3a1d306bdef9a41578658d403a0bab23712822dd09f4d71d20679d85f1fde87a165c6e15ac651ab16037096d65805c120cd0580326b55d7979da1be59b669cbbaeff57d0cb50f80725da0c3b90fadf21388d994e28ac3155b2ddbcff13675953fee0e40483817aabb54b5517f9fd0a7f73811ca245b8b05fe53144b1e6e534ec609915ca2354b82143e71038df0b6e338fe0043f2522afd010000")
  .query({"requestId": /.+/g,"warehouse":"COMPUTE_WH","databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC"})
  .once().reply(200, {"data":{"masterToken":"master_token_here","token":"token_here","validityInSeconds":3600,"masterValidityInSeconds":14400,"displayUserName":"JDOE","serverVersion":"4.31.3","firstLogin":false,"remMeToken":null,"remMeValidityInSeconds":0,"healthCheckInterval":45,"newClientForUpgrade":null,"sessionId":180246265913,"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"sessionInfo":{"databaseName":"SAMPLE_SOURCES","schemaName":"PUBLIC","warehouseName":"COMPUTE_WH","roleName":"SYSADMIN"},"idToken":null,"idTokenValidityInSeconds":0,"responseData":null},"code":null,"message":null,"success":true}, [
  'Cache-Control',
  'no-cache, no-store, no-transform',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:54 GMT',
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
  .post('/queries/v1/query-request', "1f8b08000000000000134d8e514bc3301485ffcae53ee9e8465207838083daa51a68cd482ea850181d4bb7622c4a36758cfe77537cd097c3f9cee1c0b9e0ae0bcdd63bddb6beeb5d7e38f5af0145dbf8e0120c1f9edcf711055a59ca9c6092409e59baaad15256ad6b84268025a31eefaf475be3667378fb8a79617415716d74a14a6963f2f4208d84bfe5f21604076d56d2c0ddcbbf22b3791251ad7e3d94aa520473d045612501c304b75dbfebfa7d7c7a413ecaf1fceee24d92cf14ebcfc69f464c59caa62c9db205f054f01bc1e733c6180ec3f00346db9bb0fa000000")
  .query({"requestId": /.+/g})
  .once().reply(200, {"data":{"parameters":[{"name":"CLIENT_PREFETCH_THREADS","value":4},{"name":"TIMESTAMP_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3 TZHTZM"},{"name":"JS_TREAT_INTEGER_AS_BIGINT","value":false},{"name":"TIME_OUTPUT_FORMAT","value":"HH24:MI:SS"},{"name":"CLIENT_RESULT_CHUNK_SIZE","value":160},{"name":"TIMESTAMP_TZ_OUTPUT_FORMAT","value":""},{"name":"CLIENT_SESSION_KEEP_ALIVE","value":false},{"name":"CLIENT_OUT_OF_BAND_TELEMETRY_ENABLED","value":false},{"name":"CLIENT_METADATA_USE_SESSION_DATABASE","value":false},{"name":"TIMESTAMP_NTZ_OUTPUT_FORMAT","value":"YYYY-MM-DD HH24:MI:SS.FF3"},{"name":"CLIENT_RESULT_PREFETCH_THREADS","value":1},{"name":"CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX","value":false},{"name":"CLIENT_HONOR_CLIENT_TZ_FOR_TIMESTAMP_NTZ","value":true},{"name":"CLIENT_MEMORY_LIMIT","value":1536},{"name":"CLIENT_TIMESTAMP_TYPE_MAPPING","value":"TIMESTAMP_LTZ"},{"name":"TIMEZONE","value":"America/Los_Angeles"},{"name":"CLIENT_RESULT_PREFETCH_SLOTS","value":2},{"name":"CLIENT_TELEMETRY_ENABLED","value":true},{"name":"CLIENT_USE_V1_QUERY_API","value":true},{"name":"CLIENT_DISABLE_INCIDENTS","value":true},{"name":"CLIENT_RESULT_COLUMN_CASE_INSENSITIVE","value":false},{"name":"BINARY_OUTPUT_FORMAT","value":"HEX"},{"name":"CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS","value":false},{"name":"JS_DRIVER_DISABLE_OCSP_FOR_NON_SF_ENDPOINTS","value":false},{"name":"DATE_OUTPUT_FORMAT","value":"YYYY-MM-DD"},{"name":"CLIENT_FORCE_PROTECT_ID_TOKEN","value":true},{"name":"CLIENT_CONSENT_CACHE_ID_TOKEN","value":false},{"name":"CLIENT_STAGE_ARRAY_BINDING_THRESHOLD","value":65280},{"name":"CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY","value":3600},{"name":"CLIENT_SESSION_CLONE","value":false},{"name":"AUTOCOMMIT","value":true},{"name":"TIMESTAMP_LTZ_OUTPUT_FORMAT","value":""}],"rowtype":[{"name":"ID","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":0,"precision":38,"type":"fixed","nullable":false,"collation":null,"length":null},{"name":"FIRST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"LAST_NAME","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"EMAIL","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"GENDER","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"IP_ADDRESS","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216},{"name":"IOS_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"ANDROID_APP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"VIP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"boolean","nullable":true,"collation":null,"length":null},{"name":"LTV","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"real","nullable":true,"collation":null,"length":null},{"name":"DATE","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":null,"precision":null,"type":"date","nullable":true,"collation":null,"length":null},{"name":"STAMP","database":"SAMPLE_SOURCES","schema":"PUBLIC","table":"PROFILES","byteLength":null,"scale":9,"precision":0,"type":"timestamp_ntz","nullable":true,"collation":null,"length":null},{"name":"__hmw","database":"","schema":"","table":"","byteLength":16777216,"scale":null,"precision":null,"type":"text","nullable":true,"collation":null,"length":16777216}],"rowset":[["7","Helga","Kleis","hkleis6@example.com","Female","85.248.8.158","1","1","1","407.05","18299","1581077594.000000000","2020-02-07 12:13:14.000"],["8","Gertie","Cubitt","gcubitt7@example.com","Female","123.255.130.24","0","0","1","841.45","18300","1581163994.000000000","2020-02-08 12:13:14.000"],["9","Lurleen","Browell","lbrowell8@example.com","Female","231.159.55.43","1","0","0","623.34","18301","1581250394.000000000","2020-02-09 12:13:14.000"],["10","Dorthy","Iston","diston9@example.com","Female","45.241.64.163","0","1","0","290.53","18302","1581336794.000000000","2020-02-10 12:13:14.000"]],"total":4,"returned":4,"queryId":"01973d14-04e1-0350-0000-0029f7839331","databaseProvider":null,"finalDatabaseName":"SAMPLE_SOURCES","finalSchemaName":"PUBLIC","finalWarehouseName":"COMPUTE_WH","finalRoleName":"SYSADMIN","numberOfBinds":0,"arrayBindSupported":false,"statementTypeId":4096,"version":1,"sendResultTime":1601327334440,"queryResultFormat":"json"},"code":null,"message":null,"success":true}, [
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 28 Sep 2020 21:08:54 GMT',
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
  '5507',
  'Connection',
  'Close'
]);