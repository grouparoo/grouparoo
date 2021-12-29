const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd945d4fc2301486ff0ae9351f5da77cec4a8144256322a017a831dd565c93ae5dba362084ff6e3b3048d805372484cb9ebe7dcf7b9a27670d2489848c73e0bdaf018d81670b083d85f9d8ed0f1c05efbba00ae69430ab598300a7c48826222582137bf585b512814e432281d782b6126aa504b7728643c28cfe3923bcf23af6cd032d6d21512acbbd4663b158d4bfa5d0199642d42391828d758824c18ac4dd1f6b52c4d2b91c719fac6641d246ddd5a067ac488aa9350b25c5bcce4c222ce3bb43bb2ae0dbc85d2baaf85bd14197292d040822a7e6a01aea4c21f4dcb6777b538710ce8a21e742a69ae1fde82d58d419ced550c4d4fcd0b9d3fe6f754a642918d3998d946724a298bd61a6edab0007bbf985e60a78d01c4efc8a4d754f494bb9bd248897fe239aacc2034a4c731a2553b234eee0839bbb1d370391f04a5f1c83d36c5f1338a80c9cbfd99bed8b24c73d1339e8989c11d7fe83f3d2ebab68c84bf7cb00972c9766e79a18295d2e76ee66e722f938f766f9dcfc0248ff5b588d060000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1677",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwG7nzGS7Bq9MqTB; path=/; expires=Thu, 29 Dec 2022 01:49:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "397",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "rec22IbsR3DJ1t0AB",
      "rec7t3ChNdxLH2Szb",
      "recPnuLG1QCDtcMnB",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f246469e49c541c62e5e8625068e4e4ab53a38559a97183b67f8a554f87818055725e153199057eae36e18e8ec5292ec9b073433b61600dab1a9ed8b000000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtdNiIHo2OVgjC0; path=/; expires=Thu, 29 Dec 2022 01:49:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "106",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFOmqNaDMrX5VRp; path=/; expires=Thu, 29 Dec 2022 01:49:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwKJmX5uSznhV2YE; path=/; expires=Thu, 29 Dec 2022 01:49:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiLAtF8ZAXOBthU; path=/; expires=Thu, 29 Dec 2022 01:49:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:49 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyjkZB1qxFqTR8o; path=/; expires=Thu, 29 Dec 2022 01:49:49 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3cVcopX792sdcB; path=/; expires=Thu, 29 Dec 2022 01:49:50 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane", f_singleLineText: "here" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f73823010c5bf8a93b322503b2aa7166f0ea57f86f660a7e32cb04a3a216196a4b4327ef726e8a1debcf498975fdebe7de91961a1a86c59f4de335eb2c8098be77bce1787d9e717ac6e0236663b8ec2313d4ba1460bad41a2d3b760b44a4d9d23b1681e38a5e5722f30e11233fcd696ad904e6c6eb456d2b908c851d8abc706e5e8f525b1d7869c5069ddb4d174da759db727651a20a5bc42d5ece81c0a42d058c63fce64486b5a7a92091e3669b508e3c37a65adb006eecc72e2203d814a029577977663264f9bc40e1a2527e8624ac60720f4c3601284937099f941345b46b781e7fbfe665869a7a83602ce8dcc87aeb6025afda04a6e5bfbefa87f475d93979410a67191da060b0ee20d8471af5248cfcb2b23edaff9f670650fc78fe32fb4c1038047020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvT3mVKh9gYLgOp; path=/; expires=Thu, 29 Dec 2022 01:49:50 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f73823010c5bf8a93b322503b2aa7166f0ea57f86f660a7e32cb04a3a216196a4b4327ef726e8a1debcf498975fdebe7de91961a1a86c59f4de335eb2c8098be77bce1787d9e717ac6e0236663b8ec2313d4ba1460bad41a2d3b760b44a4d9d23b1681e38a5e5722f30e11233fcd696ad904e6c6eb456d2b908c851d8abc706e5e8f525b1d7869c5069ddb4d174da759db727651a20a5bc42d5ece81c0a42d058c63fce64486b5a7a92091e3669b508e3c37a65adb006eecc72e2203d814a029577977663264f9bc40e1a2527e8624ac60720f4c3601284937099f941345b46b781e7fbfe665869a7a83602ce8dcc87aeb6025afda04a6e5bfbefa87f475d93979410a67191da060b0ee20d8471af5248cfcb2b23edaff9f670650fc78fe32fb4c1038047020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "583",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9lFi3mOdMHRaRA; path=/; expires=Thu, 29 Dec 2022 01:49:51 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f73823010c5bf8a93b322503b2aa7166f0ea57f86f660a7e32cb04a3a216196a4b4327ef726e8a1debcf498975fdebe7de91961a1a86c59f4de335eb2c8098be77bce1787d9e717ac6e0236663b8ec2313d4ba1460bad41a2d3b760b44a4d9d23b1681e38a5e5722f30e11233fcd696ad904e6c6eb456d2b908c851d8abc706e5e8f525b1d7869c5069ddb4d174da759db727651a20a5bc42d5ece81c0a42d058c63fce64486b5a7a92091e3669b508e3c37a65adb006eecc72e2203d814a029577977663264f9bc40e1a2527e8624ac60720f4c3601284937099f941345b46b781e7fbfe665869a7a83602ce8dcc87aeb6025afda04a6e5bfbefa87f475d93979410a67191da060b0ee20d8471af5248cfcb2b23edaff9f670650fc78fe32fb4c1038047020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "583",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVjhDMO6rA4XpvV; path=/; expires=Thu, 29 Dec 2022 01:49:51 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f73823010c5bf8a93b322503b2aa7166f0ea57f86f660a7e32cb04a3a216196a4b4327ef726e8a1debcf498975fdebe7de91961a1a86c59f4de335eb2c8098be77bce1787d9e717ac6e0236663b8ec2313d4ba1460bad41a2d3b760b44a4d9d23b1681e38a5e5722f30e11233fcd696ad904e6c6eb456d2b908c851d8abc706e5e8f525b1d7869c5069ddb4d174da759db727651a20a5bc42d5ece81c0a42d058c63fce64486b5a7a92091e3669b508e3c37a65adb006eecc72e2203d814a029577977663264f9bc40e1a2527e8624ac60720f4c3601284937099f941345b46b781e7fbfe665869a7a83602ce8dcc87aeb6025afda04a6e5bfbefa87f475d93979410a67191da060b0ee20d8471af5248cfcb2b23edaff9f670650fc78fe32fb4c1038047020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "583",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwfAsGLfm46jJ8jJ; path=/; expires=Thu, 29 Dec 2022 01:49:51 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwuG9OjnWWRbve0v; path=/; expires=Thu, 29 Dec 2022 01:49:52 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f73823010c5bf8a93b322503b2aa7166f0ea57f86f660a7e32cb04a3a216196a4b4327ef726e8a1debcf498975fdebe7de91961a1a86c59f4de335eb2c8098be77bce1787d9e717ac6e0236663b8ec2313d4ba1460bad41a2d3b760b44a4d9d23b1681e38a5e5722f30e11233fcd696ad904e6c6eb456d2b908c851d8abc706e5e8f525b1d7869c5069ddb4d174da759db727651a20a5bc42d5ece81c0a42d058c63fce64486b5a7a92091e3669b508e3c37a65adb006eecc72e2203d814a029577977663264f9bc40e1a2527e8624ac60720f4c3601284937099f941345b46b781e7fbfe665869a7a83602ce8dcc87aeb6025afda04a6e5bfbefa87f475d93979410a67191da060b0ee20d8471af5248cfcb2b23edaff9f670650fc78fe32fb4c1038047020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "583",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDwwlvek8h5ygH9; path=/; expires=Thu, 29 Dec 2022 01:49:52 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec8QAii8z4jvaC31",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4338424800239b5704369fa50da03a8429b6401578e1d39766941fc7bbd2152cba1522fbd59b3e3d999d913d358285d362c5e9f182f594cc0f4f196f3e971fcf60e8b51c0fa6ccb5110e7c452a8d091962091f00d58a3525be5a8591c0584345cee04265c62861fc6716d5d82c1b2a5e7d618254948408ec24def6b94bde7a7c48dad26606f4cddc4c3e1e170f0765ad91ab4525ea12a7626854223a9cd3f49a4356c1bfd20133caed2fd349c1f970b2785157012cb3507e90954127479732dd767f212664ea45e72215d6dc9784b08fd301804e1209c657e108f67f124f07cdf5fb591b64a575640574ad4d6b511d0983b557257dc7f5bfdb9ea57bfa36fbf5a09616bb2d4d45870102f202cfd4a21edc22b2bdde17c7acbeeb6132f72b33fd6727e3d7f010ac1025359020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwveFM1YT39WayZj; path=/; expires=Thu, 29 Dec 2022 01:49:52 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "321",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { fields: { Name: "John Doe", f_singleLineText: "two", f_number: 6 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd952a6728251b037a9a1827d675682a1c98a6296d0d444ae32a4dd40dc4bf2f2e1ce0c66547fb3d3f3f3f1f9981024dd9b0f8f3c864c9626aac968b76948d387f9d2cc773d6635b098a3847968a0a3c69817b1dcc1108fb16ce62eaaa1c0c8bc79c3afa523d51d148bd5390480d19fc583f6c5bece672672d6a52552207e591f71a74b0fa483cec0c35f6d6d64d3c18b46d1bee0cba5a18c4b0c08a9d48a130202c94b35f12e9dcbbc62c7502874dba9ff0d961f1e2a5a01292c47223850e15a016a67cbe95eb317dbe6c46a42039936eb664b223f0880ffb43dee7d32c1ac68fd378f4104651b4e94edaa2a99c1257098d790728d1d8372ca54ff2bfed5eafbac7b341a55c4d969a1a0a29d45a284753a9482f01a0d3fe71912feecce2f475fa03363d0a665b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwENziEqzRLsUJIG; path=/; expires=Thu, 29 Dec 2022 01:49:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8QAii8z4jvaC31")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5913f6fc23010c5bf0af20c2109a0044f6dd8509afe11edc0822ec901ae1c3b72eca60de2bbd70e912843a52eddacbbe7dfbd7b7722ac2494282ce2e77bc6e26efefe01ab5940c664cf90970da12792418556b40681aebe03a36566aa1c15a151e02a0d13078e2913b8c14f6db5a62e4163d9cb73a3b5140ec421476ebb8f358ad1eb4b6adb46b9c251ebbaa1d369dbb6de4149538392d22b6445ce8e502874b4e4cb417ac3a6514f22c56e9b1de330e9d62b8bc20a9883e58a81f0384a01aabcbbc58d89b82c9338d128bd886ea66c582f08fd309804e1245c6efc80ce97741178beef6ffb95f6525586c3104ad4c7b5e3d0e80759321bdc7f5bfd39ea57bfb3ab5f253937b5b3d4d45830e06fc08dfb9541362c2f8db087f3dd5b0cb75d7891edfd3196f337bf54973d4b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "587",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqk8dtqROJCw5DY; path=/; expires=Thu, 29 Dec 2022 01:49:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "313",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd952a6728251b037a9a1827d675682a1c98a6296d0d444ae32a4dd40dc4bf2f2e1ce0c66547fb3d3f3f3f1f9981024dd9b0f8f3c864c9626aac968b76948d387f9d2cc773d6635b098a3847968a0a3c69817b1dcc1108fb16ce62eaaa1c0c8bc79c3afa523d51d148bd5390480d19fc583f6c5bece672672d6a52552207e591f71a74b0fa483cec0c35f6d6d64d3c18b46d1bee0cba5a18c4b0c08a9d48a130202c94b35f12e9dcbbc62c7502874dba9ff0d961f1e2a5a01292c47223850e15a016a67cbe95eb317dbe6c46a42039936eb664b223f0880ffb43dee7d32c1ac68fd378f4104651b4e94edaa2a99c1257098d790728d1d8372ca54ff2bfed5eafbac7b341a55c4d969a1a0a29d45a284753a9482f01a0d3fe71912feecce2f475fa03363d0a665b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "603",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZVfS3kaoDcJJnr; path=/; expires=Thu, 29 Dec 2022 01:49:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4338424800239b5704369fa50da03a8429b6401578e1d39766941fc7bbd2152cba1522fbd59b3e3d999d913d358285d362c5e9f182f594cc0f4f196f3e971fcf60e8b51c0fa6ccb5110e7c452a8d091962091f00d58a3525be5a8591c0584345cee04265c62861fc6716d5d82c1b2a5e7d618254948408ec24def6b94bde7a7c48dad26606f4cddc4c3e1e170f0765ad91ab4525ea12a7626854223a9cd3f49a4356c1bfd20133caed2fd349c1f970b2785157012cb3507e90954127479732dd767f212664ea45e72215d6dc9784b08fd301804e1209c657e108f67f124f07cdf5fb591b64a575640574ad4d6b511d0983b557257dc7f5bfdb9ea57bfa36fbf5a09616bb2d4d45870102f202cfd4a21edc22b2bdde17c7acbeeb6132f72b33fd6727e3d7f010ac1025359020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "601",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwWDKxfKGfZsXmpi; path=/; expires=Thu, 29 Dec 2022 01:49:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "321",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec8QAii8z4jvaC31",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd6e833010845f25f23921985285f8d4925b44e98fd21e5255d1029bc695b191b18b0ae2dd8b49a434874abdf4b8a36f6767b6231a73a58b9ab0d78ef0823027448fb79c476df8f109ab2b4aa664cf5138a623299438406b90e8f41d58a3525b66a8095b50a764d618251d2b204331c0f715cac9f353322c58ed84833155cde6f3a669bc77ad6c055a292f5725e99d43ae110c16f197331933d95a3fc804db6d7a8882b85daf062b2c813bb34c73909e4025411737977653228f7963074d9223747165c34720f0033aa3c12c586e7ccac225bba69eeffbdbb1e45ee9d20a38f55e8c1fd909a8cd9d2af8f09bff8efaf3d4af79c3735ead84b0958b54579873102f20acdb4a213d9557561ac2fc61f8e31ffab7fe1b4a2b9a6c2d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlG5FAiicsn3EPo; path=/; expires=Thu, 29 Dec 2022 01:49:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "297",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8QAii8z4jvaC31")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd6ec23010845f05f90cc14e53013eb5e186d2f447b4072e68932cc59563478edda841bc7bed80443954eaa5c71dcdce7eb307222ac289c172fe7c2fc4bc4f3e3e6179c3c898ec04caaa25fc4072a8d19b56a030e85b7056e7ae2ed0103e6341299cb55a05af8402a5373f36a846af2f995f7026087b6b9b964fa75dd745ef46bb068cd651a96b720c09a541b058a55f21646072ad795219f69b7c3f8fd37eb5f451588308618511a022895a81a9eeaee3c6449d78d3601a6527d3d595b5180c318dd984c59378b1a68c270b7ecb224ae96628b9d3a67612cebd67c347b6125afba02be17ff3dfa83f4ffdca9b5c788d96d23501a96db01420df40bab095437e2eaf9db284533ffcf10fc76f06e5f4d41f020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "543",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwIFHbK21xTuCgUx; path=/; expires=Thu, 29 Dec 2022 01:49:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "288",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd6e833010845f25f23921985285f8d4925b44e98fd21e5255d1029bc695b191b18b0ae2dd8b49a434874abdf4b8a36f6767b6231a73a58b9ab0d78ef0823027448fb79c476df8f109ab2b4aa664cf5138a623299438406b90e8f41d58a3525b66a8095b50a764d618251d2b204331c0f715cac9f353322c58ed84833155cde6f3a669bc77ad6c055a292f5725e99d43ae110c16f197331933d95a3fc804db6d7a8882b85daf062b2c813bb34c73909e4025411737977653228f7963074d9223747165c34720f0033aa3c12c586e7ccac225bba69eeffbdbb1e45ee9d20a38f55e8c1fd909a8cd9d2af8f09bff8efaf3d4af79c3735ead84b0958b54579873102f20acdb4a213d9557561ac2fc61f8e31ffab7fe1b4a2b9a6c2d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "557",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8IIS2xfN4IlSP3; path=/; expires=Thu, 29 Dec 2022 01:49:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "297",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd952a6728251b037a9a1827d675682a1c98a6296d0d444ae32a4dd40dc4bf2f2e1ce0c66547fb3d3f3f3f1f9981024dd9b0f8f3c864c9626aac968b76948d387f9d2cc773d6635b098a3847968a0a3c69817b1dcc1108fb16ce62eaaa1c0c8bc79c3afa523d51d148bd5390480d19fc583f6c5bece672672d6a52552207e591f71a74b0fa483cec0c35f6d6d64d3c18b46d1bee0cba5a18c4b0c08a9d48a130202c94b35f12e9dcbbc62c7502874dba9ff0d961f1e2a5a01292c47223850e15a016a67cbe95eb317dbe6c46a42039936eb664b223f0880ffb43dee7d32c1ac68fd378f4104651b4e94edaa2a99c1257098d790728d1d8372ca54ff2bfed5eafbac7b341a55c4d969a1a0a29d45a284753a9482f01a0d3fe71912feecce2f475fa03363d0a665b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "603",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZ4XlHVmzOdA32Q; path=/; expires=Thu, 29 Dec 2022 01:49:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec8QAii8z4jvaC31",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recUPJw5T522K8P7D",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd52cb6ec23010fc15e4338fc4bc73a2c089d29456d00355552dc9425c3976e4d80d05f1ef8d03885251894b2fdcecf1ec783c9e2d51184815a6c47bdd121612cf029da73bc63a9bc6c7270cea2e299325436e395be2438c39298840ac302c15dbfcfc1d8c96be8917a888d7762db2305a4b6167382c90e7438f098ad2ec799c0f18658148eb24f56ab52ccbaa2b254d024aca6a2063b2b30a8142d018f6bfac48e1cda46a22c6b899fb5187f637a3412e8531302bb6500c4495a314a0c2deb95c9988bdefbe2595c67bd2d92d535610a843dd8a4b2bb43b755cafd1f59a6ed5719c79f1c8a554b1e1f0ebfded22a1770ea97e9021cbb3fa6fcb3faffad377ebe45b49ce4d622da509060cf80b7063a77cf00f21482334f11cbb4e9958711c3381535ce720d198ea1c2ba48ed6b348f6700d71c2f1f8615706b92b9f8a369b8cb2e6b449e97d67d21e5e2ada4846a23494174a462d220ebbd645e394dc5211eb978a78cca74d6fab840a8aca798d2b8a750866f7b6fb061ca734adcf040000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAnw6Z1FTzNN5Nc; path=/; expires=Thu, 29 Dec 2022 01:49:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "393",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8QAii8z4jvaC31")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4338424a5057ca2e156a5e943940317b44916e2cab1233f1a0ae2df6b87a2964a957ae9cd1ecfccce8e0f8495841285c5e4e996b1c97ef4fa06f3ab88f4c986212f35a10792418d8e545420b658f6baab7b5f833532b3758e8ad071e491dc1a2385d770c8913bd14383a2f7f29c3a81551ea88c69341d0edbb60db64ada06949441216b72f40e8542305826efdea4cb66b57a1429ee5759358993fddddc59610dcc9be58a8108384a01aa9c5ddaf58938e54e3ca9979e48175316ac23c4611c0da278104f17614447537a1d056118aeba253752d596c38ffdc75d436b0edadccb92b9aefe3bf2f751bfe6bef9caad24e7b6f19174830503be046ebd2a83ecb30469852134f467cdc49663ca042e70e74062501b877556e7e86d2567b883bae178feb03f1679fc00ef36a8ae68020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "616",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVo1Dvd2rdq8o8Q; path=/; expires=Thu, 29 Dec 2022 01:49:56 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "323",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recUPJw5T522K8P7D")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e43384e0f2f4a94a39d1344555e8814bb5491662c9b123c7565a10ff5e3b412a1c2af5d2e3eececececc9e092f08231af3dd76d3ced219a5cfcbed624d86e4c051140d61679240850eb451a51cac15fad90758a3125b65a8095b50df91d76aee8b86cba3c0984b4cf1d3b865da6d65d618253da7800c85ebbfd62807bbb7d88dadf68dd298ba61e371dbb6c1512b5b83562ac855452e9e21d708068be8cb9374da6da3b732c6d33e2997343a6d9e1c1556c03d59a639c840a092a08bc77bba2191bdafc88306710fbabb92f20e40433a194de888aed270c2a62b367b08c230dc77960e4a5756c04d3e8bdeab80c6bca882bb1cff5beeeda95f35cf7f346b2584adbda4a6c69c83780761fd5602c9350065a57b5bd8a1c1b86f123675933f0673f9067571d4dc58020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "600",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8YYXL0ifipkTVO; path=/; expires=Thu, 29 Dec 2022 01:49:56 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "317",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22changed%20Name%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30b689027d427833737e0479c01872b75d584dd72efd7008e1bfdb0e896262e28b6fede939e79e7bba270a73a90a4de8f39eb082500f8c1eae191bed06af6f30bb884897ac1972cfd993142a74a4bc04b1c1a2d35eddfb0aac91a9ad3254840e238f64d61829bc864386dc89ee6a149da7c7c409acf240694cad69bfdf344db051d2d6a0a40c7259918377c81582c162faee4dda6c56ab7b91e06e9996a378babb99392bac8079b34c311001472940159373bb2e11c7dc534fea2447d2d994396b09711847bd28eec5e37918d1c1985e46411886cb76c9b55495e5f063ff61dbd08a8336b7b260aeabff8efc7dd4afb9afbe722bc9b9ad7d245d63ce802f805baf4a21fd2c415a61080dfd5933b1e198308173dc3a9018d4c661add5297a53ca096ea1aa399e3eec8f451e5e0e1f9a4e1ddb76020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "630",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOwGy5xZaxaW7KD; path=/; expires=Thu, 29 Dec 2022 01:49:56 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "331",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8QAii8z4jvaC31")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4338424a5057ca2e156a5e943940317b44916e2cab1233f1a0ae2df6b87a2964a957ae9cd1ecfccce8e0f8495841285c5e4e996b1c97ef4fa06f3ab88f4c986212f35a10792418d8e545420b658f6baab7b5f833532b3758e8ad071e491dc1a2385d770c8913bd14383a2f7f29c3a81551ea88c69341d0edbb60db64ada06949441216b72f40e8542305826efdea4cb66b57a1429ee5759358993fddddc59610dcc9be58a8108384a01aa9c5ddaf58938e54e3ca9979e48175316ac23c4611c0da278104f17614447537a1d056118aeba253752d596c38ffdc75d436b0edadccb92b9aefe3bf2f751bfe6bef9caad24e7b6f19174830503be046ebd2a83ecb30469852134f467cdc49663ca042e70e74062501b877556e7e86d2567b883bae178feb03f1679fc00ef36a8ae68020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "616",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXzgupnEsVCMoVX; path=/; expires=Thu, 29 Dec 2022 01:49:56 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "323",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d6fc2300cfd2b28672825e3b3a78971625d87a6b203d334b9ad8148695ca589ba81f8ef4b0ad2e03069971dfdfcfcfcfc7c641a73d245cda2b72313058b3cb05e2d9b513ae2fc71ba9a2c58976d054acf39b2044a74a425ed556741e87b1f600d25b6cc50b368c23da22ed5d817b5503b89b15098e2a771c3bc9dcaac31a4bca6840ca5c39f2b549df54becda567b606f4c5547fd7ed334c14e93ad4013053995ece415728d60b0987f7991d6bbadf54ac578d824fb299f1f960f4e0a4b105e2cd30254209114e8e2fe56aecbd4f9aeb92775e233e9664b2a5a020ff9a037e03d3e4bc341349c45a3bb200cc34d7bd2967469255ce53339df2aa1364f540897e37fdbbd5ef5abe7f18f674d52daca5baa2bcc05c85790d64f25905c0220abdcdbc2960dc67d934543d7f96330a7f7d337322e111266020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "614",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwONpDzspIJp9ydO; path=/; expires=Thu, 29 Dec 2022 01:49:57 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "325",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22something%20else%20altogether%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30b689027d427833737e0479c01872b75d584dd72efd7008e1bfdb0e896262e28b6fede939e79e7bba270a73a90a4de8f39eb082500f8c1eae191bed06af6f30bb884897ac1972cfd993142a74a4bc04b1c1a2d35eddfb0aac91a9ad3254840e238f64d61829bc864386dc89ee6a149da7c7c409acf240694cad69bfdf344db051d2d6a0a40c7259918377c81582c162faee4dda6c56ab7b91e06e9996a378babb99392bac8079b34c311001472940159373bb2e11c7dc534fea2447d2d994396b09711847bd28eec5e37918d1c1985e46411886cb76c9b55495e5f063ff61dbd08a8336b7b260aeabff8efc7dd4afb9afbe722bc9b9ad7d245d63ce802f805baf4a21fd2c415a61080dfd5933b1e198308173dc3a9018d4c661add5297a53ca096ea1aa399e3eec8f451e5e0e1f9a4e1ddb76020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "630",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRfjHNDPbNPXNSR; path=/; expires=Thu, 29 Dec 2022 01:49:57 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "331",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["rec8QAii8z4jvaC31", "recUPJw5T522K8P7D"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f216818e9999165526596589cec6864ab53a3855860678959b86981a19795b0498bb28d5c6d60200b9ee42c361000000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtpLtVoFYHUrft7; path=/; expires=Thu, 29 Dec 2022 01:49:57 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "91",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8QAii8z4jvaC31")
  .query({})
  .once()
  .reply(
    404,
    { error: { type: "MODEL_ID_NOT_FOUND", message: "Record not found" } },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:58 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwD4ZkjdEOj3P2HS; path=/; expires=Thu, 29 Dec 2022 01:49:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "68",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recUPJw5T522K8P7D")
  .query({})
  .once()
  .reply(
    404,
    { error: { type: "MODEL_ID_NOT_FOUND", message: "Record not found" } },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:58 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsVwysBDEZzACiq; path=/; expires=Thu, 29 Dec 2022 01:49:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "68",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaZvBf7iIj0fR9p; path=/; expires=Thu, 29 Dec 2022 01:49:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3ooGR9R619UOI6; path=/; expires=Thu, 29 Dec 2022 01:49:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaGcrFwS5XEQraM; path=/; expires=Thu, 29 Dec 2022 01:49:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        fields: {
          Name: "John Doe",
          f_checkbox: true,
          f_currency: 20.34,
          f_date: "2021-12-26",
          f_dateTime: 1640520000000,
          f_duration: 4890,
          f_email: "me@example.com",
          f_multilineText: "i know\nlines",
          f_multipleSelects: ["Red", "Green"],
          f_number: 7.1,
          f_percent: 33.3,
          f_phoneNumber: "617 555-1234",
          f_rating: 1,
          f_richText: "#header\n* bullet",
          f_singleLineText: "finally, a regular field",
          f_singleSelect: "Blue",
          f_url: "https://www.google.com",
        },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6fda3014fd2b91f70a693ea0503f756cd2b48ab1a9cda689514d4e72492c1c3bbab10514f1df673b4585aa0f7d9994179f7beef5f13937078250282c3b42ff1c082f0975c0746d1299a9cdd78fbfabe5860cc89a83709c0359b0062ce94ed532f8acc0d5fe32a3d5c2343920a193d421450dc526573b42351af088410459ec094da2301d39a864da8d4aa2241ec6c930b9262734e3cd65258b131a45f60ba3285af63c834c7325091d4d6f228740c3b8b06d0ddcc28e35ad80b0508d273746682eb8840c76da5278b0916abb920eea5e18b6e5010414dad941eea1b4a52f0820c9a3e3c8d31bc3d81d5bc002a41d97a6a17f755b2b092723c8753c09c6e3b17d403af25738bdb222d437232fea67311f6a6025e04a0e83dc08017a253dbfb36c01f317d56b2e9910fb41c00284ca0886810fe68cddcbb7dc99307d38069d27b5d66d47afaeb6db6d5829559d79931bad9d8d0722580e8efcbd0519fcbc9fdbf21bdda84ccb50293fe0e8b345b0a195b3bd1be277c874f843cee169b9a8a7c9ece9ee931d758a2747ce6428404986e5ede5b80191fd7ecd1c2998f7a48b5b5eefc64d16c5747cb91b6b85364f76b6a793d41704ebf43755726bdbff967b7ed57b34a312c2b44e52d742c199f8c55c84d4fe718b67039471db16d9c33bbd383e1eff0177f1c0cfe1030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:49:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwD81Re2AMByb6Db; path=/; expires=Thu, 29 Dec 2022 01:49:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "503",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6fda3014fd2b91f70a693ea0503f756cd2b48ab1a9cda689514d4e72492c1c3bbab10514f1df673b4585aa0f7d9994179f7beef5f13937078250282c3b42ff1c082f0975c0746d1299a9cdd78fbfabe5860cc89a83709c0359b0062ce94ed532f8acc0d5fe32a3d5c2343920a193d421450dc526573b42351af088410459ec094da2301d39a864da8d4aa2241ec6c930b9262734e3cd65258b131a45f60ba3285af63c834c7325091d4d6f228740c3b8b06d0ddcc28e35ad80b0508d273746682eb8840c76da5278b0916abb920eea5e18b6e5010414dad941eea1b4a52f0820c9a3e3c8d31bc3d81d5bc002a41d97a6a17f755b2b092723c8753c09c6e3b17d403af25738bdb222d437232fea67311f6a6025e04a0e83dc08017a253dbfb36c01f317d56b2e9910fb41c00284ca0886810fe68cddcbb7dc99307d38069d27b5d66d47afaeb6db6d5829559d79931bad9d8d0722580e8efcbd0519fcbc9fdbf21bdda84ccb50293fe0e8b345b0a195b3bd1be277c874f843cee169b9a8a7c9ece9ee931d758a2747ce6428404986e5ede5b80191fd7ecd1c2998f7a48b5b5eefc64d16c5747cb91b6b85364f76b6a793d41704ebf43755726bdbff967b7ed57b34a312c2b44e52d742c199f8c55c84d4fe718b67039471db16d9c33bbd383e1eff0177f1c0cfe1030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "993",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2TqGV9zM4aDajC; path=/; expires=Thu, 29 Dec 2022 01:50:00 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "503",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6fda3014fd2b91f70a693ea0503f756cd2b48ab1a9cda689514d4e72492c1c3bbab10514f1df673b4585aa0f7d9994179f7beef5f13937078250282c3b42ff1c082f0975c0746d1299a9cdd78fbfabe5860cc89a83709c0359b0062ce94ed532f8acc0d5fe32a3d5c2343920a193d421450dc526573b42351af088410459ec094da2301d39a864da8d4aa2241ec6c930b9262734e3cd65258b131a45f60ba3285af63c834c7325091d4d6f228740c3b8b06d0ddcc28e35ad80b0508d273746682eb8840c76da5278b0916abb920eea5e18b6e5010414dad941eea1b4a52f0820c9a3e3c8d31bc3d81d5bc002a41d97a6a17f755b2b092723c8753c09c6e3b17d403af25738bdb222d437232fea67311f6a6025e04a0e83dc08017a253dbfb36c01f317d56b2e9910fb41c00284ca0886810fe68cddcbb7dc99307d38069d27b5d66d47afaeb6db6d5829559d79931bad9d8d0722580e8efcbd0519fcbc9fdbf21bdda84ccb50293fe0e8b345b0a195b3bd1be277c874f843cee169b9a8a7c9ece9ee931d758a2747ce6428404986e5ede5b80191fd7ecd1c2998f7a48b5b5eefc64d16c5747cb91b6b85364f76b6a793d41704ebf43755726bdbff967b7ed57b34a312c2b44e52d742c199f8c55c84d4fe718b67039471db16d9c33bbd383e1eff0177f1c0cfe1030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "993",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRO5UqlLIiz7n7G; path=/; expires=Thu, 29 Dec 2022 01:50:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "503",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec8fu2nTokIAXgZk",
        fields: {
          Name: "John Doe",
          f_checkbox: null,
          f_currency: null,
          f_date: null,
          f_dateTime: null,
          f_duration: null,
          f_email: null,
          f_multilineText: null,
          f_multipleSelects: null,
          f_number: null,
          f_percent: null,
          f_phoneNumber: null,
          f_rating: null,
          f_richText: null,
          f_singleLineText: null,
          f_singleSelect: null,
          f_url: null,
        },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c5262c03d29fa22c169cc340635a6db2eaca1eb5deeda4c21fc77db61223c98f8e263eff97a7aeee98e11e44845c3e2971d53058bc360ba72c2a4b8b9b97c5e2f37accf560a7460762c911578688ea5e95d2304ed5d3a8b89ab3220164fc661422a2f53f8b09e7c351d93396bd104072d33d05eb8abc1f41e1f165e761406a5b575130f876ddb466b42574b428c72acd83e38e404d24231fb0c265d52d7d0bd59c07699945331dbceafbc15545205b38c9434910634928a8b53bb3e33872d6601ea2d0ed0c92ba9ea00c1c568301203719ef2517cc663ce23cef9b25b698554392d8fda988c3b41cbc6de62a17c6bff1df7f8a95f338b9fcc845abb3a446a6ac895d44f52bb702b91c97701e88cff37ee0f7fec62ffb6ff02ea66bfe547020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwN4kbMw0azf2W8g; path=/; expires=Thu, 29 Dec 2022 01:50:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "311",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8fu2nTokIAXgZk")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d66519b2d9279dbe386a15a9224390dbf66e0d4b734b9a50ddd87f37e904b707c1171f73cfc997734ff64c962c66068bf9da099dd1f6eefa75b3dab2215b4b5465cbe23d4ba1466f5a52a507b784417b07672975758e86c5b36998185954197e58ef7cd3bd2777d6920e0405392a2f3c34a807cf4f89979d0983cadaa68dc7e3aeeba28d21d780218a0aaad921100a8360b15c7c06489fd4b5e65127b85ba5d55c2c76cb1b8fc21a6480e546828e149206535e9de3864c1fb75804d320399ace5ec9646f105c4c4613311297199fc4173ce63ce29caffa95d6646aa7e0a48dd9b41714b4f69e4ae95bfbefb8a74ffd9a59fc6436a4946b42a4b6c142827a01e5c2ad14d2ef02c869ff6fdc1ffed8c5e10b61cc1fe139020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "569",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkJOuna3Ey09d4i; path=/; expires=Thu, 29 Dec 2022 01:50:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8fu2nTokIAXgZk")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d66519b2d9279dbe386a15a9224390dbf66e0d4b734b9a50ddd87f37e904b707c1171f73cfc997734ff64c962c66068bf9da099dd1f6eefa75b3dab2215b4b5465cbe23d4ba1466f5a52a507b784417b07672975758e86c5b36998185954197e58ef7cd3bd2777d6920e0405392a2f3c34a807cf4f89979d0983cadaa68dc7e3aeeba28d21d780218a0aaad921100a8360b15c7c06489fd4b5e65127b85ba5d55c2c76cb1b8fc21a6480e546828e149206535e9de3864c1fb75804d320399ace5ec9646f105c4c4613311297199fc4173ce63ce29caffa95d6646aa7e0a48dd9b41714b4f69e4ae95bfbefb8a74ffd9a59fc6436a4946b42a4b6c142827a01e5c2ad14d2ef02c869ff6fdc1ffed8c5e10b61cc1fe139020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "569",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwt2fjf8Hq3JwdRZ; path=/; expires=Thu, 29 Dec 2022 01:50:02 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPS5MOYTmdKwvPp; path=/; expires=Thu, 29 Dec 2022 01:50:02 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCqO719WKs0fBW8; path=/; expires=Thu, 29 Dec 2022 01:50:02 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane" } }, { fields: { Name: "Someone" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003e5524d4fc24014fc2b66cf5096ca87f6641013424a355a39d418f3da3eda8ddbdd66bb1b0284ffee6e2151120e5cbce8f14de6cd9b79991d51984995372478db119693c001d3827dce9262b9f0cb241e910e5931e48eb323115468497310e8f00f305a46a64a5191603c70486ab496c27139a4c82df9b14671f5fa1cda05a31c506a5d3741afb75eafbd4249538392d2cb6445f64e2153081af3c9c689b49e4ca39e4488db242a6ffcc9767e6fa5b002e6c452c540781ca50095df9dca758838f89d38d25578209d5c89594bf0a9dfeff6fdae7f1bd37e30a401bdf628a5491b72255565381c738f072dc8a1d10b9933fb9bdfb6faf3d4257e95e4dcd4ce525363c6802f811bb71541740c2f8dd024a076b8f00ffbce773f8ae97c168f1e569bb044ba38d78f1759d900672a32fcf31539461f0fff654bdef75fe096648053040000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwGUBWJuVbg339NP; path=/; expires=Thu, 29 Dec 2022 01:50:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "332",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590414f83401085ff4ab3e7962e58adeec9a007d35034067bc01833c014362ebb64d90db184ff2e4b7b686fbd789c976fdebc373dd1982b5db4847df684178439e1b9e43f2f69b9db06559adc9139d973148ee9490c358ed006243afd1bac51b1ad33d484ad574ec9ac314a3a56408662845f1b94b38ff7685cb0da0995314dcb96cbaeebbc522bdb8056cacb554d06e7906b048345f8eb4ca64cb6d56f32c2431a57f74178d83c8d565803776699e6203d814a822e1e2fede6441ef3860e9a4547e8e24ac22720a081bff08345f090509fdd52466f3c4a693a95dc2b5d5b01a7deebd5240a68cd56157cfccd7f473d3f754d5ead84b08d8bd4369873103b10d66dc5109fca2b2b0d61741caefcc3f035fc01983aaabd2d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "557",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2S6cbnsplyzxK2; path=/; expires=Thu, 29 Dec 2022 01:50:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "293",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec8fu2nTokIAXgZk")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d66519b2d9279dbe386a15a9224390dbf66e0d4b734b9a50ddd87f37e904b707c1171f73cfc997734ff64c962c66068bf9da099dd1f6eefa75b3dab2215b4b5465cbe23d4ba1466f5a52a507b784417b07672975758e86c5b36998185954197e58ef7cd3bd2777d6920e0405392a2f3c34a807cf4f89979d0983cadaa68dc7e3aeeba28d21d780218a0aaad921100a8360b15c7c06489fd4b5e65127b85ba5d55c2c76cb1b8fc21a6480e546828e149206535e9de3864c1fb75804d320399ace5ec9646f105c4c4613311297199fc4173ce63ce29caffa95d6646aa7e0a48dd9b41714b4f69e4ae95bfbefb8a74ffd9a59fc6436a4946b42a4b6c142827a01e5c2ad14d2ef02c869ff6fdc1ffed8c5e10b61cc1fe139020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "569",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvgPgCvaQL79HD5; path=/; expires=Thu, 29 Dec 2022 01:50:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590514fc2301485ff0ae9338c3283689fccd4c490318d820f1863eeb60b6bd2f52e5d9b0508ffdd7698286fbcf8d8d3ef9e7bce3d30830599b265e2e3c064c94410b60ff3a7e5f5e3669756c8176cc8361255600e2c831a3df4463592c6f0f505ce52e6ea1c0d13b3695072672de9802bc85179feb9413d58bda67ec0992054d636ad188fbbae8bb6865c0386282aa866c7e05018048b65b20b267d2cd79a179de27e9d553771b29fdf7b2bac4106b3dc48d091f289c09477e77643a64f9193000dd21374b665297b20e6f164348947f1ed924fc4940b7e1571ced77dc90d99da29f8ad3e9bf6ba82d62ea894fe42ff9df6efaa4b221b52ca352152db602141bd8372612a83eca73f396d99e0fe71e1298e9fc76f73152fcc33020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "563",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 01:50:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnQAW9m7KADKgiI; path=/; expires=Thu, 29 Dec 2022 01:50:04 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "295",
      "Connection",
      "Close",
    ]
  );
