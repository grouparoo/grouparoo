const nock = require('nock');

nock('https://api.iterable.com:443', {"encodedQueryParams":true})
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","phoneNumberDetails":"object","phoneNumberDetails.carrier":"string","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Tue, 26 Jan 2021 20:13:12 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '793',
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
  .get('/api/users/getFields')
  .once().reply(200, {"fields":{"devices.appBuild":"string","phoneNumberDetails":"object","phoneNumberDetails.carrier":"string","emailListIds":"long","phoneNumberDetails.updatedAt":"date","phoneNumberDetails.countryCodeISO":"string","devices.deviceId":"string","devices.token":"string","phoneNumberDetails.lineType":"string","phoneNumber":"string","email":"string","unsubscribedChannelIds":"long","devices.appPackageName":"string","devices.iterableSdkVersion":"string","signupDate":"date","devices.endpointEnabled":"boolean","devices.applicationName":"string","itblInternal.emailDomain":"string","profileUpdatedAt":"date","signupSource":"string","unsubscribedMessageTypeIds":"long","userId":"string","devices.appVersion":"string","devices.platform":"string","devices":"object","devices.platformEndpoint":"string"}}, [
  'Date',
  'Tue, 26 Jan 2021 20:13:13 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '793',
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