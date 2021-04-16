const nock = require('nock');

nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"793ae6f6-daa8-475d-99d8-ccb237575e0a"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '793ae6f6-daa8-475d-99d8-ccb237575e0a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:11 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"d43cb885-582a-4d5d-9985-8a6876ee2105"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'd43cb885-582a-4d5d-9985-8a6876ee2105',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9af9bfe9-14b1-44cc-aa65-8fcb97877872"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9af9bfe9-14b1-44cc-aa65-8fcb97877872',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"39e236aa-4432-4584-a842-7a5515f0145e"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '39e236aa-4432-4584-a842-7a5515f0145e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:12 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9b0c956b-70e2-44e2-b388-0d65bf397127"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9b0c956b-70e2-44e2-b388-0d65bf397127',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c0005d1e-1671-4dac-91d5-7bb64f08c108"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c0005d1e-1671-4dac-91d5-7bb64f08c108',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b0daa1e8-bdcd-4af1-8d1d-e0c55e67dfff"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b0daa1e8-bdcd-4af1-8d1d-e0c55e67dfff',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:13 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"35913222-35a6-4742-b7fa-e3b2a6a95f24"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '35913222-35a6-4742-b7fa-e3b2a6a95f24',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"0dbe8bf2-450d-44d1-873e-eda5957af23d"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '0dbe8bf2-450d-44d1-873e-eda5957af23d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f21a0f39-2ca9-4fed-a671-326d92978775"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f21a0f39-2ca9-4fed-a671-326d92978775',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","FNAME":"Caio"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:14+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0ff13fe0-96a7-426d-96d9-b45a5fcb1600',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:14 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '5b67d551-10a5-4b6c-951a-30a2d318bc22',
  'Date',
  'Fri, 16 Apr 2021 02:43:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:14+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ee59941a-a6bd-4818-958a-fd35ca4e41bd',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:14+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ae8f22ea-b67d-4239-9b1d-9df14ac1501a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","FNAME":"Caio","LNAME":"Silveira","PHONE":"+5583999999999"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:15+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6fdfb5f4-3906-4537-ab98-b94b21c3d51e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:15 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7bd52e1f-41e8-475d-b6f8-5c310031c457',
  'Date',
  'Fri, 16 Apr 2021 02:43:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:15+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f1d545f6-5846-4655-b7a2-18e63f03a259',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:15+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3191',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1ca63055-658d-40ff-882c-5202ac75798c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"+5583999999998","LTV":15.5},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:16+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5fb291d6-ba14-461d-b129-04c4549c34b0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd06a21ae-bffe-4536-b891-cd6e8a66e226',
  'Date',
  'Fri, 16 Apr 2021 02:43:16 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:16+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '387ff680-e6cf-4cb7-8d37-9d4fa86e4261',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:16+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e7d51800-ecc3-417e-be87-b0d72c962cb6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"000","LTV":"AAAAA"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Your merge fields were invalid.","instance":"cbb66395-969b-490f-8ddc-d8fc1d98d1fb","errors":[{"field":"LTV","message":"Please enter a number"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '259',
  'X-Request-Id',
  'cbb66395-969b-490f-8ddc-d8fc1d98d1fb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:17 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:16+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3193',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f545b00a-ea4c-4c81-a8af-fa0dcfa61f13',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","FNAME":"","LNAME":"","PHONE":"","LTV":""},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:18+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '136f68a5-f1c1-472c-a240-8670e5abb108',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9fe57340-9ba9-4212-9111-1623aee160b5',
  'Date',
  'Fri, 16 Apr 2021 02:43:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:18+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2ed050ab-49ff-489c-b25c-0ca6e301afff',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:18+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4f854d67-6e1f-46f7-b0a3-d01fbb3a2647',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:18 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:18+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '340da9ee-d3d7-49b4-b68b-aa049c716dc9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1ffa17d1-04ac-4e79-9791-e19c3b00dd42',
  'Date',
  'Fri, 16 Apr 2021 02:43:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:19+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '10e68896-09c9-4c15-bfb1-ba432abcfb8a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:19+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8c6cf09c-d918-462d-a624-f909848c9181',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:19 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:19+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419513,"name":"list one"},{"id":4419517,"name":"list two"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3230',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '36a05fdd-a458-4558-9cdb-5abbe867d708',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[{"name":"list two","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '62e4c7c9-32f7-4def-8bba-74f676b8d308',
  'Date',
  'Fri, 16 Apr 2021 02:43:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:20+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6fd18038-0cc9-4d8b-b1b5-4a3c6f1e138c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:20+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '7d2653ff-e78a-411a-be62-9b5d419399b6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:20+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1bbf46a0-92ab-4a3f-acab-9ae5f08e0272',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:20 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '38760df1-ca71-4b44-85cb-c8a339c9c3fb',
  'Date',
  'Fri, 16 Apr 2021 02:43:21 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:21+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '52b3ae6a-64da-4cab-9ce6-2e3fa037e7d1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:21 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:21+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '228fb131-c829-438d-acb4-37b943562367',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:21 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"},"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:21+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '86e2f84d-30a5-4ac1-bd5e-3bca5e54795f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:22 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9fac55e3-eba9-4d5d-b0b5-5656f224d48b',
  'Date',
  'Fri, 16 Apr 2021 02:43:22 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:21+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b863d4b7-dbdf-469b-bc9a-0b606de70d4a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:22 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:21+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3265',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9095110c-58d9-4d5c-b04a-e92ec525f4c2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:22 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"a27e0f3e-177c-4ff7-8aee-e702f0cfd9c5"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'a27e0f3e-177c-4ff7-8aee-e702f0cfd9c5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:22 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {"email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com"}})
  .once().reply(200, {"id":"19a77e3c109a659eab8fad2efc0a4f68","email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","unique_email_id":"ab63b60f17","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:23+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3264',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '47fbd58f-251f-46df-8562-888a5efd35c6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:23 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {})
  .once().reply(200, {"id":"19a77e3c109a659eab8fad2efc0a4f68","email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","unique_email_id":"ab63b60f17","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:23+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3264',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'abef67e8-6e25-4e28-9136-734152181677',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:23 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {"status":"subscribed","merge_fields":{"email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com"},"email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com"})
  .once().reply(200, {"id":"19a77e3c109a659eab8fad2efc0a4f68","email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","unique_email_id":"ab63b60f17","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:23+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3264',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '93f51458-613e-4882-9278-8a2b5b344b8b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:23 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags', {"tags":[{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '445673a7-5dca-46f0-9387-34a2a3d64320',
  'Date',
  'Fri, 16 Apr 2021 02:43:23 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {})
  .once().reply(200, {"id":"19a77e3c109a659eab8fad2efc0a4f68","email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","unique_email_id":"ab63b60f17","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:23+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3196',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '23edeca0-9227-48f7-8ce3-05fba188506b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:24 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {})
  .once().reply(200, {"id":"19a77e3c109a659eab8fad2efc0a4f68","email_address":"z7zmvk2c9lekgf6rfnd3h@grouparoo.com","unique_email_id":"ab63b60f17","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:23+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3196',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '25a40576-51f3-426e-8779-76f8e2635396',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:24 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"1bff601d-25d5-4419-99c5-2a20733ceee1"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '1bff601d-25d5-4419-99c5-2a20733ceee1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:24 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com"}})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:24+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '38126605-f170-41ad-b578-eda493106629',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:24 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(200, {"id":"6225b145d0e5011d9a87a59b1f2ec6e1","email_address":"3jc60kpoe6jz5pf6otne6d@grouparoo.com","unique_email_id":"219120b7f2","web_id":387859817,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:14+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:24+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3197',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '31233a40-d959-4911-9284-f28ebaebe7c9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:25 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"cf16a2f3-36a8-42fa-87d0-9a96968c6387"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'cf16a2f3-36a8-42fa-87d0-9a96968c6387',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:25 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"90668eea-55c5-4260-8db0-6e5d58a9e080"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '90668eea-55c5-4260-8db0-6e5d58a9e080',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:25 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68', {"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com"}})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:25+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3164',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '445c7db0-59d4-40a3-bfe8-63504a80e38e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:25 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:25+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3164',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '18d00989-8251-4f1e-beff-6cf5f3d3b46b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:26 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {"status":"subscribed","merge_fields":{"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","FNAME":"Evan","PHONE":"+5583999999998"},"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com"})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:26+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3182',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '14d7e9eb-e1a2-480a-9393-b861985e4e1a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:26 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"},{"name":"list three","status":"active"},{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '23278d8e-321b-4c89-bfb6-b1b4263614a1',
  'Date',
  'Fri, 16 Apr 2021 02:43:26 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:26+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":4,"tags":[{"id":4419513,"name":"list one"},{"id":4419521,"name":"list three"},{"id":4419517,"name":"list two"},{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3316',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ac58b079-be47-4382-9e21-f806c84695b1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:26 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '91a5302b-14ae-4eb4-94a9-6eb5eecb7679',
  'Date',
  'Fri, 16 Apr 2021 02:43:27 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:27+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3215',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6b68989c-e19c-4ca4-90de-1565ce6180d2',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:27 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '3431b4e4-3ffd-4a69-b175-c62196fecc48',
  'Date',
  'Fri, 16 Apr 2021 02:43:27 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '75f9c181-66d5-41e3-9cc4-bb874f7cfa15',
  'Date',
  'Fri, 16 Apr 2021 02:43:27 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:27+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2edecaab-4c04-494d-8964-5ec081254f1b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:28 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:25+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:27+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '82dcb041-dc8c-4d73-b30d-a02e40d41997',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:28 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","FNAME":"Caio"},"email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com"})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:28+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:28+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3182',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '33d70801-5877-42d2-85b2-e6d56fe356ca',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:28 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '17639c29-61fc-4f8d-b099-3a3f8d28bb9e',
  'Date',
  'Fri, 16 Apr 2021 02:43:28 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:28+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:28+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3216',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'de89a68d-5138-4986-b029-59120e43e872',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:29 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '60777adf-bbbb-408f-a62e-a2f9da0a68da',
  'Date',
  'Fri, 16 Apr 2021 02:43:29 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '6cf22afb-edd2-420e-9e63-93e5acbf29b3',
  'Date',
  'Fri, 16 Apr 2021 02:43:29 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:28+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:29+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '617d72c2-d1a4-4a16-8ce8-91598064d8fb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:29 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:28+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:29+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ad487048-dff9-4078-bd24-bc172bbd7e74',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:30 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1ba0f48d-8d00-4a22-8fa6-daa61382ea7d',
  'Date',
  'Fri, 16 Apr 2021 02:43:30 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"41b2f95c-3524-4252-ac10-d71c7d7ef979"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '41b2f95c-3524-4252-ac10-d71c7d7ef979',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Fri, 16 Apr 2021 02:43:30 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(200, {"id":"0caf983dbca23fe383749a7601887b60","email_address":"ht212f3lhrsn0uf7f3095@grouparoo.com","unique_email_id":"5c1010653a","web_id":387859821,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:28+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:29+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419521,"name":"list three"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3214',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '651bbac2-70e8-4be1-a453-d7ccb8f1c96b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:30 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"368762f0-b59e-44b1-984d-696827cadc4d"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '368762f0-b59e-44b1-984d-696827cadc4d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:31 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"e9f704d0-adf2-4ca5-927c-8bfa006ef3b3"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'e9f704d0-adf2-4ca5-927c-8bfa006ef3b3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:31 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"1mkikwtoeyfqyyn3nwq2fg@grouparoo.com","FNAME":"Carlos"},"email_address":"1mkikwtoeyfqyyn3nwq2fg@grouparoo.com"})
  .once().reply(200, {"id":"4e7253e1ee5fa421b8de76f14c6e9111","email_address":"1mkikwtoeyfqyyn3nwq2fg@grouparoo.com","unique_email_id":"e625a61d3c","web_id":387859825,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:31+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:31+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3171',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9e0a4764-3f9c-4193-94d4-e759ca036a24',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:31 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags', {"tags":[{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'd6a8d8f3-0199-4e68-bcc7-d679019e4821',
  'Date',
  'Fri, 16 Apr 2021 02:43:31 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111', {})
  .once().reply(200, {"id":"4e7253e1ee5fa421b8de76f14c6e9111","email_address":"1mkikwtoeyfqyyn3nwq2fg@grouparoo.com","unique_email_id":"e625a61d3c","web_id":387859825,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:31+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:31+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3204',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '7ebd9115-d18e-421e-a390-207265da324b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:32 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"103e46ba-bef6-4fe4-ae35-9ce63261ac4e"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '103e46ba-bef6-4fe4-ae35-9ce63261ac4e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:32 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"2cc17e97-39a4-483c-b155-10cc0aa26e20"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '2cc17e97-39a4-483c-b155-10cc0aa26e20',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:32 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"61011f56-a740-461e-b341-63bd1c82ad26"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '61011f56-a740-461e-b341-63bd1c82ad26',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:32 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"3053fe97-7d75-484b-87e2-ae75fd08ad58"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '3053fe97-7d75-484b-87e2-ae75fd08ad58',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:32 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"7f3bc580-497e-4e54-8952-90bd7f388156"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '7f3bc580-497e-4e54-8952-90bd7f388156',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:33 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"02f95980-5934-405d-af16-e16a8c053f9a"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '02f95980-5934-405d-af16-e16a8c053f9a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:33 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"1665208b-c98f-4db4-b002-ddf1b09a9fc9"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '1665208b-c98f-4db4-b002-ddf1b09a9fc9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:33 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f891c8e2-b719-408d-a222-918e01a3bc43"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f891c8e2-b719-408d-a222-918e01a3bc43',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:33 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"da15073b-db80-4289-ae58-661d9ca43269"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'da15073b-db80-4289-ae58-661d9ca43269',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:34 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f67cd239-0599-4cf0-8117-30dbc3fbaa56"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f67cd239-0599-4cf0-8117-30dbc3fbaa56',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:34 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com"}})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:34+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'da40bc3c-a300-4b57-96be-f25bbff4d007',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:34 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:34+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3165',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ed5930a5-def5-4460-983c-f48cb9a9c351',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:34 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {"status":"subscribed","merge_fields":{"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","FNAME":"Jake"},"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com"})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:35+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2fea468c-12d0-4cd0-9107-00f1dac49e2b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'e4f96f20-3fb8-448c-bf80-6068db6ccf29',
  'Date',
  'Fri, 16 Apr 2021 02:43:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:35+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9269fb67-dc4f-4dc9-af26-60eba304e586',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c8d16d90-4163-4029-9730-9998b2e60a0c"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c8d16d90-4163-4029-9730-9998b2e60a0c',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:35+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9e290e55-a553-4d18-aad6-aed0e1bfcace',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:35 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"2d3ad0f9-d9d9-4e74-b3b1-34ca1b5445bb"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '2d3ad0f9-d9d9-4e74-b3b1-34ca1b5445bb',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"7e398cda-8c07-4e83-ab7c-8f20ea8e43b0"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '7e398cda-8c07-4e83-ab7c-8f20ea8e43b0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:35+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9c8e5e09-5a17-4de4-be7f-96c10741815f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com"}})
  .once().reply(400, {"title":"Member Exists","status":400,"detail":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com is already a list member. Use PUT to insert or update list members.","instance":"4a4c6aac-dcde-4e71-8e86-64cd81c02758"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '4a4c6aac-dcde-4e71-8e86-64cd81c02758',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:35+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '74d64217-1dc5-4505-ba27-26f37597ecbc',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:36 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {"status":"subscribed","merge_fields":{"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","FNAME":"Carl"},"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com"})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carl","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:37+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'fde08a5c-e0df-4014-908c-a52d2f4f58ed',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'c0cc2427-9a24-4c24-8e4e-c63af847a0f6',
  'Date',
  'Fri, 16 Apr 2021 02:43:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carl","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:37+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0a0246e3-0a14-484d-a4eb-89d2b4291d2e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"dd7491a7-e666-4281-9503-adae05c126f1"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'dd7491a7-e666-4281-9503-adae05c126f1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carl","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:37+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '26a7f5c4-69a5-4376-b642-e9382e4d61b5',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:37 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"36a589db-e28e-4b2b-abbc-0e863e1e0063"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '36a589db-e28e-4b2b-abbc-0e863e1e0063',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"33d3a64c-d2dd-413d-b792-9e35d57f674d"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '33d3a64c-d2dd-413d-b792-9e35d57f674d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carl","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:37+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3169',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ed64a8d5-c375-4e95-bba9-e97933e54be6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com"}})
  .once().reply(400, {"title":"Member Exists","status":400,"detail":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com is already a list member. Use PUT to insert or update list members.","instance":"02f013e9-8fd1-4bb9-be23-0100093ffa1a"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '02f013e9-8fd1-4bb9-be23-0100093ffa1a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'e2e5a2ff-07b0-464a-9538-068e56c20286',
  'Date',
  'Fri, 16 Apr 2021 02:43:38 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '78bebf61-beff-419c-8882-2fda978c8037',
  'Date',
  'Fri, 16 Apr 2021 02:43:39 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(200, {"id":"7535ca27b0737c189f9b048eb36cf33f","email_address":"a8y8ax6kp3d9rm5azn5ak4@grouparoo.com","unique_email_id":"9fa2ab11f4","web_id":387859829,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Carl","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"191.253.18.44","timestamp_opt":"2021-04-16T02:43:34+00:00","member_rating":2,"last_changed":"2021-04-16T02:43:39+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3167',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'dc43aa73-cbcc-44fa-bb0c-3b0042790181',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
  'Date',
  'Fri, 16 Apr 2021 02:43:39 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9f06aefa-50bb-4969-9cac-857e5a210384"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9f06aefa-50bb-4969-9cac-857e5a210384',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:39 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f4eea787-017c-4c58-a51b-a493b3878fb4"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f4eea787-017c-4c58-a51b-a493b3878fb4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"AAAAA"},"email_address":"AAAAA"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Please provide a valid email address.","instance":"8d739bb1-a331-4ddd-a08b-0980a40617c3"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '8d739bb1-a331-4ddd-a08b-0980a40617c3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b48def645758b95537d4424c84d1a9ff', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"e089f8e9-cbbc-43cc-b549-d3370096ca62"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'e089f8e9-cbbc-43cc-b549-d3370096ca62',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"foo@example.com"},"email_address":"foo@example.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"foo@example.com looks fake or invalid, please enter a real email address.","instance":"4294b4d2-a3c2-43ac-b1e0-b38dbb2686d4"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '240',
  'X-Request-Id',
  '4294b4d2-a3c2-43ac-b1e0-b38dbb2686d4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1f643ae7-bd32-4714-ac83-943d52f83e7c',
  'Date',
  'Fri, 16 Apr 2021 02:43:40 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'a2b23334-b04f-4eae-b54c-8da868ddcac5',
  'Date',
  'Fri, 16 Apr 2021 02:43:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f4e6049d-283b-4d48-8e81-2d900af16ac4"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f4e6049d-283b-4d48-8e81-2d900af16ac4',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '97ff41f1-b72b-424c-895d-618c4ca89bdf',
  'Date',
  'Fri, 16 Apr 2021 02:43:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"3dd731fc-0a4d-4eac-b551-9eee2f97d254"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '3dd731fc-0a4d-4eac-b551-9eee2f97d254',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Fri, 16 Apr 2021 02:43:41 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'f695db37-3ca4-4e3e-95f3-6ee3eb4a1725',
  'Date',
  'Fri, 16 Apr 2021 02:43:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '73b59e6f-38fb-4b50-8a83-3b3113a97647',
  'Date',
  'Fri, 16 Apr 2021 02:43:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '93dff5b3-be4d-41f8-9519-ff092c252e9b',
  'Date',
  'Fri, 16 Apr 2021 02:43:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"c281cbb7-a803-4b03-805b-dccf5a94eab1"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  'c281cbb7-a803-4b03-805b-dccf5a94eab1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Fri, 16 Apr 2021 02:43:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01/tags', {"tags":[{"name":"list one","status":"inactive"},{"name":"list two","status":"inactive"},{"name":"list three","status":"inactive"},{"name":"list four","status":"inactive"}]})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"7940b36a-ee62-4b0e-80cf-d989ad65368d"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '7940b36a-ee62-4b0e-80cf-d989ad65368d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 16 Apr 2021 02:43:43 GMT',
  'Connection',
  'close'
]);