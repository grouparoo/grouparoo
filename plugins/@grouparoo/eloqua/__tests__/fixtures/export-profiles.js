const nock = require('nock');

nock('https://login.eloqua.com:443', {"encodedQueryParams":true})
  .get('/id')
  .once().reply(200, {"site":{"id":734972267,"name":"e703652c38bf92ec484832c95344d3be765d58b5"},"user":{"id":222,"username":"t3st","displayName":"t3st","firstName":"Brian","lastName":"Leonard","emailAddress":"t3st@grouparoo.com"},"urls":{"base":"https://secure.p04.eloqua.com","apis":{"soap":{"standard":"https://secure.p04.eloqua.com/API/{version}/Service.svc","dataTransfer":"https://secure.p04.eloqua.com/API/{version}/DataTransferService.svc","email":"https://secure.p04.eloqua.com/API/{version}/EmailService.svc","externalAction":"https://secure.p04.eloqua.com/API/{version}/ExternalActionService.svc"},"rest":{"standard":"https://secure.p04.eloqua.com/API/REST/{version}/","bulk":"https://secure.p04.eloqua.com/API/Bulk/{version}/"}}}}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Frame-Options',
  'DENY',
  'Set-Cookie',
  'culture=en-US; domain=login.eloqua.com; path=/; SameSite=None; secure; HttpOnly',
  'Content-Security-Policy',
  "connect-src 'self';default-src 'self';script-src 'self' secure.p02.eloqua.com 'nonce-Y2NhNTIwMGQ0NmUwNDYyOWFjNWU3OWQ0NTk3OTcyYWQ=';style-src 'self' 'nonce-ZjFlMmFiYzA2OTEwNDViM2I3YmU2ODgwMWE0MjFkN2U=';upgrade-insecure-requests",
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:06:57 GMT',
  'Connection',
  'close',
  'Content-Length',
  '732'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/assets/contact/lists')
  .query({"search":"name%3D%27%28test%29%20High%20Value%27","depth":"partial"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '3798f08c744c423998c8945e12818919/24228884752',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:06:58 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/assets/contact/lists')
  .query({"search":"name%3D%27%28test%29%20Churned%27","depth":"partial"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '6e2406a54abf4931a5fcf78fbe5f276b/24228885094',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:06:59 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '80c3be5fa1c642f7a8d920ecb9d41164/24228885461',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:00 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo2%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'a0921d851ed542d9bbce4e52d28c8df7/24228885990',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo3%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '279f6b6c288241f69d9f0823c9eb8d3f/24228886257',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%2Btest%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'cde334b230f94f4587743ac5a790bafd/24228886597',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dnotgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '472e7c0c93884d3cbc40e1204ddbde94/24228886837',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:03 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3D1grouparoo2%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '94e7eea5cd724ea381044c3529e12226/24228887138',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:03 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'c56b3d2d493e495f9effd461447a5381/24228887492',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:04 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"emailAddress%3D%27grouparoo%40demo.com%27"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '17f6e3c89d4c46898c241244acca8e79/24228887739',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:04 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'ac1de67d43e14f228c37c619bf82ff5d/24228893047',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:16 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'a783082d3a8c4e888bbad267d1c26206/24228893375',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:16 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"emailAddress%3D%27grouparoo%40demo.com%27"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'e5f20ea8df7b4dd0ab43d648d28f6833/24228893627',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:17 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/bulk/2.0/contacts/fields')
  .once().reply(200, {"items":[{"name":"Email Address","internalName":"C_EmailAddress","dataType":"emailAddress","hasReadOnlyConstraint":false,"hasNotNullConstraint":true,"hasUniquenessConstraint":true,"statement":"{{Contact.Field(C_EmailAddress)}}","uri":"/contacts/fields/100001","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"First Name","internalName":"C_FirstName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_FirstName)}}","uri":"/contacts/fields/100002","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6270000Z"},{"name":"Last Name","internalName":"C_LastName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LastName)}}","uri":"/contacts/fields/100003","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6300000Z"},{"name":"Company","internalName":"C_Company","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company)}}","uri":"/contacts/fields/100004","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6200000Z"},{"name":"Email Display Name","internalName":"C_EmailDisplayName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_EmailDisplayName)}}","uri":"/contacts/fields/100005","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Address 1","internalName":"C_Address1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address1)}}","uri":"/contacts/fields/100006","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6070000Z"},{"name":"Address 2","internalName":"C_Address2","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address2)}}","uri":"/contacts/fields/100007","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6100000Z"},{"name":"Address 3","internalName":"C_Address3","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address3)}}","uri":"/contacts/fields/100008","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"City","internalName":"C_City","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_City)}}","uri":"/contacts/fields/100009","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6170000Z"},{"name":"State or Province","internalName":"C_State_Prov","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_State_Prov)}}","uri":"/contacts/fields/100010","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-01-18T18:44:17.5630000Z"},{"name":"Zip or Postal Code","internalName":"C_Zip_Postal","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Zip_Postal)}}","uri":"/contacts/fields/100011","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6370000Z"},{"name":"Country","internalName":"C_Country","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Country)}}","uri":"/contacts/fields/100012","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6230000Z"},{"name":"Business Phone","internalName":"C_BusPhone","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_BusPhone)}}","uri":"/contacts/fields/100013","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6130000Z"},{"name":"Mobile Phone","internalName":"C_MobilePhone","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MobilePhone)}}","uri":"/contacts/fields/100014","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Fax","internalName":"C_Fax","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Fax)}}","uri":"/contacts/fields/100015","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Title","internalName":"C_Title","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Title)}}","uri":"/contacts/fields/100016","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6330000Z"},{"name":"salutation_sfdc","internalName":"C_Salutation","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Salutation)}}","uri":"/contacts/fields/100017","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:42.0370000Z"},{"name":"Salesperson","internalName":"C_Salesperson","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Salesperson)}}","uri":"/contacts/fields/100022","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Contact ID","internalName":"C_SFDCContactID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCContactID)}}","uri":"/contacts/fields/100023","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Lead ID","internalName":"C_SFDCLeadID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLeadID)}}","uri":"/contacts/fields/100024","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Date Created","internalName":"C_DateCreated","dataType":"date","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_DateCreated)}}","uri":"/contacts/fields/100026","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Date Modified","internalName":"C_DateModified","dataType":"date","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_DateModified)}}","uri":"/contacts/fields/100027","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Eloqua Contact ID","internalName":"ContactIDExt","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(ContactIDExt)}}","uri":"/contacts/fields/100032","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Account ID","internalName":"C_SFDCAccountID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCAccountID)}}","uri":"/contacts/fields/100033","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Last Modified by CRM System","internalName":"C_LastModifiedByExtIntegrateSystem","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LastModifiedByExtIntegrateSystem)}}","uri":"/contacts/fields/100034","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Last SFDC Campaign ID","internalName":"C_SFDCLastCampaignID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignID)}}","uri":"/contacts/fields/100035","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6000000Z"},{"name":"Last SFDC Campaign Status","internalName":"C_SFDCLastCampaignStatus","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignStatus)}}","uri":"/contacts/fields/100036","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6030000Z"},{"name":"Company Revenue","internalName":"C_Company_Revenue1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company_Revenue1)}}","uri":"/contacts/fields/100041","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Email Opt Out","internalName":"C_SFDC_EmailOptOut1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDC_EmailOptOut1)}}","uri":"/contacts/fields/100043","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Lead Source - Most Recent","internalName":"C_Lead_Source___Most_Recent1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Source___Most_Recent1)}}","uri":"/contacts/fields/100044","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6470000Z"},{"name":"Lead Source - Original","internalName":"C_Lead_Source___Original1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Source___Original1)}}","uri":"/contacts/fields/100045","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Jesse.Nobbe","updatedAt":"2019-09-04T22:38:01.9400000Z"},{"name":"industry_sfdc","internalName":"C_Industry1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Industry1)}}","uri":"/contacts/fields/100046","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:44:47.2370000Z"},{"name":"annual_revenue_sfdc","internalName":"C_Annual_Revenue1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Annual_Revenue1)}}","uri":"/contacts/fields/100047","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:40:02.5230000Z"},{"name":"lead_status_sfdc","internalName":"C_Lead_Status1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Status1)}}","uri":"/contacts/fields/100048","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:59.4500000Z"},{"name":"Job Role","internalName":"C_Job_Role1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Job_Role1)}}","uri":"/contacts/fields/100049","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6400000Z"},{"name":"Lead Score - High Value Website Content","internalName":"C_LS___High_Value_Website_Content1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LS___High_Value_Website_Content1)}}","uri":"/contacts/fields/100051","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Lead Score Date - Engagement - Most Recent","internalName":"C_Lead_Score_Date___Most_Recent1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score_Date___Most_Recent1)}}","uri":"/contacts/fields/100065","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"2010-03-12T23:45:43.8670000Z"},{"name":"Integrated Marketing and Sales Funnel Stage","internalName":"C_Integrated_Marketing_and_Sales_Funnel_Stage","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Integrated_Marketing_and_Sales_Funnel_Stage)}}","uri":"/contacts/fields/100066","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Product/Solution of Interest","internalName":"C_Product_Solution_of_Interest1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Product_Solution_of_Interest1)}}","uri":"/contacts/fields/100068","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Region","internalName":"C_Region1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Region1)}}","uri":"/contacts/fields/100069","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"PURL Name (Default Hypersite)","internalName":"C_elqPURLName1","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_elqPURLName1)}}","uri":"/contacts/fields/100072","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"lead_rating_combined_sfdc","internalName":"C_Lead_Rating___Combined1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Combined1)}}","uri":"/contacts/fields/100081","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:24.7570000Z"},{"name":"Email Address Domain","internalName":"C_EmailAddressDomain","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_EmailAddressDomain)}}","uri":"/contacts/fields/100171","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"First and Last Name","internalName":"C_FirstAndLastName","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_FirstAndLastName)}}","uri":"/contacts/fields/100172","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"company_size_sfdc","internalName":"C_Company_Size1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company_Size1)}}","uri":"/contacts/fields/100174","createdAt":"2010-02-24T16:08:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-13T16:47:15.1830000Z"},{"name":"Lead Score - Last High Touch Event Date","internalName":"C_Lead_Score___Last_High_Touch_Event_Date1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Last_High_Touch_Event_Date1)}}","uri":"/contacts/fields/100175","createdAt":"2010-02-24T16:11:00.0000000Z","updatedAt":"2010-02-24T16:11:00.0000000Z"},{"name":"Lead Rating - Profile (Explicit)","internalName":"C_Lead_Rating___Explicit1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Explicit1)}}","uri":"/contacts/fields/100176","createdAt":"2010-02-27T16:26:00.0000000Z","updatedAt":"2010-03-04T22:51:34.9600000Z"},{"name":"Lead Rating - Engagement (Implicit)","internalName":"C_Lead_Rating___Implicit1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Implicit1)}}","uri":"/contacts/fields/100177","createdAt":"2010-02-27T16:26:00.0000000Z","updatedAt":"2010-03-22T16:47:47.9130000Z"},{"name":"Lead Score - Profile (Explicit)","internalName":"C_Lead_Score___Explicit1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Explicit1)}}","uri":"/contacts/fields/100178","createdAt":"2010-02-27T16:27:00.0000000Z","updatedAt":"2010-03-04T01:18:27.8500000Z"},{"name":"Lead Score - Engagement (Implicit)","internalName":"C_Lead_Score___Implicit1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Implicit1)}}","uri":"/contacts/fields/100179","createdAt":"2010-02-27T16:27:00.0000000Z","updatedAt":"2010-03-04T22:19:18.9770000Z"},{"name":"Lead Score Date - Profile - Most Recent","internalName":"C_Lead_Score_Date___Profile___Most_Recent1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score_Date___Profile___Most_Recent1)}}","uri":"/contacts/fields/100180","createdAt":"2010-03-12T23:46:00.0000000Z","updatedAt":"2010-03-12T23:47:19.1900000Z"},{"name":"employees_sfdc","internalName":"C_Employees1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Employees1)}}","uri":"/contacts/fields/100184","createdAt":"2011-05-27T17:24:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:44:19.4670000Z"},{"name":"Territory","internalName":"C_Territory","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Territory)}}","uri":"/contacts/fields/100187","createdAt":"2012-09-09T09:25:43.7430000Z","updatedAt":"2012-09-09T09:25:43.7430000Z"},{"name":"MD5 Hashed Email Address","internalName":"C_MD5HashedEmailAddress","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedEmailAddress)}}","uri":"/contacts/fields/100188","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Email Address","internalName":"C_SHA256HashedEmailAddress","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedEmailAddress)}}","uri":"/contacts/fields/100189","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"MD5 Hashed Business Phone","internalName":"C_MD5HashedBusPhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedBusPhone)}}","uri":"/contacts/fields/100190","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Business Phone","internalName":"C_SHA256HashedBusPhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedBusPhone)}}","uri":"/contacts/fields/100191","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"MD5 Hashed Mobile Phone","internalName":"C_MD5HashedMobilePhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedMobilePhone)}}","uri":"/contacts/fields/100192","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Mobile Phone","internalName":"C_SHA256HashedMobilePhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedMobilePhone)}}","uri":"/contacts/fields/100193","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"PURL Name","internalName":"C_ElqPURLName","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqPURLName)}}","uri":"/contacts/fields/100194","createdAt":"2016-05-06T09:23:00.0000000Z","updatedAt":"2016-05-06T09:23:00.0000000Z"},{"name":"Last SFDC Campaign Name","internalName":"C_SFDCLastCampaignName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignName)}}","uri":"/contacts/fields/100195","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"SFDC Lead Rating","internalName":"C_SFDC_Lead_Rating1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDC_Lead_Rating1)}}","uri":"/contacts/fields/100196","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Most Recent Activity Date","internalName":"C_ElqDiscover__MostRecentActivityDate","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__MostRecentActivityDate)}}","uri":"/contacts/fields/100197","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Total Inbound Activity","internalName":"C_ElqDiscover__TotalInboundActivity","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__TotalInboundActivity)}}","uri":"/contacts/fields/100198","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Lead Buy Signals","internalName":"C_ElqDiscover__BuySignals","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__BuySignals)}}","uri":"/contacts/fields/100199","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"description_sfdc","internalName":"C_description_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_description_sfdc1)}}","uri":"/contacts/fields/100200","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:42:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:42:00.0000000Z"},{"name":"lead_rating_sfdc","internalName":"C_lead_rating_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_lead_rating_sfdc1)}}","uri":"/contacts/fields/100201","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:49:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:00.0000000Z"},{"name":"website_sfdc","internalName":"C_website_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_website_sfdc1)}}","uri":"/contacts/fields/100202","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:51:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:51:00.0000000Z"},{"name":"client_newsletter_sfdc","internalName":"C_client_newsletter_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_client_newsletter_sfdc1)}}","uri":"/contacts/fields/100203","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:08:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:08:00.0000000Z"},{"name":"department_sfdc","internalName":"C_department_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_department_sfdc1)}}","uri":"/contacts/fields/100204","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:10:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:10:00.0000000Z"},{"name":"jumbo_account_contact_sfdc","internalName":"C_jumbo_account_contact_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_jumbo_account_contact_sfdc1)}}","uri":"/contacts/fields/100205","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:17:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:17:00.0000000Z"},{"name":"primary_contact_sfdc","internalName":"C_primary_contact_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_primary_contact_sfdc1)}}","uri":"/contacts/fields/100206","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:18:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:18:00.0000000Z"},{"name":"Account ID","internalName":"C_Account_ID1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_ID1)}}","uri":"/contacts/fields/100221","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:55:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:55:00.0000000Z"},{"name":"Annual Revenue","internalName":"C_Annual_Revenue11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Annual_Revenue11)}}","uri":"/contacts/fields/100222","createdBy":"Laura.Marty","createdAt":"2016-07-06T00:01:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-06T00:01:00.0000000Z"},{"name":"Rating","internalName":"C_Rating1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Rating1)}}","uri":"/contacts/fields/100223","createdBy":"Laura.Marty","createdAt":"2016-07-07T16:26:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-07T16:26:00.0000000Z"},{"name":"Employment Status","internalName":"C_Employment_Status1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Employment_Status1)}}","uri":"/contacts/fields/100225","createdBy":"Rob.Lopez","createdAt":"2016-07-11T21:05:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-07-11T21:05:00.0000000Z"},{"name":"patient_id","internalName":"C_patient_id1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_patient_id1)}}","uri":"/contacts/fields/100226","createdAt":"2016-07-22T18:18:00.0000000Z","updatedAt":"2016-07-22T18:18:00.0000000Z"},{"name":"middle_name","internalName":"C_middle_name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_middle_name1)}}","uri":"/contacts/fields/100227","createdAt":"2016-07-22T18:22:00.0000000Z","updatedAt":"2016-07-22T18:22:00.0000000Z"},{"name":"preferred_name_1life","internalName":"C_preferred_name_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_preferred_name_1life1)}}","uri":"/contacts/fields/100228","createdAt":"2016-07-22T18:23:00.0000000Z","updatedAt":"2016-07-22T18:23:00.0000000Z"},{"name":"suffix_1life","internalName":"C_suffix_1lfe1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_suffix_1lfe1)}}","uri":"/contacts/fields/100229","createdAt":"2016-07-22T18:24:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-02T21:49:30.7770000Z"},{"name":"gender_1life","internalName":"C_gender_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_gender_1life1)}}","uri":"/contacts/fields/100230","createdAt":"2016-07-22T18:24:00.0000000Z","updatedAt":"2016-07-22T18:24:00.0000000Z"},{"name":"deceased_1life","internalName":"C_deceased_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_deceased_1life1)}}","uri":"/contacts/fields/100232","createdAt":"2016-07-22T18:27:00.0000000Z","updatedAt":"2016-07-22T18:27:00.0000000Z"},{"name":"is_member_1life","internalName":"C_is_member_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_is_member_1life1)}}","uri":"/contacts/fields/100233","createdAt":"2016-07-22T18:28:00.0000000Z","updatedAt":"2016-07-22T18:28:00.0000000Z"},{"name":"member_type_1life","internalName":"C_member_type_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_member_type_1life1)}}","uri":"/contacts/fields/100234","createdAt":"2016-07-22T18:29:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:36:20.7930000Z"},{"name":"membership_status_1life","internalName":"C_membership_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_membership_status_1life1)}}","uri":"/contacts/fields/100235","createdAt":"2016-07-22T18:30:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:34:25.8970000Z"},{"name":"renewal_date_1life","internalName":"C_renewal_date_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_renewal_date_1life1)}}","uri":"/contacts/fields/100236","createdAt":"2016-07-22T18:30:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-05-14T19:11:51.7000000Z"},{"name":"date_of_birth_1life","internalName":"C_date_of_birth_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_date_of_birth_1life1)}}","uri":"/contacts/fields/100237","createdAt":"2016-07-22T18:31:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-25T23:11:07.1270000Z"},{"name":"renewal_status_1life","internalName":"C_renewal_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_renewal_status_1life1)}}","uri":"/contacts/fields/100238","createdAt":"2016-07-22T18:32:00.0000000Z","updatedAt":"2016-07-22T18:32:00.0000000Z"},{"name":"payment_status_1life","internalName":"C_payment_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_payment_status_1life1)}}","uri":"/contacts/fields/100239","createdAt":"2016-07-22T18:32:00.0000000Z","updatedAt":"2016-07-22T18:32:00.0000000Z"},{"name":"home_office","internalName":"C_home_office1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_home_office1)}}","uri":"/contacts/fields/100240","createdAt":"2016-07-22T18:33:00.0000000Z","updatedAt":"2016-07-22T18:33:00.0000000Z"},{"name":"service_area","internalName":"C_service_area1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_service_area1)}}","uri":"/contacts/fields/100241","createdAt":"2016-07-22T18:33:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:36:41.6100000Z"},{"name":"district","internalName":"C_district1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_district1)}}","uri":"/contacts/fields/100242","createdAt":"2016-07-22T18:34:00.0000000Z","updatedAt":"2016-07-22T18:34:00.0000000Z"},{"name":"pcp","internalName":"C_pcp1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pcp1)}}","uri":"/contacts/fields/100243","createdAt":"2016-07-22T18:34:00.0000000Z","updatedAt":"2016-07-22T18:34:00.0000000Z"},{"name":"pi_customer","internalName":"C_pi_customer1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pi_customer1)}}","uri":"/contacts/fields/100244","createdAt":"2016-07-22T18:35:00.0000000Z","updatedAt":"2016-07-22T18:35:00.0000000Z"},{"name":"test_account_1life","internalName":"C_test_account_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_test_account_1life1)}}","uri":"/contacts/fields/100245","createdAt":"2016-07-22T18:35:00.0000000Z","updatedAt":"2016-07-22T18:35:00.0000000Z"},{"name":"seed_contact","internalName":"C_seed_contact1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_seed_contact1)}}","uri":"/contacts/fields/100246","createdAt":"2016-07-22T18:36:00.0000000Z","updatedAt":"2016-07-22T18:36:00.0000000Z"},{"name":"proof_contact","internalName":"C_proof_contact1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_proof_contact1)}}","uri":"/contacts/fields/100247","createdAt":"2016-07-22T18:36:00.0000000Z","updatedAt":"2016-07-22T18:36:00.0000000Z"},{"name":"current_period_start_1life","internalName":"C_current_period_start_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_current_period_start_1life1)}}","uri":"/contacts/fields/100248","createdAt":"2016-07-22T18:38:00.0000000Z","updatedAt":"2016-07-22T18:38:00.0000000Z"},{"name":"waived_1life","internalName":"C_waived_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_waived_1life1)}}","uri":"/contacts/fields/100249","createdBy":"Rob.Lopez","createdAt":"2016-07-26T23:36:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-07-26T23:36:00.0000000Z"},{"name":"sfdc_sync","internalName":"C_sfdc_sync1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_sfdc_sync1)}}","uri":"/contacts/fields/100251","createdAt":"2016-07-29T16:34:00.0000000Z","updatedAt":"2016-07-29T16:34:00.0000000Z"},{"name":"Headquarter State","internalName":"C_Headquarter_State1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Headquarter_State1)}}","uri":"/contacts/fields/100252","createdBy":"Rob.Lopez","createdAt":"2016-08-03T21:31:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-03T21:31:00.0000000Z"},{"name":"import_date_1life","internalName":"C_import_date_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_import_date_1life1)}}","uri":"/contacts/fields/100254","createdBy":"Rob.Lopez","createdAt":"2016-08-29T17:49:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-29T17:49:00.0000000Z"},{"name":"pk_login_email_1life","internalName":"C_pk_login_email_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pk_login_email_1life1)}}","uri":"/contacts/fields/100255","createdBy":"Rob.Lopez","createdAt":"2016-08-30T21:24:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-30T21:24:00.0000000Z"},{"name":"import_source","internalName":"C_import_source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_import_source1)}}","uri":"/contacts/fields/100256","createdBy":"Rob.Lopez","createdAt":"2016-09-14T18:09:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-08-21T15:58:20.4900000Z"},{"name":"contacts_client_services_owner_sfdc","internalName":"C_contacts_client_services_owner_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_contacts_client_services_owner_sfdc1)}}","uri":"/contacts/fields/100257","createdBy":"Rob.Lopez","createdAt":"2016-09-27T15:09:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-09-27T15:09:00.0000000Z"},{"name":"age","internalName":"C_age1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_age1)}}","uri":"/contacts/fields/100258","createdBy":"Rob.Lopez","createdAt":"2016-10-07T20:27:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-07T20:27:00.0000000Z"},{"name":"lname_dob","internalName":"C_lname_dob1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_lname_dob1)}}","uri":"/contacts/fields/100259","createdBy":"Rob.Lopez","createdAt":"2016-12-27T18:14:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-12-27T18:14:00.0000000Z"},{"name":"Hard Bounce","internalName":"C_Hard_Bounce1","dataType":"string","defaultValue":"False","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Hard_Bounce1)}}","uri":"/contacts/fields/100260","createdBy":"Laura.Marty","createdAt":"2017-01-27T20:44:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-09-20T22:25:40.2100000Z"},{"name":"chart_link_eloqua","internalName":"C_chart_link_eloqua1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_chart_link_eloqua1)}}","uri":"/contacts/fields/100262","createdBy":"Rob.Lopez","createdAt":"2017-02-21T21:32:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-02-21T21:32:00.0000000Z"},{"name":"washing_machine_staging","internalName":"C_chart_link_clean1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_chart_link_clean1)}}","uri":"/contacts/fields/100263","createdBy":"Rob.Lopez","createdAt":"2017-02-22T01:25:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-02-22T01:26:02.3670000Z"},{"name":"birthday_current_year","internalName":"C_birthday_current_year1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_birthday_current_year1)}}","uri":"/contacts/fields/100264","createdBy":"Rob.Lopez","createdAt":"2017-03-11T00:49:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-03-11T00:49:00.0000000Z"},{"name":"archived_account_1life","internalName":"C_archived_account_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_archived_account_1life1)}}","uri":"/contacts/fields/100265","createdBy":"Rob.Lopez","createdAt":"2017-03-30T14:22:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-03-30T14:22:00.0000000Z"},{"name":"MixPanel CDO Name","internalName":"C_MixPanel_CDO_Name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MixPanel_CDO_Name1)}}","uri":"/contacts/fields/100266","createdBy":"Kim.Amato","createdAt":"2017-06-26T22:09:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-26T22:09:00.0000000Z"},{"name":"mixpanel_event_name","internalName":"C_event_name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_event_name1)}}","uri":"/contacts/fields/100267","createdBy":"Kim.Amato","createdAt":"2017-06-29T14:47:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:43:49.0500000Z"},{"name":"mixpanel_event_time","internalName":"C_event_time1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_event_time1)}}","uri":"/contacts/fields/100268","createdBy":"Kim.Amato","createdAt":"2017-06-29T14:49:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:44:00.3800000Z"},{"name":"mixpanel_external_id","internalName":"C_mixpanel_external_id1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_external_id1)}}","uri":"/contacts/fields/100269","createdBy":"Kim.Amato","createdAt":"2017-06-29T16:02:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T16:02:00.0000000Z"},{"name":"mixpanel_patient_id","internalName":"C_mixpanel_patient_id1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_patient_id1)}}","uri":"/contacts/fields/100270","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:44:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:44:00.0000000Z"},{"name":"mixpanel_app_version","internalName":"C_mixpanel_app_version1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_app_version1)}}","uri":"/contacts/fields/100271","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:45:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:45:00.0000000Z"},{"name":"mixpanel_city","internalName":"C_mixpanel_city1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_city1)}}","uri":"/contacts/fields/100272","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:45:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:45:00.0000000Z"},{"name":"mixpanel_os","internalName":"C_mixpanel_os1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_os1)}}","uri":"/contacts/fields/100273","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:46:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:46:00.0000000Z"},{"name":"mixpanel_region","internalName":"C_mixpanel_region1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_region1)}}","uri":"/contacts/fields/100274","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:46:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:46:00.0000000Z"},{"name":"HealthFusion_Amount","internalName":"C_HealthFusion_Amount1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_HealthFusion_Amount1)}}","uri":"/contacts/fields/100276","createdBy":"Frank.Chan","createdAt":"2017-11-09T21:57:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-11-09T21:57:00.0000000Z"},{"name":"utm_campaign","internalName":"C_utm_campaign1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_campaign1)}}","uri":"/contacts/fields/100277","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:29:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:07.4600000Z"},{"name":"utm_source","internalName":"C_utm_source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_source1)}}","uri":"/contacts/fields/100278","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:34:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:22.4800000Z"},{"name":"utm_medium","internalName":"C_utm_medium1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_medium1)}}","uri":"/contacts/fields/100279","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:35:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:16.8800000Z"},{"name":"utm_content","internalName":"C_utm_content1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_content1)}}","uri":"/contacts/fields/100280","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:35:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:11.7830000Z"},{"name":"B2B_Company_CF","internalName":"C_B2B_Company_CF1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Company_CF1)}}","uri":"/contacts/fields/100281","createdBy":"Frank.Chan","createdAt":"2017-12-01T00:12:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-12-01T00:12:00.0000000Z"},{"name":"LP_Source","internalName":"C_LP_Source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LP_Source1)}}","uri":"/contacts/fields/100282","createdBy":"Frank.Chan","createdAt":"2017-12-23T02:44:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-12-23T02:44:00.0000000Z"},{"name":"B2B_Targeting_Filter","internalName":"C_B2B_Targeting_Filter1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Targeting_Filter1)}}","uri":"/contacts/fields/100283","createdBy":"Frank.Chan","createdAt":"2018-01-12T19:28:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-01-12T19:28:00.0000000Z"},{"name":"utm_term","internalName":"C_utm_term1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_term1)}}","uri":"/contacts/fields/100284","createdBy":"Mark.Gopez","createdAt":"2018-02-13T18:36:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:37.9170000Z"},{"name":"B2B_Comment","internalName":"C_b2b_comment1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_b2b_comment1)}}","uri":"/contacts/fields/100285","createdBy":"Mark.Gopez","createdAt":"2018-02-14T21:29:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:51:52.5270000Z"},{"name":"Adhoc_Field_1","internalName":"C_Adhoc_Field_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_11)}}","uri":"/contacts/fields/100286","createdBy":"Frank.Chan","createdAt":"2018-05-04T20:22:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-04T20:22:00.0000000Z"},{"name":"B2B_Comment_long","internalName":"C_B2B_Comment_long1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Comment_long1)}}","uri":"/contacts/fields/100287","createdBy":"Jason.Ferrier","createdAt":"2018-05-05T01:37:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:53:30.9900000Z"},{"name":"Adhoc_Filter_1","internalName":"C_Adhoc_Filter_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Filter_11)}}","uri":"/contacts/fields/100288","createdBy":"Frank.Chan","createdAt":"2018-05-08T17:16:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-08T17:16:00.0000000Z"},{"name":"B2B_Targeting_Filter_2","internalName":"C_B2B_Targeting_Filter_21","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Targeting_Filter_21)}}","uri":"/contacts/fields/100289","createdBy":"Frank.Chan","createdAt":"2018-05-11T20:58:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-11T20:58:00.0000000Z"},{"name":"Contact_Role_sfdc","internalName":"C_Untitled_Contact_Field1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Untitled_Contact_Field1)}}","uri":"/contacts/fields/100290","createdBy":"Frank.Chan","createdAt":"2018-05-21T17:38:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-21T17:38:50.2770000Z"},{"name":"Account_Owner_sfdc","internalName":"C_Account_Owner_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_Owner_sfdc1)}}","uri":"/contacts/fields/100291","createdBy":"Nadim.Fetaih","createdAt":"2018-05-22T16:27:00.0000000Z","updatedBy":"Nadim.Fetaih","updatedAt":"2018-05-22T16:27:00.0000000Z"},{"name":"Adhoc_URL_1","internalName":"C_Adhoc_URL_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_URL_11)}}","uri":"/contacts/fields/100293","createdBy":"Frank.Chan","createdAt":"2018-06-13T16:15:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-06-13T16:15:00.0000000Z"},{"name":"website_contactus_picklist","internalName":"C_website_contactus_picklist1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_website_contactus_picklist1)}}","uri":"/contacts/fields/100294","createdBy":"Frank.Chan","createdAt":"2018-10-08T21:50:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-10-08T21:50:00.0000000Z"},{"name":"Account Manager","internalName":"C_Account_Manager1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_Manager1)}}","uri":"/contacts/fields/100295","createdBy":"Henry.Tran","createdAt":"2019-05-06T19:13:00.0000000Z","updatedBy":"Henry.Tran","updatedAt":"2019-05-06T19:13:00.0000000Z"},{"name":"B2B_Conversion_Flag","internalName":"C_TEST_B2B_Conversion_Flag1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_TEST_B2B_Conversion_Flag1)}}","uri":"/contacts/fields/100296","createdBy":"Andy.Shaw","createdAt":"2019-10-05T15:18:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-10-07T19:44:25.1670000Z"},{"name":"B2B Discount Code","internalName":"C_B2B_Discount_Code1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Discount_Code1)}}","uri":"/contacts/fields/100297","createdBy":"Andy.Shaw","createdAt":"2019-10-07T19:45:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-10-07T19:45:00.0000000Z"},{"name":"Adhoc_Field_2","internalName":"C_Adhoc_Field_21","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_21)}}","uri":"/contacts/fields/100298","createdBy":"Andy.Shaw","createdAt":"2019-11-22T16:30:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-11-22T16:30:00.0000000Z"},{"name":"type_sfdc","internalName":"C_type_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_type_sfdc1)}}","uri":"/contacts/fields/100299","createdBy":"Jesse.Nobbe","createdAt":"2019-12-05T23:04:00.0000000Z","updatedBy":"Jesse.Nobbe","updatedAt":"2019-12-05T23:04:00.0000000Z"},{"name":"T7 Date","internalName":"C_T7_Date1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_T7_Date1)}}","uri":"/contacts/fields/100300","createdBy":"Andy.Shaw","createdAt":"2019-12-16T18:03:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-12-16T18:03:00.0000000Z"},{"name":"virtual_member_1life","internalName":"C_virtual_member_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_virtual_member_1life1)}}","uri":"/contacts/fields/100301","createdBy":"Jesse.Nobbe","createdAt":"2020-01-28T17:48:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-02-20T18:20:04.3000000Z"},{"name":"Adhoc_Date_1","internalName":"C_Adhoc_Date_11","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Date_11)}}","uri":"/contacts/fields/100302","createdBy":"Andy.Shaw","createdAt":"2020-03-03T23:40:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-03-09T18:50:14.4200000Z"},{"name":"send_date_plus10","internalName":"C_send_date_plus101","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_send_date_plus101)}}","uri":"/contacts/fields/100303","createdBy":"Andy.Shaw","createdAt":"2020-03-10T17:05:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-03-10T17:05:00.0000000Z"},{"name":"Adhoc_Field_3","internalName":"C_Adhoc_Field_31","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_31)}}","uri":"/contacts/fields/100305","createdBy":"Andy.Shaw","createdAt":"2020-11-12T19:01:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-11-12T19:01:00.0000000Z"},{"name":"Webinar Redemption Code","internalName":"C_Webinar_Redemption_Code1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Webinar_Redemption_Code1)}}","uri":"/contacts/fields/100306","createdBy":"Peter.Chen","createdAt":"2020-12-08T03:44:00.0000000Z","updatedBy":"Peter.Chen","updatedAt":"2020-12-08T03:44:00.0000000Z"}],"totalResults":150,"limit":1000,"offset":0,"count":150,"hasMore":false}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  'b09eca8eb17b416e955777a13903fc29/24228893885',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:17 GMT',
  'Connection',
  'close',
  'Content-Length',
  '56547'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/contacts/imports', {"name":"grouparoo-import-app_789-po09-EOEP-HKp8-3039","identifierFieldName":"emailAddress","areSystemTimestampsInUTC":true,"isSyncTriggeredOnImport":false,"isUpdatingMultipleMatchedRecords":true,"fields":{"emailAddress":"{{Contact.Field(C_EmailAddress)}}","firstName":"{{Contact.Field(C_FirstName)}}"}})
  .once().reply(201, {"name":"grouparoo-import-app_789-po09-EOEP-HKp8-3039","fields":{"emailAddress":"{{Contact.Field(C_EmailAddress)}}","firstName":"{{Contact.Field(C_FirstName)}}"},"identifierFieldName":"emailAddress","isSyncTriggeredOnImport":false,"dataRetentionDuration":"P7D","isUpdatingMultipleMatchedRecords":true,"uri":"/contacts/imports/1347","createdBy":"t3st","createdAt":"2021-07-14T17:07:18.9210903Z","updatedBy":"t3st","updatedAt":"2021-07-14T17:07:18.9210903Z"}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  'e6cb8b0d59fa40c1b3e0c43dd2f62134/24228894278',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:18 GMT',
  'Connection',
  'close',
  'Content-Length',
  '474'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/contacts/imports/1347/data', [{"emailAddress":"grouparoo@demo.com","firstName":"John"}])
  .once().reply(204, "", [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'X-Request-Id',
  'f808e68492da497292cf79637987312e/24228894587',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:19 GMT',
  'Connection',
  'close'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/syncs', {"syncedInstanceUri":"/contacts/imports/1347"})
  .once().reply(201, {"syncedInstanceUri":"/contacts/imports/1347","status":"pending","createdAt":"2021-07-14T17:07:20.2897811Z","createdBy":"t3st","uri":"/syncs/1154"}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  'fa9220ee4be940bebf2523005146cd74/24228894875',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:20 GMT',
  'Connection',
  'close',
  'Content-Length',
  '156'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282442","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '15618a3d49ce4ef68c06c2314eea668c/24228900136',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:30 GMT',
  'Connection',
  'close',
  'Content-Length',
  '383'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"emailAddress%3D%27grouparoo%40demo.com%27"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282442","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'd2aefabd6bfc4efc9bbc281088d071db/24228900448',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:30 GMT',
  'Connection',
  'close',
  'Content-Length',
  '383'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282442","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '6677988da80c40c39651aafd86c621f6/24228905151',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:41 GMT',
  'Connection',
  'close',
  'Content-Length',
  '383'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo2%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '96dbf533ac58459b9becaeecd4e4d83a/24228905407',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:41 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"emailAddress%3D%27grouparoo%40demo.com%27emailAddress%3D%27grouparoo2%40demo.com%27"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282442","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '5c5a0b7ed6284d3e99809f732a65a8be/24228905636',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:43 GMT',
  'Connection',
  'close',
  'Content-Length',
  '383'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/bulk/2.0/contacts/fields')
  .once().reply(200, {"items":[{"name":"Email Address","internalName":"C_EmailAddress","dataType":"emailAddress","hasReadOnlyConstraint":false,"hasNotNullConstraint":true,"hasUniquenessConstraint":true,"statement":"{{Contact.Field(C_EmailAddress)}}","uri":"/contacts/fields/100001","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"First Name","internalName":"C_FirstName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_FirstName)}}","uri":"/contacts/fields/100002","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6270000Z"},{"name":"Last Name","internalName":"C_LastName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LastName)}}","uri":"/contacts/fields/100003","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6300000Z"},{"name":"Company","internalName":"C_Company","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company)}}","uri":"/contacts/fields/100004","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6200000Z"},{"name":"Email Display Name","internalName":"C_EmailDisplayName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_EmailDisplayName)}}","uri":"/contacts/fields/100005","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Address 1","internalName":"C_Address1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address1)}}","uri":"/contacts/fields/100006","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6070000Z"},{"name":"Address 2","internalName":"C_Address2","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address2)}}","uri":"/contacts/fields/100007","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6100000Z"},{"name":"Address 3","internalName":"C_Address3","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Address3)}}","uri":"/contacts/fields/100008","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"City","internalName":"C_City","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_City)}}","uri":"/contacts/fields/100009","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6170000Z"},{"name":"State or Province","internalName":"C_State_Prov","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_State_Prov)}}","uri":"/contacts/fields/100010","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-01-18T18:44:17.5630000Z"},{"name":"Zip or Postal Code","internalName":"C_Zip_Postal","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Zip_Postal)}}","uri":"/contacts/fields/100011","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6370000Z"},{"name":"Country","internalName":"C_Country","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Country)}}","uri":"/contacts/fields/100012","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6230000Z"},{"name":"Business Phone","internalName":"C_BusPhone","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_BusPhone)}}","uri":"/contacts/fields/100013","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6130000Z"},{"name":"Mobile Phone","internalName":"C_MobilePhone","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MobilePhone)}}","uri":"/contacts/fields/100014","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Fax","internalName":"C_Fax","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Fax)}}","uri":"/contacts/fields/100015","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Title","internalName":"C_Title","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Title)}}","uri":"/contacts/fields/100016","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6330000Z"},{"name":"salutation_sfdc","internalName":"C_Salutation","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Salutation)}}","uri":"/contacts/fields/100017","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:42.0370000Z"},{"name":"Salesperson","internalName":"C_Salesperson","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Salesperson)}}","uri":"/contacts/fields/100022","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Contact ID","internalName":"C_SFDCContactID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCContactID)}}","uri":"/contacts/fields/100023","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Lead ID","internalName":"C_SFDCLeadID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLeadID)}}","uri":"/contacts/fields/100024","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Date Created","internalName":"C_DateCreated","dataType":"date","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_DateCreated)}}","uri":"/contacts/fields/100026","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Date Modified","internalName":"C_DateModified","dataType":"date","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_DateModified)}}","uri":"/contacts/fields/100027","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Eloqua Contact ID","internalName":"ContactIDExt","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(ContactIDExt)}}","uri":"/contacts/fields/100032","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Account ID","internalName":"C_SFDCAccountID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCAccountID)}}","uri":"/contacts/fields/100033","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Last Modified by CRM System","internalName":"C_LastModifiedByExtIntegrateSystem","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LastModifiedByExtIntegrateSystem)}}","uri":"/contacts/fields/100034","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Last SFDC Campaign ID","internalName":"C_SFDCLastCampaignID","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignID)}}","uri":"/contacts/fields/100035","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6000000Z"},{"name":"Last SFDC Campaign Status","internalName":"C_SFDCLastCampaignStatus","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignStatus)}}","uri":"/contacts/fields/100036","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6030000Z"},{"name":"Company Revenue","internalName":"C_Company_Revenue1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company_Revenue1)}}","uri":"/contacts/fields/100041","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SFDC Email Opt Out","internalName":"C_SFDC_EmailOptOut1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDC_EmailOptOut1)}}","uri":"/contacts/fields/100043","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Lead Source - Most Recent","internalName":"C_Lead_Source___Most_Recent1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Source___Most_Recent1)}}","uri":"/contacts/fields/100044","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6470000Z"},{"name":"Lead Source - Original","internalName":"C_Lead_Source___Original1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Source___Original1)}}","uri":"/contacts/fields/100045","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Jesse.Nobbe","updatedAt":"2019-09-04T22:38:01.9400000Z"},{"name":"industry_sfdc","internalName":"C_Industry1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Industry1)}}","uri":"/contacts/fields/100046","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:44:47.2370000Z"},{"name":"annual_revenue_sfdc","internalName":"C_Annual_Revenue1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Annual_Revenue1)}}","uri":"/contacts/fields/100047","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:40:02.5230000Z"},{"name":"lead_status_sfdc","internalName":"C_Lead_Status1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Status1)}}","uri":"/contacts/fields/100048","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:59.4500000Z"},{"name":"Job Role","internalName":"C_Job_Role1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Job_Role1)}}","uri":"/contacts/fields/100049","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Mgr1LifeHealthcareInc","updatedAt":"2016-05-06T09:22:59.6400000Z"},{"name":"Lead Score - High Value Website Content","internalName":"C_LS___High_Value_Website_Content1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LS___High_Value_Website_Content1)}}","uri":"/contacts/fields/100051","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Lead Score Date - Engagement - Most Recent","internalName":"C_Lead_Score_Date___Most_Recent1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score_Date___Most_Recent1)}}","uri":"/contacts/fields/100065","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"2010-03-12T23:45:43.8670000Z"},{"name":"Integrated Marketing and Sales Funnel Stage","internalName":"C_Integrated_Marketing_and_Sales_Funnel_Stage","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Integrated_Marketing_and_Sales_Funnel_Stage)}}","uri":"/contacts/fields/100066","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Product/Solution of Interest","internalName":"C_Product_Solution_of_Interest1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Product_Solution_of_Interest1)}}","uri":"/contacts/fields/100068","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"Region","internalName":"C_Region1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Region1)}}","uri":"/contacts/fields/100069","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"PURL Name (Default Hypersite)","internalName":"C_elqPURLName1","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_elqPURLName1)}}","uri":"/contacts/fields/100072","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"lead_rating_combined_sfdc","internalName":"C_Lead_Rating___Combined1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Combined1)}}","uri":"/contacts/fields/100081","createdAt":"1900-01-01T05:00:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:24.7570000Z"},{"name":"Email Address Domain","internalName":"C_EmailAddressDomain","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_EmailAddressDomain)}}","uri":"/contacts/fields/100171","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"First and Last Name","internalName":"C_FirstAndLastName","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_FirstAndLastName)}}","uri":"/contacts/fields/100172","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"company_size_sfdc","internalName":"C_Company_Size1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Company_Size1)}}","uri":"/contacts/fields/100174","createdAt":"2010-02-24T16:08:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-13T16:47:15.1830000Z"},{"name":"Lead Score - Last High Touch Event Date","internalName":"C_Lead_Score___Last_High_Touch_Event_Date1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Last_High_Touch_Event_Date1)}}","uri":"/contacts/fields/100175","createdAt":"2010-02-24T16:11:00.0000000Z","updatedAt":"2010-02-24T16:11:00.0000000Z"},{"name":"Lead Rating - Profile (Explicit)","internalName":"C_Lead_Rating___Explicit1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Explicit1)}}","uri":"/contacts/fields/100176","createdAt":"2010-02-27T16:26:00.0000000Z","updatedAt":"2010-03-04T22:51:34.9600000Z"},{"name":"Lead Rating - Engagement (Implicit)","internalName":"C_Lead_Rating___Implicit1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Rating___Implicit1)}}","uri":"/contacts/fields/100177","createdAt":"2010-02-27T16:26:00.0000000Z","updatedAt":"2010-03-22T16:47:47.9130000Z"},{"name":"Lead Score - Profile (Explicit)","internalName":"C_Lead_Score___Explicit1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Explicit1)}}","uri":"/contacts/fields/100178","createdAt":"2010-02-27T16:27:00.0000000Z","updatedAt":"2010-03-04T01:18:27.8500000Z"},{"name":"Lead Score - Engagement (Implicit)","internalName":"C_Lead_Score___Implicit1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score___Implicit1)}}","uri":"/contacts/fields/100179","createdAt":"2010-02-27T16:27:00.0000000Z","updatedAt":"2010-03-04T22:19:18.9770000Z"},{"name":"Lead Score Date - Profile - Most Recent","internalName":"C_Lead_Score_Date___Profile___Most_Recent1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Lead_Score_Date___Profile___Most_Recent1)}}","uri":"/contacts/fields/100180","createdAt":"2010-03-12T23:46:00.0000000Z","updatedAt":"2010-03-12T23:47:19.1900000Z"},{"name":"employees_sfdc","internalName":"C_Employees1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Employees1)}}","uri":"/contacts/fields/100184","createdAt":"2011-05-27T17:24:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:44:19.4670000Z"},{"name":"Territory","internalName":"C_Territory","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Territory)}}","uri":"/contacts/fields/100187","createdAt":"2012-09-09T09:25:43.7430000Z","updatedAt":"2012-09-09T09:25:43.7430000Z"},{"name":"MD5 Hashed Email Address","internalName":"C_MD5HashedEmailAddress","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedEmailAddress)}}","uri":"/contacts/fields/100188","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Email Address","internalName":"C_SHA256HashedEmailAddress","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedEmailAddress)}}","uri":"/contacts/fields/100189","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"MD5 Hashed Business Phone","internalName":"C_MD5HashedBusPhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedBusPhone)}}","uri":"/contacts/fields/100190","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Business Phone","internalName":"C_SHA256HashedBusPhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedBusPhone)}}","uri":"/contacts/fields/100191","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"MD5 Hashed Mobile Phone","internalName":"C_MD5HashedMobilePhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MD5HashedMobilePhone)}}","uri":"/contacts/fields/100192","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"SHA256 Hashed Mobile Phone","internalName":"C_SHA256HashedMobilePhone","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SHA256HashedMobilePhone)}}","uri":"/contacts/fields/100193","createdAt":"1900-01-01T05:00:00.0000000Z","updatedAt":"1900-01-01T05:00:00.0000000Z"},{"name":"PURL Name","internalName":"C_ElqPURLName","dataType":"string","hasReadOnlyConstraint":true,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqPURLName)}}","uri":"/contacts/fields/100194","createdAt":"2016-05-06T09:23:00.0000000Z","updatedAt":"2016-05-06T09:23:00.0000000Z"},{"name":"Last SFDC Campaign Name","internalName":"C_SFDCLastCampaignName","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDCLastCampaignName)}}","uri":"/contacts/fields/100195","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"SFDC Lead Rating","internalName":"C_SFDC_Lead_Rating1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_SFDC_Lead_Rating1)}}","uri":"/contacts/fields/100196","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Most Recent Activity Date","internalName":"C_ElqDiscover__MostRecentActivityDate","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__MostRecentActivityDate)}}","uri":"/contacts/fields/100197","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Total Inbound Activity","internalName":"C_ElqDiscover__TotalInboundActivity","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__TotalInboundActivity)}}","uri":"/contacts/fields/100198","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"Discover Lead Buy Signals","internalName":"C_ElqDiscover__BuySignals","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_ElqDiscover__BuySignals)}}","uri":"/contacts/fields/100199","createdBy":"Laura.Marty","createdAt":"2016-06-20T21:28:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-06-20T21:28:00.0000000Z"},{"name":"description_sfdc","internalName":"C_description_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_description_sfdc1)}}","uri":"/contacts/fields/100200","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:42:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:42:00.0000000Z"},{"name":"lead_rating_sfdc","internalName":"C_lead_rating_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_lead_rating_sfdc1)}}","uri":"/contacts/fields/100201","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:49:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:49:00.0000000Z"},{"name":"website_sfdc","internalName":"C_website_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_website_sfdc1)}}","uri":"/contacts/fields/100202","createdBy":"Laura.Marty","createdAt":"2016-07-05T22:51:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T22:51:00.0000000Z"},{"name":"client_newsletter_sfdc","internalName":"C_client_newsletter_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_client_newsletter_sfdc1)}}","uri":"/contacts/fields/100203","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:08:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:08:00.0000000Z"},{"name":"department_sfdc","internalName":"C_department_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_department_sfdc1)}}","uri":"/contacts/fields/100204","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:10:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:10:00.0000000Z"},{"name":"jumbo_account_contact_sfdc","internalName":"C_jumbo_account_contact_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_jumbo_account_contact_sfdc1)}}","uri":"/contacts/fields/100205","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:17:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:17:00.0000000Z"},{"name":"primary_contact_sfdc","internalName":"C_primary_contact_sfdc1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_primary_contact_sfdc1)}}","uri":"/contacts/fields/100206","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:18:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:18:00.0000000Z"},{"name":"Account ID","internalName":"C_Account_ID1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_ID1)}}","uri":"/contacts/fields/100221","createdBy":"Laura.Marty","createdAt":"2016-07-05T23:55:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-05T23:55:00.0000000Z"},{"name":"Annual Revenue","internalName":"C_Annual_Revenue11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Annual_Revenue11)}}","uri":"/contacts/fields/100222","createdBy":"Laura.Marty","createdAt":"2016-07-06T00:01:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-06T00:01:00.0000000Z"},{"name":"Rating","internalName":"C_Rating1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Rating1)}}","uri":"/contacts/fields/100223","createdBy":"Laura.Marty","createdAt":"2016-07-07T16:26:00.0000000Z","updatedBy":"Laura.Marty","updatedAt":"2016-07-07T16:26:00.0000000Z"},{"name":"Employment Status","internalName":"C_Employment_Status1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Employment_Status1)}}","uri":"/contacts/fields/100225","createdBy":"Rob.Lopez","createdAt":"2016-07-11T21:05:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-07-11T21:05:00.0000000Z"},{"name":"patient_id","internalName":"C_patient_id1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_patient_id1)}}","uri":"/contacts/fields/100226","createdAt":"2016-07-22T18:18:00.0000000Z","updatedAt":"2016-07-22T18:18:00.0000000Z"},{"name":"middle_name","internalName":"C_middle_name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_middle_name1)}}","uri":"/contacts/fields/100227","createdAt":"2016-07-22T18:22:00.0000000Z","updatedAt":"2016-07-22T18:22:00.0000000Z"},{"name":"preferred_name_1life","internalName":"C_preferred_name_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_preferred_name_1life1)}}","uri":"/contacts/fields/100228","createdAt":"2016-07-22T18:23:00.0000000Z","updatedAt":"2016-07-22T18:23:00.0000000Z"},{"name":"suffix_1life","internalName":"C_suffix_1lfe1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_suffix_1lfe1)}}","uri":"/contacts/fields/100229","createdAt":"2016-07-22T18:24:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-02T21:49:30.7770000Z"},{"name":"gender_1life","internalName":"C_gender_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_gender_1life1)}}","uri":"/contacts/fields/100230","createdAt":"2016-07-22T18:24:00.0000000Z","updatedAt":"2016-07-22T18:24:00.0000000Z"},{"name":"deceased_1life","internalName":"C_deceased_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_deceased_1life1)}}","uri":"/contacts/fields/100232","createdAt":"2016-07-22T18:27:00.0000000Z","updatedAt":"2016-07-22T18:27:00.0000000Z"},{"name":"is_member_1life","internalName":"C_is_member_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_is_member_1life1)}}","uri":"/contacts/fields/100233","createdAt":"2016-07-22T18:28:00.0000000Z","updatedAt":"2016-07-22T18:28:00.0000000Z"},{"name":"member_type_1life","internalName":"C_member_type_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_member_type_1life1)}}","uri":"/contacts/fields/100234","createdAt":"2016-07-22T18:29:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:36:20.7930000Z"},{"name":"membership_status_1life","internalName":"C_membership_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_membership_status_1life1)}}","uri":"/contacts/fields/100235","createdAt":"2016-07-22T18:30:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:34:25.8970000Z"},{"name":"renewal_date_1life","internalName":"C_renewal_date_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_renewal_date_1life1)}}","uri":"/contacts/fields/100236","createdAt":"2016-07-22T18:30:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-05-14T19:11:51.7000000Z"},{"name":"date_of_birth_1life","internalName":"C_date_of_birth_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_date_of_birth_1life1)}}","uri":"/contacts/fields/100237","createdAt":"2016-07-22T18:31:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-25T23:11:07.1270000Z"},{"name":"renewal_status_1life","internalName":"C_renewal_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_renewal_status_1life1)}}","uri":"/contacts/fields/100238","createdAt":"2016-07-22T18:32:00.0000000Z","updatedAt":"2016-07-22T18:32:00.0000000Z"},{"name":"payment_status_1life","internalName":"C_payment_status_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_payment_status_1life1)}}","uri":"/contacts/fields/100239","createdAt":"2016-07-22T18:32:00.0000000Z","updatedAt":"2016-07-22T18:32:00.0000000Z"},{"name":"home_office","internalName":"C_home_office1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_home_office1)}}","uri":"/contacts/fields/100240","createdAt":"2016-07-22T18:33:00.0000000Z","updatedAt":"2016-07-22T18:33:00.0000000Z"},{"name":"service_area","internalName":"C_service_area1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_service_area1)}}","uri":"/contacts/fields/100241","createdAt":"2016-07-22T18:33:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-25T18:36:41.6100000Z"},{"name":"district","internalName":"C_district1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_district1)}}","uri":"/contacts/fields/100242","createdAt":"2016-07-22T18:34:00.0000000Z","updatedAt":"2016-07-22T18:34:00.0000000Z"},{"name":"pcp","internalName":"C_pcp1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pcp1)}}","uri":"/contacts/fields/100243","createdAt":"2016-07-22T18:34:00.0000000Z","updatedAt":"2016-07-22T18:34:00.0000000Z"},{"name":"pi_customer","internalName":"C_pi_customer1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pi_customer1)}}","uri":"/contacts/fields/100244","createdAt":"2016-07-22T18:35:00.0000000Z","updatedAt":"2016-07-22T18:35:00.0000000Z"},{"name":"test_account_1life","internalName":"C_test_account_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_test_account_1life1)}}","uri":"/contacts/fields/100245","createdAt":"2016-07-22T18:35:00.0000000Z","updatedAt":"2016-07-22T18:35:00.0000000Z"},{"name":"seed_contact","internalName":"C_seed_contact1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_seed_contact1)}}","uri":"/contacts/fields/100246","createdAt":"2016-07-22T18:36:00.0000000Z","updatedAt":"2016-07-22T18:36:00.0000000Z"},{"name":"proof_contact","internalName":"C_proof_contact1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_proof_contact1)}}","uri":"/contacts/fields/100247","createdAt":"2016-07-22T18:36:00.0000000Z","updatedAt":"2016-07-22T18:36:00.0000000Z"},{"name":"current_period_start_1life","internalName":"C_current_period_start_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_current_period_start_1life1)}}","uri":"/contacts/fields/100248","createdAt":"2016-07-22T18:38:00.0000000Z","updatedAt":"2016-07-22T18:38:00.0000000Z"},{"name":"waived_1life","internalName":"C_waived_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_waived_1life1)}}","uri":"/contacts/fields/100249","createdBy":"Rob.Lopez","createdAt":"2016-07-26T23:36:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-07-26T23:36:00.0000000Z"},{"name":"sfdc_sync","internalName":"C_sfdc_sync1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_sfdc_sync1)}}","uri":"/contacts/fields/100251","createdAt":"2016-07-29T16:34:00.0000000Z","updatedAt":"2016-07-29T16:34:00.0000000Z"},{"name":"Headquarter State","internalName":"C_Headquarter_State1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Headquarter_State1)}}","uri":"/contacts/fields/100252","createdBy":"Rob.Lopez","createdAt":"2016-08-03T21:31:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-03T21:31:00.0000000Z"},{"name":"import_date_1life","internalName":"C_import_date_1life1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_import_date_1life1)}}","uri":"/contacts/fields/100254","createdBy":"Rob.Lopez","createdAt":"2016-08-29T17:49:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-29T17:49:00.0000000Z"},{"name":"pk_login_email_1life","internalName":"C_pk_login_email_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_pk_login_email_1life1)}}","uri":"/contacts/fields/100255","createdBy":"Rob.Lopez","createdAt":"2016-08-30T21:24:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-08-30T21:24:00.0000000Z"},{"name":"import_source","internalName":"C_import_source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_import_source1)}}","uri":"/contacts/fields/100256","createdBy":"Rob.Lopez","createdAt":"2016-09-14T18:09:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-08-21T15:58:20.4900000Z"},{"name":"contacts_client_services_owner_sfdc","internalName":"C_contacts_client_services_owner_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_contacts_client_services_owner_sfdc1)}}","uri":"/contacts/fields/100257","createdBy":"Rob.Lopez","createdAt":"2016-09-27T15:09:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-09-27T15:09:00.0000000Z"},{"name":"age","internalName":"C_age1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_age1)}}","uri":"/contacts/fields/100258","createdBy":"Rob.Lopez","createdAt":"2016-10-07T20:27:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-10-07T20:27:00.0000000Z"},{"name":"lname_dob","internalName":"C_lname_dob1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_lname_dob1)}}","uri":"/contacts/fields/100259","createdBy":"Rob.Lopez","createdAt":"2016-12-27T18:14:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2016-12-27T18:14:00.0000000Z"},{"name":"Hard Bounce","internalName":"C_Hard_Bounce1","dataType":"string","defaultValue":"False","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Hard_Bounce1)}}","uri":"/contacts/fields/100260","createdBy":"Laura.Marty","createdAt":"2017-01-27T20:44:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-09-20T22:25:40.2100000Z"},{"name":"chart_link_eloqua","internalName":"C_chart_link_eloqua1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_chart_link_eloqua1)}}","uri":"/contacts/fields/100262","createdBy":"Rob.Lopez","createdAt":"2017-02-21T21:32:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-02-21T21:32:00.0000000Z"},{"name":"washing_machine_staging","internalName":"C_chart_link_clean1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_chart_link_clean1)}}","uri":"/contacts/fields/100263","createdBy":"Rob.Lopez","createdAt":"2017-02-22T01:25:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-02-22T01:26:02.3670000Z"},{"name":"birthday_current_year","internalName":"C_birthday_current_year1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_birthday_current_year1)}}","uri":"/contacts/fields/100264","createdBy":"Rob.Lopez","createdAt":"2017-03-11T00:49:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-03-11T00:49:00.0000000Z"},{"name":"archived_account_1life","internalName":"C_archived_account_1life1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_archived_account_1life1)}}","uri":"/contacts/fields/100265","createdBy":"Rob.Lopez","createdAt":"2017-03-30T14:22:00.0000000Z","updatedBy":"Rob.Lopez","updatedAt":"2017-03-30T14:22:00.0000000Z"},{"name":"MixPanel CDO Name","internalName":"C_MixPanel_CDO_Name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_MixPanel_CDO_Name1)}}","uri":"/contacts/fields/100266","createdBy":"Kim.Amato","createdAt":"2017-06-26T22:09:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-26T22:09:00.0000000Z"},{"name":"mixpanel_event_name","internalName":"C_event_name1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_event_name1)}}","uri":"/contacts/fields/100267","createdBy":"Kim.Amato","createdAt":"2017-06-29T14:47:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:43:49.0500000Z"},{"name":"mixpanel_event_time","internalName":"C_event_time1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_event_time1)}}","uri":"/contacts/fields/100268","createdBy":"Kim.Amato","createdAt":"2017-06-29T14:49:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:44:00.3800000Z"},{"name":"mixpanel_external_id","internalName":"C_mixpanel_external_id1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_external_id1)}}","uri":"/contacts/fields/100269","createdBy":"Kim.Amato","createdAt":"2017-06-29T16:02:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T16:02:00.0000000Z"},{"name":"mixpanel_patient_id","internalName":"C_mixpanel_patient_id1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_patient_id1)}}","uri":"/contacts/fields/100270","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:44:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:44:00.0000000Z"},{"name":"mixpanel_app_version","internalName":"C_mixpanel_app_version1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_app_version1)}}","uri":"/contacts/fields/100271","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:45:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:45:00.0000000Z"},{"name":"mixpanel_city","internalName":"C_mixpanel_city1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_city1)}}","uri":"/contacts/fields/100272","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:45:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:45:00.0000000Z"},{"name":"mixpanel_os","internalName":"C_mixpanel_os1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_os1)}}","uri":"/contacts/fields/100273","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:46:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:46:00.0000000Z"},{"name":"mixpanel_region","internalName":"C_mixpanel_region1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_mixpanel_region1)}}","uri":"/contacts/fields/100274","createdBy":"Kim.Amato","createdAt":"2017-06-29T18:46:00.0000000Z","updatedBy":"Kim.Amato","updatedAt":"2017-06-29T18:46:00.0000000Z"},{"name":"HealthFusion_Amount","internalName":"C_HealthFusion_Amount1","dataType":"number","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_HealthFusion_Amount1)}}","uri":"/contacts/fields/100276","createdBy":"Frank.Chan","createdAt":"2017-11-09T21:57:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-11-09T21:57:00.0000000Z"},{"name":"utm_campaign","internalName":"C_utm_campaign1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_campaign1)}}","uri":"/contacts/fields/100277","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:29:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:07.4600000Z"},{"name":"utm_source","internalName":"C_utm_source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_source1)}}","uri":"/contacts/fields/100278","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:34:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:22.4800000Z"},{"name":"utm_medium","internalName":"C_utm_medium1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_medium1)}}","uri":"/contacts/fields/100279","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:35:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:16.8800000Z"},{"name":"utm_content","internalName":"C_utm_content1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_content1)}}","uri":"/contacts/fields/100280","createdBy":"Mark.Gopez","createdAt":"2017-11-30T00:35:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:11.7830000Z"},{"name":"B2B_Company_CF","internalName":"C_B2B_Company_CF1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Company_CF1)}}","uri":"/contacts/fields/100281","createdBy":"Frank.Chan","createdAt":"2017-12-01T00:12:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-12-01T00:12:00.0000000Z"},{"name":"LP_Source","internalName":"C_LP_Source1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_LP_Source1)}}","uri":"/contacts/fields/100282","createdBy":"Frank.Chan","createdAt":"2017-12-23T02:44:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2017-12-23T02:44:00.0000000Z"},{"name":"B2B_Targeting_Filter","internalName":"C_B2B_Targeting_Filter1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Targeting_Filter1)}}","uri":"/contacts/fields/100283","createdBy":"Frank.Chan","createdAt":"2018-01-12T19:28:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-01-12T19:28:00.0000000Z"},{"name":"utm_term","internalName":"C_utm_term1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_utm_term1)}}","uri":"/contacts/fields/100284","createdBy":"Mark.Gopez","createdAt":"2018-02-13T18:36:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:55:37.9170000Z"},{"name":"B2B_Comment","internalName":"C_b2b_comment1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_b2b_comment1)}}","uri":"/contacts/fields/100285","createdBy":"Mark.Gopez","createdAt":"2018-02-14T21:29:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:51:52.5270000Z"},{"name":"Adhoc_Field_1","internalName":"C_Adhoc_Field_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_11)}}","uri":"/contacts/fields/100286","createdBy":"Frank.Chan","createdAt":"2018-05-04T20:22:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-04T20:22:00.0000000Z"},{"name":"B2B_Comment_long","internalName":"C_B2B_Comment_long1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Comment_long1)}}","uri":"/contacts/fields/100287","createdBy":"Jason.Ferrier","createdAt":"2018-05-05T01:37:00.0000000Z","updatedBy":"Mark.Gopez","updatedAt":"2018-05-17T04:53:30.9900000Z"},{"name":"Adhoc_Filter_1","internalName":"C_Adhoc_Filter_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Filter_11)}}","uri":"/contacts/fields/100288","createdBy":"Frank.Chan","createdAt":"2018-05-08T17:16:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-08T17:16:00.0000000Z"},{"name":"B2B_Targeting_Filter_2","internalName":"C_B2B_Targeting_Filter_21","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Targeting_Filter_21)}}","uri":"/contacts/fields/100289","createdBy":"Frank.Chan","createdAt":"2018-05-11T20:58:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-11T20:58:00.0000000Z"},{"name":"Contact_Role_sfdc","internalName":"C_Untitled_Contact_Field1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Untitled_Contact_Field1)}}","uri":"/contacts/fields/100290","createdBy":"Frank.Chan","createdAt":"2018-05-21T17:38:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-05-21T17:38:50.2770000Z"},{"name":"Account_Owner_sfdc","internalName":"C_Account_Owner_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_Owner_sfdc1)}}","uri":"/contacts/fields/100291","createdBy":"Nadim.Fetaih","createdAt":"2018-05-22T16:27:00.0000000Z","updatedBy":"Nadim.Fetaih","updatedAt":"2018-05-22T16:27:00.0000000Z"},{"name":"Adhoc_URL_1","internalName":"C_Adhoc_URL_11","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_URL_11)}}","uri":"/contacts/fields/100293","createdBy":"Frank.Chan","createdAt":"2018-06-13T16:15:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-06-13T16:15:00.0000000Z"},{"name":"website_contactus_picklist","internalName":"C_website_contactus_picklist1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_website_contactus_picklist1)}}","uri":"/contacts/fields/100294","createdBy":"Frank.Chan","createdAt":"2018-10-08T21:50:00.0000000Z","updatedBy":"Frank.Chan","updatedAt":"2018-10-08T21:50:00.0000000Z"},{"name":"Account Manager","internalName":"C_Account_Manager1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Account_Manager1)}}","uri":"/contacts/fields/100295","createdBy":"Henry.Tran","createdAt":"2019-05-06T19:13:00.0000000Z","updatedBy":"Henry.Tran","updatedAt":"2019-05-06T19:13:00.0000000Z"},{"name":"B2B_Conversion_Flag","internalName":"C_TEST_B2B_Conversion_Flag1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_TEST_B2B_Conversion_Flag1)}}","uri":"/contacts/fields/100296","createdBy":"Andy.Shaw","createdAt":"2019-10-05T15:18:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-10-07T19:44:25.1670000Z"},{"name":"B2B Discount Code","internalName":"C_B2B_Discount_Code1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_B2B_Discount_Code1)}}","uri":"/contacts/fields/100297","createdBy":"Andy.Shaw","createdAt":"2019-10-07T19:45:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-10-07T19:45:00.0000000Z"},{"name":"Adhoc_Field_2","internalName":"C_Adhoc_Field_21","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_21)}}","uri":"/contacts/fields/100298","createdBy":"Andy.Shaw","createdAt":"2019-11-22T16:30:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-11-22T16:30:00.0000000Z"},{"name":"type_sfdc","internalName":"C_type_sfdc1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_type_sfdc1)}}","uri":"/contacts/fields/100299","createdBy":"Jesse.Nobbe","createdAt":"2019-12-05T23:04:00.0000000Z","updatedBy":"Jesse.Nobbe","updatedAt":"2019-12-05T23:04:00.0000000Z"},{"name":"T7 Date","internalName":"C_T7_Date1","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_T7_Date1)}}","uri":"/contacts/fields/100300","createdBy":"Andy.Shaw","createdAt":"2019-12-16T18:03:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2019-12-16T18:03:00.0000000Z"},{"name":"virtual_member_1life","internalName":"C_virtual_member_1life1","dataType":"string","defaultValue":"0","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_virtual_member_1life1)}}","uri":"/contacts/fields/100301","createdBy":"Jesse.Nobbe","createdAt":"2020-01-28T17:48:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-02-20T18:20:04.3000000Z"},{"name":"Adhoc_Date_1","internalName":"C_Adhoc_Date_11","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Date_11)}}","uri":"/contacts/fields/100302","createdBy":"Andy.Shaw","createdAt":"2020-03-03T23:40:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-03-09T18:50:14.4200000Z"},{"name":"send_date_plus10","internalName":"C_send_date_plus101","dataType":"date","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_send_date_plus101)}}","uri":"/contacts/fields/100303","createdBy":"Andy.Shaw","createdAt":"2020-03-10T17:05:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-03-10T17:05:00.0000000Z"},{"name":"Adhoc_Field_3","internalName":"C_Adhoc_Field_31","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Adhoc_Field_31)}}","uri":"/contacts/fields/100305","createdBy":"Andy.Shaw","createdAt":"2020-11-12T19:01:00.0000000Z","updatedBy":"Andy.Shaw","updatedAt":"2020-11-12T19:01:00.0000000Z"},{"name":"Webinar Redemption Code","internalName":"C_Webinar_Redemption_Code1","dataType":"string","hasReadOnlyConstraint":false,"hasNotNullConstraint":false,"hasUniquenessConstraint":false,"statement":"{{Contact.Field(C_Webinar_Redemption_Code1)}}","uri":"/contacts/fields/100306","createdBy":"Peter.Chen","createdAt":"2020-12-08T03:44:00.0000000Z","updatedBy":"Peter.Chen","updatedAt":"2020-12-08T03:44:00.0000000Z"}],"totalResults":150,"limit":1000,"offset":0,"count":150,"hasMore":false}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  '2d5a9e256bdd4dde919413aacb7931d1/24228905930',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:43 GMT',
  'Connection',
  'close',
  'Content-Length',
  '56547'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/contacts/imports', {"name":"grouparoo-import-app_789-po09-EOEP-HKp8-3039","identifierFieldName":"emailAddress","areSystemTimestampsInUTC":true,"isSyncTriggeredOnImport":false,"isUpdatingMultipleMatchedRecords":true,"fields":{"emailAddress":"{{Contact.Field(C_EmailAddress)}}","firstName":"{{Contact.Field(C_FirstName)}}","lastName":"{{Contact.Field(C_LastName)}}"}})
  .once().reply(201, {"name":"grouparoo-import-app_789-po09-EOEP-HKp8-3039","fields":{"emailAddress":"{{Contact.Field(C_EmailAddress)}}","firstName":"{{Contact.Field(C_FirstName)}}","lastName":"{{Contact.Field(C_LastName)}}"},"identifierFieldName":"emailAddress","isSyncTriggeredOnImport":false,"dataRetentionDuration":"P7D","isUpdatingMultipleMatchedRecords":true,"uri":"/contacts/imports/1348","createdBy":"t3st","createdAt":"2021-07-14T17:07:44.8032369Z","updatedBy":"t3st","updatedAt":"2021-07-14T17:07:44.8032369Z"}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  '70c10c5fd1884e1f839775c87dd83bfd/24228906356',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:44 GMT',
  'Connection',
  'close',
  'Content-Length',
  '517'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/contacts/imports/1348/data', [{"emailAddress":"grouparoo@demo.com","id":"1987585","firstName":"John","lastName":"Doe"},{"emailAddress":"grouparoo2@demo.com","firstName":"Pete"}])
  .once().reply(204, "", [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'X-Request-Id',
  '5d0478dee8bf40f78bbe84307f082c79/24228906612',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:45 GMT',
  'Connection',
  'close'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .post('/api/bulk/2.0/syncs', {"syncedInstanceUri":"/contacts/imports/1348"})
  .once().reply(201, {"syncedInstanceUri":"/contacts/imports/1348","status":"pending","createdAt":"2021-07-14T17:07:46.0048668Z","createdBy":"t3st","uri":"/syncs/1155"}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'X-Request-Id',
  '1e4d03d963e646c69ed0e8886a4af281/24228906903',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:45 GMT',
  'Connection',
  'close',
  'Content-Length',
  '156'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282466","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","lastName":"Doe","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'c9ab98282764412e889b81abd3a6bd9c/24228911708',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:56 GMT',
  'Connection',
  'close',
  'Content-Length',
  '400'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo2%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987586","createdAt":"1626282466","depth":"partial","name":"grouparoo2@demo.com","updatedAt":"1626282466","emailAddress":"grouparoo2@demo.com","emailFormatPreference":"unspecified","firstName":"Pete","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623957288"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'e31a24b78b90490c96986fd509b3d222/24228912112',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:57 GMT',
  'Connection',
  'close',
  'Content-Length',
  '385'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/assets/contact/lists')
  .query({"search":"name%3D%27%28test%29%20High%20Value%27","depth":"partial"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '90b8a5fe0c5a49ae868568de00475b73/24228912487',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:57 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/assets/contact/lists')
  .query({"search":"name%3D%27%28test%29%20Churned%27","depth":"partial"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '4af413a5b4d74b65b2d1eddec51018e0/24228912736',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:58 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987585","createdAt":"1626282442","depth":"partial","name":"grouparoo@demo.com","updatedAt":"1626282466","emailAddress":"grouparoo@demo.com","emailFormatPreference":"unspecified","firstName":"John","isBounceback":"false","isSubscribed":"true","lastName":"Doe","subscriptionDate":"1623791476"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'bdbefba305b34c178125c16344011fc5/24228913006',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:59 GMT',
  'Connection',
  'close',
  'Content-Length',
  '400'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .delete('/api/REST/1.0/data/contact/1987585')
  .once().reply(200, "", [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'X-Request-Id',
  '870443b56bef4724852432928a5eddbc/24228913275',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:07:59 GMT',
  'Connection',
  'close',
  'Content-Length',
  '0'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo2%40demo.com"})
  .once().reply(200, {"elements":[{"type":"Contact","currentStatus":"Awaiting action","id":"1987586","createdAt":"1626282466","depth":"partial","name":"grouparoo2@demo.com","updatedAt":"1626282466","emailAddress":"grouparoo2@demo.com","emailFormatPreference":"unspecified","firstName":"Pete","isBounceback":"false","isSubscribed":"true","subscriptionDate":"1623957288"}],"page":1,"pageSize":1000,"total":1}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '004bb1e52ad24991bdc2af538095e69d/24228913583',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:00 GMT',
  'Connection',
  'close',
  'Content-Length',
  '385'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .delete('/api/REST/1.0/data/contact/1987586')
  .once().reply(200, "", [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'X-Request-Id',
  'ab22241e22ee4173b050e22f9655f66e/24228913861',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:00 GMT',
  'Connection',
  'close',
  'Content-Length',
  '0'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo3%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'e7f177cd0783425998efdeb325ad207c/24228914157',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dgrouparoo%2Btest%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'c399cd3cd80b41cb9bcc273385f1eb4a/24228914416',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3Dnotgrouparoo%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  '1ea164ceddfa4e079c6eb0a0285f69c2/24228914661',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);
nock('https://secure.p04.eloqua.com:443', {"encodedQueryParams":true})
  .get('/api/REST/1.0/data/contacts')
  .query({"depth":"partial","search":"C_EmailAddress%3D1grouparoo2%40demo.com"})
  .once().reply(200, {"elements":[],"page":1,"pageSize":1000,"total":0}, [
  'Cache-Control',
  'no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'X-Request-Id',
  'a249bc4ee88545a995526804b0b8adb5/24228914923',
  'P3P',
  'CP="IDC DSP COR DEVa TAIa OUR BUS PHY ONL UNI COM NAV CNT STA",',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'Date',
  'Wed, 14 Jul 2021 17:08:03 GMT',
  'Connection',
  'close',
  'Content-Length',
  '50'
]);