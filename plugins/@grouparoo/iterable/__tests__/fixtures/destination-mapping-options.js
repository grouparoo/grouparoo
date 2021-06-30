const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 17:44:08 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1158',
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
  .once().reply(200, {"fields":{"name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","defaultAddress":"object","phoneNumberDetails.updatedAt":"date","Lifetime Value":"double","Last Name 2":"string","phoneNumberDetails.countryCodeISO":"string","foo":"object","devices.deviceId":"string","devices.token":"string","devices.appBuild":"string","defaultAddress.number":"long","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","foo.name":"string","defaultAddress.street":"string","LTV":"double","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","emailListIds":"long","foo.ltv":"double","signupDate":"date","Language":"string","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","defaultAddress.zipcode":"string","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","Number of Purchases":"long","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Wed, 30 Jun 2021 17:44:09 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1158',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '6',
  'Server',
  'iterable-ingress aaf8'
]);