const nock = require('nock');

nock('https://api.sendgrid.com:443', {"encodedQueryParams":true})
  .get('/v3/marketing/field_definitions')
  .once().reply(200, {"reserved_fields":[{"id":"_rf0_T","name":"first_name","field_type":"Text"},{"id":"_rf1_T","name":"last_name","field_type":"Text"},{"id":"_rf2_T","name":"email","field_type":"Text"},{"id":"_rf3_T","name":"alternate_emails","field_type":"Text"},{"id":"_rf4_T","name":"address_line_1","field_type":"Text"},{"id":"_rf5_T","name":"address_line_2","field_type":"Text"},{"id":"_rf6_T","name":"city","field_type":"Text"},{"id":"_rf7_T","name":"state_province_region","field_type":"Text"},{"id":"_rf8_T","name":"postal_code","field_type":"Text"},{"id":"_rf9_T","name":"country","field_type":"Text"},{"id":"_rf10_T","name":"phone_number","field_type":"Text"},{"id":"_rf11_T","name":"whatsapp","field_type":"Text"},{"id":"_rf12_T","name":"line","field_type":"Text"},{"id":"_rf13_T","name":"facebook","field_type":"Text"},{"id":"_rf14_T","name":"unique_name","field_type":"Text"},{"id":"_rf15_T","name":"email_domains","field_type":"Text","read_only":true},{"id":"_rf16_D","name":"last_clicked","field_type":"Date","read_only":true},{"id":"_rf17_D","name":"last_opened","field_type":"Date","read_only":true},{"id":"_rf18_D","name":"last_emailed","field_type":"Date","read_only":true},{"id":"_rf19_T","name":"singlesend_id","field_type":"Text","read_only":true},{"id":"_rf20_T","name":"automation_id","field_type":"Text","read_only":true},{"id":"_rf21_D","name":"created_at","field_type":"Date","read_only":true},{"id":"_rf22_D","name":"updated_at","field_type":"Date","read_only":true},{"id":"_rf23_T","name":"contact_id","field_type":"Text","read_only":true}],"_metadata":{"self":"https://api.sendgrid.com/v3/marketing/field_definitions"}}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 05 Feb 2021 22:33:03 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1630',
  'Connection',
  'close',
  'x-amzn-requestid',
  '7440b91a-6824-419f-bf7e-4c770ccdf44d',
  'x-amz-apigw-id',
  'aSwg6E9poAMFVWQ=',
  'x-amzn-trace-id',
  'Root=1-601dc79f-4f3f898a49aedd782f93b532;Sampled=0',
  'x-envoy-upstream-service-time',
  '136',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'x-content-type-options',
  'nosniff',
  'x-ratelimit-limit',
  '600',
  'x-ratelimit-remaining',
  '599',
  'x-ratelimit-reset',
  '57',
  'Powered-By',
  'SGGateway'
]);
nock('https://api.sendgrid.com:443', {"encodedQueryParams":true})
  .post('/v3/marketing/contacts/search', {"query":"email = 'ourixilva@gmail.com'"})
  .once().reply(200, {"contact_count":0,"result":[],"_metadata":{"self":"https://api.sendgrid.com/v3/marketing/contacts/search"}}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 05 Feb 2021 22:33:04 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '109',
  'Connection',
  'close',
  'x-amzn-requestid',
  '7bf9b807-9f4c-468c-9a10-be9e346ebe29',
  'x-amz-apigw-id',
  'aSwhGGJIvHcFlaQ=',
  'x-amzn-trace-id',
  'Root=1-601dc7a0-36f902ff7b99865c1af554ea;Sampled=0',
  'x-envoy-upstream-service-time',
  '255',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'x-content-type-options',
  'nosniff',
  'x-ratelimit-limit',
  '200',
  'x-ratelimit-remaining',
  '199',
  'x-ratelimit-reset',
  '56',
  'Powered-By',
  'SGGateway'
]);
nock('https://api.sendgrid.com:443', {"encodedQueryParams":true})
  .get('/v3/marketing/field_definitions')
  .once().reply(200, {"reserved_fields":[{"id":"_rf0_T","name":"first_name","field_type":"Text"},{"id":"_rf1_T","name":"last_name","field_type":"Text"},{"id":"_rf2_T","name":"email","field_type":"Text"},{"id":"_rf3_T","name":"alternate_emails","field_type":"Text"},{"id":"_rf4_T","name":"address_line_1","field_type":"Text"},{"id":"_rf5_T","name":"address_line_2","field_type":"Text"},{"id":"_rf6_T","name":"city","field_type":"Text"},{"id":"_rf7_T","name":"state_province_region","field_type":"Text"},{"id":"_rf8_T","name":"postal_code","field_type":"Text"},{"id":"_rf9_T","name":"country","field_type":"Text"},{"id":"_rf10_T","name":"phone_number","field_type":"Text"},{"id":"_rf11_T","name":"whatsapp","field_type":"Text"},{"id":"_rf12_T","name":"line","field_type":"Text"},{"id":"_rf13_T","name":"facebook","field_type":"Text"},{"id":"_rf14_T","name":"unique_name","field_type":"Text"},{"id":"_rf15_T","name":"email_domains","field_type":"Text","read_only":true},{"id":"_rf16_D","name":"last_clicked","field_type":"Date","read_only":true},{"id":"_rf17_D","name":"last_opened","field_type":"Date","read_only":true},{"id":"_rf18_D","name":"last_emailed","field_type":"Date","read_only":true},{"id":"_rf19_T","name":"singlesend_id","field_type":"Text","read_only":true},{"id":"_rf20_T","name":"automation_id","field_type":"Text","read_only":true},{"id":"_rf21_D","name":"created_at","field_type":"Date","read_only":true},{"id":"_rf22_D","name":"updated_at","field_type":"Date","read_only":true},{"id":"_rf23_T","name":"contact_id","field_type":"Text","read_only":true}],"_metadata":{"self":"https://api.sendgrid.com/v3/marketing/field_definitions"}}, [
  'Server',
  'nginx',
  'Date',
  'Fri, 05 Feb 2021 22:33:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1630',
  'Connection',
  'close',
  'x-amzn-requestid',
  '3dd648d1-4cf5-49ac-a783-c9f830f3a16a',
  'x-amz-apigw-id',
  'aSwhPFW3IAMF2Rw=',
  'x-amzn-trace-id',
  'Root=1-601dc7a1-174156296416c4ac0c75b638;Sampled=0',
  'x-envoy-upstream-service-time',
  '50',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'x-content-type-options',
  'nosniff',
  'x-ratelimit-limit',
  '600',
  'x-ratelimit-remaining',
  '598',
  'x-ratelimit-reset',
  '55',
  'Powered-By',
  'SGGateway'
]);