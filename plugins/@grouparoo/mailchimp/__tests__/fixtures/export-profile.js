const nock = require('nock');

nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"18123561-fd51-454d-a447-df960815a891"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '18123561-fd51-454d-a447-df960815a891',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '4716b633-8e03-43e3-94bb-33f54315cfe1',
  'Date',
  'Mon, 12 Apr 2021 21:13:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"6f979bef-383e-4335-ab20-28be133469ce"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '6f979bef-383e-4335-ab20-28be133469ce',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:13:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '49a70bfb-d5ab-4d7c-bbd1-46f75c7ff6f4',
  'Date',
  'Mon, 12 Apr 2021 21:13:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"d356c7b2-42d9-44b5-9aeb-0bc2286a638e"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  'd356c7b2-42d9-44b5-9aeb-0bc2286a638e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:13:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f59b9a93-9fe1-4fd9-bde4-8dc38ba70e10',
  'Date',
  'Mon, 12 Apr 2021 21:13:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"4b01e3c1-791c-46e6-938d-4cba19536d49"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '4b01e3c1-791c-46e6-938d-4cba19536d49',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:13:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1a7750e3-abb4-4a23-9c8f-da0be6e97f44',
  'Date',
  'Mon, 12 Apr 2021 21:13:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"61d985bf-fdca-4bd1-8e9c-daad29e19d7b"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '61d985bf-fdca-4bd1-8e9c-daad29e19d7b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:13:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/dad5965f5bfdb77b3efb89d01660ddc9/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"d26c940d-d44f-4d69-addf-c2bbe5c5ce73"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'd26c940d-d44f-4d69-addf-c2bbe5c5ce73',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"bed51a92-08a7-43d4-9dad-7cfc3e994dc3"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'bed51a92-08a7-43d4-9dad-7cfc3e994dc3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b6773c60-7b75-4b68-9d8b-2c89d345b1c3"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b6773c60-7b75-4b68-9d8b-2c89d345b1c3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b50ecedd-2452-4061-933c-a39307ec08eb"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b50ecedd-2452-4061-933c-a39307ec08eb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b107d4c2-fd31-43c2-ab54-f9d09eb0f891"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b107d4c2-fd31-43c2-ab54-f9d09eb0f891',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","FNAME":"Caio"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e0c684c9-b0c3-451c-90ca-72e917ec2a07',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '56f2a6c1-f142-4be8-ad51-4f5d57aad57d',
  'Date',
  'Mon, 12 Apr 2021 21:13:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6cd89641-767b-455f-9143-935694646d56',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:53+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '01a0ecc7-9c4a-49b7-beee-d3455427fa95',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","FNAME":"Caio","LNAME":"Silveira","PHONE":"+5583999999999"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:54+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2d4444cc-24e4-405e-a6b5-0399010fd2a3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '488504d9-40a2-46cd-9538-604b9e6c4923',
  'Date',
  'Mon, 12 Apr 2021 21:13:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:54+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'bedb1842-f9a9-4b23-b2f6-d2b102fdbf30',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:54+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '29628092-d83c-4c86-bd4d-7fe8194bfba4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"+5583999999998","LTV":15.5},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '196971db-9976-4e60-9c60-9549d8cd7469',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '3f35fa34-af07-4cc5-b5ce-2a42b1b230e4',
  'Date',
  'Mon, 12 Apr 2021 21:13:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b9b367d8-b926-4e23-ad80-33122f61f5a7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd2dfdce8-84a3-441b-a215-194cae50f626',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"000","LTV":"AAAAA"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Your merge fields were invalid.","instance":"4f0cac9e-4c7d-4209-b99b-fe7d5a8303ac","errors":[{"field":"LTV","message":"Please enter a number"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '259',
  'X-Request-Id',
  '4f0cac9e-4c7d-4209-b99b-fe7d5a8303ac',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:13:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'df9f14a9-901b-4f67-b901-53f15fc6d8b5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","FNAME":"","LNAME":"","PHONE":"","LTV":""},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f55a17ab-e5bd-4281-92cb-31886ddb3469',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'bc610d31-70ce-4025-956f-49157a6ccf6d',
  'Date',
  'Mon, 12 Apr 2021 21:13:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b5ef17a8-d9ce-4b1f-bebd-956b308888fb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6f61413c-00d8-4180-981a-f3003a1e6c7b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:57+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '3cf75a12-7401-472c-a572-6a15394935e5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:13:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7ee5f156-9d67-4b8f-8ff2-d5df3c36ffdf',
  'Date',
  'Mon, 12 Apr 2021 21:13:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1b61e2a9-32ae-47f7-92e3-7cb73c3b0104',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd63df2ec-16a0-457a-85cc-ae3af6a415fa',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '3b73feae-e746-4694-a195-022edce6bb39',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list two","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd4310c8b-7be6-44f2-abdf-11bd9ba4a5d9',
  'Date',
  'Mon, 12 Apr 2021 21:14:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:01+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8fec6702-ec0c-4a66-8e08-1f2d393fba63',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:01+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '721bf4f6-5394-458f-a586-48e55a312a9a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:01+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd3322fe4-d881-41e0-b213-8e4c33d91070',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '774a3e9a-71c1-4ba2-a22c-0c12356c164a',
  'Date',
  'Mon, 12 Apr 2021 21:14:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:02+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4608eca1-192b-4642-a59d-e920dedbb903',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:02+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c3044cf1-5c3e-419d-9642-10fa5b7f27c2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"status":"subscribed","merge_fields":{"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"},"email_address":"g0kt0nic638pe1unifesuj@grouparoo.com"})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:02+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c502a5b4-af8f-497d-8b7d-e3c0d7303ea3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '8be93dcd-4cad-4f96-b448-4da0e30a54df',
  'Date',
  'Mon, 12 Apr 2021 21:14:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(200, {"id":"93abfc787f9a2a922db939d3b3b445e3","email_address":"g0kt0nic638pe1unifesuj@grouparoo.com","unique_email_id":"66ab55e2ce","web_id":387757813,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:13:53+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:02+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '93373f6c-1591-429f-bfa9-eba43705a0f0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757813>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {"email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com"}})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"The resource submitted could not be validated. For field-specific details, see the 'errors' array.","instance":"e737dc15-9d02-4267-ac94-05ecd39199aa","errors":[{"field":"email address","message":"\"ici4xkrnqwdzrfznf2ze5n@grouparoo.com\" is already in this list with a status of \"subscribed\"."}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '412',
  'X-Request-Id',
  'e737dc15-9d02-4267-ac94-05ecd39199aa',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '51a8d966-82f0-4f2b-845b-0b793b2e63e3',
  'Date',
  'Mon, 12 Apr 2021 21:14:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465', {})
  .once().reply(200, {"id":"4c41694566a842262badf90acefcd465","email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com","unique_email_id":"50c77ab76c","web_id":387757305,"email_type":"html","status":"archived","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:12:21+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3163',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c4d1ec57-38af-414b-bd43-b7b9b4b6ea3a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757305>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com"},"email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com"})
  .once().reply(200, {"id":"4c41694566a842262badf90acefcd465","email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com","unique_email_id":"50c77ab76c","web_id":387757305,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:04+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:04+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b8fbb199-17a8-4341-87fa-8f661dd85d39',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757305>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/tags', {"tags":[{"name":"list one","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '43682388-f4eb-4c1d-a46b-c1095222710a',
  'Date',
  'Mon, 12 Apr 2021 21:14:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465', {})
  .once().reply(200, {"id":"4c41694566a842262badf90acefcd465","email_address":"ici4xkrnqwdzrfznf2ze5n@grouparoo.com","unique_email_id":"50c77ab76c","web_id":387757305,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:04+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:05+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a53d8458-fd33-462b-8d5c-d7434585a872',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757305>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465', {"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com"}})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"The resource submitted could not be validated. For field-specific details, see the 'errors' array.","instance":"92f888c3-30c6-48f5-917a-969608754501","errors":[{"field":"email address","message":"\"6d5h7zk3oeukp38rp7sgem@grouparoo.com\" is already in this list with a status of \"subscribed\"."}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '412',
  'X-Request-Id',
  '92f888c3-30c6-48f5-917a-969608754501',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'bea584ba-9543-42dc-99db-0d435add621e',
  'Date',
  'Mon, 12 Apr 2021 21:14:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:12:35+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3181',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '00f386ca-e26e-4b17-955f-99ed37dbfb84',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","FNAME":"Evan","PHONE":"+5583999999998"},"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com"})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:06+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3183',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '75e764e1-2171-46f1-bb6d-a35de94e41bf',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '992c47cf-fcb9-491a-9a74-78ad393a5f22',
  'Date',
  'Mon, 12 Apr 2021 21:14:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:06+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3283',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '05be6747-6ad7-4b4d-ae7f-ca5e3963b5a1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ad5a96b1-f544-44fb-be23-b4175a3cee1b',
  'Date',
  'Mon, 12 Apr 2021 21:14:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:06+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3183',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f92f2ccb-fe0e-4917-8e03-ea700b59b9e9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f89d5aa3-365a-410f-b171-6f0b5393807d',
  'Date',
  'Mon, 12 Apr 2021 21:14:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f3c3994b-713c-42a4-bcf9-b9867f33cbc1',
  'Date',
  'Mon, 12 Apr 2021 21:14:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:06+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:07+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3181',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ba79da99-7ab0-4c1b-8b0f-f1de706d4f15',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:06+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:07+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3181',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '62930123-48f1-465d-93f9-0a35bfff86a5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","FNAME":"Caio"},"email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com"})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:08+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:08+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3183',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '60d36e53-d850-40a7-8939-5089ac283018',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ca2588a1-8eec-43b8-a342-701b2cf573fc',
  'Date',
  'Mon, 12 Apr 2021 21:14:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:08+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:08+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3217',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ae17ea31-f61c-4c78-9a2b-4a21fb1d814b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '4f6c2432-15d8-4bf4-b1f4-a399ed47738d',
  'Date',
  'Mon, 12 Apr 2021 21:14:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '436b5794-ce80-40a5-88e2-ad04e475218b',
  'Date',
  'Mon, 12 Apr 2021 21:14:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:08+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:09+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3215',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b43d8027-1f1f-4f46-8774-601b8c464970',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:08+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:09+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3215',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e33e3e10-bc2c-4304-b6f5-17fcc9d23545',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ae480e7a-993c-497f-b364-ad7842ddfd56',
  'Date',
  'Mon, 12 Apr 2021 21:14:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"41f38ed7-34d6-4c86-bc6c-50f4047b7a95"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '41f38ed7-34d6-4c86-bc6c-50f4047b7a95',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:14:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(200, {"id":"4a70610cf44bebd7a3de2672adc80b06","email_address":"6d5h7zk3oeukp38rp7sgem@grouparoo.com","unique_email_id":"48f1b2e836","web_id":387757309,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:08+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:09+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3215',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4d320398-43c1-4de8-a1cf-fbd29cddc6cd',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757309>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba', {})
  .once().reply(200, {"id":"2589986b14d80f79d2aeacceec7baaba","email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com","unique_email_id":"d709543207","web_id":387757313,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:12:38+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3168',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '48bf92ca-ef97-4c53-8d84-5b3dda5b051e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757313>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba', {})
  .once().reply(200, {"id":"2589986b14d80f79d2aeacceec7baaba","email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com","unique_email_id":"d709543207","web_id":387757313,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:12:38+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3168',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9aa9e832-7c8e-4fcc-b11a-41ddcb5adf64',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757313>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com","FNAME":"Carlos"},"email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com"})
  .once().reply(200, {"id":"2589986b14d80f79d2aeacceec7baaba","email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com","unique_email_id":"d709543207","web_id":387757313,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:11+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:11+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3170',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '7486e791-83b7-4b7d-a35b-f22b3380c4a3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757313>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/tags', {"tags":[{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ce0cb750-78b8-456f-b2d1-d796e8249b14',
  'Date',
  'Mon, 12 Apr 2021 21:14:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba', {})
  .once().reply(200, {"id":"2589986b14d80f79d2aeacceec7baaba","email_address":"kz001eaoo4fkht3sl6k2k@grouparoo.com","unique_email_id":"d709543207","web_id":387757313,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:11+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:12+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3203',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'dadf8060-0266-4cbc-b399-a0163aa97a2c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757313>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {})
  .once().reply(200, {"id":"9373ecdf939f859098ec1c7a0007a2c4","email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","unique_email_id":"8e60512e2f","web_id":387757317,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:12:39+00:00","member_rating":2,"last_changed":"2021-04-12T21:13:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3168',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '7a851288-15a8-48b4-b8fb-640483dc23f7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757317>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/dad5965f5bfdb77b3efb89d01660ddc9', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"60661268-f3a6-4539-8d70-513f81e8d000"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '60661268-f3a6-4539-8d70-513f81e8d000',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/dad5965f5bfdb77b3efb89d01660ddc9', {"email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com"}})
  .once().reply(200, {"id":"9373ecdf939f859098ec1c7a0007a2c4","email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","unique_email_id":"8e60512e2f","web_id":387757317,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:12+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:12+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3170',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '30101790-f615-4cc0-b568-c9d45ed42d05',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757317>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {})
  .once().reply(200, {"id":"9373ecdf939f859098ec1c7a0007a2c4","email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","unique_email_id":"8e60512e2f","web_id":387757317,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:12+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:12+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3170',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0489cc3f-6847-4db8-bda3-bb316164c49a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757317>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {"status":"subscribed","merge_fields":{"email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","FNAME":"Jake"},"email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com"})
  .once().reply(200, {"id":"9373ecdf939f859098ec1c7a0007a2c4","email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","unique_email_id":"8e60512e2f","web_id":387757317,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:12+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:12+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3170',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8af16605-fe3a-41c6-8b48-590e67461fb7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757317>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '0b7b9d1a-0f32-42da-bfaf-bb5dfe693eeb',
  'Date',
  'Mon, 12 Apr 2021 21:14:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {})
  .once().reply(200, {"id":"9373ecdf939f859098ec1c7a0007a2c4","email_address":"sekkvrq0jy904wnn4aq50q2@grouparoo.com","unique_email_id":"8e60512e2f","web_id":387757317,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-12T21:14:12+00:00","member_rating":2,"last_changed":"2021-04-12T21:14:12+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3170',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ad918e7b-d4bf-4573-bc5b-dfcfc75532f2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387757317>; rel="dashboard"',
  'Date',
  'Mon, 12 Apr 2021 21:14:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/dad5965f5bfdb77b3efb89d01660ddc9', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f6527cb8-5308-4f8e-b65f-51ebb1ca260b"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f6527cb8-5308-4f8e-b65f-51ebb1ca260b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f2c93e2a-b11e-495f-bbc7-9dfd1923d205"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f2c93e2a-b11e-495f-bbc7-9dfd1923d205',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"AAAAA"},"email_address":"AAAAA"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Please provide a valid email address.","instance":"0c1cfd86-9b20-4daf-a3e5-99c2c0c83b21"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '0c1cfd86-9b20-4daf-a3e5-99c2c0c83b21',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b48def645758b95537d4424c84d1a9ff', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9e5b4b1a-9632-451e-a54e-67de88aa28bc"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9e5b4b1a-9632-451e-a54e-67de88aa28bc',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"foo@example.com"},"email_address":"foo@example.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"foo@example.com looks fake or invalid, please enter a real email address.","instance":"71bae4c9-00ed-4ed0-85c8-f4460d287c95"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '240',
  'X-Request-Id',
  '71bae4c9-00ed-4ed0-85c8-f4460d287c95',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '80eefa31-2acc-4851-9428-f117885bf434',
  'Date',
  'Mon, 12 Apr 2021 21:14:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/93abfc787f9a2a922db939d3b3b445e3', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '5c4fa4e8-065b-43d8-8466-5e06b8acdc6f',
  'Date',
  'Mon, 12 Apr 2021 21:14:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '095792bc-e4fa-4686-bf3b-c057f17ff55d',
  'Date',
  'Mon, 12 Apr 2021 21:14:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4c41694566a842262badf90acefcd465', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '46bd8ce7-7ba9-44a6-b468-b846152bd043',
  'Date',
  'Mon, 12 Apr 2021 21:14:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '629687e8-3c3a-42b0-8d9e-a9574becf4ac',
  'Date',
  'Mon, 12 Apr 2021 21:14:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4a70610cf44bebd7a3de2672adc80b06', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"0c220953-06c5-4323-acf0-f562626c0d69"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '0c220953-06c5-4323-acf0-f562626c0d69',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Mon, 12 Apr 2021 21:14:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ba8c3274-c2a2-4d5c-92c6-9d529654b1a4',
  'Date',
  'Mon, 12 Apr 2021 21:14:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/2589986b14d80f79d2aeacceec7baaba', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '3e7e220f-cc3d-496b-8b2c-d7d6d4a7ff9c',
  'Date',
  'Mon, 12 Apr 2021 21:14:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '219ad00f-182e-465d-98b7-b009fef8c3aa',
  'Date',
  'Mon, 12 Apr 2021 21:14:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/9373ecdf939f859098ec1c7a0007a2c4', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '78822c92-1b9f-416e-b617-ea8bdbfa1f6d',
  'Date',
  'Mon, 12 Apr 2021 21:14:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/dad5965f5bfdb77b3efb89d01660ddc9/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"cc663870-3c7f-4097-93e2-b7215f552938"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'cc663870-3c7f-4097-93e2-b7215f552938',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Mon, 12 Apr 2021 21:14:18 GMT',
  'Connection',
  'close'
]);