const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:05 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:05 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:05 GMT',
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
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '100',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '17',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
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
  'Tue, 02 Feb 2021 17:56:06 GMT',
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
  'Tue, 02 Feb 2021 17:56:36 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:56:37 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-02-02 17:56:37 +00:00","profileUpdatedAt":"2021-02-02 17:56:37 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-02-02 17:56:37 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"}}}}, [
  'Date',
  'Tue, 02 Feb 2021 17:57:07 GMT',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:57:07 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-02-02 17:57:07 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:57:08 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 17:57:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:57:38 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-02 17:57:38 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:57:40 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:08 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:09 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-02-02 17:58:09 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:58:09 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:39 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '414',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:39 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:39 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:39 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '125',
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
  .post('/api/lists', {"name":"List One"})
  .once().reply(200, {"listId":843772}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
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
  .post('/api/lists/subscribe', {"listId":843772,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '205',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '205',
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
  .post('/api/lists', {"name":"List Two"})
  .once().reply(200, {"listId":843773}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":843773,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:58:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773],"profileUpdatedAt":"2021-02-02 17:58:40 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:58:40 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '12',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:11 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .post('/api/lists/subscribe', {"listId":843772,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '20',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":843773,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772],"profileUpdatedAt":"2021-02-02 17:59:12 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:59:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:42 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:42 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .post('/api/lists/subscribe', {"listId":843773,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '285',
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
  .once().reply(200, {"lists":[{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Three"})
  .once().reply(200, {"listId":843775}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":843775,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 17:59:43 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773,843775],"profileUpdatedAt":"2021-02-02 17:59:43 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 17:59:44 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:13 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843775,"name":"List Three","createdAt":1612288783551,"listType":"Standard"},{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '367',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:14 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843775,"name":"List Three","createdAt":1612288783551,"listType":"Standard"},{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '367',
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
  .once().reply(200, {"lists":[{"id":843775,"name":"List Three","createdAt":1612288783551,"listType":"Standard"},{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:14 GMT',
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
  .once().reply(200, {"listId":843780}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '17',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '21',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":843780,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773,843775],"profileUpdatedAt":"2021-02-02 18:00:14 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 18:00:15 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 17:56:37 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":843780,"name":"List Four","createdAt":1612288814803,"listType":"Standard"},{"id":843775,"name":"List Three","createdAt":1612288783551,"listType":"Standard"},{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '448',
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
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '105',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:00:45 GMT',
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
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773,843775],"signupDate":"2021-02-02 18:00:46 +00:00","profileUpdatedAt":"2021-02-02 18:00:45 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-02-02 18:00:46 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 18:00:46 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:16 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '17',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '196',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:17 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773,843775],"signupDate":"2021-02-02 18:00:46 +00:00","profileUpdatedAt":"2021-02-02 18:01:17 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 18:01:19 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 18:01:19 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:47 GMT',
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
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:47 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:01:47 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[843772,843773,843775],"signupDate":"2021-02-02 18:00:46 +00:00","profileUpdatedAt":"2021-02-02 18:01:47 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-02-02 18:01:48 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 18:01:19 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:02:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:02:18 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:02:48 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:02:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:02:49 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:19 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '53',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"carlos.solimoes@mailinator.com","dataFields":{"userId":"testuser456","name":"Carlos"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
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
  .once().reply(200, {"lists":[{"id":843780,"name":"List Four","createdAt":1612288814803,"listType":"Standard"},{"id":843775,"name":"List Three","createdAt":1612288783551,"listType":"Standard"},{"id":843773,"name":"List Two","createdAt":1612288720564,"listType":"Standard"},{"id":843772,"name":"List One","createdAt":1612288720077,"listType":"Standard"},{"id":843038,"name":"High Value with Recent Automotive Purchase","createdAt":1612228996455,"listType":"Standard"}]}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '448',
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
  .post('/api/lists/subscribe', {"listId":843780,"subscribers":[{"email":"carlos.solimoes@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:20 GMT',
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[843780],"signupDate":"2021-02-02 18:03:20 +00:00","profileUpdatedAt":"2021-02-02 18:03:20 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-02-02 18:03:20 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-02-02 18:03:20 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '540',
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
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:50 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
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
  'Tue, 02 Feb 2021 18:03:50 GMT',
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
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '23',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/843772')
  .once().reply(200, {"msg":"List 843772 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '958',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/843773')
  .once().reply(200, {"msg":"List 843773 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1309',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/843775')
  .once().reply(200, {"msg":"List 843775 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '870',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/843780')
  .once().reply(200, {"msg":"List 843780 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Tue, 02 Feb 2021 18:03:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '95',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '911',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);