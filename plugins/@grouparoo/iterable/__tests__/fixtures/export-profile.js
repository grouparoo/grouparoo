const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:36 GMT',
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
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:36 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '26',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:36 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '61',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:50:37 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '61',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:51:07 GMT',
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
  'Fri, 29 Jan 2021 18:51:08 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:51:08 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-01-29 18:51:08 +00:00","profileUpdatedAt":"2021-01-29 18:51:08 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-01-29 18:51:08 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}}}}, [
  'Date',
  'Fri, 29 Jan 2021 18:51:38 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:51:39 GMT',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-01-29 18:51:08 +00:00","profileUpdatedAt":"2021-01-29 18:51:08 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-01-29 18:51:08 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}}}}, [
  'Date',
  'Fri, 29 Jan 2021 18:51:39 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-01-29 18:51:39 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:51:40 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:09 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:09 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-01-29 18:51:39 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:51:40 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-29 18:52:09 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:52:11 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:40 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-29 18:52:09 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:52:11 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:52:40 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '17',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-29 18:52:40 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:52:46 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '414',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:11 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-29 18:52:40 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:52:46 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '414',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/subscribe', {"listId":837946,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '71',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/subscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:12 GMT',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947],"profileUpdatedAt":"2021-01-29 18:53:12 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:53:17 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:42 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:42 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:42 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:43 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947],"profileUpdatedAt":"2021-01-29 18:53:12 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:53:17 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '535',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:43 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/unsubscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:53:43 GMT',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946],"profileUpdatedAt":"2021-01-29 18:53:43 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:53:44 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '528',
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
  'Fri, 29 Jan 2021 18:54:14 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946],"profileUpdatedAt":"2021-01-29 18:53:43 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:53:44 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:14 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/subscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:14 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/subscribe', {"listId":838024,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:15 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-29 18:54:15 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:54:15 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:45 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:45 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-29 18:54:15 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:54:15 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:45 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:46 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/unsubscribe', {"listId":839601,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Fri, 29 Jan 2021 18:54:46 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-29 18:54:46 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:54:46 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:16 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-29 18:54:46 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:54:46 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:51:08 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '42',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '811',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:18 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '108',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-29 18:55:20 +00:00","profileUpdatedAt":"2021-01-29 18:55:18 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-01-29 18:55:20 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:55:20 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '568',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '48',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:48 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-29 18:55:20 +00:00","profileUpdatedAt":"2021-01-29 18:55:18 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-01-29 18:55:20 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:55:20 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '568',
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
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2680',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:52 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:55:52 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-29 18:55:20 +00:00","profileUpdatedAt":"2021-01-29 18:55:52 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:55:57 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:55:57 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:22 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:23 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '25',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-29 18:55:20 +00:00","profileUpdatedAt":"2021-01-29 18:55:52 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:55:57 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:55:57 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:23 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-29 18:55:20 +00:00","profileUpdatedAt":"2021-01-29 18:56:23 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-29 18:56:34 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-29 18:55:57 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:56:54 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:24 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:24 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:25 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:55 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:55 GMT',
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
  'Fri, 29 Jan 2021 18:57:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '93',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:55 GMT',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Fri, 29 Jan 2021 18:57:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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