const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1644413748354";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffedd4db7243400000d07fd9e7d4b80ca16fae950b2588e56507d9490c7663a94b3afdf766fada5fc8f988f30d8aaac2c38046da6002dec15a881a577125afc3897fc47ef4960feb19fab94482c7f136e7d675493ff4493471a6d8b96ff7724fccd8a8a8a59e4f336f95e61830dff34cbeab1a91b64eb0243d52735a8604f1c90897d0488b3a4789d1ebb84f1549ac695ba463cc9ca17b68d709b6b1bc9b55e122370addc799753ed41784623d3b15d061b210b52da553a4c04f959224553465af130fa60d69c3c8961c95b85f8bb0ad1b68eb0777b44a69271c98d5ad5b13bb37633dda33cfbdbcbcfc0336002ff79ae101d5cf0f2459d336e02f0734ae77fc1cc2c005c30cfcfc0236ebde053b040000",
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
      "Wed, 09 Feb 2022 13:35:58 GMT",
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
      "Wed, 09 Feb 2022 13:35:59 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:00 GMT",
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
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:01 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:01 GMT",
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
  ]);
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "80e1bb642d0ed082497762c007f8a8e073c3c490c644452041944eef5ea7db5ec1ef00fff2ff068452a654aaaf2796830ff02036ead2eec1ec6f6f669bccf9f6687fc1098ba19135984ef383453c1e49b118dab10e0bd4c389e9701525de728c7be1c6d58363f1a9601bc28d5b8d79ffbd298a58af26585afb9a9ff1aae186d6165b36e9f61c1dcc69150f2f86bcac4938126dc0b06f1a4e864fb22e9117cc2c3b4732cea8ab1f74c6973371dda9dcf683ba97fa5059ba0fc584202789dcf2ce931b24c175b798afa5533a624164303c8ef6a6772f9b673d9b0edafa2cfd764fbb2f2f2fff800e60f742544ca5e2f9833707a10ef89b43aa1f057b1ec263a46215f8f905580e15bf3b040000",
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
      "Wed, 09 Feb 2022 13:36:02 GMT",
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
      "Wed, 09 Feb 2022 13:36:02 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:04 GMT",
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
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:04 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:04 GMT",
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
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:05 GMT",
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
  ]);
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
      "02ffedd4d19642400000d07f99e7726809fb469b9141b621c38b13861521a1d8b3ffbe9d7ddd5fe87ec4fd06a724a1b75bd43725adc13b984e2b9949989855c8c8ceae7dc1e3a6256af948bf283f547590b6b1a52a17be3f88706f499322c9d441a9a4c173e467e6bd30211b6ae1d6e03874b48c6d7af69aa6dc2c37a1c81ebd29afaf180ae23acb782ddf11e103fb07ec27ad32fb71e610f73ecb8655153ab24512ca7a35650807c881318b110ff723fa94dc25996170bde0a4e7f4b562a79a60d4e3b045f3be1bcccaa1ae83a99ddb380f2a7dcd0e8d9785353723b5a484133c6375d89916f3f2f2f20f5800fa688b8edea2e2f9c19b20cb0bf09743d44f2d7d0ea1d253473bf0f30ba06230da3b040000",
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
      "Wed, 09 Feb 2022 13:36:06 GMT",
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
      "Wed, 09 Feb 2022 13:36:06 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:07 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:07 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Wed, 09 Feb 2022 13:36:07 GMT",
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
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:08 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["1", "John", "", null, null, null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F1",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A2:C2",
        updatedRows: 1,
        updatedColumns: 3,
        updatedCells: 3,
        updatedData: {
          range: "'export-records'!A2:C2",
          majorDimension: "ROWS",
          values: [["1", "John"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:10 GMT",
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad8e4541d39d06a4c8d74af9b8c98418461afe5084747af73addf60abe43bc6f4028655d87fb8ab312bc828948704117c972170d4be1bbec32b6aaf7b24b71a273260ce34ae0591e9d7113a755a6c4d2d9375375d8321ce18fe3d935e5825a7af85505496fc4a2ef274b6fcac87a0f6d4a5c41564eb695f2fa76aa059226cbc173058dadc79b10624b29edbbd218e1c051596b7448aecefe94a30c873a95460df7411195f57e2b543540c551beac631e1ca8dde1cee45585e6bbdbc1225a1ea945b3810c0e73dbcb4dc7fbecccf484da68edb893af0995bff1c5d3d3d33f6006d858672deb70f6f860254338037f39e07eaad963883d232d6bc1cf2f5afb77c53b040000",
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
      "Wed, 09 Feb 2022 13:36:10 GMT",
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
      "Wed, 09 Feb 2022 13:36:10 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:14 GMT",
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
      "72",
      "82",
      "40",
      "0000c0bfcc592ccac832b9496413101c1609178a6550020a0ee000a9fc3d56aef902fd88fe064996e1ae8bfba6c277f00ea66403d7d93a6577e1939d3dbb4e2e743a373e0a38d9dd66fa2178c6843151e53f1e3d923ef6d659928debaca5d4ce4542aefd6d38b87e2f40ce8e86d483c630f0b5efe861699b3447a81434cb6b9b87b9d3aab4ac6d39e379c981bce299dc89212ec399eed82945545948b43aa361a382994ddba25f7088e0bd3a6e1395196f75e392e3b0d9c8c4cfad26f050701929238a8a5e49ca4984615197a15c639a38ba77faccf75c3ea7b2a3baada0a9235d2f168b7fc00ae0b12d09eee2f2f5c11b07e10afce510f7538b5f4348382198809f5f3d1deb053b040000",
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
      "Wed, 09 Feb 2022 13:36:14 GMT",
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
      "Wed, 09 Feb 2022 13:36:14 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:15 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:15 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:16 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:16 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:17 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", "Doe"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:D2",
      updatedRows: 1,
      updatedColumns: 4,
      updatedCells: 4,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "", "Doe"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:17 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:18 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["2", "Pete", "", null, null, null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F2",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A3:C3",
        updatedRows: 1,
        updatedColumns: 3,
        updatedCells: 3,
        updatedData: {
          range: "'export-records'!A3:C3",
          majorDimension: "ROWS",
          values: [["2", "Pete"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:18 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:19 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:36:19 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:19 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:36:20 GMT",
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
      "02ffedd4417282300000c0bfe42c0e2182d01b01a2d8560554c00b0331058ca281d40a9dfebd4eaffd82fb88fd0639a5aceb3279e1ac012fa0cf356b4cc7856a273775d8acf63ced3ac1d75f1a9d6a8484078f9b93820878c3e12e71a472318d01562209b19ee808cf17426fe2288f0a97c3d0b3ca37edd3e68b244be05c66e57a1b18bb696893b33148bf26d48ab61f55dcca60f559a571aa780e14e7e9fdbd624353a3339a073e55437b136ba8390c1bd36ad710a982e368f65a96bd7bba9385ebc3233295fd6a76f295404ff9d2e8f7b32d849e8ddcd876222a0be744ec638c19d5f2a5c0137ffcf4f4f40f180176bfd62debb2faf101d22d6b04fe72c8647f658f2130cb5bd6829f5fde87f6873b040000",
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
      "Wed, 09 Feb 2022 13:36:20 GMT",
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
      "Wed, 09 Feb 2022 13:36:21 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:21 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:22 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:36:22 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:22 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", "Doe"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:23 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:D2",
      updatedRows: 1,
      updatedColumns: 4,
      updatedCells: 4,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:23 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:24 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:36:24 GMT",
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
      "4b",
      "72",
      "82300000d0bb642d0e1fa1d09d80587044405460934188028209495a814eef5ea7db5ec17788f70df2a2408c418e6fe80edec198cbc6bc989fc565f2254e71d0ea8b9899b8d1f6776d9fed92f67488a28644b73edca08727942a94d3b44b3ac8af65b5745be96826253ad0ea421addaad9683f7a51eba2bc37256792c8aa0dadcc1f16b2cfdf7659279e89a76dd2eb60ebae325d4d27166abbc46d555961ecf32df69942a1d5c0eda6f3fbb0acdadea52156279a2969607778ad9ac5c28b8f617476561e9284e9ee1c3e8323d3d71e4ab85b7322797522f5b78b7cf24701c7970f2360f39797977fc00ca081d41431583f3f5054c39881bf1c201f097a0e61a29c220a7e7e012105e1553b040000",
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
      "Wed, 09 Feb 2022 13:36:25 GMT",
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
      "Wed, 09 Feb 2022 13:36:25 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:26 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:26 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:36:26 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:27 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:27 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:36:28 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:36:28 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
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
      "Wed, 09 Feb 2022 13:36:29 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
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
      "Wed, 09 Feb 2022 13:36:49 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
              quota_limit: "ReadRequestsPerMinutePerUser",
              consumer: "projects/172856096362",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
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
      "Wed, 09 Feb 2022 13:37:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:37:30 GMT",
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
      "4b",
      "72",
      "82",
      "300000d0bb642d4ec0164977402d14f9a8e5bfc98434e26f0c12fe4eef5ea7db5ec177887707845226046ef8995dc11b188982e6745e403dede0147a41108eee389dc458c7658bf162fb6e4731eb4ca7713e7a48e44176314584af89be2d0f97d5549a29139ef1958588870a5af7797181fccc955ccd86681370b54bfa6eb359fa99e70c42b53e4966da97cea9dafc9b7b94c727c9a5aee13385552f51ac8828f6f7cbb06c57eae2b8722a3b8766a7df4603ca85dd0734f78ba6f72d69473414177aee9c1babc55a92ec8516276a4a52f97608b864eda66a6fdd1a4dcaae70fef4f4f40f98013654c79a097c7c7cb078456806fe72c0cd58b1c710062335abc1cf2f6510a6c13b040000",
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
      "Wed, 09 Feb 2022 13:37:30 GMT",
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
      "Wed, 09 Feb 2022 13:37:31 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:31 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:32 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Pete"],
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
      "Wed, 09 Feb 2022 13:37:32 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:32 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:33 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) Churned,(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) Churned,(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:34 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:34 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Pete"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:34 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Sally", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:35 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:35 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:36 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:36 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:37 GMT",
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad0e1805ec0e05612888054465c38434033460d2f0d7e9ddeb74db2bf80ef11e00614c9a266d192537f00626b4dc2cf02293f44b2fdda3a3e9ded5c876aed0efa872664df8d529658da5f914f8bb3d733a4e91e938dadaf4e4a5a5f6472641786a347ebb094b0cc7ab46cd612ee65471190ee8c0b7dcf3e5b876ddae8aabf6aced3f42958785d7d76de924b1c8b2959e063c97694facd190cdefe4a2113fcf4ba845513adc31d1836ca9a3e4e09cde3f472a1bac8d09ac15564cb08a55247606aa6cc96aa072a03cc1893eb816f5e3a908a27644abaaab6c6ff1f2f2f20f980132f25290262d9f1fc0f56633037f39a4edc4c973882d418208f0f30b4ba1f28d3b040000",
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
      "Wed, 09 Feb 2022 13:37:37 GMT",
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
      "Wed, 09 Feb 2022 13:37:38 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:38 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:38 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:39 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:39 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) Churned,(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:40 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:40 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:41 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:41 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Sally", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:42 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:42 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:43 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:43 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:43 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd44b7282300000d0bb642d0e4405d31d7ef928064547ba61302656b17c6312747af73addf60abc43bc174809a14d93f022a339f8006d0a519ff44fba7d14fa33c22af62f3bd8469f7094dcc3997719e781bd97432116799c1ce4146ee2bb56e36c180f751635eb8d6704bc7207fb239c338f971359c224cd4fcbea99f9a9594fbd5b5415122997617481b1631aa2d862be9684cd0795720e52382c1c3de6d897cab7cf5fdb5210def250a5bbf0205786a14c625895601bcf6df14cdf5ba43e6b911cb37c951164e9f8a45941d83a4b7b6de48bef891a23f356e98166c1e90363ef1e2cdc7ea7d3f907f40055e5b5a64d727d7f301821d4037f3924bc2de97b88094d6b5a839f5f427f40d63b040000",
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
      "Wed, 09 Feb 2022 13:37:44 GMT",
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
      "Wed, 09 Feb 2022 13:37:44 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:45 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:45 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:46 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:46 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:46 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:47 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
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
      "Wed, 09 Feb 2022 13:37:47 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:48 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:48 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:49 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:49 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
      ],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [
          ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:50 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:50 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:51 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Evan", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Evan"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:37:51 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:52 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:52 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:52 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:53 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:53 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:54 GMT",
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
      "d4417282301840e1bb642d4e0029d01d68aa2851118ae88601e6c7828898a026767af73addf60a7ecb7780f78db2a200ced3fe7c8416bd239969f6b018e6d8496ef8112d27fe52c7ce8ec451dcb2d35e84db15ff7269c266dc5bd1281851b3ad2d07dc906e62b92eefe2bca7b0ac69ba55bd5bb0511652d52652f3fa3e97764816f3a6935423e965ae6444e8dd289961ec1fa625a63986d24a9a00c4ce19afdbaae6e212e095958f14bd268ae5b122bdab5d336ecaeb8ee8c08ce871e071b7be2a6f3637da5e9a9363930bd531a7e127f9c05af08cc51c575cf7fdc5837997ca744f0918ee71f8f2f2f20f1a20105dc580a7d5f307ba61db03f43787b4971d3c0fe142c680a19f5fdb10074a3b040000",
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
      "Wed, 09 Feb 2022 13:37:54 GMT",
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
      "Wed, 09 Feb 2022 13:37:55 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:55 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:55 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:56 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:56 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:57 GMT",
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb642d0e50e5d31d8810441992a24137193ee1db4af888a59ddebd4eb7bd82ef10ef1bc469ca86818e6dc3aee015ccb1ac2fd365221ad1247e85411fa830b28e93d3912e0fb01ed155bdc1dd29e591a097da45e183b7e99dd6b20a91743438c482e7af4b82b721eb0dcbde52a98612aad5cbfb794f570526fb224c4e6ed6ec9cc9af0e679cb421d4d2374151d71443a6946e77bde1d2558b2c7278c41a95f2537ecb8cc9f5788ba7eaa864448042735732a629e79d8c47cdab9d12deef5d0cb199d968de2084919f7ea06a27e7752bdad84c08a924db96f21ce9b3bb7c7a7afa072c00fbe455cf065a3d3e7859ebfa02fce540c799b3c710268b7bd6839f5ff66bcd973b040000",
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
      "Wed, 09 Feb 2022 13:37:57 GMT",
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
      "Wed, 09 Feb 2022 13:37:58 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:58 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:58 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:37:59 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:37:59 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
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
      "Wed, 09 Feb 2022 13:38:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Evan"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:01 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:F3",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:01 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:02 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
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
      "Wed, 09 Feb 2022 13:38:02 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:03 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:04 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:04 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
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
      "Wed, 09 Feb 2022 13:38:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:06 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
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
      "Wed, 09 Feb 2022 13:38:06 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:07 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
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
      "Wed, 09 Feb 2022 13:38:07 GMT",
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
      "4b",
      "72",
      "82",
      "30",
      "18",
      "00e0bb64ad4c0a464c77114518a84fc2a31b06f0575e2a2614d14eef5ea7db5ec1ef10df374ab20ca48cdb4b0567f48eee894a954c49310b3bfcf056c2a7115f26b8afcd4390b8de7e07aa67123a9f0f83a9dbf4bb148cd459db982e355f5d0838e5a531321ef4608b7a769175d77a8e59f577ddf609ce266396518bafe07cadd89ee9333f0835b3084352ba7659e46ed538c3e8133be1f6f4a16671c40ca6df24583b2e39670bddcb47a5461fc517d5c60d9f1c792434f556cbf13a074aec6e6b4ca2c57924ab8e4cafd546342db975d6359d6f2f47eb6d0da9e84a1b9f36cacbcbcb3f6880a06f0a01322e9e1f6884d201facb216eef0d3c8798422240a09f5f4bf0ae3f3b040000",
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
      "Wed, 09 Feb 2022 13:38:07 GMT",
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
      "Wed, 09 Feb 2022 13:38:08 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:08 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
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
      "Wed, 09 Feb 2022 13:38:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:10 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["2", "Evan", "", null, "text is also here", 5]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F3",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A4:F4",
        updatedRows: 1,
        updatedColumns: 5,
        updatedCells: 5,
        updatedData: {
          range: "'export-records'!A4:F4",
          majorDimension: "ROWS",
          values: [["2", "Evan", "", "", "text is also here", "5"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:10 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
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
      "Wed, 09 Feb 2022 13:38:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
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
      "Wed, 09 Feb 2022 13:38:12 GMT",
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
      "0000000002ffedd44b7282300000d0bb642d4e84a2a4bb48152bcac70f58378c606c620452026ad2e9ddeb74db2bf80ef1bec1a1288894595b73528157a00e26ea17fd1ce2dd15eacd326ab31b2a7d9e4f68a9e9eabeef06238d1d9b73f2151ac1cce944cca20f98dbd375699a9bc9de1d9a0c964980cf45823e910c6b8a57384c0d04b1dfd46f039fc7c679b398a73bbb16b5a7989744b1cb5f82a0493338d1add525dab394d374112527875625f3bd6cf73e95ca27179d5adb985eab7165d6ee6ca156a842e9482f03c3cc0a41843bd7ad62c70eda3c0c8697ed323fade78d7b14374ce548ea1bdca786ec3f3d3dfd037a80dc056b88ccd8e303cb46a807fe72c85a25c86388313934a4013fbf780128fc3b040000",
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
      "Wed, 09 Feb 2022 13:38:12 GMT",
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
      "Wed, 09 Feb 2022 13:38:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:14 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
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
      "Wed, 09 Feb 2022 13:38:14 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:15 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A4:F4"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A4:F4",
      majorDimension: "ROWS",
      values: [["2", "Evan", "", "", "text is also here", "5"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:15 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A4%3AF4",
    {
      range: "'export-records'!A4:F4",
      majorDimension: "ROWS",
      values: [["2", "Maria", "", "", "", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A4:F4",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A4:F4",
        majorDimension: "ROWS",
        values: [["2", "Maria"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:15 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:16 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
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
      "Wed, 09 Feb 2022 13:38:16 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:17 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
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
      "Wed, 09 Feb 2022 13:38:17 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:18 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
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
      "Wed, 09 Feb 2022 13:38:18 GMT",
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
      "d44b7282300000d0bb64ad8e88a8e92e5285586ca5fcdd308809622ac41024d8e9ddeb74db2bf80ef1be4196e7a469525933528117d0671338ca4787318a6fe3bbffb18ccf9bdd1c8ba2b5de0b4c2ffb21b1aade3f2432be9e1665b0e064eaafc7b89aa1237a1513277594ec6363d8da56a7566198a476b8b1a1eb8bab637bb33a58b9627f3976f916b593d4cfa8ae71ee7661c158e026deb4665494da1961dce8f57aee46d10a0e234d5283b3c674ec1bbd2fbcb72fc364895204f77d6b626971ab88fc6b44511db467734d1d34afa5a6e06715ed349b48a86f7617c44edb65a7358152f9e8e9e9e91f300044f15290262d1f1fe8068403f097432a7b4e1e432c492688003fbfdd4e7f723b040000",
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
      "Wed, 09 Feb 2022 13:38:19 GMT",
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
      "Wed, 09 Feb 2022 13:38:19 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:19 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:20 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
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
      "Wed, 09 Feb 2022 13:38:20 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:21 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:22 GMT",
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
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "Sam", "", "Test", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "Sam", "", "Test", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:22 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:23 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["3", "Liz", "", null, "some text", null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F4",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A5:E5",
        updatedRows: 1,
        updatedColumns: 4,
        updatedCells: 4,
        updatedData: {
          range: "'export-records'!A5:E5",
          majorDimension: "ROWS",
          values: [["3", "Liz", "", "", "some text"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:23 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:23 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
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
      "Wed, 09 Feb 2022 13:38:24 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:24 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
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
      "Wed, 09 Feb 2022 13:38:25 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:25 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
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
      "Wed, 09 Feb 2022 13:38:26 GMT",
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
      "41",
      "72",
      "82",
      "30",
      "0000c0bfe46c1d2450a53728023a151905452f0ec14820a124264469a77fafd36bbfe03e62bf41519658ca93ea28fe046f60284c675c8e91e1e6daf84a93150b57834496deaed9bcd819077b13e49dd14e37ada2554ed61bf6718f7661f6b2dacdeec7f331eca220e587f32c9959b067c2768517be2f3379c04c70315c7475f319f4d7af44083e9f1c892579777354c90b3959a8b375c960d82318df544a756d73af820171dd6d6c36415cc670efd0b4a63af6a4a5d13e1922b38c1bba9c8a3e52be2615aa18095a1ef52f7cd148d7a60d2d1092892fcc6eb220b425469e8d9f9e9efe012380efbcbe6279aa1f1f40db7146e02f87931a387e0ce1e1e28aafe0e717e65911293b040000",
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
      "Wed, 09 Feb 2022 13:38:26 GMT",
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
      "Wed, 09 Feb 2022 13:38:26 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:27 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:27 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
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
      "Wed, 09 Feb 2022 13:38:28 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:29 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    {
      values: [
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0", null, null],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1", null, null],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2", null, null],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3", null, null],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4", null, null],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5", null, null],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6", null, null],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7", null, null],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8", null, null],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9", null, null],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10", null, null],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11", null, null],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12", null, null],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13", null, null],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14", null, null],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15", null, null],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16", null, null],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17", null, null],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18", null, null],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19", null, null],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20", null, null],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21", null, null],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22", null, null],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23", null, null],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24", null, null],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25", null, null],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26", null, null],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27", null, null],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28", null, null],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29", null, null],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30", null, null],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31", null, null],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32", null, null],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33", null, null],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34", null, null],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35", null, null],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36", null, null],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37", null, null],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38", null, null],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39", null, null],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40", null, null],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41", null, null],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42", null, null],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43", null, null],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44", null, null],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45", null, null],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46", null, null],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47", null, null],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48", null, null],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49", null, null],
      ],
    }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F5",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A6:D55",
        updatedRows: 50,
        updatedColumns: 4,
        updatedCells: 200,
        updatedData: {
          range: "'export-records'!A6:D55",
          majorDimension: "ROWS",
          values: [
            ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
            ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
            ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
            ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
            ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
            ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
            ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
            ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
            ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
            ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
            ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
            ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
            ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
            ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
            ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
            ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
            ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
            ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
            ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
            ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
            ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
            ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
            ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
            ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
            ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
            ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
            ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
            ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
            ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
            ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
            ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
            ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
            ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
            ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
            ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
            ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
            ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
            ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
            ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
            ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
            ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
            ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
            ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
            ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
            ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
            ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
            ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
            ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
            ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
            ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
          ],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:38:29 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:38:29 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
              consumer: "projects/172856096362",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
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
      "Wed, 09 Feb 2022 13:38:30 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
              consumer: "projects/172856096362",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
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
      "Wed, 09 Feb 2022 13:38:50 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
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
      "Wed, 09 Feb 2022 13:39:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:31 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:31 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:32 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:32 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:33 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:33 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:34 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:34 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:35 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:35 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:35 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:36 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:36 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:37 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:37 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:38 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:38 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:39 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:39 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:40 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:40 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:40 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:41 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:41 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:42 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:42 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:43 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:43 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:44 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:44 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:44 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:45 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:45 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:46 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:46 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:47 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:47 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:48 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:48 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:48 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:49 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:49 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:50 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:50 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:51 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:51 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:52 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:52 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:53 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:53 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:53 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:54 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:54 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:55 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:55 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:56 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:56 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:57 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:57 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:57 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:58 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:58 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:39:59 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:39:59 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:00 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:01 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:01 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:01 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:02 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:02 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:03 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:04 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:04 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:05 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:06 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:06 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:07 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:07 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:08 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:08 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:09 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:10 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:10 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:11 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:12 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:13 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:14 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:14 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:15 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
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
      "Wed, 09 Feb 2022 13:40:16 GMT",
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
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
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
      "Wed, 09 Feb 2022 13:40:16 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 54, endRowIndex: 55 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:17 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 53, endRowIndex: 54 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:17 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 52, endRowIndex: 53 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:18 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 51, endRowIndex: 52 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:18 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 50, endRowIndex: 51 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:19 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 49, endRowIndex: 50 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:19 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 48, endRowIndex: 49 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:20 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 47, endRowIndex: 48 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:21 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 46, endRowIndex: 47 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:21 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 45, endRowIndex: 46 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:22 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 44, endRowIndex: 45 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:22 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 43, endRowIndex: 44 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:23 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 42, endRowIndex: 43 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:24 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 41, endRowIndex: 42 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:24 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 40, endRowIndex: 41 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:25 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 39, endRowIndex: 40 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:26 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 38, endRowIndex: 39 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:26 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 37, endRowIndex: 38 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:27 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 36, endRowIndex: 37 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:27 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 35, endRowIndex: 36 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:28 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 34, endRowIndex: 35 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:28 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 33, endRowIndex: 34 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:29 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 32, endRowIndex: 33 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:29 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 31, endRowIndex: 32 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:30 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 30, endRowIndex: 31 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:31 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 29, endRowIndex: 30 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:31 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 28, endRowIndex: 29 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:32 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 27, endRowIndex: 28 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:32 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 26, endRowIndex: 27 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:33 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 25, endRowIndex: 26 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:34 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 24, endRowIndex: 25 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:34 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 23, endRowIndex: 24 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:35 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 22, endRowIndex: 23 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:35 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 21, endRowIndex: 22 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:36 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 20, endRowIndex: 21 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:36 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 19, endRowIndex: 20 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:37 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 18, endRowIndex: 19 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:37 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 17, endRowIndex: 18 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:38 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 16, endRowIndex: 17 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:38 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 15, endRowIndex: 16 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:39 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 14, endRowIndex: 15 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:39 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 13, endRowIndex: 14 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:40 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 12, endRowIndex: 13 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:40 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 11, endRowIndex: 12 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:41 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 10, endRowIndex: 11 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:41 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 9, endRowIndex: 10 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:42 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 8, endRowIndex: 9 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:43 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 7, endRowIndex: 8 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:43 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 6, endRowIndex: 7 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:44 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 5, endRowIndex: 6 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:44 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 4, endRowIndex: 5 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:45 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 3, endRowIndex: 4 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:46 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 2, endRowIndex: 3 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:46 GMT",
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
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 1, endRowIndex: 2 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
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
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Wed, 09 Feb 2022 13:40:47 GMT",
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
