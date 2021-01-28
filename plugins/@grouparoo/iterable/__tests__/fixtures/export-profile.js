const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:37:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '121',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:37:53 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:37:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  'Thu, 28 Jan 2021 22:37:53 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:37:53 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:38:23 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:38:24 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '78',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-01-28 22:38:24 +00:00","profileUpdatedAt":"2021-01-28 22:38:24 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-01-28 22:38:24 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"}}}}, [
  'Date',
  'Thu, 28 Jan 2021 22:38:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '374',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '24',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:38:55 GMT',
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
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","profileUpdatedAt":"2021-01-28 22:38:55 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:38:55 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:39:25 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '501',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '79',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:39:25 GMT',
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
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-28 22:39:25 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:39:26 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:39:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '459',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:39:56 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","profileUpdatedAt":"2021-01-28 22:39:56 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:39:56 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:26 GMT',
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
  'Thu, 28 Jan 2021 22:40:27 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:27 GMT',
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
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":837946,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:27 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:27 GMT',
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
  'Thu, 28 Jan 2021 22:40:27 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947],"profileUpdatedAt":"2021-01-28 22:40:27 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:40:29 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:57 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:57 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  'Thu, 28 Jan 2021 22:40:58 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:58 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":837946,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:58 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/unsubscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:40:58 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946],"profileUpdatedAt":"2021-01-28 22:40:58 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:40:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:41:29 GMT',
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
  'Thu, 28 Jan 2021 22:41:29 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:41:29 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":837947,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:41:29 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:41:29 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":838024,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:41:30 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-28 22:41:30 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:41:30 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '542',
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
  'Thu, 28 Jan 2021 22:42:00 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:00 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .post('/api/lists/unsubscribe', {"listId":839601,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:01 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"profileUpdatedAt":"2021-01-28 22:42:01 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:42:01 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:38:24 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:31 GMT',
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '16',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:31 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '53',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:42:32 GMT',
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
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-28 22:42:33 +00:00","profileUpdatedAt":"2021-01-28 22:42:32 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-01-28 22:42:33 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:42:33 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:02 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:02 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '47',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:02 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-28 22:42:33 +00:00","profileUpdatedAt":"2021-01-28 22:43:02 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:43:03 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:43:03 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '630',
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
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"}})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:43:33 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[837946,837947,838024],"signupDate":"2021-01-28 22:42:33 +00:00","profileUpdatedAt":"2021-01-28 22:43:33 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-01-28 22:43:34 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-01-28 22:43:03 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Thu, 28 Jan 2021 22:44:03 GMT',
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
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:44:04 GMT',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:44:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:44:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  'Thu, 28 Jan 2021 22:44:35 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Thu, 28 Jan 2021 22:45:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
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
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Thu, 28 Jan 2021 22:45:05 GMT',
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
  'Thu, 28 Jan 2021 22:45:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '35',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:45:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '23',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:45:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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
  .once().reply(200, {"lists":[{"id":839601,"name":"List Four","createdAt":1611872917245,"listType":"Standard"},{"id":838024,"name":"List Three","createdAt":1611787513478,"listType":"Standard"},{"id":837947,"name":"List Two","createdAt":1611784630768,"listType":"Standard"},{"id":837946,"name":"List One","createdAt":1611784630232,"listType":"Standard"},{"id":837780,"name":"Test Group X","createdAt":1611779447103,"listType":"Standard"}]}, [
  'Date',
  'Thu, 28 Jan 2021 22:45:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '418',
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