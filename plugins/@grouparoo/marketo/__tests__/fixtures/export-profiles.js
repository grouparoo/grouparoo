const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3357,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:28 GMT',
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
  .once().reply(200, {"requestId":"1094c#174370ec5aa","result":[{"id":95,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:50:03Z","createdAt":"2020-08-28T21:49:57Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"36ef#174370ec858","result":[{"id":96,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:50:10Z","createdAt":"2020-08-28T21:50:00Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:29 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":95},{"id":96}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"105e6#174370ecbbe","result":[{"id":95,"status":"deleted"},{"id":96,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:30 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"2149#174370ece67","warnings":[],"result":[{"id":1052,"name":"(test) High Value","createdAt":"2020-08-28T21:50:06Z+0000","updatedAt":"2020-08-28T21:50:06Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1052A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:31 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1052/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"fc1d#174370ecfc5","warnings":[],"result":[{"id":1052}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:32 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"9dd7#174370ed262","warnings":[],"result":[{"id":1053,"name":"(test) Churned","createdAt":"2020-08-28T21:50:13Z+0000","updatedAt":"2020-08-28T21:50:13Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1053A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:32 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticList/1053/delete.json')
  .once().reply(200, {"success":true,"errors":[],"requestId":"13e0c#174370ed369","warnings":[],"result":[{"id":1053}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:32 GMT',
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
  .once().reply(200, {"requestId":"e69f#174370ed49e","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:33 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3352,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:33 GMT',
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
  .once().reply(200, {"requestId":"1fee#174370ed76c","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"3e2a#174370ed91d","result":[{"id":97,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"67a0#174370edda0","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:34Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"97"})
  .once().reply(200, {"requestId":"8922#174370edea8","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:34Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:35 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian2%40bleonard.com"})
  .once().reply(200, {"requestId":"133e9#174370ee050","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:35 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3349,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:36 GMT',
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
  .once().reply(200, {"requestId":"1203#174370ee25b","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:34Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":97,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"99c8#174370ee36a","result":[{"id":97,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"244f#174370ee699","result":[{"id":98,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"97"})
  .once().reply(200, {"requestId":"e4ff#174370eea35","result":[{"id":97,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:36Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:38 GMT',
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
  .once().reply(200, {"requestId":"1685e#174370eeb47","result":[{"id":98,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:37Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"98"})
  .once().reply(200, {"requestId":"9e32#174370eec72","result":[{"id":98,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:37Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3346,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:39 GMT',
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
  .once().reply(200, {"requestId":"1444f#174370eee7a","result":[{"id":97,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:36Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '206',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":97,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"1147f#174370eef9f","result":[{"id":97,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:40 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '88',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"97"})
  .once().reply(200, {"requestId":"11128#174370ef494","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:41 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"ac99#174370ef59c","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:41 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3344,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:41 GMT',
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
  .once().reply(200, {"requestId":"11166#174370ef79d","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":97,"firstName":"Brian"}]})
  .once().reply(200, {"requestId":"13f9a#174370ef8d7","result":[{"id":97,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:42 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"a9da#174370efbd8","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:42 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"100a2#174370efce4","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"bc4b#174370efdf3","warnings":[],"result":[{"id":1054,"name":"(test) High Value","createdAt":"2020-08-28T21:52:43Z+0000","updatedAt":"2020-08-28T21:52:43Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1054A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1054/leads.json', {"input":[{"id":97}]})
  .once().reply(200, {"requestId":"49df#174370eff3e","result":[{"id":97,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:43 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '85',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"185f0#174370f00a8","warnings":[],"result":[{"id":1054,"name":"(test) High Value","createdAt":"2020-08-28T21:52:44Z+0000","updatedAt":"2020-08-28T21:52:44Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1054A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:44 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1054/leads.json', "listId=1054&_method=GET")
  .once().reply(200, {"requestId":"160b4#174370f01bf","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:44 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"afe7#174370f0c99","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:47 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3338,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:47 GMT',
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
  .once().reply(200, {"requestId":"17163#174370f0eb5","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"},{"id":98,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:37Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:47 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '349',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":97,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":98,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"1938#174370f0fd2","result":[{"id":97,"status":"updated"},{"id":98,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '116',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"8048#174370f12b8","warnings":[],"result":[{"id":1054,"name":"(test) High Value","createdAt":"2020-08-28T21:52:44Z+0000","updatedAt":"2020-08-28T21:52:44Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1054A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:48 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1054/leads.json', {"input":[{"id":97},{"id":98}]})
  .once().reply(200, {"requestId":"bce4#174370f13d4","result":[{"id":97,"status":"added"},{"id":98,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '112',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"107ed#174370f1531","warnings":["No assets found for the given search criteria."]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:49 GMT',
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
  .once().reply(200, {"success":true,"errors":[],"requestId":"d3b3#174370f1634","warnings":[],"result":[{"name":"Group Lists","description":null,"createdAt":"2020-08-14T20:43:13Z+0000","updatedAt":"2020-08-14T20:43:13Z+0000","url":null,"folderId":{"id":12,"type":"Folder"},"folderType":"List","parent":{"id":5,"type":"Folder"},"path":"/Lead Database/Default/Group Lists","isArchive":false,"isSystem":true,"accessZoneId":1,"workspace":"Default","id":12},{"name":"Group Lists","description":null,"createdAt":"2020-08-28T19:52:20Z+0000","updatedAt":"2020-08-28T19:52:20Z+0000","url":null,"folderId":{"id":68,"type":"Folder"},"folderType":"List","parent":{"id":67,"type":"Folder"},"path":"/Lead Database/Default/Group Lists/Test/Inner/Group Lists","isArchive":false,"isSystem":false,"accessZoneId":1,"workspace":"Default","id":68}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:49 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/asset/v1/staticLists.json', "name=(test)%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D")
  .once().reply(200, {"success":true,"errors":[],"requestId":"e61c#174370f1753","warnings":[],"result":[{"id":1055,"name":"(test) Churned","createdAt":"2020-08-28T21:52:50Z+0000","updatedAt":"2020-08-28T21:52:50Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1055A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1055/leads.json', {"input":[{"id":97}]})
  .once().reply(200, {"requestId":"c3c1#174370f1915","result":[{"id":97,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '85',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"8a7#174370f1a4b","warnings":[],"result":[{"id":1055,"name":"(test) Churned","createdAt":"2020-08-28T21:52:50Z+0000","updatedAt":"2020-08-28T21:52:50Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab15.marketo.com/#ST1055A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:50 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1054/leads.json', "listId=1054&_method=GET")
  .once().reply(200, {"requestId":"eaf3#174370f1b5a","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"},{"id":98,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:48Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '349',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1055/leads.json', "listId=1055&_method=GET")
  .once().reply(200, {"requestId":"14fd5#174370f1c6b","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"98"})
  .once().reply(200, {"requestId":"90a4#174370f1d93","result":[{"id":98,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:48Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:51 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":3333,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:51 GMT',
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
  .once().reply(200, {"requestId":"f97f#174370f1fa3","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"},{"id":98,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:48Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '349',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":97,"firstName":"Brian"},{"email":"brian2@bleonard.com","id":98,"firstName":"Sally"}]})
  .once().reply(200, {"requestId":"9d55#174370f20cb","result":[{"id":97,"status":"updated"},{"id":98,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:52 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '116',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20High%20Value"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"359c#174370f239d","warnings":[],"result":[{"id":1054,"name":"(test) High Value","createdAt":"2020-08-28T21:52:44Z+0000","updatedAt":"2020-08-28T21:52:44Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-abq.marketo.com/#ST1054A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/lists/1054/leads.json', {"input":[{"id":97},{"id":98}]})
  .once().reply(200, {"requestId":"14154#174370f24af","result":[{"id":97,"status":"added"},{"id":98,"status":"added"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '113',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/asset/v1/staticList/byName.json')
  .query({"name":"%28test%29%20Churned"})
  .once().reply(200, {"success":true,"errors":[],"requestId":"10751#174370f2637","warnings":[],"result":[{"id":1055,"name":"(test) Churned","createdAt":"2020-08-28T21:52:50Z+0000","updatedAt":"2020-08-28T21:52:50Z+0000","folder":{"id":12,"type":"Folder"},"computedUrl":"https://app-ab28.marketo.com/#ST1055A1","workspace":"Default"}]}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:53 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .delete('/rest/v1/lists/1055/leads.json')
  .query({"id":["97","98"]})
  .once().reply(200, {"requestId":"fd31#174370f274a","result":[{"id":97,"status":"removed"},{"id":98,"status":"skipped","reasons":[{"code":"1015","message":"Lead not in list"}]}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '173',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1054/leads.json', "listId=1054&_method=GET")
  .once().reply(200, {"requestId":"16f98#174370f2879","result":[{"id":97,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T21:52:40Z","createdAt":"2020-08-28T21:52:35Z"},{"id":98,"firstName":"Sally","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T21:52:48Z","createdAt":"2020-08-28T21:52:38Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '350',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/list/1055/leads.json', "listId=1055&_method=GET")
  .once().reply(200, {"requestId":"26f9#174370f299c","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 21:52:54 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);