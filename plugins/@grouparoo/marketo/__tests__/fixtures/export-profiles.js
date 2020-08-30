const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1519,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:08 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"157fe#1743e0c507c","result":[{"id":1137,"firstName":"Sam","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T06:26:52Z","createdAt":"2020-08-30T06:26:08Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:08 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"d2da#1743e0c5186","result":[{"id":1139,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:26:43Z","createdAt":"2020-08-30T06:26:41Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:08 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian3%40bleonard.com"})
  .once().reply(200, {"requestId":"12c12#1743e0c5290","result":[{"id":1140,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-08-30T06:26:53Z","createdAt":"2020-08-30T06:26:53Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"a7b6#1743e0c539c","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":1137},{"id":1139},{"id":1140}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"7669#1743e0c549f","result":[{"id":1137,"status":"deleted"},{"id":1139,"status":"deleted"},{"id":1140,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '151',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"7d18#1743e0c5751","warnings":[],"result":[{"id":1077,"name":"(test) High Value","createdAt":"2020-08-30T06:26:17Z+0000","updatedAt":"2020-08-30T06:26:17Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1077A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1077/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"15bb4#1743e0c5886","warnings":[],"result":[{"id":1077}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"d5b4#1743e0c5a5d","warnings":[],"result":[{"id":1078,"name":"(test) Churned","createdAt":"2020-08-30T06:26:25Z+0000","updatedAt":"2020-08-30T06:26:25Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1078A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:11 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1078/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"a4fb#1743e0c5b6a","warnings":[],"result":[{"id":1078}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:11 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"d612#1743e0c5d1d","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:11 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1515,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:12 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"af9f#1743e0c5f56","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:12 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"81f4#1743e0c6069","result":[{"id":1141,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"e15e#1743e0c6326","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:12Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"7570#1743e0c6459","result":[{"id":1141,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '300',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"f226#1743e0c657c","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1513,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:14 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com%2Cbrian2%40bleonard.com"})
  .once().reply(200, {"requestId":"3df#1743e0c67b2","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:12Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:14 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"15e66#1743e0c68f1","result":[{"id":1141,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:15 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"111c8#1743e0c6c76","result":[{"id":1142,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"13d00#1743e0c6fd2","result":[{"id":1141,"email":"brian@bleonard.com","firstName":"John","lastName":"Smith","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '303',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"a56f#1743e0c70d7","result":[{"id":1142,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:15Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1142"})
  .once().reply(200, {"requestId":"1641e#1743e0c71f0","result":[{"id":1142,"email":"brian2@bleonard.com","firstName":"Andy","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1510,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"321a#1743e0c7409","result":[{"id":1141,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:14Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"b871#1743e0c750d","result":[{"id":1141,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"7cb2#1743e0c78cb","result":[{"id":1141,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '300',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"7fa1#1743e0c79d5","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1508,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"5208#1743e0c7beb","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"903d#1743e0c7d05","result":[{"id":1141,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"59d1#1743e0c814e","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/folder/byName.json')
  .query({"name":"Group%20Lists"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"d571#1743e0c8262","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"e572#1743e0c8396","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:21Z+0000","updatedAt":"2020-08-30T06:27:21Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1079/leads.json', {"input":[{"id":1141}]})
  .once().reply(200, {"requestId":"12ca0#1743e0c84ed","result":[{"id":1141,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"177b9#1743e0c879b","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1079/leads.json', "listId=1079&_method=GET")
  .once().reply(200, {"requestId":"651a#1743e0c88a9","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"2dcb#1743e0c9399","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:25 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1501,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:25 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com%2Cbrian2%40bleonard.com"})
  .once().reply(200, {"requestId":"2a3e#1743e0c95a9","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:15Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:26 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '352',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":1142,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"14c73#1743e0c96d2","result":[{"id":1141,"status":"updated"},{"id":1142,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '121',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"6a46#1743e0c9b62","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1079/leads.json', {"input":[{"id":1141},{"id":1142}]})
  .once().reply(200, {"requestId":"28ec#1743e0c9c72","result":[{"id":1141,"status":"added"},{"id":1142,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '116',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"e512#1743e0c9dd6","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/folder/byName.json')
  .query({"name":"Group%20Lists"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"f30f#1743e0c9f2c","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"108d8#1743e0ca045","warnings":[],"result":[{"id":1080,"name":"(test) Churned","createdAt":"2020-08-30T06:27:28Z+0000","updatedAt":"2020-08-30T06:27:28Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1080A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1080/leads.json', {"input":[{"id":1141}]})
  .once().reply(200, {"requestId":"214#1743e0ca18c","result":[{"id":1141,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '86',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"7e04#1743e0ca2de","warnings":[],"result":[{"id":1080,"name":"(test) Churned","createdAt":"2020-08-30T06:27:29Z+0000","updatedAt":"2020-08-30T06:27:29Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1080A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1079/leads.json', "listId=1079&_method=GET")
  .once().reply(200, {"requestId":"13a55#1743e0ca3f3","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:26Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1080/leads.json', "listId=1080&_method=GET")
  .once().reply(200, {"requestId":"1366b#1743e0ca52a","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1142"})
  .once().reply(200, {"requestId":"122ab#1743e0ca67c","result":[{"id":1142,"email":"brian2@bleonard.com","firstName":"Sally","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1496,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com%2Cbrian2%40bleonard.com"})
  .once().reply(200, {"requestId":"4c1d#1743e0ca88a","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:26Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":1142,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"bf34#1743e0ca9a2","result":[{"id":1141,"status":"updated"},{"id":1142,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '120',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"14050#1743e0cac81","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1079/leads.json', {"input":[{"id":1141},{"id":1142}]})
  .once().reply(200, {"requestId":"7fbb#1743e0cada9","result":[{"id":1141,"status":"added"},{"id":1142,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '116',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"4e45#1743e0caee6","warnings":[],"result":[{"id":1080,"name":"(test) Churned","createdAt":"2020-08-30T06:27:29Z+0000","updatedAt":"2020-08-30T06:27:29Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1080A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1080/leads.json')
  .query({"id":["1141","1142"]})
  .once().reply(200, {"requestId":"11bd4#1743e0cb008","result":[{"id":1141,"status":"removed"},{"id":1142,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '178',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1079/leads.json', "listId=1079&_method=GET")
  .once().reply(200, {"requestId":"b21e#1743e0cb177","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:26Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1080/leads.json', "listId=1080&_method=GET")
  .once().reply(200, {"requestId":"5037#1743e0cb2fb","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1493,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com%2Cbrian%40bleonard.com%2Cbrian2%40bleonard.com"})
  .once().reply(200, {"requestId":"176c7#1743e0cb53a","result":[{"id":1141,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:17Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:26Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"other@bleonard.com","id":1141,"firstName":"Brian","lastName":"Test"},{"email":"brian2@bleonard.com","id":1142,"firstName":"Evan"}]})
  .once().reply(200, {"requestId":"12496#1743e0cb678","result":[{"id":1141,"status":"updated"},{"id":1142,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '121',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"1260c#1743e0cb9cf","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1079/leads.json', {"input":[{"id":1141}]})
  .once().reply(200, {"requestId":"a068#1743e0cbaf8","result":[{"id":1141,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"e21e#1743e0cbc3b","warnings":[],"result":[{"id":1080,"name":"(test) Churned","createdAt":"2020-08-30T06:27:29Z+0000","updatedAt":"2020-08-30T06:27:29Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1080A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1080/leads.json', {"input":[{"id":1141}]})
  .once().reply(200, {"requestId":"665b#1743e0cbd47","result":[{"id":1141,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"4b56#1743e0cbeaa","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1079/leads.json')
  .query({"id":"1142"})
  .once().reply(200, {"requestId":"17473#1743e0cbfba","result":[{"id":1142,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"130c0#1743e0cc125","result":[{"id":1141,"email":"other@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '303',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"9eb7#1743e0cc278","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1142"})
  .once().reply(200, {"requestId":"39e9#1743e0cc398","result":[{"id":1142,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '300',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1079/leads.json', "listId=1079&_method=GET")
  .once().reply(200, {"requestId":"c1f2#1743e0cc499","result":[{"id":1141,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T06:27:34Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1080/leads.json', "listId=1080&_method=GET")
  .once().reply(200, {"requestId":"5bcd#1743e0cc5c1","result":[{"id":1141,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T06:27:34Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1488,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com%2Cother%40bleonard.com%2Cbrian2%40bleonard.com"})
  .once().reply(200, {"requestId":"15130#1743e0cc83a","result":[{"id":1141,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T06:27:34Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1142,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:34Z","createdAt":"2020-08-30T06:27:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '355',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":1142}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"6b69#1743e0cc96f","result":[{"id":1142,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Brian","lastName":"Test"}]})
  .once().reply(200, {"requestId":"15b99#1743e0ccaa1","result":[{"id":1141,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"d567#1743e0cce55","warnings":[],"result":[{"id":1079,"name":"(test) High Value","createdAt":"2020-08-30T06:27:22Z+0000","updatedAt":"2020-08-30T06:27:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1079A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1079/leads.json', {"input":[{"id":1141}]})
  .once().reply(200, {"requestId":"117ec#1743e0ccf65","result":[{"id":1141,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"15f1b#1743e0cd0aa","warnings":[],"result":[{"id":1080,"name":"(test) Churned","createdAt":"2020-08-30T06:27:29Z+0000","updatedAt":"2020-08-30T06:27:29Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1080A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1080/leads.json')
  .query({"id":"1141"})
  .once().reply(200, {"requestId":"12f08#1743e0cd1bf","result":[{"id":1141,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"106de#1743e0cd300","result":[{"id":1141,"email":"brian@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '303',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"7d09#1743e0cd5ae","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:42 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"116b0#1743e0cd7f3","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1142"})
  .once().reply(200, {"requestId":"d05a#1743e0cda14","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1079/leads.json', "listId=1079&_method=GET")
  .once().reply(200, {"requestId":"17852#1743e0cdc13","result":[{"id":1141,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:39Z","createdAt":"2020-08-30T06:27:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:44 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1080/leads.json', "listId=1080&_method=GET")
  .once().reply(200, {"requestId":"104f7#1743e0cde33","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:44 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1482,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:45 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"14d46#1743e0ce24b","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:45 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Evan","textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48.000Z","score_field":10,"percent_field":99}]})
  .once().reply(200, {"requestId":"10ea5#1743e0ce3e0","result":[{"id":1143,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:46 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"13b01#1743e0ce655","result":[{"id":1143,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:46Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"1e66#1743e0ce801","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48Z","score_field":10,"percent_field":99}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '338',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1479,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"2a11#1743e0cea32","result":[{"id":1143,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:46Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","textarea_field":null,"boolean_field":null,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}]})
  .once().reply(200, {"requestId":"1382b#1743e0ceb64","result":[{"id":1143,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"f5a1#1743e0cefe8","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1477,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"5b7f#1743e0cf3fa","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","boolean_field":"other"}]})
  .once().reply(200, {"requestId":"392b#1743e0cf5e0","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'boolean_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"ec5c#1743e0cf810","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1475,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"b01c#1743e0cfa45","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"174a6#1743e0cfb50","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '158',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"14d2c#1743e0cfcbf","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1474,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"a09c#1743e0cfecb","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","integer_field":14.1}]})
  .once().reply(200, {"requestId":"15f9d#1743e0cffde","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'integer_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '160',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"8d3c#1743e0d00f8","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1473,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"69c#1743e0d0303","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","float_field":"14c"}]})
  .once().reply(200, {"requestId":"a495#1743e0d0416","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'float_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '157',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"22a3#1743e0d052d","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1472,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"bca2#1743e0d0737","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","datetime_field":"yesterday"}]})
  .once().reply(200, {"requestId":"13886#1743e0d084a","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'datetime_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '161',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"14cff#1743e0d0970","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1471,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"1661#1743e0d0b7c","result":[{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":1143,"firstName":"Maria","percent_field":"100%"}]})
  .once().reply(200, {"requestId":"757f#1743e0d0ca0","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'percent_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"123ee#1743e0d0db4","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian3%40bleonard.com"})
  .once().reply(200, {"requestId":"90c7#1743e0d0f19","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":1470,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com%2Cbrian2%40bleonard.com%2Cbrian3%40bleonard.com"})
  .once().reply(200, {"requestId":"10fb7#1743e0d1117","result":[{"id":1141,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T06:27:39Z","createdAt":"2020-08-30T06:27:13Z"},{"id":1143,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T06:27:48Z","createdAt":"2020-08-30T06:27:46Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '356',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1141,"firstName":"Sam","lastName":"Test"},{"email":"brian2@bleonard.com","id":1143,"firstName":"William","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"70ce#1743e0d1221","result":[{"id":1141,"status":"updated"},{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:58 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '188',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian3@bleonard.com","firstName":"Liz","email_field":"valid@grouparoo.com"}]})
  .once().reply(200, {"requestId":"14f84#1743e0d156d","result":[{"id":1144,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1141"})
  .once().reply(200, {"requestId":"1039a#1743e0d17e0","result":[{"id":1141,"email":"brian@bleonard.com","firstName":"Sam","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1143"})
  .once().reply(200, {"requestId":"d3c2#1743e0d18f4","result":[{"id":1143,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:27:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian3%40bleonard.com"})
  .once().reply(200, {"requestId":"12c3e#1743e0d1a04","result":[{"id":1144,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-08-30T06:27:59Z","createdAt":"2020-08-30T06:27:59Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:28:00 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"1144"})
  .once().reply(200, {"requestId":"69b2#1743e0d1b20","result":[{"id":1144,"email":"brian3@bleonard.com","firstName":"Liz","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":"valid@grouparoo.com","integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 06:28:00 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '316',
  'Connection',
  'close'
]);