const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2666,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:06 GMT',
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
  .once().reply(200, {"requestId":"168ff#1743773239f","result":[{"id":107,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:41:20Z","createdAt":"2020-08-28T23:40:43Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:06 GMT',
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
  .once().reply(200, {"requestId":"1f33#174377324ad","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:07 GMT',
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
  .once().reply(200, {"requestId":"f9b8#174377325d8","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:07 GMT',
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
  .once().reply(200, {"requestId":"127ab#174377326e3","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:07 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":107}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"73e9#174377327ee","result":[{"id":107,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:08 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"15b37#17437732a64","warnings":[],"result":[{"id":1062,"name":"(test) High Value","createdAt":"2020-08-28T23:40:55Z+0000","updatedAt":"2020-08-28T23:40:55Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1062A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:08 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1062/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"11e26#17437732b6e","warnings":[],"result":[{"id":1062}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:08 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"5572#17437732ca9","warnings":[],"result":[{"id":1063,"name":"(test) Churned","createdAt":"2020-08-28T23:41:03Z+0000","updatedAt":"2020-08-28T23:41:03Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1063A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1063/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"17bc6#17437732dcf","warnings":[],"result":[{"id":1063}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:09 GMT',
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
  .once().reply(200, {"requestId":"5eb#17437732efd","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:09 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '58',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2663,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:09 GMT',
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
  .once().reply(200, {"requestId":"11fba#17437733108","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:10 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '60',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"18610#1743773324c","result":[{"id":109,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:12 GMT',
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
  .once().reply(200, {"requestId":"f719#17437733a1c","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:11Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:12 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"109"})
  .once().reply(200, {"requestId":"123be#17437733b2e","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:11Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:12 GMT',
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
  .once().reply(200, {"requestId":"e3a#17437733c33","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '58',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2659,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:13 GMT',
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
  .once().reply(200, {"requestId":"124c2#17437733e30","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:11Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:13 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"172d5#17437733f5d","result":[{"id":109,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:15 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"15fbf#174377344d7","result":[{"id":110,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:15 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"109"})
  .once().reply(200, {"requestId":"267c#174377348ab","result":[{"id":109,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:14Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:16 GMT',
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
  .once().reply(200, {"requestId":"3457#174377349bd","result":[{"id":110,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:15Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"110"})
  .once().reply(200, {"requestId":"1223a#17437734adf","result":[{"id":110,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:15Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:16 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2656,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:17 GMT',
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
  .once().reply(200, {"requestId":"512c#17437734cfc","result":[{"id":109,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:14Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:17 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"1043#17437734e1f","result":[{"id":109,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"109"})
  .once().reply(200, {"requestId":"72d0#174377351c3","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:18 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"1037d#174377352d3","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:18 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2653,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:19 GMT',
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
  .once().reply(200, {"requestId":"eeee#174377354eb","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:19 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"12693#1743773576f","result":[{"id":109,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:20 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"175ec#17437735b22","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:20 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"119c5#17437735dc8","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:21 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"147d9#17437735ff3","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:22 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1064/leads.json', {"input":[{"id":109}]})
  .once().reply(200, {"requestId":"1005a#174377362a1","result":[{"id":109,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:23 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"ca36#17437736591","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:23 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1064/leads.json', "listId=1064&_method=GET")
  .once().reply(200, {"requestId":"9d77#1743773669d","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:24 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"11ea#174377371d2","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:26 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2646,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:27 GMT',
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
  .once().reply(200, {"requestId":"9714#174377373f5","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:15Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '350',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":110,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"a964#174377375a3","result":[{"id":109,"status":"updated"},{"id":110,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '118',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"570d#174377379c6","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1064/leads.json', {"input":[{"id":109},{"id":110}]})
  .once().reply(200, {"requestId":"17bb2#17437737b01","result":[{"id":109,"status":"added"},{"id":110,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '115',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"12911#17437737c35","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:29 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"179e0#17437737d40","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"13470#17437737e56","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:29Z+0000","updatedAt":"2020-08-28T23:42:29Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1065/leads.json', {"input":[{"id":109}]})
  .once().reply(200, {"requestId":"b69d#17437737f92","result":[{"id":109,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:30 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"955c#174377382bb","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:30Z+0000","updatedAt":"2020-08-28T23:42:30Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1064/leads.json', "listId=1064&_method=GET")
  .once().reply(200, {"requestId":"166ed#174377383c7","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:28Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '352',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1065/leads.json', "listId=1065&_method=GET")
  .once().reply(200, {"requestId":"e32d#174377384f9","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"110"})
  .once().reply(200, {"requestId":"15049#1743773869a","result":[{"id":110,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:28Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:32 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2640,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:32 GMT',
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
  .once().reply(200, {"requestId":"883a#174377388ad","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:28Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '351',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":110,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"109c4#174377389be","result":[{"id":109,"status":"updated"},{"id":110,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '119',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"1ad2#17437738c98","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1064/leads.json', {"input":[{"id":109},{"id":110}]})
  .once().reply(200, {"requestId":"1fac#17437738da9","result":[{"id":109,"status":"added"},{"id":110,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '114',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"af3#17437738eff","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:30Z+0000","updatedAt":"2020-08-28T23:42:30Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1065/leads.json')
  .query({"id":["109","110"]})
  .once().reply(200, {"requestId":"1161a#17437739015","result":[{"id":109,"status":"removed"},{"id":110,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '176',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1064/leads.json', "listId=1064&_method=GET")
  .once().reply(200, {"requestId":"40c3#1743773916b","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:28Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '351',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1065/leads.json', "listId=1065&_method=GET")
  .once().reply(200, {"requestId":"1781e#17437739290","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:35 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2637,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:35 GMT',
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
  .once().reply(200, {"requestId":"3cc7#174377394bd","result":[{"id":109,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:17Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:28Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '351',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"other@bleonard.com","id":109,"firstName":"Brian","lastName":"Test"},{"email":"brian2@bleonard.com","id":110,"firstName":"Evan"}]})
  .once().reply(200, {"requestId":"9fd#174377395c7","result":[{"id":109,"status":"updated"},{"id":110,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '117',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"3f14#1743773989f","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1064/leads.json', {"input":[{"id":109}]})
  .once().reply(200, {"requestId":"b5cf#174377399ac","result":[{"id":109,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:37 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"4d53#17437739b23","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:30Z+0000","updatedAt":"2020-08-28T23:42:30Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1065/leads.json', {"input":[{"id":109}]})
  .once().reply(200, {"requestId":"e861#17437739c57","result":[{"id":109,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '86',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"d9e3#17437739f37","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1064/leads.json')
  .query({"id":"110"})
  .once().reply(200, {"requestId":"24b6#1743773a04b","result":[{"id":110,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"109"})
  .once().reply(200, {"requestId":"a1f8#1743773a226","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"e412#1743773a324","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"110"})
  .once().reply(200, {"requestId":"1165e#1743773a478","result":[{"id":110,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1064/leads.json', "listId=1064&_method=GET")
  .once().reply(200, {"requestId":"4b40#1743773a58b","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1065/leads.json', "listId=1065&_method=GET")
  .once().reply(200, {"requestId":"12d43#1743773a6ae","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:40 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":2632,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:40 GMT',
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
  .once().reply(200, {"requestId":"b6ee#1743773a8d3","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"other@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:12Z"},{"id":110,"firstName":"Evan","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T23:42:36Z","createdAt":"2020-08-28T23:42:15Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '352',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":110}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"108aa#1743773a9f1","result":[{"id":110,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '89',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":109,"firstName":"Brian","lastName":"Test"}]})
  .once().reply(200, {"requestId":"107d2#1743773ac34","result":[{"id":109,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:42 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"2833#1743773af16","warnings":[],"result":[{"id":1064,"name":"(test) High Value","createdAt":"2020-08-28T23:42:22Z+0000","updatedAt":"2020-08-28T23:42:22Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1064A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:42 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1064/leads.json', {"input":[{"id":109}]})
  .once().reply(200, {"requestId":"82d7#1743773b02f","result":[{"id":109,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:42 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"e248#1743773b17a","warnings":[],"result":[{"id":1065,"name":"(test) Churned","createdAt":"2020-08-28T23:42:30Z+0000","updatedAt":"2020-08-28T23:42:30Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1065A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1065/leads.json')
  .query({"id":"109"})
  .once().reply(200, {"requestId":"4903#1743773b289","result":[{"id":109,"status":"removed"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"109"})
  .once().reply(200, {"requestId":"140c9#1743773b3d1","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:41Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:43 GMT',
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
  .once().reply(200, {"requestId":"ff33#1743773b4d2","result":[{"id":109,"firstName":"Brian","lastName":"Test","email":"brian@bleonard.com","updatedAt":"2020-08-28T23:42:41Z","createdAt":"2020-08-28T23:42:12Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 23:42:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);