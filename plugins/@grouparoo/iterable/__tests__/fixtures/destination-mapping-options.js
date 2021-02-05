const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:09:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '867',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '52',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress b48a'
]);
nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","phoneNumberDetails.carrier":"string","customField":"string","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Mon, 01 Feb 2021 21:09:33 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '867',
  'Connection',
  'keep-alive',
  'Vary',
  'Origin',
  'Request-Time',
  '21',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'iterable-ingress aaa7'
]);