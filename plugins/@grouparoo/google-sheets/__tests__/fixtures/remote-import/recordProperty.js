const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1643395635747";

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
      "d4",
      "49",
      "56",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "645d79486829ee08839d0085b6209b3c861443cbd030057ddedd3eb75e817f88ff0de234256d8bbbfa4a2af002a65852855448442d1cc4afa3ed4c86a5c0a54f39b964e5298be95d4d14639b8fe2e7f1e678044771defbaf647a1ef908839bee5f833a95f55d7310e5b3c9a0bc0f31a7c82f768ced69b392cf5b31693769e93a4599d3e0c0a015f0acf387895a555bf1156dd0d03b0a9ea2b76273f0fa7cdd1be892669a647bce50ac065aebf63b447586c38f8a543aba5157c5c6e95a60c33aaf7789cf3bc53d41a91865538ef312b5eb308cccbba66d0c9bdf95a75c98cd66ff800520bca18cb4983e3e804b555d80bf1c703735e431042231230cfcfc024abfc0353b040000",
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
      "Fri, 28 Jan 2022 18:47:18 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Fri, 28 Jan 2022 18:47:19 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A1:Z1"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 28 Jan 2022 18:47:20 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A1:Z1"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 28 Jan 2022 18:47:40 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'profiles-10.csv'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "last_name",
          "email",
          "gender",
          "ip_address",
          "ios_app",
          "android_app",
          "vip",
          "ltv",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Fri, 28 Jan 2022 18:48:01 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'profiles-10.csv'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "last_name",
          "email",
          "gender",
          "ip_address",
          "ios_app",
          "android_app",
          "vip",
          "ltv",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Fri, 28 Jan 2022 18:48:01 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A2:J10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'profiles-10.csv'!A2:J1000",
      majorDimension: "ROWS",
      values: [
        [
          "1",
          "Erie",
          "Jervois",
          "ejervois0@example.com",
          "Male",
          "15.247.38.72",
          "TRUE",
          "FALSE",
          "TRUE",
          "259.12",
        ],
        [
          "2",
          "Cacilie",
          "Eate",
          "ceate1@example.com",
          "Female",
          "253.146.41.201",
          "FALSE",
          "TRUE",
          "FALSE",
          "94.36",
        ],
        [
          "3",
          "Gretel",
          "Groucock",
          "ggroucock2@example.com",
          "Female",
          "211.89.110.134",
          "TRUE",
          "FALSE",
          "TRUE",
          "668.3",
        ],
        [
          "4",
          "Amata",
          "Cotesford",
          "acotesford3@example.com",
          "Female",
          "193.9.240.246",
          "TRUE",
          "TRUE",
          "TRUE",
          "489",
        ],
        [
          "5",
          "Lira",
          "Johnston",
          "ljohnston4@example.com",
          "Female",
          "53.161.58.99",
          "FALSE",
          "TRUE",
          "FALSE",
          "823.16",
        ],
        [
          "6",
          "Deni",
          "Scalia",
          "dscalia5@example.com",
          "Female",
          "138.131.148.74",
          "TRUE",
          "FALSE",
          "TRUE",
          "273.98",
        ],
        [
          "7",
          "Helga",
          "Kleis",
          "hkleis6@example.com",
          "Female",
          "85.248.8.158",
          "TRUE",
          "TRUE",
          "TRUE",
          "407.05",
        ],
        [
          "8",
          "Gertie",
          "Cubitt",
          "gcubitt7@example.com",
          "Female",
          "123.255.130.24",
          "FALSE",
          "FALSE",
          "TRUE",
          "841.45",
        ],
        [
          "9",
          "Lurleen",
          "Browell",
          "lbrowell8@example.com",
          "Female",
          "231.159.55.43",
          "TRUE",
          "FALSE",
          "FALSE",
          "623.34",
        ],
        [
          "10",
          "Dorthy",
          "Iston",
          "diston9@example.com",
          "Female",
          "45.241.64.163",
          "FALSE",
          "TRUE",
          "FALSE",
          "290.53",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Fri, 28 Jan 2022 18:48:02 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
