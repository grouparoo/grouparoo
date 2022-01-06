const nock = require('nock');

nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/delete', {"id":"user101","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);
nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/delete', {"id":"user102","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);
nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/delete', {"id":"user103","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);
nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/delete', {"id":"user104","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);
nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/delete', {"id":"user-not-found","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);
nock('https://api.getvero.com:443', {"encodedQueryParams":true})
  .post('/api/v2/users/track', {"id":"user101","auth_token":"jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh"})
  .once().reply(200, {"status":200,"message":"Success."}, [
  'Date',
  'Thu, 06 Jan 2022 16:09:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '35',
  'Connection',
  'close'
]);