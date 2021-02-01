const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:36 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:42 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '43',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '76',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-02-01 21:05:43 +00:00","profileUpdatedAt":"2021-02-01 21:05:43 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-02-01 21:05:43 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}}}}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-02-01 21:05:43 +00:00","profileUpdatedAt":"2021-02-01 21:05:43 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-02-01 21:05:43 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}}}}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '20',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-02-01 21:05:49 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:05:49 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-02-01 21:05:49 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:05:49 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '43',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:05:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-01 21:05:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:05:55 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-01 21:05:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:05:55 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '16',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-01 21:06:00 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:00 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '414',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-01 21:06:00 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:00 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '414',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '12',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List One"})
  .once().reply(200, {"listId":842720}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":842720,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '91',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '91',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Two"})
  .once().reply(200, {"listId":842721}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":842721,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721],"profileUpdatedAt":"2021-02-01 21:06:07 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:07 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721],"profileUpdatedAt":"2021-02-01 21:06:07 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:07 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '38',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":842721,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720],"profileUpdatedAt":"2021-02-01 21:06:13 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:14 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '528',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720],"profileUpdatedAt":"2021-02-01 21:06:13 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:14 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '528',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":842721,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '171',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Three"})
  .once().reply(200, {"listId":842722}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":842722,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"profileUpdatedAt":"2021-02-01 21:06:20 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:20 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842722,"name":"List Three","createdAt":1612213580026,"listType":"Standard"},{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '253',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"profileUpdatedAt":"2021-02-01 21:06:20 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:20 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '76',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:26 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842722,"name":"List Three","createdAt":1612213580026,"listType":"Standard"},{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:26 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '253',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842722,"name":"List Three","createdAt":1612213580026,"listType":"Standard"},{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:26 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '253',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Four"})
  .once().reply(200, {"listId":842723}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:26 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"profileUpdatedAt":"2021-02-01 21:06:26 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:26 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":842723,"name":"List Four","createdAt":1612213586500,"listType":"Standard"},{"id":842722,"name":"List Three","createdAt":1612213580026,"listType":"Standard"},{"id":842721,"name":"List Two","createdAt":1612213567257,"listType":"Standard"},{"id":842720,"name":"List One","createdAt":1612213566751,"listType":"Standard"}]}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '334',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:32 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"profileUpdatedAt":"2021-02-01 21:06:26 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:06:26 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:05:43 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:32 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '3',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:32 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '80',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:06:32 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"signupDate":"2021-02-01 21:06:32 +00:00","profileUpdatedAt":"2021-02-01 21:06:32 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-02-01 21:06:33 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:06:32 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '568',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '20',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"signupDate":"2021-02-01 21:06:32 +00:00","profileUpdatedAt":"2021-02-01 21:06:32 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-02-01 21:06:33 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:06:32 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '568',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '56',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '3',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"signupDate":"2021-02-01 21:06:32 +00:00","profileUpdatedAt":"2021-02-01 21:07:04 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:07:04 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:07:04 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '24',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"signupDate":"2021-02-01 21:06:32 +00:00","profileUpdatedAt":"2021-02-01 21:07:04 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:07:04 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:07:04 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[842720,842721,842722],"signupDate":"2021-02-01 21:06:32 +00:00","profileUpdatedAt":"2021-02-01 21:07:34 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-01 21:07:35 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-01 21:07:04 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:39 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:07:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '56',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '3',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '184',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/842720')
  .once().reply(200, {"msg":"List 842720 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '884',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/842721')
  .once().reply(200, {"msg":"List 842721 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '833',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/842722')
  .once().reply(200, {"msg":"List 842722 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '910',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/842723')
  .once().reply(200, {"msg":"List 842723 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Mon, 01 Feb 2021 21:08:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '876',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);