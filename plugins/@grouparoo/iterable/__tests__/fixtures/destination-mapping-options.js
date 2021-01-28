const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","phoneNumberDetails.carrier":"string","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:33:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '844',
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
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","name":"string","itblInternal.regionCode":"string","phoneNumberDetails":"object","phoneNumberDetails.carrier":"string","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Thu, 28 Jan 2021 19:33:34 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '844',
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