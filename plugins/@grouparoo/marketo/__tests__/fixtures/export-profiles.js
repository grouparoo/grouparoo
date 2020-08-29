const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":168,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:20 GMT',
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
  .once().reply(200, {"requestId":"10c07#1743be4713b","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:41Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"7677#1743be4734a","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:21 GMT',
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
  .once().reply(200, {"requestId":"fc34#1743be4746a","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"db15#1743be476a1","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":109}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"51eb#1743be477a4","result":[{"id":109,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:23 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"b34d#1743be47b4b","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:23 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1064/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"eaf2#1743be47c92","warnings":[],"result":[{"id":1064}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:24 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"29c0#1743be47e34","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:30Z+0000","updatedAt":"2020-08-28T23:42:30Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1065/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"d8d6#1743be47f45","warnings":[],"result":[{"id":1065}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:24 GMT',
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
  .once().reply(200, {"requestId":"1648b#1743be480a2","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:25 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":163,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:25 GMT',
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
  .once().reply(200, {"requestId":"dcc9#1743be482b9","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:25 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"4b8a#1743be483bd","result":[{"id":1111,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:26 GMT',
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
  .once().reply(200, {"requestId":"1275e#1743be4890e","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:26Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1111"})
  .once().reply(200, {"requestId":"2740#1743be48a17","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:26Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"159e4#1743be48c9d","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:28 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":160,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:28 GMT',
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
  .once().reply(200, {"requestId":"48b0#1743be48eb8","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:26Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"5762#1743be48fc3","result":[{"id":1111,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"13c16#1743be496a0","result":[{"id":1112,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '90',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1111"})
  .once().reply(200, {"requestId":"11718#1743be49b00","result":[{"id":1111,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:29Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"11daf#1743be49ca2","result":[{"id":1112,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:30Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1112"})
  .once().reply(200, {"requestId":"119f5#1743be49ebf","result":[{"id":1112,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:30Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":156,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:32 GMT',
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
  .once().reply(200, {"requestId":"5984#1743be4a0dd","result":[{"id":1111,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:29Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"45d5#1743be4a1e4","result":[{"id":1111,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1111"})
  .once().reply(200, {"requestId":"6355#1743be4a76e","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"2ea#1743be4a876","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:35 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":153,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:35 GMT',
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
  .once().reply(200, {"requestId":"fe6f#1743be4aa9a","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"1b1#1743be4abe8","result":[{"id":1111,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:37 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"17511#1743be4b108","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:37 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"65d3#1743be4b265","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"ac5a#1743be4b468","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1070/leads.json', {"input":[{"id":1111}]})
  .once().reply(200, {"requestId":"15694#1743be4b64c","result":[{"id":1111,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:39 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"12233#1743be4b921","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1070/leads.json', "listId=1070&_method=GET")
  .once().reply(200, {"requestId":"11831#1743be4bb1b","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"17a7a#1743be4c63f","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:42 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":146,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:43 GMT',
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
  .once().reply(200, {"requestId":"fde3#1743be4c851","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:30Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '352',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":1112,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"182bf#1743be4c965","result":[{"id":1111,"status":"updated"},{"id":1112,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:44 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"676b#1743be4cee6","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:45 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1070/leads.json', {"input":[{"id":1111},{"id":1112}]})
  .once().reply(200, {"requestId":"afe8#1743be4cfec","result":[{"id":1111,"status":"added"},{"id":1112,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:45 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"96bb#1743be4d13b","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:45 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"f130#1743be4d23f","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:45 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"1992#1743be4d354","warnings":[],"result":[{"id":1071,"name":"(test) Churned","createdAt":"2020-08-29T20:24:46Z+0000","updatedAt":"2020-08-29T20:24:46Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1071A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:46 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1071/leads.json', {"input":[{"id":1111}]})
  .once().reply(200, {"requestId":"9906#1743be4d4b0","result":[{"id":1111,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:46 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"fbf1#1743be4d768","warnings":[],"result":[{"id":1071,"name":"(test) Churned","createdAt":"2020-08-29T20:24:46Z+0000","updatedAt":"2020-08-29T20:24:46Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1071A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1070/leads.json', "listId=1070&_method=GET")
  .once().reply(200, {"requestId":"16daf#1743be4d87f","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:43Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '354',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1071/leads.json', "listId=1071&_method=GET")
  .once().reply(200, {"requestId":"d31a#1743be4d996","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1112"})
  .once().reply(200, {"requestId":"e46f#1743be4daaf","result":[{"id":1112,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:43Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":140,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:48 GMT',
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
  .once().reply(200, {"requestId":"f338#1743be4dd10","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:43Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":1112,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"1b83#1743be4de12","result":[{"id":1111,"status":"updated"},{"id":1112,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:49 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"df43#1743be4e238","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1070/leads.json', {"input":[{"id":1111},{"id":1112}]})
  .once().reply(200, {"requestId":"114ff#1743be4e34e","result":[{"id":1111,"status":"added"},{"id":1112,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:50 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"6ce8#1743be4e5cc","warnings":[],"result":[{"id":1071,"name":"(test) Churned","createdAt":"2020-08-29T20:24:46Z+0000","updatedAt":"2020-08-29T20:24:46Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1071A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1071/leads.json')
  .query({"id":["1111","1112"]})
  .once().reply(200, {"requestId":"166ff#1743be4e6d9","result":[{"id":1111,"status":"removed"},{"id":1112,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '178',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1070/leads.json', "listId=1070&_method=GET")
  .once().reply(200, {"requestId":"9ba#1743be4e833","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:43Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '352',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1071/leads.json', "listId=1071&_method=GET")
  .once().reply(200, {"requestId":"aadb#1743be4e97d","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:51 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":137,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:52 GMT',
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
  .once().reply(200, {"requestId":"22bc#1743be4eb7e","result":[{"id":1111,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:33Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:43Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"other@bleonard.com","id":1111,"firstName":"Brian","lastName":"Test"},{"email":"brian2@bleonard.com","id":1112,"firstName":"Evan"}]})
  .once().reply(200, {"requestId":"e078#1743be4ec7d","result":[{"id":1111,"status":"updated"},{"id":1112,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:53 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"9d23#1743be4f058","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1070/leads.json', {"input":[{"id":1111}]})
  .once().reply(200, {"requestId":"52cd#1743be4f17b","result":[{"id":1111,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:53 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"52b0#1743be4f309","warnings":[],"result":[{"id":1071,"name":"(test) Churned","createdAt":"2020-08-29T20:24:46Z+0000","updatedAt":"2020-08-29T20:24:46Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1071A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1071/leads.json', {"input":[{"id":1111}]})
  .once().reply(200, {"requestId":"15d9f#1743be4f415","result":[{"id":1111,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:54 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"ba49#1743be4f638","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1070/leads.json')
  .query({"id":"1112"})
  .once().reply(200, {"requestId":"6a98#1743be4f745","result":[{"id":1112,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:55 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1111"})
  .once().reply(200, {"requestId":"794d#1743be4f9d1","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"299b#1743be4fb29","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1112"})
  .once().reply(200, {"requestId":"966f#1743be4fc39","result":[{"id":1112,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1070/leads.json', "listId=1070&_method=GET")
  .once().reply(200, {"requestId":"e2d6#1743be4fd41","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:56 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '207',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1071/leads.json', "listId=1071&_method=GET")
  .once().reply(200, {"requestId":"ce9a#1743be4fe59","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:57 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":131,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:57 GMT',
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
  .once().reply(200, {"requestId":"859#1743be50074","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:26Z"},{"id":1112,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-29T20:24:52Z","createdAt":"2020-08-29T20:24:31Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:57 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '353',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":1112}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"5c48#1743be501d7","result":[{"id":1112,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:58 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":1111,"firstName":"Brian","lastName":"Test"}]})
  .once().reply(200, {"requestId":"ff68#1743be503d9","result":[{"id":1111,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:59 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"1296c#1743be507bb","warnings":[],"result":[{"id":1070,"name":"(test) High Value","createdAt":"2020-08-29T20:24:38Z+0000","updatedAt":"2020-08-29T20:24:38Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1070A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:59 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1070/leads.json', {"input":[{"id":1111}]})
  .once().reply(200, {"requestId":"9122#1743be508c5","result":[{"id":1111,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:24:59 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"3d75#1743be509f7","warnings":[],"result":[{"id":1071,"name":"(test) Churned","createdAt":"2020-08-29T20:24:46Z+0000","updatedAt":"2020-08-29T20:24:46Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1071A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:00 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1071/leads.json')
  .query({"id":"1111"})
  .once().reply(200, {"requestId":"d3a#1743be50b02","result":[{"id":1111,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:00 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1111"})
  .once().reply(200, {"requestId":"15d60#1743be50d7c","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:58Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:01 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"other%40bleonard.com"})
  .once().reply(200, {"requestId":"8667#1743be50e7e","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:01 GMT',
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
  .once().reply(200, {"requestId":"15c12#1743be50f81","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:01 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"1112"})
  .once().reply(200, {"requestId":"5622#1743be5107f","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:01 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1070/leads.json', "listId=1070&_method=GET")
  .once().reply(200, {"requestId":"1769d#1743be51180","result":[{"id":1111,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-29T20:24:58Z","createdAt":"2020-08-29T20:24:26Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:02 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '208',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1071/leads.json', "listId=1071&_method=GET")
  .once().reply(200, {"requestId":"15b54#1743be512b4","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Sat, 29 Aug 2020 20:25:02 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);