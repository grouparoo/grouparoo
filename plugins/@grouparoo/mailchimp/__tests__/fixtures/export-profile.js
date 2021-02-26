const nock = require('nock');

nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"ccb18099-4313-4ca9-bf49-239efb294030"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'ccb18099-4313-4ca9-bf49-239efb294030',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f7e4e778-95a3-4466-9670-7b6aea7f70be"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f7e4e778-95a3-4466-9670-7b6aea7f70be',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:42 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"9ac6aa9e-4e88-4d27-87f7-e630d1434a53"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '9ac6aa9e-4e88-4d27-87f7-e630d1434a53',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"1c56b77f-237b-43b3-a3f5-567e33e72b42"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '1c56b77f-237b-43b3-a3f5-567e33e72b42',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"92ddce35-efbe-4716-aae1-94f95c803ab7"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '92ddce35-efbe-4716-aae1-94f95c803ab7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:43 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"e79211d1-2304-4feb-a5a5-e940dfedfbf9"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'e79211d1-2304-4feb-a5a5-e940dfedfbf9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"4776addb-1b60-41c3-a42e-1ea99a6ff779"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '4776addb-1b60-41c3-a42e-1ea99a6ff779',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","FNAME":"Caio"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'bab0d112-e3d2-4a76-bed6-f899de199a5f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'fbddd15c-cd62-4594-92cc-f8dd44860658',
  'Date',
  'Fri, 26 Feb 2021 04:47:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5b44534c-e477-461f-a792-d3d01a60d8ef',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:44 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:44+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '404553b1-d043-48d0-a988-a8ff397feb80',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","FNAME":"Caio","LNAME":"Silveira","PHONE":"+5583999999999"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ddf7a42d-a3c8-4c04-abc7-8c4be12eba62',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '04d0e7f5-ee79-4763-9f66-ef33990a665d',
  'Date',
  'Fri, 26 Feb 2021 04:47:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '822dab97-47cf-445a-b239-07709aabe533',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Caio","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999999","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3200',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'df939ccf-f113-4b9f-b18e-7bfdd3f75617',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:45 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"+5583999999998","LTV":15.5},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '846f30af-e52a-41d8-96f1-84db8c259290',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1d36e60e-f82b-4e77-941f-bdb8f494e83d',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e3a8263c-db6d-47aa-920a-8ae7d7901d02',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '2e6244e0-5d2d-4283-9d54-6306a1b22dfc',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","FNAME":"Evan","LNAME":"Silveira","PHONE":"000","LTV":"AAAAA"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Your merge fields were invalid.","instance":"e2f456cd-7a84-4127-b56d-4c92be7f5424","errors":[{"field":"LTV","message":"Please enter a number"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '259',
  'X-Request-Id',
  'e2f456cd-7a84-4127-b56d-4c92be7f5424',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"Silveira","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":15.5},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:45+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3202',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '213a4c4c-2129-4ec6-8189-137e03d3ca70',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:46 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","FNAME":"","LNAME":"","PHONE":"","LTV":""},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c4135e84-66f1-4adc-a439-8fc761d5fa11',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '9006c99d-ef9e-4d49-95d0-a1ac97b19982',
  'Date',
  'Fri, 26 Feb 2021 04:47:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b8c733c8-2f09-46bb-a195-9adfbe1af051',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1f10d66c-64ce-4c97-9303-029450967cf6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:47+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '199e9b0b-e409-470b-a645-1fd071ef7e1d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:47 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[{"name":"list one","status":"active"},{"name":"list two","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'c820b1b7-e198-4962-8a9a-0298688cfd2d',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4bb416ff-f4a5-40a1-b070-8b5482f061f6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'e0f6e25f-e158-40b3-a0e0-e4d7167f2d21',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":2,"tags":[{"id":4419517,"name":"list two"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3239',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4c393d3c-a2f5-4b26-82b2-10bcbe200a1e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[{"name":"list two","status":"inactive"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '2471102b-fb5a-4326-a1f8-ca0d94b9940e',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5d52aa87-4d1b-46ed-922b-77e726ff232d',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:48 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '8c5a60d0-42c9-4768-a512-7ff728c43bc3',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:48+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3206',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '67409a26-204b-4f6a-bfb3-3126cb67ab38',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[{"name":"list two","status":"active"},{"name":"list three","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '7b01244a-8c1c-4f61-aedd-4a56a2c37523',
  'Date',
  'Fri, 26 Feb 2021 04:47:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '54e7b0d9-d162-489c-ad5b-2eedc6890c5f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '4fb4517e-500c-4c68-b7d2-8132f8e47446',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:49 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"status":"subscribed","merge_fields":{"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"},"email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com"})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '7ebdc48e-7786-41be-b982-cab88037a40b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '28a60bf5-a6a5-4556-bcc5-b7f044b92921',
  'Date',
  'Fri, 26 Feb 2021 04:47:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(200, {"id":"78000a69d20fd44074952885d07cf83d","email_address":"03e6b1c224f2930ecdfef897840328e1@grouparoo.com","unique_email_id":"39c01959bd","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:49+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '3a41c8b2-e7dd-46f7-b7e4-9bc6815d6897',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {"email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com"}})
  .once().reply(200, {"id":"b5dbdabb35a827841dea8bb4d781226a","email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com","unique_email_id":"652a119002","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0e4d5ef9-f543-483b-94ee-6b613069b7a1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {})
  .once().reply(200, {"id":"b5dbdabb35a827841dea8bb4d781226a","email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com","unique_email_id":"652a119002","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'aa33a270-e83e-4f09-b1c9-6358ff15b482',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:50 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {"status":"subscribed","merge_fields":{"email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com"},"email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com"})
  .once().reply(200, {"id":"b5dbdabb35a827841dea8bb4d781226a","email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com","unique_email_id":"652a119002","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'f765e302-dbd1-42ec-9b28-2a2e2658b257',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'bfeccbb9-1091-4bcc-915d-eb69116fa19a',
  'Date',
  'Fri, 26 Feb 2021 04:47:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {})
  .once().reply(200, {"id":"b5dbdabb35a827841dea8bb4d781226a","email_address":"8c306e2bddc2fe6dd6daa114d4b57bce@grouparoo.com","unique_email_id":"652a119002","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:50+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '0c2259fb-113f-47f0-bac9-cef1dabfee92',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"a554de55-0009-43dd-9732-2923a0fd8335"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'a554de55-0009-43dd-9732-2923a0fd8335',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {"email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com"}})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '54497be3-c9ac-4175-822c-2546c73d20ea',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:51 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:51+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3274',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '9f992c08-daa1-4c34-bc35-a8d5091220e0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {"status":"subscribed","merge_fields":{"email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","FNAME":"Evan","PHONE":"+5583999999998"},"email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com"})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3292',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'ba8ff3ba-9895-4551-99ae-a2d904deb72f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'b10439ba-8dee-4e96-9f47-208e2c6e8793',
  'Date',
  'Fri, 26 Feb 2021 04:47:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3292',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'c99f205e-abf5-4a35-b3a8-a3185036b171',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"4a4b514b-6549-4f66-b758-408ce5c8de5a"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '4a4b514b-6549-4f66-b758-408ce5c8de5a',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:52 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '1428fcbd-d164-421f-bda7-be1d57737a36',
  'Date',
  'Fri, 26 Feb 2021 04:47:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3290',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'cadeb1a1-06b8-438a-b2e8-a2f3ee0ae3d6',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(200, {"id":"ad23b9b84e6482c0d311fd28619da93f","email_address":"f9d8a53c5e2888a2626eaff4c1d53650@grouparoo.com","unique_email_id":"1821ac8661","web_id":383123417,"email_type":"html","status":"archived","merge_fields":{"FNAME":"Evan","LNAME":"","ADDRESS":"","PHONE":"+5583999999998","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:44+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:52+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":3,"tags":[{"id":4419517,"name":"list two"},{"id":4419521,"name":"list three"},{"id":4419513,"name":"list one"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3290',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '461ba322-fa2d-4220-bc58-f96dde873eb9',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123417>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"19905712-0e35-4867-818e-d0666b4a17c7"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '19905712-0e35-4867-818e-d0666b4a17c7',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Fri, 26 Feb 2021 04:47:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"c43f2263-46b0-4a6f-9cea-1c0bbaffd1ac"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'c43f2263-46b0-4a6f-9cea-1c0bbaffd1ac',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:53 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"964604c2-2050-4942-81df-95d9e9b84687"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '964604c2-2050-4942-81df-95d9e9b84687',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"cd696360f393020fa6ed7b01367ae585@grouparoo.com","FNAME":"Carlos"},"email_address":"cd696360f393020fa6ed7b01367ae585@grouparoo.com"})
  .once().reply(200, {"id":"8714afa1406026234f90e0f9901f0b6f","email_address":"cd696360f393020fa6ed7b01367ae585@grouparoo.com","unique_email_id":"f0f5e0925e","web_id":383123425,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:54+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:54+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3180',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '1b68a588-04b1-4145-98e2-881d962ccec0',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123425>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/tags', {"tags":[{"name":"list four","status":"active"}]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '39ba981a-60f8-49e0-9cbc-5d6b83686697',
  'Date',
  'Fri, 26 Feb 2021 04:47:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f', {})
  .once().reply(200, {"id":"8714afa1406026234f90e0f9901f0b6f","email_address":"cd696360f393020fa6ed7b01367ae585@grouparoo.com","unique_email_id":"f0f5e0925e","web_id":383123425,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Carlos","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:54+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:54+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":1,"tags":[{"id":4419525,"name":"list four"}],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3213',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '6f27a570-1d0f-400a-b066-0fc01644127f',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123425>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f40dca61-b4b1-4c65-9f31-13102fccf92e"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f40dca61-b4b1-4c65-9f31-13102fccf92e',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:54 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/cc7fa597c8380f3a32d237887ae164aa', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"8a09ab85-12bc-4c7c-8233-7406c9fb4131"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '8a09ab85-12bc-4c7c-8233-7406c9fb4131',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/cc7fa597c8380f3a32d237887ae164aa', {"email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","status":"subscribed","merge_fields":{"email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com"}})
  .once().reply(200, {"id":"6f52ebaa17f79da66dade27cc69c229f","email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","unique_email_id":"a6ff1d23f3","web_id":383123429,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:55+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a2b6955c-0e8d-43e1-b301-d3ba4c27f929',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123429>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {})
  .once().reply(200, {"id":"6f52ebaa17f79da66dade27cc69c229f","email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","unique_email_id":"a6ff1d23f3","web_id":383123429,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:55+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3174',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  '5cea99a1-50c3-403c-ad9a-b1ca0429618b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123429>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .put('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {"status":"subscribed","merge_fields":{"email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","FNAME":"Jake"},"email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com"})
  .once().reply(200, {"id":"6f52ebaa17f79da66dade27cc69c229f","email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","unique_email_id":"a6ff1d23f3","web_id":383123429,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:55+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'b9592e5b-c318-45e6-b82b-daecf5bc2572',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123429>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/tags', {"tags":[]})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '39b6f793-bea8-466a-a4d7-4f8a0e72a403',
  'Date',
  'Fri, 26 Feb 2021 04:47:55 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {})
  .once().reply(200, {"id":"6f52ebaa17f79da66dade27cc69c229f","email_address":"831dbbecf20925ff27e26b206569cf3e@grouparoo.com","unique_email_id":"a6ff1d23f3","web_id":383123429,"email_type":"html","status":"subscribed","merge_fields":{"FNAME":"Jake","LNAME":"","ADDRESS":"","PHONE":"","USERID":"","LTV":""},"stats":{"avg_open_rate":0,"avg_click_rate":0},"ip_signup":"","timestamp_signup":"","ip_opt":"45.228.144.6","timestamp_opt":"2021-02-26T04:47:55+00:00","member_rating":2,"last_changed":"2021-02-26T04:47:55+00:00","language":"","vip":false,"email_client":"","location":{"latitude":0,"longitude":0,"gmtoff":0,"dstoff":0,"country_code":"","timezone":""},"source":"API - Generic","tags_count":0,"tags":[],"list_id":"26d8e9db1e","_links":[{"rel":"self","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"},{"rel":"parent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json"},{"rel":"update","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PATCH","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"},{"rel":"upsert","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"PUT","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json","schema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"},{"rel":"delete","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f","method":"DELETE"},{"rel":"activity","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/activity","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"},{"rel":"goals","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/goals","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"},{"rel":"notes","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/notes","method":"GET","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"},{"rel":"events","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/events","method":"POST","targetSchema":"https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json"},{"rel":"delete_permanent","href":"https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f/actions/delete-permanent","method":"POST"}]}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '3178',
  'Vary',
  'Accept-Encoding',
  'X-Request-Id',
  'a3d32028-3b91-4b1d-98f8-84fa1886e9c1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383123429>; rel="dashboard"',
  'Date',
  'Fri, 26 Feb 2021 04:47:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .get('/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"32937670-d523-4d37-af5a-ed8ae22fdead"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  '32937670-d523-4d37-af5a-ed8ae22fdead',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .post('/3.0/lists/26d8e9db1e/members', {"status":"subscribed","merge_fields":{"email_address":"AAAAA"},"email_address":"AAAAA"})
  .once().reply(400, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Invalid Resource","status":400,"detail":"Please provide a valid email address.","instance":"66234b2f-2184-4ebc-b83d-c204c627df5b"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '204',
  'X-Request-Id',
  '66234b2f-2184-4ebc-b83d-c204c627df5b',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/78000a69d20fd44074952885d07cf83d', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"b2fb4c38-adf5-4ef4-ad64-c887b618af19"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'b2fb4c38-adf5-4ef4-ad64-c887b618af19',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:56 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/b5dbdabb35a827841dea8bb4d781226a', {})
  .once().reply(404, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Resource Not Found","status":404,"detail":"The requested resource could not be found.","instance":"f64b09e5-133d-4c55-958a-bfe36db5f2c1"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '211',
  'X-Request-Id',
  'f64b09e5-133d-4c55-958a-bfe36db5f2c1',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Date',
  'Fri, 26 Feb 2021 04:47:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/ad23b9b84e6482c0d311fd28619da93f', {})
  .once().reply(405, {"type":"https://mailchimp.com/developer/marketing/docs/errors/","title":"Method Not Allowed","status":405,"detail":"This list member cannot be removed.  Please contact support.","instance":"0448135b-02de-453c-8180-9b75035f1ace"}, [
  'Server',
  'openresty',
  'Content-Type',
  'application/problem+json; charset=utf-8',
  'Content-Length',
  '229',
  'X-Request-Id',
  '0448135b-02de-453c-8180-9b75035f1ace',
  'Link',
  '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
  'Allow',
  'GET, PUT',
  'Date',
  'Fri, 26 Feb 2021 04:47:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/8714afa1406026234f90e0f9901f0b6f', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  'bb3bdf50-add3-41de-8a91-a004c1486452',
  'Date',
  'Fri, 26 Feb 2021 04:47:57 GMT',
  'Connection',
  'close'
]);
nock('https://us3.api.mailchimp.com:443', {"encodedQueryParams":true})
  .delete('/3.0/lists/26d8e9db1e/members/6f52ebaa17f79da66dade27cc69c229f', {})
  .once().reply(204, "", [
  'Server',
  'openresty',
  'Content-Type',
  'application/json; charset=utf-8',
  'X-Request-Id',
  '42623a8c-0ff8-46df-a5dc-083aab8245b9',
  'Date',
  'Fri, 26 Feb 2021 04:47:58 GMT',
  'Connection',
  'close'
]);