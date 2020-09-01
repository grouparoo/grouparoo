const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3140,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:53 GMT',
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
  .once().reply(200, {"requestId":"10a88#1743e2b384b","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"327#1743e2b39b6","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '58',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian3%40bleonard.com"})
  .once().reply(200, {"requestId":"12214#1743e2b3b01","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"f382#1743e2b3d2d","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"15bfb#1743e2b4045","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:56 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"4186#1743e2b41fd","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:56 GMT',
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
  .once().reply(200, {"requestId":"178ff#1743e2b4324","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:56 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3136,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:57 GMT',
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
  .once().reply(200, {"requestId":"8ae2#1743e2b45f5","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"b562#1743e2b46fe","result":[{"id":2149,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:58 GMT',
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
  .once().reply(200, {"requestId":"3e0#1743e2b4c03","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:00:58Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"12986#1743e2b4d2c","result":[{"id":2149,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"d11a#1743e2b4f15","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:00:59 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3133,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:00 GMT',
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
  .once().reply(200, {"requestId":"15a57#1743e2b5324","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:00:58Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:00 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"2011#1743e2b555a","result":[{"id":2149,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:02 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"a4e3#1743e2b5d71","result":[{"id":2150,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:04 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"15e6c#1743e2b613c","result":[{"id":2149,"email":"brian@bleonard.com","firstName":"John","lastName":"Smith","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:04 GMT',
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
  .once().reply(200, {"requestId":"95e5#1743e2b631a","result":[{"id":2150,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:03Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:04 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2150"})
  .once().reply(200, {"requestId":"afb8#1743e2b6439","result":[{"id":2150,"email":"brian2@bleonard.com","firstName":"Andy","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:05 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '300',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3128,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:05 GMT',
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
  .once().reply(200, {"requestId":"6ea9#1743e2b6655","result":[{"id":2149,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:01Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:05 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"d168#1743e2b6766","result":[{"id":2149,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:06 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"15504#1743e2b6a45","result":[{"id":2149,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:06 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"10882#1743e2b6b4a","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:07 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3126,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:07 GMT',
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
  .once().reply(200, {"requestId":"3795#1743e2b6da3","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:07 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"736c#1743e2b7011","result":[{"id":2149,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:08 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"a8f6#1743e2b73d9","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:09 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"4a1f#1743e2b74ed","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"c73d#1743e2b7608","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:09Z+0000","updatedAt":"2020-08-30T07:01:09Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1083/leads.json', {"input":[{"id":2149}]})
  .once().reply(200, {"requestId":"12c6b#1743e2b77b2","result":[{"id":2149,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:10 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"7f44#1743e2b7ab6","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1083/leads.json', "listId=1083&_method=GET")
  .once().reply(200, {"requestId":"952a#1743e2b7bce","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:11 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"760b#1743e2b8762","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:14 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3119,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:14 GMT',
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
  .once().reply(200, {"requestId":"165a0#1743e2b8978","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:03Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:14 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":2150,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"10caa#1743e2b8ad6","result":[{"id":2149,"status":"updated"},{"id":2150,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:17 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"8faa#1743e2b940b","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1083/leads.json', {"input":[{"id":2149},{"id":2150}]})
  .once().reply(200, {"requestId":"167af#1743e2b9523","result":[{"id":2149,"status":"added"},{"id":2150,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '117',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"3b40#1743e2b9798","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:18 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"920#1743e2b98b4","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"154b5#1743e2b99cf","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:18Z+0000","updatedAt":"2020-08-30T07:01:18Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1084/leads.json', {"input":[{"id":2149}]})
  .once().reply(200, {"requestId":"8494#1743e2b9b7e","result":[{"id":2149,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:19 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"b119#1743e2b9e6f","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:19Z+0000","updatedAt":"2020-08-30T07:01:19Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1083/leads.json', "listId=1083&_method=GET")
  .once().reply(200, {"requestId":"3386#1743e2b9f80","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:16Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1084/leads.json', "listId=1084&_method=GET")
  .once().reply(200, {"requestId":"315f#1743e2ba18b","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2150"})
  .once().reply(200, {"requestId":"b593#1743e2ba2d5","result":[{"id":2150,"email":"brian2@bleonard.com","firstName":"Sally","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:21 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3112,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:21 GMT',
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
  .once().reply(200, {"requestId":"16ea2#1743e2ba501","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:16Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":2150,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"16bc5#1743e2ba747","result":[{"id":2149,"status":"updated"},{"id":2150,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:23 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"bc35#1743e2baafb","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:23 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1083/leads.json', {"input":[{"id":2149},{"id":2150}]})
  .once().reply(200, {"requestId":"1694e#1743e2bac0f","result":[{"id":2149,"status":"added"},{"id":2150,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:23 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '117',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"1389#1743e2bae1f","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:19Z+0000","updatedAt":"2020-08-30T07:01:19Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1084/leads.json')
  .query({"id":["2149","2150"]})
  .once().reply(200, {"requestId":"2aa3#1743e2baf41","result":[{"id":2149,"status":"removed"},{"id":2150,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '177',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1083/leads.json', "listId=1083&_method=GET")
  .once().reply(200, {"requestId":"10104#1743e2bb0b7","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:16Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1084/leads.json', "listId=1084&_method=GET")
  .once().reply(200, {"requestId":"ad80#1743e2bb1de","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:25 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3108,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:25 GMT',
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
  .once().reply(200, {"requestId":"dace#1743e2bb3f9","result":[{"id":2149,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:06Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:16Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:25 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"other@bleonard.com","id":2149,"firstName":"Brian","lastName":"Test"},{"email":"brian2@bleonard.com","id":2150,"firstName":"Evan"}]})
  .once().reply(200, {"requestId":"13e08#1743e2bb506","result":[{"id":2149,"status":"updated"},{"id":2150,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:26 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"15fad#1743e2bb972","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1083/leads.json', {"input":[{"id":2149}]})
  .once().reply(200, {"requestId":"997f#1743e2bbaad","result":[{"id":2149,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:27 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"ad01#1743e2bbc2d","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:19Z+0000","updatedAt":"2020-08-30T07:01:19Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1084/leads.json', {"input":[{"id":2149}]})
  .once().reply(200, {"requestId":"16340#1743e2bbd39","result":[{"id":2149,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:28 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"15d50#1743e2bbf84","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1083/leads.json')
  .query({"id":"2150"})
  .once().reply(200, {"requestId":"7829#1743e2bc0b1","result":[{"id":2150,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"2560#1743e2bc1dc","result":[{"id":2149,"email":"other@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"18417#1743e2bc30e","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2150"})
  .once().reply(200, {"requestId":"10d25#1743e2bc41b","result":[{"id":2150,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1083/leads.json', "listId=1083&_method=GET")
  .once().reply(200, {"requestId":"11ae6#1743e2bc524","result":[{"id":2149,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T07:01:26Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1084/leads.json', "listId=1084&_method=GET")
  .once().reply(200, {"requestId":"d14e#1743e2bc667","result":[{"id":2149,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T07:01:26Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:30 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3103,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:30 GMT',
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
  .once().reply(200, {"requestId":"cef5#1743e2bc87d","result":[{"id":2149,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-30T07:01:26Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2150,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:26Z","createdAt":"2020-08-30T07:01:04Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":2150}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"165b1#1743e2bc98e","result":[{"id":2150,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Brian","lastName":"Test"}]})
  .once().reply(200, {"requestId":"16619#1743e2bcc81","result":[{"id":2149,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:32 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"5a4b#1743e2bd111","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1083/leads.json', {"input":[{"id":2149}]})
  .once().reply(200, {"requestId":"13b81#1743e2bd217","result":[{"id":2149,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:33 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"12a1c#1743e2bd33b","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:19Z+0000","updatedAt":"2020-08-30T07:01:19Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1084/leads.json')
  .query({"id":"2149"})
  .once().reply(200, {"requestId":"7ec3#1743e2bd454","result":[{"id":2149,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"17b5#1743e2bd705","result":[{"id":2149,"email":"brian@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"221f#1743e2bd822","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:34 GMT',
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
  .once().reply(200, {"requestId":"ec27#1743e2bd92f","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2150"})
  .once().reply(200, {"requestId":"7546#1743e2bda3e","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1083/leads.json', "listId=1083&_method=GET")
  .once().reply(200, {"requestId":"3ca6#1743e2bdb66","result":[{"id":2149,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:31Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1084/leads.json', "listId=1084&_method=GET")
  .once().reply(200, {"requestId":"f5fb#1743e2bdc8f","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:36 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3097,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:36 GMT',
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
  .once().reply(200, {"requestId":"2d8b#1743e2bded7","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Evan","textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48.000Z","score_field":10,"percent_field":99}]})
  .once().reply(200, {"requestId":"3df5#1743e2bdfe2","result":[{"id":2151,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"11b6c#1743e2be270","result":[{"id":2151,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:37Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"18021#1743e2be390","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48Z","score_field":10,"percent_field":99}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '339',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3095,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:38 GMT',
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
  .once().reply(200, {"requestId":"18137#1743e2be6c9","result":[{"id":2151,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:37Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","textarea_field":null,"boolean_field":null,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}]})
  .once().reply(200, {"requestId":"1445b#1743e2be7cc","result":[{"id":2151,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"145e4#1743e2beb08","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:39 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3094,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:40 GMT',
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
  .once().reply(200, {"requestId":"15fbd#1743e2bed22","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","boolean_field":"other"}]})
  .once().reply(200, {"requestId":"b1c2#1743e2bee36","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'boolean_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"4e80#1743e2befb8","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:40 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3092,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:41 GMT',
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
  .once().reply(200, {"requestId":"16698#1743e2bf205","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"12c7a#1743e2bf326","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '158',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"1441a#1743e2bf49b","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:42 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3091,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:42 GMT',
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
  .once().reply(200, {"requestId":"2ce2#1743e2bf6cc","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:42 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","integer_field":14.1}]})
  .once().reply(200, {"requestId":"1d74#1743e2bf7e0","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'integer_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"2724#1743e2bf9f1","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:43 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3090,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:43 GMT',
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
  .once().reply(200, {"requestId":"14d99#1743e2bfbf8","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:44 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","float_field":"14c"}]})
  .once().reply(200, {"requestId":"21f7#1743e2bfd42","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'float_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:44 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '157',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"d768#1743e2bfe4f","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:44 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3089,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:44 GMT',
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
  .once().reply(200, {"requestId":"bbdd#1743e2c0628","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:46 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","datetime_field":"yesterday"}]})
  .once().reply(200, {"requestId":"93ee#1743e2c0778","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'datetime_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '160',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"11a11#1743e2c0887","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:47 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3086,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:47 GMT',
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
  .once().reply(200, {"requestId":"1972#1743e2c0a95","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2151,"firstName":"Maria","percent_field":"100%"}]})
  .once().reply(200, {"requestId":"121db#1743e2c0c13","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'percent_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '160',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"16a3a#1743e2c0d1e","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:48 GMT',
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
  .once().reply(200, {"requestId":"14a68#1743e2c0e31","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:48 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3085,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:48 GMT',
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
  .once().reply(200, {"requestId":"faf2#1743e2c103f","result":[{"id":2149,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:31Z","createdAt":"2020-08-30T07:00:58Z"},{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '355',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2149,"firstName":"Sam","lastName":"Test"},{"email":"brian2@bleonard.com","id":2151,"firstName":"William","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"1256e#1743e2c1151","result":[{"id":2149,"status":"updated"},{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '189',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian3@bleonard.com","firstName":"Liz","email_field":"valid@grouparoo.com"}]})
  .once().reply(200, {"requestId":"11bea#1743e2c15eb","result":[{"id":2152,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2149"})
  .once().reply(200, {"requestId":"16b7b#1743e2c1a05","result":[{"id":2149,"email":"brian@bleonard.com","firstName":"Sam","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2151"})
  .once().reply(200, {"requestId":"94f7#1743e2c1b28","result":[{"id":2151,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:52 GMT',
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
  .once().reply(200, {"requestId":"aea6#1743e2c1c31","result":[{"id":2152,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-08-30T07:01:51Z","createdAt":"2020-08-30T07:01:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2152"})
  .once().reply(200, {"requestId":"935b#1743e2c1d7d","result":[{"id":2152,"email":"brian3@bleonard.com","firstName":"Liz","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":"valid@grouparoo.com","integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '316',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"115da#1743e2c1e94","result":[{"id":2149,"firstName":"Sam","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-30T07:01:49Z","createdAt":"2020-08-30T07:00:58Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:52 GMT',
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
  .once().reply(200, {"requestId":"6d50#1743e2c1fc2","result":[{"id":2151,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-30T07:01:38Z","createdAt":"2020-08-30T07:01:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:53 GMT',
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
  .once().reply(200, {"requestId":"10109#1743e2c2115","result":[{"id":2152,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-08-30T07:01:51Z","createdAt":"2020-08-30T07:01:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:53 GMT',
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
  .once().reply(200, {"requestId":"161fe#1743e2c2216","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":2149},{"id":2151},{"id":2152}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"cd78#1743e2c2340","result":[{"id":2149,"status":"deleted"},{"id":2151,"status":"deleted"},{"id":2152,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:54 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"932a#1743e2c2512","warnings":[],"result":[{"id":1083,"name":"(test) High Value","createdAt":"2020-08-30T07:01:10Z+0000","updatedAt":"2020-08-30T07:01:10Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1083A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1083/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"d9da#1743e2c265e","warnings":[],"result":[{"id":1083}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:55 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"2576#1743e2c27c9","warnings":[],"result":[{"id":1084,"name":"(test) Churned","createdAt":"2020-08-30T07:01:19Z+0000","updatedAt":"2020-08-30T07:01:19Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1084A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1084/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"ea6f#1743e2c28dc","warnings":[],"result":[{"id":1084}]}, [
  'Server',
  'nginx',
  'Date',
  'Sun, 30 Aug 2020 07:01:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);