const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3599,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:42 GMT',
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
  .once().reply(200, {"requestId":"15d68#1746a731c6b","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:43 GMT',
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
  .once().reply(200, {"requestId":"d63e#1746a731e35","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian3%40bleonard.com"})
  .once().reply(200, {"requestId":"17648#1746a73202f","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:44 GMT',
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
  .once().reply(200, {"requestId":"2dbf#1746a732229","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:44 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"d723#1746a732335","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:44 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"184f8#1746a7324ef","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:45 GMT',
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
  .once().reply(200, {"requestId":"dcb7#1746a732694","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:45 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3596,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:46 GMT',
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
  .once().reply(200, {"requestId":"d4cb#1746a7329ad","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:46 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"6b56#1746a732ac6","result":[{"id":2200,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:47 GMT',
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
  .once().reply(200, {"requestId":"1354a#1746a733032","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:47Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"137c5#1746a733149","result":[{"id":2200,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:48 GMT',
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
  .once().reply(200, {"requestId":"16029#1746a733279","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:48 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3593,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:48 GMT',
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
  .once().reply(200, {"requestId":"117b#1746a733493","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:47Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"6a83#1746a73364e","result":[{"id":2200,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"12e86#1746a733cac","result":[{"id":2201,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"a107#1746a734029","result":[{"id":2200,"email":"brian@bleonard.com","firstName":"John","lastName":"Smith","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '302',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"5a2c#1746a73423a","result":[{"id":2201,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:22:51Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2201"})
  .once().reply(200, {"requestId":"8774#1746a7343ca","result":[{"id":2201,"email":"brian2@bleonard.com","firstName":"Andy","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:53 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3589,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:53 GMT',
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
  .once().reply(200, {"requestId":"113c2#1746a7345d2","result":[{"id":2200,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:49Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"3474#1746a7346e6","result":[{"id":2200,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"a2bb#1746a734bad","result":[{"id":2200,"email":"brian@bleonard.com","firstName":"Brian","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:55 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"174ba#1746a734cb8","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:55 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3586,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:55 GMT',
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
  .once().reply(200, {"requestId":"9ec8#1746a734f24","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"5e7c#1746a735057","result":[{"id":2200,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:56 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"1328#1746a7353d1","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:57 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"13139#1746a7354d6","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=%28test%29%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"d80a#1746a735607","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:57Z+0000","updatedAt":"2020-09-07T21:22:57Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1089/leads.json', {"input":[{"id":2200}]})
  .once().reply(200, {"requestId":"1576d#1746a7357c3","result":[{"id":2200,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:58 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"1486f#1746a735a29","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab23.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:58 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1089/leads.json', "listId=1089&_method=GET")
  .once().reply(200, {"requestId":"df50#1746a735b56","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:22:59 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"12da4#1746a7366f6","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:02 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3580,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:02 GMT',
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
  .once().reply(200, {"requestId":"66a#1746a73691e","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:22:51Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:02 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '351',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":2201,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"b012#1746a736a35","result":[{"id":2200,"status":"updated"},{"id":2201,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:03 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"120c5#1746a736e2b","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:03 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1089/leads.json', {"input":[{"id":2200},{"id":2201}]})
  .once().reply(200, {"requestId":"f607#1746a736f33","result":[{"id":2200,"status":"added"},{"id":2201,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:04 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"e0f6#1746a7371cb","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:04 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"17ac7#1746a7372dc","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:05 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=%28test%29%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"ba73#1746a73740d","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:05 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1090/leads.json', {"input":[{"id":2200}]})
  .once().reply(200, {"requestId":"1e56#1746a73754e","result":[{"id":2200,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:05 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"121a#1746a7377c6","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab23.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:06 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1089/leads.json', "listId=1089&_method=GET")
  .once().reply(200, {"requestId":"4fca#1746a7378d8","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:03Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:06 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1090/leads.json', "listId=1090&_method=GET")
  .once().reply(200, {"requestId":"12c0#1746a737a3f","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:06 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2201"})
  .once().reply(200, {"requestId":"100c4#1746a737b60","result":[{"id":2201,"email":"brian2@bleonard.com","firstName":"Sally","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:07 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3575,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:07 GMT',
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
  .once().reply(200, {"requestId":"c361#1746a737dda","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:03Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:07 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":2201,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"18217#1746a737ef0","result":[{"id":2200,"status":"updated"},{"id":2201,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:08 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"1357d#1746a738347","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1089/leads.json', {"input":[{"id":2200},{"id":2201}]})
  .once().reply(200, {"requestId":"18df#1746a738486","result":[{"id":2200,"status":"added"},{"id":2201,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:09 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"14841#1746a7386f5","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab23.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1090/leads.json')
  .query({"id":["2200","2201"]})
  .once().reply(200, {"requestId":"a43c#1746a7388b4","result":[{"id":2200,"status":"removed"},{"id":2201,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '177',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1089/leads.json', "listId=1089&_method=GET")
  .once().reply(200, {"requestId":"c10b#1746a738afd","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:03Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:11 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1090/leads.json', "listId=1090&_method=GET")
  .once().reply(200, {"requestId":"875d#1746a738c19","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:11 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3570,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:11 GMT',
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
  .once().reply(200, {"requestId":"6f18#1746a738e38","result":[{"id":2200,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-09-07T21:22:53Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:03Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:12 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"other@bleonard.com","id":2200,"firstName":"Brian","lastName":"Test"},{"email":"brian2@bleonard.com","id":2201,"firstName":"Evan"}]})
  .once().reply(200, {"requestId":"57aa#1746a738fe9","result":[{"id":2200,"status":"updated"},{"id":2201,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:13 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"7620#1746a739494","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1089/leads.json', {"input":[{"id":2200}]})
  .once().reply(200, {"requestId":"4b9#1746a7395aa","result":[{"id":2200,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:14 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"11b24#1746a739754","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab23.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:14 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1090/leads.json', {"input":[{"id":2200}]})
  .once().reply(200, {"requestId":"108d4#1746a73988b","result":[{"id":2200,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:15 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"8ce7#1746a739b6a","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:15 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1089/leads.json')
  .query({"id":"2201"})
  .once().reply(200, {"requestId":"181d8#1746a739c7e","result":[{"id":2201,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:15 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"8678#1746a739de9","result":[{"id":2200,"email":"other@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:16 GMT',
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
  .once().reply(200, {"requestId":"b1dc#1746a739f03","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2201"})
  .once().reply(200, {"requestId":"13626#1746a73a093","result":[{"id":2201,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1089/leads.json', "listId=1089&_method=GET")
  .once().reply(200, {"requestId":"1243f#1746a73a194","result":[{"id":2200,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-09-07T21:23:12Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1090/leads.json', "listId=1090&_method=GET")
  .once().reply(200, {"requestId":"13540#1746a73a2a3","result":[{"id":2200,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-09-07T21:23:12Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3564,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:17 GMT',
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
  .once().reply(200, {"requestId":"141f4#1746a73a4b9","result":[{"id":2200,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-09-07T21:23:12Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2201,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:12Z","createdAt":"2020-09-07T21:22:51Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '355',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":2201}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"413a#1746a73a5c8","result":[{"id":2201,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Brian","lastName":"Test"}]})
  .once().reply(200, {"requestId":"13125#1746a73a8fa","result":[{"id":2200,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:19 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"a9e5#1746a73ac24","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1089/leads.json', {"input":[{"id":2200}]})
  .once().reply(200, {"requestId":"13c3f#1746a73ad32","result":[{"id":2200,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:20 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"10fa9#1746a73aebb","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1090/leads.json')
  .query({"id":"2200"})
  .once().reply(200, {"requestId":"133d1#1746a73afda","result":[{"id":2200,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:20 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"15fa5#1746a73b21c","result":[{"id":2200,"email":"brian@bleonard.com","firstName":"Brian","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:21 GMT',
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
  .once().reply(200, {"requestId":"b161#1746a73b331","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:21 GMT',
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
  .once().reply(200, {"requestId":"13424#1746a73b45a","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2201"})
  .once().reply(200, {"requestId":"814d#1746a73b5e6","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1089/leads.json', "listId=1089&_method=GET")
  .once().reply(200, {"requestId":"6de3#1746a73b6ed","result":[{"id":2200,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-09-07T21:23:18Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1090/leads.json', "listId=1090&_method=GET")
  .once().reply(200, {"requestId":"9b27#1746a73b83d","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:22 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3559,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:23 GMT',
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
  .once().reply(200, {"requestId":"269b#1746a73bab3","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:23 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Evan","textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48.000Z","score_field":10,"percent_field":99}]})
  .once().reply(200, {"requestId":"13dda#1746a73bbcc","result":[{"id":2202,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:24 GMT',
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
  .once().reply(200, {"requestId":"fd37#1746a73bf64","result":[{"id":2202,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:24Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"8f52#1746a73c06e","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Evan","lastName":null,"textarea_field":"text is here","boolean_field":true,"email_field":"field@grouparoo.com","integer_field":5,"float_field":5.4,"datetime_field":"2020-08-30T05:49:48Z","score_field":10,"percent_field":99}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:24 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3557,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:25 GMT',
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
  .once().reply(200, {"requestId":"92e4#1746a73c26c","result":[{"id":2202,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:24Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:25 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","textarea_field":null,"boolean_field":null,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}]})
  .once().reply(200, {"requestId":"13e61#1746a73c3dd","result":[{"id":2202,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:26 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"2202#1746a73c769","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:26 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3555,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:27 GMT',
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
  .once().reply(200, {"requestId":"a529#1746a73c9df","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","boolean_field":"other"}]})
  .once().reply(200, {"requestId":"17e3#1746a73cb11","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'boolean_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"52ba#1746a73cc27","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:27 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3554,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:28 GMT',
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
  .once().reply(200, {"requestId":"ed61#1746a73ce30","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"15b23#1746a73cf48","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '158',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"11a02#1746a73d050","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:28 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3553,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:29 GMT',
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
  .once().reply(200, {"requestId":"160ef#1746a73d254","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","integer_field":14.1}]})
  .once().reply(200, {"requestId":"b360#1746a73d372","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'integer_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '159',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"6d1e#1746a73d47c","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:30 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3552,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:30 GMT',
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
  .once().reply(200, {"requestId":"9c46#1746a73d6b6","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","float_field":"14c"}]})
  .once().reply(200, {"requestId":"4d8c#1746a73d7bb","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'float_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '157',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"106f4#1746a73d8f8","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:31 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3550,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:31 GMT',
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
  .once().reply(200, {"requestId":"13d4#1746a73db3b","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","datetime_field":"yesterday"}]})
  .once().reply(200, {"requestId":"185df#1746a73dc50","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'datetime_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '161',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"3a4a#1746a73ddc7","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:32 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3549,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:32 GMT',
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
  .once().reply(200, {"requestId":"172b2#1746a73dfd0","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian2@bleonard.com","id":2202,"firstName":"Maria","percent_field":"100%"}]})
  .once().reply(200, {"requestId":"16203#1746a73e0d5","result":[{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'percent_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '160',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"17d03#1746a73e1df","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:33 GMT',
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
  .once().reply(200, {"requestId":"2367#1746a73e2e7","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:33 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3548,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:34 GMT',
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
  .once().reply(200, {"requestId":"13f28#1746a73e513","result":[{"id":2200,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-09-07T21:23:18Z","createdAt":"2020-09-07T21:22:47Z"},{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '356',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":2200,"firstName":"Sam","lastName":"Test"},{"email":"brian2@bleonard.com","id":2202,"firstName":"William","email_field":"bademail"}]})
  .once().reply(200, {"requestId":"3833#1746a73e616","result":[{"id":2200,"status":"updated"},{"status":"skipped","reasons":[{"code":"1003","message":"Invalid value for field 'email_field'"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '188',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian3@bleonard.com","firstName":"Liz","email_field":"valid@grouparoo.com"}]})
  .once().reply(200, {"requestId":"f6b8#1746a73eaad","result":[{"id":2203,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2200"})
  .once().reply(200, {"requestId":"16e1c#1746a73ed69","result":[{"id":2200,"email":"brian@bleonard.com","firstName":"Sam","lastName":"Test","textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '301',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2202"})
  .once().reply(200, {"requestId":"945c#1746a73eead","result":[{"id":2202,"email":"brian2@bleonard.com","firstName":"Maria","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":null,"integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:36 GMT',
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
  .once().reply(200, {"requestId":"103f7#1746a73effe","result":[{"id":2203,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-09-07T21:23:35Z","createdAt":"2020-09-07T21:23:36Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"fields":"email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field","filterType":"id","filterValues":"2203"})
  .once().reply(200, {"requestId":"160bf#1746a73f10d","result":[{"id":2203,"email":"brian3@bleonard.com","firstName":"Liz","lastName":null,"textarea_field":null,"boolean_field":false,"email_field":"valid@grouparoo.com","integer_field":null,"float_field":null,"datetime_field":null,"score_field":null,"percent_field":null}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '317',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"122e5#1746a73f21e","result":[{"id":2200,"firstName":"Sam","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-09-07T21:23:34Z","createdAt":"2020-09-07T21:22:47Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:37 GMT',
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
  .once().reply(200, {"requestId":"ca52#1746a73f32b","result":[{"id":2202,"firstName":"Maria","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-09-07T21:23:25Z","createdAt":"2020-09-07T21:23:24Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:38 GMT',
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
  .once().reply(200, {"requestId":"b247#1746a73f4f5","result":[{"id":2203,"firstName":"Liz","lastName":null,"email":"brian3@bleonard.com","updatedAt":"2020-09-07T21:23:35Z","createdAt":"2020-09-07T21:23:36Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"256d#1746a73f60f","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":2200},{"id":2202},{"id":2203}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"10c54#1746a73f722","result":[{"id":2200,"status":"deleted"},{"id":2202,"status":"deleted"},{"id":2203,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '152',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"1370f#1746a73f9cc","warnings":[],"result":[{"id":1089,"name":"(test) High Value","createdAt":"2020-09-07T21:22:58Z+0000","updatedAt":"2020-09-07T21:22:58Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1089A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1089/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"16628#1746a73fb1d","warnings":[],"result":[{"id":1089}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:40 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"47dc#1746a73fcfc","warnings":[],"result":[{"id":1090,"name":"(test) Churned","createdAt":"2020-09-07T21:23:05Z+0000","updatedAt":"2020-09-07T21:23:05Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab29.marketo.com/#ST1090A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1090/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"3eba#1746a73fe10","warnings":[],"result":[{"id":1090}]}, [
  'Server',
  'nginx',
  'Date',
  'Mon, 07 Sep 2020 21:23:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);