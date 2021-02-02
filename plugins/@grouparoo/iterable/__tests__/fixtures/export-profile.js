const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '29',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
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
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '17',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '19',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:46 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:50:46 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-02-02 21:50:47 +00:00","profileUpdatedAt":"2021-02-02 21:50:46 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-02-02 21:50:47 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"}}}}, [
  'Date',
  'Tue, 02 Feb 2021 21:51:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:51:17 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-02-02 21:51:17 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:51:17 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:51:47 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:51:47 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-02 21:51:47 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:51:48 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:18 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-02 21:52:18 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:52:18 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:48 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '30',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List One"})
  .once().reply(200, {"listId":844159}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
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
  .post('/api/lists/subscribe', {"listId":844159,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '205',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '205',
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
  .post('/api/lists', {"name":"List Two"})
  .once().reply(200, {"listId":844160}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:50 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":844160,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:52:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '897',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160],"profileUpdatedAt":"2021-02-02 21:52:51 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:52:51 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:21 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
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
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:21 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:21 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '32',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:21 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .post('/api/lists/subscribe', {"listId":844159,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '436',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":844160,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159],"profileUpdatedAt":"2021-02-02 21:53:22 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:53:23 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '528',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '139',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":844160,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .post('/api/lists', {"name":"List Three"})
  .once().reply(200, {"listId":844162}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":844162,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:53:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160,844162],"profileUpdatedAt":"2021-02-02 21:53:54 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:53:56 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:24 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844162,"name":"List Three","createdAt":1612302834265,"listType":"Standard"},{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:24 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '367',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '321',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844162,"name":"List Three","createdAt":1612302834265,"listType":"Standard"},{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '367',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844162,"name":"List Three","createdAt":1612302834265,"listType":"Standard"},{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '367',
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
  .post('/api/lists', {"name":"List Four"})
  .once().reply(200, {"listId":844163}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":844163,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '21',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160,844162],"profileUpdatedAt":"2021-02-02 21:54:25 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:54:26 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:50:47 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844163,"name":"List Four","createdAt":1612302865837,"listType":"Standard"},{"id":844162,"name":"List Three","createdAt":1612302834265,"listType":"Standard"},{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '448',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '18',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '113',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:54:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '21',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160,844162],"signupDate":"2021-02-02 21:54:57 +00:00","profileUpdatedAt":"2021-02-02 21:54:57 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-02-02 21:54:57 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:54:57 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:27 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '568',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:27 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '130',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:27 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '45',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:28 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160,844162],"signupDate":"2021-02-02 21:54:57 +00:00","profileUpdatedAt":"2021-02-02 21:55:28 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:55:28 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:55:28 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:58 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '19',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:55:58 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[844159,844160,844162],"signupDate":"2021-02-02 21:54:57 +00:00","profileUpdatedAt":"2021-02-02 21:55:58 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 21:55:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:55:28 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:56:28 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  'Tue, 02 Feb 2021 21:56:29 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '22',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:56:59 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '48',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:56:59 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:00 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:30 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:30 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '22',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"carlos.solimoes@mailinator.com","dataFields":{"userId":"testuser456","name":"Carlos"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:31 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":844163,"name":"List Four","createdAt":1612302865837,"listType":"Standard"},{"id":844162,"name":"List Three","createdAt":1612302834265,"listType":"Standard"},{"id":844160,"name":"List Two","createdAt":1612302770106,"listType":"Standard"},{"id":844159,"name":"List One","createdAt":1612302769607,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '448',
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
  .post('/api/lists/subscribe', {"listId":844163,"subscribers":[{"email":"carlos.solimoes@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 21:57:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[844163],"signupDate":"2021-02-02 21:57:31 +00:00","profileUpdatedAt":"2021-02-02 21:57:31 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-02-02 21:57:31 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:57:31 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '540',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .get('/api/users/pilo.paz@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"pilo.paz@mailinator.com","currentUserId":"jake.jill","newEmail":"jake.jill@mailinator.com"})
  .once().reply(400, {"msg":"Cannot change user Some(pilo.paz@mailinator.com) to jake.jill@mailinator.com. User does not exist","code":"BadParams","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '140',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '19',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"jake.jill@mailinator.com","dataFields":{"userId":"jake.jill","name":"Jake"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '32',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"user":{"email":"jake.jill@mailinator.com","dataFields":{"name":"Jake","email":"jake.jill@mailinator.com","signupDate":"2021-02-02 21:58:02 +00:00","profileUpdatedAt":"2021-02-02 21:58:02 +00:00","signupSource":"API","userId":"jake.jill","itblInternal":{"documentUpdatedAt":"2021-02-02 21:58:02 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 21:58:02 +00:00"}},"userId":"jake.jill"}}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:32 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '408',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"000","dataFields":{}})
  .once().reply(400, {"msg":"Invalid email: 000","code":"InvalidEmailAddressError","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '76',
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
  .post('/api/users/update', {"email":"jake.jill@mailinator.com","dataFields":{"signupDate":"GGG"}})
  .once().reply(400, {"msg":"Project 10216: The request does not have the same data types as the data previously submitted. Field 'signupDate' already exists for type 'user' and has a data type of 'date' but possible types 'string, keyword' in the request.","code":"RequestFieldsTypesMismatched","params":{"validationErrors":{"signupDate":{"incomingTypes":["string","keyword"],"expectedType":"date","_type":"UnexpectedType","offendingValue":"GGG","category":"user"}}}}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '447',
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
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:33 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '27',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:34 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:34 GMT',
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
  .delete('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:34 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/844159')
  .once().reply(200, {"msg":"List 844159 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:35 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '938',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/844160')
  .once().reply(200, {"msg":"List 844160 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:36 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '997',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/844162')
  .once().reply(200, {"msg":"List 844162 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1071',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/844163')
  .once().reply(200, {"msg":"List 844163 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 21:58:38 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1200',
  'Server',
  'iterable-ingress 6d38'
]);