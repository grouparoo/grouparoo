const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:05:44 GMT',
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
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:05:44 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '57',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:05:44 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:05:44 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:05:44 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 19:06:14 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:06:15 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-01-28 19:06:19 +00:00","profileUpdatedAt":"2021-01-28 19:06:15 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-01-28 19:06:19 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"}}}}, [
  'Date',
  'Thu, 28 Jan 2021 19:06:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:06:46 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-01-28 19:06:46 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:06:52 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:07:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '469',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '21',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998","signupDate":null}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:07:16 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","profileUpdatedAt":"2021-01-28 19:07:16 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:07:18 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:07:46 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '427',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '16',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123","name":null,"phoneNumber":null,"signupDate":null}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:07:47 GMT',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","profileUpdatedAt":"2021-01-28 19:07:47 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:07:47 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '382',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:17 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/lists/subscribe', {"listId":837946,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:18 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/lists/subscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:18 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"subscribedMessageTypeIds":[],"emailListIds":[837946,837947],"profileUpdatedAt":"2021-01-28 19:08:18 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:08:24 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '503',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '24',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:49 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":837946,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:49 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/lists/unsubscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:08:49 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"subscribedMessageTypeIds":[],"emailListIds":[837946],"profileUpdatedAt":"2021-01-28 19:08:49 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:08:51 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '496',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/lists/subscribe', {"listId":838024,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-28 19:09:20 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 19:09:27 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:06:19 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '510',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '91',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:09:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '322',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-28 19:09:54 +00:00","profileUpdatedAt":"2021-01-28 19:09:20 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-01-28 19:09:54 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:09:54 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:10:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '536',
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
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:10:23 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '63',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-28 19:09:54 +00:00","profileUpdatedAt":"2021-01-28 19:10:23 +00:00","userId":"testuser345","itblInternal":{"documentUpdatedAt":"2021-01-28 19:10:25 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 19:09:54 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:10:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '536',
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
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:10:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '101',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:25 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:25 GMT',
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
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:26 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '40',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '25',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '143',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:56 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 19:11:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '337',
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