const nock = require('nock');

nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/identity/oauth/token')
  .query({"grant_type":"client_credentials","client_id":"98628d43-73e8-7a3d-9725-f1fd7be3755c","client_secret":"qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT"})
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":696,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:26 GMT',
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
  .once().reply(200, {"requestId":"10ca2#174328318ef","result":[{"id":11,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T00:39:15Z","createdAt":"2020-08-28T00:39:13Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:26 GMT',
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
  .once().reply(200, {"requestId":"6246#17432831a1e","result":[{"id":12,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T00:39:16Z","createdAt":"2020-08-28T00:39:16Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:27 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"input":[{"id":11},{"id":12}]})
  .query({"_method":"DELETE"})
  .once().reply(200, {"requestId":"fd4d#17432831cd7","result":[{"id":11,"status":"deleted"},{"id":12,"status":"deleted"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:28 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '116',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"email","filterValues":"brian%40bleonard.com"})
  .once().reply(200, {"requestId":"ccd3#174328321cf","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:28 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":693,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:29 GMT',
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
  .once().reply(200, {"requestId":"8ae4#17432832450","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:30 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '59',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian@bleonard.com","firstName":"Brian"}]})
  .once().reply(200, {"requestId":"f0cd#17432832820","result":[{"id":13,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:32 GMT',
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
  .once().reply(200, {"requestId":"6aae#17432833315","result":[{"id":13,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:32Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:33 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"13"})
  .once().reply(200, {"requestId":"10075#17432833511","result":[{"id":13,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:32Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:33 GMT',
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
  .once().reply(200, {"requestId":"c19f#17432833685","result":[],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:34 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":688,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:34 GMT',
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
  .once().reply(200, {"requestId":"7a9a#17432833918","result":[{"id":13,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:32Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:34 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":13,"firstName":"John","lastName":"Smith"}]})
  .once().reply(200, {"requestId":"bfc7#17432833a35","result":[{"id":13,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:36 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"email","action":"createOrUpdate","input":[{"email":"brian2@bleonard.com","firstName":"Andy"}]})
  .once().reply(200, {"requestId":"1cd8#174328341b9","result":[{"id":14,"status":"created"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:37 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"13"})
  .once().reply(200, {"requestId":"1d6#1743283448c","result":[{"id":13,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:35Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:37 GMT',
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
  .once().reply(200, {"requestId":"fc1d#17432834688","result":[{"id":14,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T00:41:37Z","createdAt":"2020-08-28T00:41:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:38 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '203',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"14"})
  .once().reply(200, {"requestId":"73c1#174328348a6","result":[{"id":14,"firstName":"Andy","lastName":null,"email":"brian2@bleonard.com","updatedAt":"2020-08-28T00:41:37Z","createdAt":"2020-08-28T00:41:37Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:38 GMT',
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
  .once().reply(200, {"access_token":"my-access-token","token_type":"bearer","expires_in":683,"scope":"my-user@grouparoo.com"}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:39 GMT',
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
  .once().reply(200, {"requestId":"2a6c#17432834b61","result":[{"id":13,"firstName":"John","lastName":"Smith","email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:35Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:39 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '205',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .post('/rest/v1/leads.json', {"lookupField":"id","action":"updateOnly","input":[{"email":"brian@bleonard.com","id":13,"firstName":"Brian","lastName":null}]})
  .once().reply(200, {"requestId":"f8ae#17432834c8d","result":[{"id":13,"status":"updated"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:41 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '87',
  'Connection',
  'close'
]);
nock('https://123-abc-456.mktorest.com:443', {"encodedQueryParams":true})
  .get('/rest/v1/leads.json')
  .query({"filterType":"id","filterValues":"13"})
  .once().reply(200, {"requestId":"152fc#1743283567b","result":[{"id":13,"firstName":"Brian","lastName":null,"email":"brian@bleonard.com","updatedAt":"2020-08-28T00:41:40Z","createdAt":"2020-08-28T00:41:33Z"}],"success":true}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 28 Aug 2020 00:41:42 GMT',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Content-Length',
  '204',
  'Connection',
  'close'
]);