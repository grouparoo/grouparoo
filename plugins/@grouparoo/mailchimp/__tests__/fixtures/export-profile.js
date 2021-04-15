const nock = require('nock');

nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9d741ebc-c22a-4e34-af47-5463c4f5cd25"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9d741ebc-c22a-4e34-af47-5463c4f5cd25',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7e3a2a07-d581-46c7-a895-b718fa7810f3',
  'Date',
  'Thu, 15 Apr 2021 00:06:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"d0fb5992-c3b9-4761-bac2-c043e5be6cdd"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  'd0fb5992-c3b9-4761-bac2-c043e5be6cdd',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:06:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '41a1bad3-048d-4ceb-9661-a69170a7c724',
  'Date',
  'Thu, 15 Apr 2021 00:06:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"35479d5d-c33d-430c-8a9e-2930fdd43c40"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '35479d5d-c33d-430c-8a9e-2930fdd43c40',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:06:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '514df789-c473-4517-a193-a596d7399ce8',
  'Date',
  'Thu, 15 Apr 2021 00:06:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"d038488a-2f86-4a84-8dad-0fce36c09915"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  'd038488a-2f86-4a84-8dad-0fce36c09915',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:06:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '232b5590-8e32-4917-8636-c6134196f898',
  'Date',
  'Thu, 15 Apr 2021 00:06:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"4b8e76dc-d715-4668-a30f-46fce8fb1abe"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '4b8e76dc-d715-4668-a30f-46fce8fb1abe',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:06:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ae5e997a3e4b813d83f46ef34e1a66ee/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"65f12f97-40b8-450e-a6eb-531b1cd33a7b"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '65f12f97-40b8-450e-a6eb-531b1cd33a7b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"1fe36d34-889a-4f50-8e40-eb7f1210b5d6"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '1fe36d34-889a-4f50-8e40-eb7f1210b5d6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c3bd51b8-dbee-408b-a5c2-7a75090663fb"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c3bd51b8-dbee-408b-a5c2-7a75090663fb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"6ab57d71-9f9c-46b2-a3f2-db7a1fd0d946"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '6ab57d71-9f9c-46b2-a3f2-db7a1fd0d946',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"85c4ae7c-76b8-41d0-8cb6-a6f6bdc46e73"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '85c4ae7c-76b8-41d0-8cb6-a6f6bdc46e73',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","FNAME":"Caio"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'fa7d11d6-79c4-4c0d-97dc-ee638302404f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '80afec8f-7761-40b8-937c-515de5871ee8',
  'Date',
  'Thu, 15 Apr 2021 00:06:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '42abcbec-57a5-4299-b2e1-3c355c173826',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '488cf197-48a4-4a10-9dac-3a7d7231812c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","FNAME":"Caio","LNAME":"Silveira","PHONE":"+5583999999999"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e6df7515-612d-4a76-9c9f-89648634885a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ac58b5dd-e191-4b97-9077-7f69a614f777',
  'Date',
  'Thu, 15 Apr 2021 00:06:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f7f0b7dc-cfdc-4830-bac5-b8a2df9755db',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8d41e4f8-b0c0-433c-8647-b76794e9258e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"+5583999999998","LTV":15.5},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ef991bf8-5c18-4be4-b650-8ae07d82351d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '94ccf65c-22bf-4210-9323-b257088c30bd',
  'Date',
  'Thu, 15 Apr 2021 00:06:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a7c3aed4-2072-421e-bd37-016d18dcf4f0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'cc1ac8fb-876e-49fc-a146-7f521a056620',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"000","LTV":"AAAAA"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Your merge fields were invalid.","instance":"4fe00fec-1a97-4356-a761-626d5e9bcb39","errors":[{"field":"LTV","message":"Please enter a number"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '259',
  'X-Request-Id',
  '4fe00fec-1a97-4356-a761-626d5e9bcb39',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:06:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2bc1afb9-ae04-49fc-b784-cb50c6f2c4d4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","FNAME":"","LNAME":"","PHONE":"","LTV":""},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9efb9888-64a3-4ed5-9e28-b62948b0fcbe',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd744c56a-6277-4104-9531-c4e7e268211f',
  'Date',
  'Thu, 15 Apr 2021 00:06:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '34e9f586-92b0-4fee-af7a-0344093633a1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'fe87cc86-2c0f-489a-a473-b07e233c8c73',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '04c75572-7afe-40c2-bed2-a8a2b4655616',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '3cae6c2f-dab7-4252-9d01-a613f734f72c',
  'Date',
  'Thu, 15 Apr 2021 00:06:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:56+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8d97d37b-81ca-4603-875b-c7cf983b9b41',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:56+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f96dc9e2-3d3a-44cc-a4e1-384553554468',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:56+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd750370d-a2d9-4219-aaae-6c74397c33ad',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list two","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '0d269e5b-2251-4429-8ec3-aca3b5a95c21',
  'Date',
  'Thu, 15 Apr 2021 00:06:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'fc5b0cca-62a3-487f-a326-3f3b6a8fa6ce',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '677c25d9-126f-4014-ac96-b57c301483ff',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '61bc61fa-74a8-4441-a7d1-13615f473677',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7ffc332b-7c17-44af-a5e2-e627c07ce7d0',
  'Date',
  'Thu, 15 Apr 2021 00:06:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:59+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419521,"name":"list three"},{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c41ac89f-7917-4681-9a32-79f774f856cf',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:59+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419521,"name":"list three"},{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4c68fb18-00ba-4481-a817-ecef44045891',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:06:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"status":"subscribed","merge_fields":{"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"},"email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com"})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:59+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419521,"name":"list three"},{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2f50ee88-f8ee-4143-8342-64285c76b25f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f7129124-8515-477d-a132-91beec195c86',
  'Date',
  'Thu, 15 Apr 2021 00:07:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(200, {"id":"868d6162bf001d22bb1684743a04b405","email_address":"2dk5s05ino2phx57wow2vd@grouparoo.com","unique_email_id":"471d344067","web_id":387845065,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:06:50+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:59+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419521,"name":"list three"},{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '896c9e1d-2ba2-43cc-9c3b-fc2d6f1b7ca9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387845065>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {"email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com"}})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"The resource submitted could not be validated. For field-specific details, see the 'errors' array.","instance":"7c8038fc-0a09-4713-8bc5-fc54bb35e896","errors":[{"field":"email address","message":"\"d3921apr8dtlu42knjq0tq@grouparoo.com\" is already in this list with a status of \"subscribed\"."}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '412',
  'X-Request-Id',
  '7c8038fc-0a09-4713-8bc5-fc54bb35e896',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd2e5082d-b4ee-4b11-b776-77724209092b',
  'Date',
  'Thu, 15 Apr 2021 00:07:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789', {})
  .once().reply(200, {"id":"c15b7b840ad5552984191ba2875ab789","email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com","unique_email_id":"fb5a9b51c7","web_id":387844901,"email_type":"html","status":"archived","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-14T23:44:38+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:46+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3163',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2cb47e91-0069-4ac5-81cb-e01022d6f750',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844901>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com"},"email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com"})
  .once().reply(200, {"id":"c15b7b840ad5552984191ba2875ab789","email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com","unique_email_id":"fb5a9b51c7","web_id":387844901,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:01+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:01+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'aa432958-458c-43fb-9bcb-fd34da9dc20f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844901>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/tags', {"tags":[{"name":"list one","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'b6435a89-8dd7-43d6-b676-f2c6e3f009be',
  'Date',
  'Thu, 15 Apr 2021 00:07:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789', {})
  .once().reply(200, {"id":"c15b7b840ad5552984191ba2875ab789","email_address":"d3921apr8dtlu42knjq0tq@grouparoo.com","unique_email_id":"fb5a9b51c7","web_id":387844901,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:01+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:02+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '19669f32-2696-49f0-9f1b-840d4892b4ab',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844901>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789', {"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com"}})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"The resource submitted could not be validated. For field-specific details, see the 'errors' array.","instance":"6eb8123c-b3c4-4015-8eea-15e15eb25614","errors":[{"field":"email address","message":"\"xmh2m7e14yc9jw9a1bic8@grouparoo.com\" is already in this list with a status of \"subscribed\"."}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '411',
  'X-Request-Id',
  '6eb8123c-b3c4-4015-8eea-15e15eb25614',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '6bf0a2fc-da98-4323-a883-2a0b7193b159',
  'Date',
  'Thu, 15 Apr 2021 00:07:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-14T23:44:54+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4069644e-0405-40cf-a837-af5415e82e5f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","FNAME":"Evan","PHONE":"+5583999999998"},"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com"})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:04+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:04+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3182',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '62064ce4-577b-435a-a25f-96e7b41fc6be',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'c3db847e-7ff6-4db3-ae7f-9161726228e1',
  'Date',
  'Thu, 15 Apr 2021 00:07:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:04+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:04+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3282',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b9edede3-3e6c-4679-88a1-c021895b1732',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f6e6482b-f373-4e7b-b58d-5c5d939eec0c',
  'Date',
  'Thu, 15 Apr 2021 00:07:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:04+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:05+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3182',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'af7524cc-d836-44c8-a34c-d1f4697d4f42',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '165b71ff-0094-42e1-b55c-8b54c489c8e4',
  'Date',
  'Thu, 15 Apr 2021 00:07:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9eef2479-2e6b-4f39-b385-b0a0bfaa7724',
  'Date',
  'Thu, 15 Apr 2021 00:07:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:04+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6ae1f3ba-99ac-4f24-a5db-eda51b02fa9c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:04+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '41b505ae-bd85-4cc0-b00e-977eb53aa424',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","FNAME":"Caio"},"email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com"})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:07+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:07+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3182',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e79f7449-cc43-4d2d-a82f-350f5abecaaf',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '0b6f9878-0085-4c52-9e6c-8a42595615ff',
  'Date',
  'Thu, 15 Apr 2021 00:07:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:07+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:07+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3216',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ac98b4e2-807b-449e-9611-1192e0fb3975',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '76076672-4e35-4703-802c-b3b17981a121',
  'Date',
  'Thu, 15 Apr 2021 00:07:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '43cfdd15-06f7-48cb-b481-fb676e7dad0e',
  'Date',
  'Thu, 15 Apr 2021 00:07:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:07+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:08+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd4716a31-943f-474b-96d8-d99960fea3df',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:07+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:08+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a8438f78-75cc-474e-9822-be20f4ccdc69',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '4cb0777c-c616-4027-b45f-31f4722a0a78',
  'Date',
  'Thu, 15 Apr 2021 00:07:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"374acbab-510b-480f-b8ad-7b10c54d2138"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '374acbab-510b-480f-b8ad-7b10c54d2138',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:07:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(200, {"id":"409c935420132c65ac39bebcde3902ab","email_address":"xmh2m7e14yc9jw9a1bic8@grouparoo.com","unique_email_id":"f856d80dbf","web_id":387844885,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:07+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:08+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e2067355-16cd-4ea8-b9be-26de8edbab14',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844885>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc', {})
  .once().reply(200, {"id":"7658ee0386319805695db87d7e3a05bc","email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com","unique_email_id":"640b346a47","web_id":387844893,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-14T23:44:58+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8054c4ee-6048-4913-b76a-9ac28de8a4d1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844893>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc', {})
  .once().reply(200, {"id":"7658ee0386319805695db87d7e3a05bc","email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com","unique_email_id":"640b346a47","web_id":387844893,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-14T23:44:58+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '091fff84-7024-4be1-b275-29fd46781f96',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844893>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com","FNAME":"Carlos"},"email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com"})
  .once().reply(200, {"id":"7658ee0386319805695db87d7e3a05bc","email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com","unique_email_id":"640b346a47","web_id":387844893,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:11+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:11+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3171',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'bad4af0e-fad9-4b10-a5af-74efc5b2d566',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844893>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/tags', {"tags":[{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '68a6d694-9529-48f7-a2a7-9019817c7602',
  'Date',
  'Thu, 15 Apr 2021 00:07:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc', {})
  .once().reply(200, {"id":"7658ee0386319805695db87d7e3a05bc","email_address":"mr8cwy4i2mjn3wz3lebogc@grouparoo.com","unique_email_id":"640b346a47","web_id":387844893,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:11+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:11+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3204',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e86fdb0d-70f6-444e-a9a5-8e287602ce0d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844893>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {})
  .once().reply(200, {"id":"8ee590bc197cc56767e4ea385c48557b","email_address":"lnehzwmbceogahuye3yw@grouparoo.com","unique_email_id":"dcb2569870","web_id":387844897,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-14T23:44:59+00:00","member_rating":2,"last_changed":"2021-04-15T00:06:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '10b869a1-d61f-4b1b-b524-06208bb0ce64',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844897>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ae5e997a3e4b813d83f46ef34e1a66ee', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9c4d732c-02f7-4825-8e3e-d5740f3bab81"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9c4d732c-02f7-4825-8e3e-d5740f3bab81',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/ae5e997a3e4b813d83f46ef34e1a66ee', {"email_address":"lnehzwmbceogahuye3yw@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"lnehzwmbceogahuye3yw@grouparoo.com"}})
  .once().reply(200, {"id":"8ee590bc197cc56767e4ea385c48557b","email_address":"lnehzwmbceogahuye3yw@grouparoo.com","unique_email_id":"dcb2569870","web_id":387844897,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:12+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:13+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3167',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '27dc96ad-00eb-4d3e-9dc8-9a69e18d3c54',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844897>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {})
  .once().reply(200, {"id":"8ee590bc197cc56767e4ea385c48557b","email_address":"lnehzwmbceogahuye3yw@grouparoo.com","unique_email_id":"dcb2569870","web_id":387844897,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:12+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:13+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3167',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c5d2e363-37dc-46b0-9790-cf9658a5908d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844897>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {"status":"subscribed","merge_fields":{"email_address":"lnehzwmbceogahuye3yw@grouparoo.com","FNAME":"Jake"},"email_address":"lnehzwmbceogahuye3yw@grouparoo.com"})
  .once().reply(200, {"id":"8ee590bc197cc56767e4ea385c48557b","email_address":"lnehzwmbceogahuye3yw@grouparoo.com","unique_email_id":"dcb2569870","web_id":387844897,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:12+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:13+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3167',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'aded7546-728c-4d90-a71e-490f6a0a167d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844897>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'a0d8602a-e9c7-4fe3-90a8-b8a47edc01f3',
  'Date',
  'Thu, 15 Apr 2021 00:07:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {})
  .once().reply(200, {"id":"8ee590bc197cc56767e4ea385c48557b","email_address":"lnehzwmbceogahuye3yw@grouparoo.com","unique_email_id":"dcb2569870","web_id":387844897,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-15T00:07:12+00:00","member_rating":2,"last_changed":"2021-04-15T00:07:13+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3167',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9cf795c1-9cf1-4463-a8fd-cbfb5ced7cc0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387844897>; rel="dashboard"',
  'Date',
  'Thu, 15 Apr 2021 00:07:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ae5e997a3e4b813d83f46ef34e1a66ee', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"0967d961-a688-4a14-a5ff-df1582d9e3d5"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '0967d961-a688-4a14-a5ff-df1582d9e3d5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"7ea4557e-3128-4455-b149-1c1e648b6f1f"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '7ea4557e-3128-4455-b149-1c1e648b6f1f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"AAAAA"},"email_address":"AAAAA"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Please provide a valid email address.","instance":"1e8e54a1-45f3-4d9b-9800-df7c54999021"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '1e8e54a1-45f3-4d9b-9800-df7c54999021',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b48def645758b95537d4424c84d1a9ff', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c1efa994-39e7-4145-b93c-1b6ff1a04040"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c1efa994-39e7-4145-b93c-1b6ff1a04040',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"foo@example.com"},"email_address":"foo@example.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"foo@example.com looks fake or invalid, please enter a real email address.","instance":"b7560829-24e8-40ab-a654-4cf5082da6b2"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '240',
  'X-Request-Id',
  'b7560829-24e8-40ab-a654-4cf5082da6b2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '5ed060c9-255a-4278-8054-f04d5c30847c',
  'Date',
  'Thu, 15 Apr 2021 00:07:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/868d6162bf001d22bb1684743a04b405', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'c40e07fa-dc94-4b46-90ab-1d30e7b3cda7',
  'Date',
  'Thu, 15 Apr 2021 00:07:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '413e9424-a70c-4f6e-a66f-aa1e38af2be0',
  'Date',
  'Thu, 15 Apr 2021 00:07:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/c15b7b840ad5552984191ba2875ab789', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '14068af8-2baa-4f83-a72e-ecc61ef91908',
  'Date',
  'Thu, 15 Apr 2021 00:07:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'b7000ff2-b4ce-4566-8e97-0ebb8d4da34f',
  'Date',
  'Thu, 15 Apr 2021 00:07:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/409c935420132c65ac39bebcde3902ab', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"74283508-2032-4518-8914-d3a05f6704f2"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '74283508-2032-4518-8914-d3a05f6704f2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Thu, 15 Apr 2021 00:07:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'c7f0eba5-2c6b-4955-bc44-64e577f2744d',
  'Date',
  'Thu, 15 Apr 2021 00:07:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/7658ee0386319805695db87d7e3a05bc', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '302ceee0-cf0a-4b7f-9021-b7f5a187cd9a',
  'Date',
  'Thu, 15 Apr 2021 00:07:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9c508381-f51d-4f06-94d7-a25a09e5066f',
  'Date',
  'Thu, 15 Apr 2021 00:07:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8ee590bc197cc56767e4ea385c48557b', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '909d4f40-38e4-4b0e-a560-86b97a7653d5',
  'Date',
  'Thu, 15 Apr 2021 00:07:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ae5e997a3e4b813d83f46ef34e1a66ee/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c3151973-6212-4f2e-902a-06b179aeddd6"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c3151973-6212-4f2e-902a-06b179aeddd6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Thu, 15 Apr 2021 00:07:20 GMT',
  'Connection',
  'close'
]);