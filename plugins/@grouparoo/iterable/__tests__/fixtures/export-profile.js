const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:08 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:08 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '75',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sebastian@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '120',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:50 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '29',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
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
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","defaultAddress":{"street":"Alice Luna","number":10,"zipcode":"555555555"}},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:04:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '69',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-06-30 20:04:57 +00:00","defaultAddress":{"street":"Alice Luna","number":10,"zipcode":"555555555"},"profileUpdatedAt":"2021-06-30 20:04:51 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-06-30 20:04:57 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}}}}, [
  'Date',
  'Wed, 30 Jun 2021 20:05:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '449',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sebastian@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:05:51 GMT',
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
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sebastian@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:05:52 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:05:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sebastian@mailinator.com","dataFields":{"name":"sebastian","userId":"sebastian3039","phoneNumber":"+5583999999939"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:05:52 GMT',
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
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sebastian@mailinator.com')
  .once().reply(200, {"user":{"email":"sebastian@mailinator.com","dataFields":{"name":"sebastian","phoneNumber":"+5583999999939","email":"sebastian@mailinator.com","signupDate":"2021-06-30 20:05:56 +00:00","profileUpdatedAt":"2021-06-30 20:05:52 +00:00","signupSource":"API","userId":"sebastian3039","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:05:56 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:05:56 +00:00"}},"userId":"sebastian3039"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:06:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '470',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","email":"caio.silveira@mailinator.com","signupDate":"2021-06-30 20:04:57 +00:00","defaultAddress":{"street":"Alice Luna","number":10,"zipcode":"555555555"},"profileUpdatedAt":"2021-06-30 20:04:51 +00:00","signupSource":"API","itblInternal":{"documentUpdatedAt":"2021-06-30 20:04:57 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}}}}, [
  'Date',
  'Wed, 30 Jun 2021 20:06:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '449',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:06:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:06:53 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"street":"Alice Luna","number":10,"zipcode":"555555555"},"profileUpdatedAt":"2021-06-30 20:06:53 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:06:55 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:07:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"street":"Alice Luna","number":10,"zipcode":"555555555"},"profileUpdatedAt":"2021-06-30 20:06:53 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:06:55 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:07:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:07:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","userId":"testuser123","phoneNumber":"+5583999999999","signupDate":"2020-08-19T20:50:04.000Z","customField":"testCustomField","defaultAddress":{"number":20,"street":"Alice Luna"}},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:07:54 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:07:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:07:58 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:07:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:07:58 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:54 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '91',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:07:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:07:58 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Caio","phoneNumber":"+5583999999999","email":"caio.silveira@mailinator.com","customField":"testCustomField","signupDate":"2020-08-19 20:50:04 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:07:54 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:07:58 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '576',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"signupDate":null,"userId":"testuser123","name":"Evan","phoneNumber":"+5583999999998"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:08:55 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:08:55 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:08:56 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:09:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '534',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"name":"Evan","phoneNumber":"+5583999999998","email":"caio.silveira@mailinator.com","customField":"testCustomField","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:08:55 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:08:56 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:09:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '534',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:09:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"name":null,"phoneNumber":null,"signupDate":null,"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:09:56 GMT',
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
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:09:56 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:09:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:56 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '489',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"email":"caio.silveira@mailinator.com","customField":"testCustomField","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:09:56 +00:00","signupSource":"API","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:09:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"}},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '489',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
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
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1261',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List One"})
  .once().reply(200, {"listId":1064799}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '18',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '50',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":1064799,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:57 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1342',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1342',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Two"})
  .once().reply(200, {"listId":1064800}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '18',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":1064800,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:10:58 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:10:58 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:10:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '612',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:10:58 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:10:59 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '612',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
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
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
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
  .post('/api/lists/subscribe', {"listId":1064799,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":1064800,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:11:59 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:11:59 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:12:01 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '604',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:11:59 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:12:01 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '604',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":1064800,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:00 GMT',
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
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1423',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '16',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Three"})
  .once().reply(200, {"listId":1064802}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '18',
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
  .post('/api/lists/subscribe', {"listId":1064802,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:13:01 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:13:01 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:13:04 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064802,"name":"List Three","createdAt":1625083981329,"listType":"Standard"},{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1506',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '10',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:13:01 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:13:04 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '8',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"caio.silveira@mailinator.com","dataFields":{"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064802,"name":"List Three","createdAt":1625083981329,"listType":"Standard"},{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1506',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '11',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064802,"name":"List Three","createdAt":1625083981329,"listType":"Standard"},{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1506',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '14',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists', {"name":"List Four"})
  .once().reply(200, {"listId":1064806}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '18',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/unsubscribe', {"listId":1064806,"subscribers":[{"email":"caio.silveira@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:14:02 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:14:02 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:14:03 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064806,"name":"List Four","createdAt":1625084042697,"listType":"Standard"},{"id":1064802,"name":"List Three","createdAt":1625083981329,"listType":"Standard"},{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1588',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:03 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:14:02 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:14:03 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '72',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:03 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:14:02 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:14:03 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
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
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:04 GMT',
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
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"user":{"email":"caio.silveira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:14:02 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:14:03 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:04:57 +00:00"},"email":"caio.silveira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '620',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"caio.silveira@mailinator.com","currentUserId":"testuser123","newEmail":"lucas.nogueira@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '150',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"lucas.nogueira@mailinator.com","dataFields":{"userId":"testuser123"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:15:05 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:15:05 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-06-30 20:15:14 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:15:14 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '646',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:05 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '59',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"user":{"email":"lucas.nogueira@mailinator.com","dataFields":{"customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:15:05 +00:00","userId":"testuser123","itblInternal":{"documentUpdatedAt":"2021-06-30 20:15:14 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:15:14 +00:00"},"email":"lucas.nogueira@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '646',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '13',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/updateEmail', {"currentEmail":"lucas.nogueira@mailinator.com","currentUserId":"testuser123","newEmail":"sandro.arturo@mailinator.com"})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:06 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '518',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser123","name":"Lucas","phoneNumber":"+5583999999997"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:16:06 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:16:06 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:16:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:17:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:17:07 GMT',
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
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:16:06 +00:00","userId":"testuser123","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:16:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser123"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:17:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:17:07 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '106',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"sandro.arturo@mailinator.com","dataFields":{"userId":"testuser345"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:17:07 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:17:07 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:17:09 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:18:08 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:17:07 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:17:09 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:18:08 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:17:07 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:17:09 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:18:08 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"user":{"email":"sandro.arturo@mailinator.com","dataFields":{"name":"Lucas","phoneNumber":"+5583999999997","customField":"testCustomField","subscribedMessageTypeIds":[],"emailListIds":[1064799,1064800,1064802],"signupDate":"2021-06-30 20:15:14 +00:00","defaultAddress":{"zipcode":"555555555","number":20,"street":"Alice Luna"},"profileUpdatedAt":"2021-06-30 20:17:07 +00:00","userId":"testuser345","itblInternal":{"regionCode":"BR","documentUpdatedAt":"2021-06-30 20:17:09 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:16:12 +00:00"},"email":"sandro.arturo@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser345"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:18:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '708',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:18:09 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:19:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '909',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:19:10 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '138',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:19:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '251',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:11 GMT',
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
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:11 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '382',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:12 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"carlos.solimoes@mailinator.com","dataFields":{"userId":"testuser456","name":"Carlos"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/lists')
  .once().reply(200, {"lists":[{"id":1064806,"name":"List Four","createdAt":1625084042697,"listType":"Standard"},{"id":1064802,"name":"List Three","createdAt":1625083981329,"listType":"Standard"},{"id":1064800,"name":"List Two","createdAt":1625083858335,"listType":"Standard"},{"id":1064799,"name":"List One","createdAt":1625083857871,"listType":"Standard"},{"id":1056557,"name":"5 people","createdAt":1624575876355,"listType":"Standard"},{"id":982908,"name":"Even Higher Value","createdAt":1620166177114,"listType":"Standard"},{"id":982904,"name":"High Value","createdAt":1620166058724,"listType":"Standard"},{"id":982903,"name":"All Emails","createdAt":1620166058474,"listType":"Standard"},{"id":982885,"name":"maybe all users?","createdAt":1620165503370,"listType":"Dynamic"},{"id":954281,"name":"People without emails","createdAt":1618248887848,"listType":"Standard"},{"id":954280,"name":"Everyone with an email","createdAt":1618248887703,"listType":"Standard"},{"id":952743,"name":"small group","createdAt":1618011863427,"listType":"Standard"},{"id":881919,"name":"High LTV Spanish speakers","createdAt":1614982084143,"listType":"Standard"},{"id":861897,"name":"People who bought red shells","createdAt":1613625317732,"listType":"Standard"},{"id":847675,"name":"People","createdAt":1612484718408,"listType":"Standard"},{"id":847669,"name":"One person","createdAt":1612484024629,"listType":"Standard"},{"id":845307,"name":"Spanish Speakers","createdAt":1612375373495,"listType":"Standard"},{"id":845306,"name":"High Value with Recent Automotive Purchase","createdAt":1612375372851,"listType":"Standard"}]}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1588',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '50',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/lists/subscribe', {"listId":1064806,"subscribers":[{"email":"carlos.solimoes@mailinator.com"}]})
  .once().reply(200, {"successCount":1,"failCount":0,"invalidEmails":[],"invalidUserIds":[]}, [
  'Date',
  'Wed, 30 Jun 2021 20:20:12 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:12 GMT',
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
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/pilo.paz@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:13 GMT',
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
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:13 GMT',
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
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/pilo.paz@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:13 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"jake.jill@mailinator.com","dataFields":{"userId":"jake.jill","name":"Jake"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:21:13 GMT',
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
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"user":{"email":"jake.jill@mailinator.com","dataFields":{"name":"Jake","email":"jake.jill@mailinator.com","signupDate":"2021-06-30 20:21:15 +00:00","profileUpdatedAt":"2021-06-30 20:21:13 +00:00","signupSource":"API","userId":"jake.jill","itblInternal":{"documentUpdatedAt":"2021-06-30 20:21:15 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:21:15 +00:00"}},"userId":"jake.jill"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:22:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '408',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"user":{"email":"jake.jill@mailinator.com","dataFields":{"name":"Jake","email":"jake.jill@mailinator.com","signupDate":"2021-06-30 20:21:15 +00:00","profileUpdatedAt":"2021-06-30 20:21:13 +00:00","signupSource":"API","userId":"jake.jill","itblInternal":{"documentUpdatedAt":"2021-06-30 20:21:15 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:21:15 +00:00"}},"userId":"jake.jill"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:22:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '408',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:22:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
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
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:22:14 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '125',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"jake.jill@mailinator.com","dataFields":{"userId":"jake.jill","name":"Lucas"},"mergeNestedObjects":true})
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:22:14 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:23:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"user":{"email":"jake.jill@mailinator.com","dataFields":{"name":"Lucas","email":"jake.jill@mailinator.com","signupDate":"2021-06-30 20:21:15 +00:00","profileUpdatedAt":"2021-06-30 20:22:14 +00:00","signupSource":"API","userId":"jake.jill","itblInternal":{"documentUpdatedAt":"2021-06-30 20:22:18 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:21:15 +00:00"}},"userId":"jake.jill"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:23:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '409',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"user":{"email":"jake.jill@mailinator.com","dataFields":{"name":"Lucas","email":"jake.jill@mailinator.com","signupDate":"2021-06-30 20:21:15 +00:00","profileUpdatedAt":"2021-06-30 20:22:14 +00:00","signupSource":"API","userId":"jake.jill","itblInternal":{"documentUpdatedAt":"2021-06-30 20:22:18 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:21:15 +00:00"}},"userId":"jake.jill"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:23:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '409',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:23:15 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:23:15 GMT',
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
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:24:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:24:16 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"user":{"email":"carlos.solimoes@mailinator.com","dataFields":{"name":"Carlos","subscribedMessageTypeIds":[],"emailListIds":[1064806],"signupDate":"2021-06-30 20:20:13 +00:00","profileUpdatedAt":"2021-06-30 20:20:12 +00:00","userId":"testuser456","itblInternal":{"documentUpdatedAt":"2021-06-30 20:20:13 +00:00","emailDomain":"mailinator.com","documentCreatedAt":"2021-06-30 20:20:13 +00:00"},"email":"carlos.solimoes@mailinator.com","unsubscribedChannelIds":[],"signupSource":"API","unsubscribedMessageTypeIds":[]},"userId":"testuser456"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:24:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '541',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:24:16 GMT',
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
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:16 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '94',
  'Server',
  'iterable-ingress b886'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/000')
  .once().reply(400, {"msg":"Invalid email: 000","code":"InvalidEmailAddressError","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:17 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '76',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '5',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '168',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","defaultAddress.defaultAddress":"long","name":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1197',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '7',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .post('/api/users/update', {"email":"carlos.solimoes@mailinator.com","dataFields":{"signupDate":"GGG"},"mergeNestedObjects":true})
  .once().reply(400, {"msg":"Project 10216: The request does not have the same data types as the data previously submitted. Field 'signupDate' already exists for type 'user' and has a data type of 'date' but possible types 'string, keyword' in the request.","code":"RequestFieldsTypesMismatched","params":{"validationErrors":{"signupDate":{"incomingTypes":["string","keyword"],"expectedType":"date","_type":"UnexpectedType","offendingValue":"GGG","category":"user"}}}}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '447',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaf8'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/caio.silveira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '2',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/lucas.nogueira@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sandro.arturo@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
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
  .delete('/api/users/carlos.solimoes@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
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
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/jake.jill@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:18 GMT',
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
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/users/sebastian@mailinator.com')
  .once().reply(200, {"msg":"","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:19 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '41',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '15',
  'Server',
  'iterable-ingress aaa7'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/1064799')
  .once().reply(200, {"msg":"List 1064799 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:20 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '96',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1023',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/1064800')
  .once().reply(200, {"msg":"List 1064800 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:21 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '96',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1070',
  'Server',
  'iterable-ingress 6d38'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/1064802')
  .once().reply(200, {"msg":"List 1064802 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:22 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '96',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1163',
  'Server',
  'iterable-ingress 8e97'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .delete('/api/lists/1064806')
  .once().reply(200, {"msg":"List 1064806 in Project 10216 was successfully deleted.","code":"Success","params":null}, [
  'Date',
  'Wed, 30 Jun 2021 20:25:23 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '96',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '1020',
  'Server',
  'iterable-ingress aaf8'
]);