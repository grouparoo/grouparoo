const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631208844109";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "ed",
      "d3",
      "5d",
      "6e",
      "82",
      "30",
      "0000e0bbf459095225b2378a4645c7a00156f7420a1401f96d9958ccee3eb36bccef0edf03d024614244437b650d7803926a869228c76e8d3663eed153ea06d2bdb49a6b915d7951ad7a22cea81ba43fdc18fcb6aa4b98e39d1c36693eea7aab757edd8fa51a1c3f9c29730e259eab5535a57c1fc629698c5b7d5e717445198637e810350887aadd56ee9d6021c7dea3694b6c136e4d7cee4dc7d20a23d2af353c79d2c7184dcb96226b7dccb5792c6c28168557f2da16f3455c042bf3d36e0e6627d03ee9783e2c1791ecbd90f9ef99979ebf44461bb6545e5efe2f3003ecde159c89a8786e872bc39881bffad1203bf6fc8f18e58c839f5f92f8802419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 17:34:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1631208844109",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553db4ee33010fd95c8fb4adbb4f49256aa96aa04a8b649973405a1d52ab2dd49302471881d10a0fefb4e1c5a4048ec536ccf3973ce5cf24aee45be2513c244f25041f9fce34e32724440d3045f6f6e97b3ab975fde2a63e7f3d193fdf45251ff723a4584a8598a66450a2d25ab92839a6cd6eda49455414b295b98a8d56d7587c7dd9eed38fd7ed71e234d411a2f457e8fe45bad0b35e974f6d2ed44ca24055a08d5e6323bbc771e7b9da29477c0b5ea7c56eca088ea7cabf933959c6a21f3e9668dfa958232828c8a141dbc13b7ece473e6b6a0593b41f0a3e040399755ae6b579882cb3c1649559aac64f24a8ccb0f07b27697ee3cb4b84cab2c8f729ac191b5a59a46fab900eb2c5879d6c23f5b05de2c5cacfc683dbf70bd597bbe5a6e3c7f6d5d5fb8816b69ca52305c6b6a9d989b8f17d4df82d22237ea61fd5c2bbff567f175283501a51534c168640f69d7b1c72c66231e3bc70316dbc098c346037acc6c3eee437fcb8022cf881a16cd656e3b8341cf613c8a072316f559d789c64edc8b06a3a1cd59bf67f71890dd11792a858653a10aa944d321721d2c42370a838d3f9f85ae2921a655aa4f1b6375011f3d6a2c1041dfd4b4aba342a252ddee851fbac16c1e2eaedc66c24b48287f5e3fe08c639a2a40342db1791a4a4f6eb161c49f79ee2982cdc47eef838a4cfebc92bae7b58b0f2d3fd0431c606d579b2f5987c1c23f3776f6882b9a5606f2d81c4881966fb13674bdfb8b48dcd1260bb9dcb8c10d699e0288a1849cff7f9a083681fffd69fbbd47286e3eaa288d775c1dae6a0d5e42b342c254fbceee8f6d62c0a5fe121b9acc877daf334206b97e2ba8d97bacb311abd40184419cbe6f9ab5fb0739ae58c675040000",
    ],
    [
      "ETag",
      "YhLAVzKMOmbGC7w0wzuaNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 17:34:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631208844109"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d",
      "92",
      "41",
      "4f83401085ffcb7814926269ad243d5045ada1b5161a0fa669b630502ab0b8bbd8344dffbbb358ab5113bdc0ccf0cdf2de831d3c67650c0e2cb3f4a546b13d49513de8628ab2ce95a45bc54b8960002a966a7260d995dfeedcc5d1e074edcd1e03f7426efa7d2264b4c28281b38324c33c96e03ceda06405d25ac4f3ba28174d6780da567a1884d3e1f886fa82c7ba1fcf7cdf1df81eec8de362cc145b34fc3fd6e67b03d67c39c5040596116a2d95e06b8cd450db94aca8723425af4584121ab879900a5e574c706ed2c4b44cabdbb6ce5abd9e6d5bad0be2721e3195f192d05940f24071c5f229df9049e812209a92fc26cdf595c659dcf8d0e5701c76ed46de57809425598e8bbf4192bb62f4153eb04302df3956f0ba5447eadabf777f3b8e22fd3ceaca0dbd1f845414d4110987232f08ddd14473f383f7c156a19c084e394ad4115a2dbbd739efb6de53bde43a697a8fa3448d06448c7e8edb4c8193b05ce2fe0d9b1a14cc7a020000",
    ],
    [
      "ETag",
      "bB14pL35JdcB+jEUWSA9sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 17:34:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
