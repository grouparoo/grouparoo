const nock = require('nock');

nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"05319f23-77db-45d1-a204-f47520b2c3ef"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '05319f23-77db-45d1-a204-f47520b2c3ef',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"28cfd3f0-cb7f-43cc-a897-0d704971cda6"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '28cfd3f0-cb7f-43cc-a897-0d704971cda6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"525cbbd4-763e-4535-8a84-b497c81da9e8"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '525cbbd4-763e-4535-8a84-b497c81da9e8',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"3433947b-d0aa-4ffa-9e69-c4fa7ec63b49"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '3433947b-d0aa-4ffa-9e69-c4fa7ec63b49',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"fc5b0537-88ea-4c61-86e3-4893048ef9d6"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'fc5b0537-88ea-4c61-86e3-4893048ef9d6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/abbca249a16f7fac1aa1c5482e33bdb3/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"a67ff29c-46a6-4968-be5d-a5d75d4616e9"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'a67ff29c-46a6-4968-be5d-a5d75d4616e9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"66588741-6233-449e-83e0-b6b7fb322a75"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '66588741-6233-449e-83e0-b6b7fb322a75',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"eae43c3d-0052-4439-b74b-b95ac919aac7"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'eae43c3d-0052-4439-b74b-b95ac919aac7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:39 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","FNAME":"Caio"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:40+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '048b0af2-dbfe-4243-ac21-0f379fbceed3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '6043e411-92fa-45b2-a6a2-c26e9a1b5f5c',
  'Date',
  'Sat, 27 Feb 2021 00:30:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:40+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9254eebd-f86b-4ca6-87c2-8b0daa950cbb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:40+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b9439a3d-3d05-449f-be7d-562366056ccb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","FNAME":"Caio","LNAME":"Silveira","PHONE":"+5583999999999"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:42+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '016a41d0-0fea-40b8-9f38-6466dde8b64a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '2792ed0c-53b0-4722-96e4-586f93ac3ce2',
  'Date',
  'Sat, 27 Feb 2021 00:30:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:42+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a9c57686-81b6-4d27-9f4f-820f3648051c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:42+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '561062be-3b13-4de3-8ed4-95689347d395',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"+5583999999998","LTV":15.5},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '300a5941-cb21-4fad-a8d0-d7e530f0d8d7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '4b1d011b-52fe-4ced-85cc-a88654654790',
  'Date',
  'Sat, 27 Feb 2021 00:30:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b8836703-c48f-4c4a-94d9-06ecebfd7440',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b806f788-2d3c-4593-9455-d7fa90910d2c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"000","LTV":"AAAAA"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Your merge fields were invalid.","instance":"617414cd-9852-42c6-97fc-9deea70f8218","errors":[{"field":"LTV","message":"Please enter a number"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '259',
  'X-Request-Id',
  '617414cd-9852-42c6-97fc-9deea70f8218',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'caf6bdfd-5117-40a1-8ed2-ab2ba438784a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","FNAME":"","LNAME":"","PHONE":"","LTV":""},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f26782c3-6008-47b3-8670-76d32abb72ea',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '04430b29-5f17-471d-a034-345fe28d08ce',
  'Date',
  'Sat, 27 Feb 2021 00:30:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1f302dad-d6c8-45cf-94ca-8ab9497f427b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '87a07d40-5653-4af6-9697-784eb99ce958',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e753e4d5-8e62-4020-9f3f-b1959dcd0129',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9aca3c06-44ca-4a08-92f5-2ad03948f49d',
  'Date',
  'Sat, 27 Feb 2021 00:30:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'fc735401-25a7-478c-84c0-f66fcc2e7bec',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b002418a-76a2-46ff-802f-1fc1e4b3bf13',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'bbcf30c7-0c21-49a6-8842-fcc40ec651b4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[{"name":"list two","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7eea235f-f149-4404-8a7d-4dd6ce44fee3',
  'Date',
  'Sat, 27 Feb 2021 00:30:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5f42de01-00b3-4bad-90ba-bf0400c2e9ed',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9232f855-2b08-406d-982f-1b5d35de16e1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '594d5ca6-0f50-46ce-9852-14cfd3d01319',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'eb091681-0aff-417b-ab43-b8692dbdeeac',
  'Date',
  'Sat, 27 Feb 2021 00:30:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '47b5e844-fa4e-45a2-b533-1afda5109f64',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9493953f-8cf7-44c6-999c-7e318ff9ab30',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"status":"subscribed","merge_fields":{"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"},"email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com"})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd88452e8-3076-4ced-90d1-21fff0f4c180',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'e8df64bc-71f3-44a1-8284-9440b8628c97',
  'Date',
  'Sat, 27 Feb 2021 00:30:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(200, {"id":"b10927d43f13b99d3838ddf28b8208ab","email_address":"34099c1039476bde0c45df5a886a9f3e@grouparoo.com","unique_email_id":"fdc0bc2913","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '54c2e6f4-a1e5-4bf3-99e6-aad44379d628',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {"email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com"}})
  .once().reply(200, {"id":"7d3105450aa7076969ad276be8a0f8d5","email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com","unique_email_id":"888ab584f1","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1c79a8a2-bf83-4f7b-98d7-794a6e6a912d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5', {})
  .once().reply(200, {"id":"7d3105450aa7076969ad276be8a0f8d5","email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com","unique_email_id":"888ab584f1","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ad2f798f-829e-45bf-972d-9ba4c2b86350',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5', {"status":"subscribed","merge_fields":{"email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com"},"email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com"})
  .once().reply(200, {"id":"7d3105450aa7076969ad276be8a0f8d5","email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com","unique_email_id":"888ab584f1","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'bf24ec0e-08d5-428d-a010-029293d26f38',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '26eb1eb6-8757-4317-8e21-3df7b3472cd9',
  'Date',
  'Sat, 27 Feb 2021 00:30:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5', {})
  .once().reply(200, {"id":"7d3105450aa7076969ad276be8a0f8d5","email_address":"59a2fc497c7821aee047bf6fbf96410c@grouparoo.com","unique_email_id":"888ab584f1","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '3ad7b563-73f5-43f6-9353-2eac0e733147',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b3193a40-6137-40e0-a6af-4bb1a5374d23"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b3193a40-6137-40e0-a6af-4bb1a5374d23',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:30:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5', {"email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com"}})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5ad445cc-e18a-42ee-8f1a-51bd2458f4c5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '237f9f5a-4387-4b24-a48d-7f0915de54f4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:58 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {"status":"subscribed","merge_fields":{"email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","FNAME":"Evan","PHONE":"+5583999999998"},"email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com"})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3292',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '559d1a84-3048-4371-b33d-e5e376d4f15c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'ee617bc1-9f90-4957-815b-7b6d3b3a834d',
  'Date',
  'Sat, 27 Feb 2021 00:30:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:30:58+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3292',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '12b37166-fb99-42bc-84d1-6c67103594d7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:30:59 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"26e9ce62-4047-48f3-a909-c1f6df71e30f"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '26e9ce62-4047-48f3-a909-c1f6df71e30f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '54435d9a-5e8a-4480-a81f-a0ebefa679d5',
  'Date',
  'Sat, 27 Feb 2021 00:31:00 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:00+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3290',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0c266863-37b4-40d2-9032-66a9433abf26',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(200, {"id":"8c6c5c6a6a12d91091e29e18b75d8ad9","email_address":"948db0f9cb2378d0857a4d70c79cdfba@grouparoo.com","unique_email_id":"24183a0577","web_id":383140681,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:30:39+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:00+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3290',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ae8f5f22-bd42-46f0-9ac2-1ce585a23f47',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140681>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:01 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"7ef66620-629e-4398-9843-6b59b93e966c"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '7ef66620-629e-4398-9843-6b59b93e966c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Sat, 27 Feb 2021 00:31:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"4c1eebed-0b85-49fd-9590-4bfd90778250"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '4c1eebed-0b85-49fd-9590-4bfd90778250',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:02 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"6d357163-481a-466b-b134-d4d38d66865c"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '6d357163-481a-466b-b134-d4d38d66865c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"ef9cc89c9041e87edba9de0a2d1f510b@grouparoo.com","FNAME":"Carlos"},"email_address":"ef9cc89c9041e87edba9de0a2d1f510b@grouparoo.com"})
  .once().reply(200, {"id":"ebaf3ea1e5a7cb1b2c4841e487b41e7e","email_address":"ef9cc89c9041e87edba9de0a2d1f510b@grouparoo.com","unique_email_id":"3bad2d66fc","web_id":383140685,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:03+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:03+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2270283f-b424-4181-9b8a-3ef3940cf8e6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140685>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:03 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/tags', {"tags":[{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '27ae5c3a-6503-428f-b190-b8a30f725c16',
  'Date',
  'Sat, 27 Feb 2021 00:31:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e', {})
  .once().reply(200, {"id":"ebaf3ea1e5a7cb1b2c4841e487b41e7e","email_address":"ef9cc89c9041e87edba9de0a2d1f510b@grouparoo.com","unique_email_id":"3bad2d66fc","web_id":383140685,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:03+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:04+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3213',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c724b06a-a477-4fca-8e21-79d3cb13a874',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140685>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:04 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"d3301e9f-32c1-4bea-bab7-7649198269fa"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'd3301e9f-32c1-4bea-bab7-7649198269fa',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/abbca249a16f7fac1aa1c5482e33bdb3', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"5e690423-84a7-4c2f-80c5-52eb9a77de79"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '5e690423-84a7-4c2f-80c5-52eb9a77de79',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:05 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/abbca249a16f7fac1aa1c5482e33bdb3', {"email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com"}})
  .once().reply(200, {"id":"9a3a51298a577364113d759c7115799d","email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","unique_email_id":"d5d4704a3c","web_id":383140689,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:06+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'd134a275-3705-49d0-a718-a4f4cbf8c1fb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140689>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d', {})
  .once().reply(200, {"id":"9a3a51298a577364113d759c7115799d","email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","unique_email_id":"d5d4704a3c","web_id":383140689,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:06+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '48f037d7-b742-4ea4-88a9-47e1bc3103d8',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140689>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:06 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d', {"status":"subscribed","merge_fields":{"email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","FNAME":"Jake"},"email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com"})
  .once().reply(200, {"id":"9a3a51298a577364113d759c7115799d","email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","unique_email_id":"d5d4704a3c","web_id":383140689,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:06+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1c1739bd-6bf6-4ef3-b45b-e206a101bd8a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140689>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'a2bf3a56-c0bb-4e07-9d7d-a2588cb13cb1',
  'Date',
  'Sat, 27 Feb 2021 00:31:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d', {})
  .once().reply(200, {"id":"9a3a51298a577364113d759c7115799d","email_address":"7225b7b1bf24d2345b41404e54006439@grouparoo.com","unique_email_id":"d5d4704a3c","web_id":383140689,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-27T00:31:06+00:00","member_rating":2,"last_changed":"2021-02-27T00:31:06+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'da2115cc-3708-4cb8-9a5b-d740e4d56095',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140689>; rel="dashboard"',
  'Date',
  'Sat, 27 Feb 2021 00:31:07 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"fd605622-400c-4a3a-b6fa-3fa725b8841d"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'fd605622-400c-4a3a-b6fa-3fa725b8841d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"AAAAA"},"email_address":"AAAAA"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Please provide a valid email address.","instance":"936848bf-5cd7-4575-a138-161627f26945"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '936848bf-5cd7-4575-a138-161627f26945',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:08 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b10927d43f13b99d3838ddf28b8208ab/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c5d9c559-bf99-4939-a0b8-52eaf08f1e0a"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c5d9c559-bf99-4939-a0b8-52eaf08f1e0a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7d3105450aa7076969ad276be8a0f8d5/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"a01f8ba7-2eb1-47d3-9741-ef2128ea6251"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'a01f8ba7-2eb1-47d3-9741-ef2128ea6251',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:09 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '618c1b78-381f-4bf3-b6aa-c693f9736cb2',
  'Date',
  'Sat, 27 Feb 2021 00:31:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8c6c5c6a6a12d91091e29e18b75d8ad9', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"28875e03-8456-47a4-a79f-b0fec5fa2824"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '28875e03-8456-47a4-a79f-b0fec5fa2824',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Sat, 27 Feb 2021 00:31:10 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd97c19c6-2d27-4aa4-8c6c-8e30c1f870d4',
  'Date',
  'Sat, 27 Feb 2021 00:31:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/ebaf3ea1e5a7cb1b2c4841e487b41e7e', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'a3d6e0d1-c3cc-4382-85fa-b8b8f762748d',
  'Date',
  'Sat, 27 Feb 2021 00:31:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '0e9fbbf2-876e-4650-b0c1-0e95350800f0',
  'Date',
  'Sat, 27 Feb 2021 00:31:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/9a3a51298a577364113d759c7115799d', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'b8bbaffa-bebc-48cd-bb04-d1d69c65a21e',
  'Date',
  'Sat, 27 Feb 2021 00:31:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/abbca249a16f7fac1aa1c5482e33bdb3/tags', {"tags":[]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"09bd5d70-7ee5-40d2-97b2-ebd84a62cc0b"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '09bd5d70-7ee5-40d2-97b2-ebd84a62cc0b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Sat, 27 Feb 2021 00:31:14 GMT',
  'Connection',
  'close'
]);