const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1644412349648";

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
      "64ed38608c90eef858443082e210dc382104415190a8053abd7b9d6e7b05df21de37609c0b290ff7fa2caee003f46c82c77c9c2a067d2a43b4f65c99fa498163a6a567023d3830e7c1275a6648bcb537082dabd52af644182c63aa68d1430fb8d3342299a74ab266db0a756e5fe8a5533988f9813d6f42edb18817b49e5e42cf2a9c1d193a6b7226a181a66ed946f91626e44a3e114df2e814bba59c9da29de4f68d1d4fc8ca73b2af5c3328862c9b1d0d0e8d1492047a3ebd31d5d4ea4dbd50b9c19e972fa9f76a760f3dccd4e3a5973edd997b0a2dacdaa5dde8e3b7b7b77fc00888ae295b210fe5eb0388301e81bf1c0ef7be11af214cc15ad1829f5fd3944b123b040000",
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
      "Wed, 09 Feb 2022 13:12:43 GMT",
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
      "Wed, 09 Feb 2022 13:12:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:47 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Wed, 09 Feb 2022 13:12:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:48 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "0000000002ffedd44b7282300000d0bb64ad8cc3a724dd4504d482488581619309102d224403c8a7d3bbd7e9b657e01de27d039a65ac6948cb4b568377305219499994ae70fc5c4d81bb3776f181290f67c486f88059a4e4ce72e77fc131d10339da6d7372295bbe392dd9679a57a3de2761b26a64f59a9e467778c41e29e543ffecfc3480dcf5a3a9a8ee32771d8ad71514f46ca118f741edd59ed9982889b7c7385b6a226d3db5dc54651dd1448401ba1d34de58989435460a3c7676687646af8785f698f694d85d5799f6a0852d5b8b40b52795172141504c0a74b079e1bee5bdddfc21afaf6716a99a2acd66b37fc002b0e15e08d690e2f581a221b4007f399076bcb3d7106b460513e0e717194e172f3b040000",
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
      "Wed, 09 Feb 2022 13:12:49 GMT",
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
      "Wed, 09 Feb 2022 13:12:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:52 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Wed, 09 Feb 2022 13:12:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:53 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Wed, 09 Feb 2022 13:12:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:54 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e4ac0e56a9d01ba41615821250814b0668140842248280d3bfd7e9b55f701fb10f1025091582dc2a464bf001fae84d9d249358d2fc561a3c3bc87bda0d246fbb8a48e9d193c36a6c6fce5ad7f4034aba4f266cd46c5cbde02bce4f8566b8c753b0b7a81e2ea15ec090f5c34ab6b89e4a21996ab3747951fcf6c4ee4d6917f3fd60ded2ab937a6e6820e858d372c6c4718de141e428655c712f8b9ab5998f15ec9835f15574b6bf602f67e26a7d8f31ced707d3b81ab17014d759e431ac32c30f3c549a4d649c213691cbc6c17b8c494ed16ebe69389ba3edf6be4b262f2f2fff8011a01dcf6a2a48f6fc6026abea08fce5406e3da7cf21741ad5b4063fbf5fc284273b040000",
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
      "Wed, 09 Feb 2022 13:12:55 GMT",
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
      "Wed, 09 Feb 2022 13:12:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Wed, 09 Feb 2022 13:12:58 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Wed, 09 Feb 2022 13:12:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:12:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "000000000002ffedd4417282300000c0bfe42c0e0dc69ade40b1c610951129f69209181504818422d8e9dfebf4da2fb88fd86f2092446acd9bf222afe00df402e261328c4d3b6acd7bc026dcdf1bc539526bef7aa0289e59be3d46c45e1553ba1991c05ad05515d4e7c5c599ca8553564e5dbb59e36ecc3a2c26dcc49a1c0e1e244e4f90c211b354c967ef907597f9365f37591f86b0a96eba8b23e2ef7df9c1985b987e9a4727dafa121e6dec791c6f467d4218da895df71a78498711cdbf5e8c797a87bbb6cd275b760db750c1634497d6a776edb49b6682c4469e1ae85453740b67d549669510233d5ee272f8f4f4f40f1800d955a9929aa78f0f2c84f100fce5c09bbe928f211c299454e0e717513b66e33b040000",
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
      "Wed, 09 Feb 2022 13:13:01 GMT",
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
      "Wed, 09 Feb 2022 13:13:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "d44b7282300000d0bb642d4e207ca43b908f0a29a0586237198190fac74451ecf4ee75baed157c8778df605d554c4a7a39edd811bc817eadd9c36a58428774f09127db3c46e7dbd5f0051f0791b89e100c3374ac1f375f5fb1b45b486a6259daacbd9b515fb174f5615da6d85026446b28dde22eb8cd5a8548d2b4c29a0759b4b1cf41be5332c36650e56ae82761d1c496a6627638ba46518e18ecfdc9b858368b519440b14cf56c19cfccc7ec40bb2c91b9b323c516f95cf9d49149d39ebb5c6d4262e5359eeec741e3f1b8bcbfd74e30ea5d8f7b98acb0827855175f915638fb430eadd3f0e5e5e51f3000ecde6e049374f3fc0019b63d007f39d04bdfb2e7102e5b0b26c0cf2f73c3789b3b040000",
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
      "Wed, 09 Feb 2022 13:13:08 GMT",
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
      "Wed, 09 Feb 2022 13:13:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "000002ffedd44b7282300080e1bb642d0e1251d21d520c58440a28e08681182a4f7989844eef5ea7db5ec1ef0effff0d224268d785fd2da71578032c12d09ccc635ef6077e72f7c4c563ac6c1a8113722b21e6a41f1d765840d8300e7af6712b88d45c31270c72e4f9ec5de32f855cad45edc3e9255c1e756b71e2b09b19c5edd1c05c5d5c2f8d5949de2ee16191dd3dd3b1c3732ada5869af82a56dca6d76478683c65d851e6ebcac6f9ff9415e65dc7a08ac939d33f5ea57538c3cd8eedde83014c40cb6e77af515c461ed78b1af190ab1f1d82a091579359db4021bcb7e94949676b022b6d661bfd483f9cbcbcb3f6006e858a7cf58c2f4f903282234037f73087b56d3e72136346a690b7e7e01f20f3d1e3b040000",
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
      "Wed, 09 Feb 2022 13:13:17 GMT",
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
      "Wed, 09 Feb 2022 13:13:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "300000d0bb642d0ec6016a772050b420d002956e321043357c828081d0e9ddeb74db2bf80ef1be418631e97b34b09234e019880c6e967899cbfa91cb7374b8e95da921773ed7b13c4da70ed212062fb7d0a523f26e10376a990b2805ca3060da1a52222549b0e5cc3e382611844a6b148d49ea989933d9d5fe4af9acf8da4771e6355f69b3a49c2d9e96fb3c468c868d078f4658cab1c9acd7a4d86df967e6fa3dd4637fe55946ce6de1b189aa389fb7895f47fea821d1c41aabdcdd8115a7a0b656c21c0ad5a8448b5379f42ad9ebf11ea7132e8cafeb939485ea7bf75604faf2e1e1e11fb000646a2f1de9d1e5fec15ad96c16e02f07348896dc873048d6910efcfc026b0e11fa3b040000",
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
      "Wed, 09 Feb 2022 13:13:25 GMT",
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
      "Wed, 09 Feb 2022 13:13:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "642d0e1f09a63ba220a0549128d40d8318908fa240f8757af73addf60abe43bc6f104611adeba029737a071f600845348da6675ef55b7e249f7eadec7dcf2c73527b88eb8e1e2c1963b6f34c33b2dbeced613cf3a39e6dd3456810c12ce2a5d3ceee49e1485684a473538a4a93ba0bbdbc043a14391e3eafb778d912b1eeba6360cbf698e4d04de0aa7286931a7e8546a7388ae0e9980b54bf2307a409bbad7b871a86d71e5f3a2647125bc51b75204c5b1709ee65cc707f5b68b9eff6d69cd3188d0f25a70817ca0e0eb30cd15aa32c335c73fe384549612e9febed6cfaf6f6f60f9800da3fd28ad641fafa4092119a80bf1c826678d0d710988615adc0cf2f8f8508823b040000",
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
      "Wed, 09 Feb 2022 13:13:32 GMT",
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
      "Wed, 09 Feb 2022 13:13:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "edd44b7282300000d0bb642d8e4a41e80e0415458afc61c38498228209128cd04eef5ea7db5ec17788f70d204298b1bca73526e01d8c70a14ed1b49869099f7d0507f2b97782021eefd56072ff76a95121b285ede1a572a01d0b24cdd91be210c5821e85ae0df5748daf721ddd5573de4aeadede0e2414ce7d441f35bad09b3cc644130a6d7e43429b5c7b59f2d64976544e0c226e662b2b2027a7a44dce95de4e3377cb25abe236cb96c578de351bd2f51c55a51f2eb5f8ad0979ba8bb93174abd24df28be76f1c6a552b52eafcfc91c62d0c4785122320f1ddb4d6a5381872e3e313720fd39797977fc004e0a1ad3accf2eaf98128a9ea04fce590f7638b9f43e81876b8033fbf0321d2f83b040000",
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
      "Wed, 09 Feb 2022 13:13:43 GMT",
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
      "Wed, 09 Feb 2022 13:13:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:13:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "64",
      "ad0e42a2a63b1411101415aa64c3c41804f913fca0d3bbd7e9b657f01de2bd00658c0b11b665ca0bf0053a2ae3011b1c25f570939e9e9b444d309acfc765b66065d0eeaff2773e15797fad8cfb79a966691db05548e20d26a40d5166224a1d534629a4ae7b37d5c45847b058e3503b7651e23b15beaabe1dd54a8c60e14ccc1aa7ab0096b3c5c5dae4e271d264bdd30dad1cde76197b06626ba81a4c33331e4b9df7c095e20d153691fc7917a3cb4c21753b3cbaf6ecec9cad0b8e0f8627c44417b6b95842e2efeffda2a6f639dd8db63ab2ace5c6dd127272d4180e3e3e3efe013dc01f55d2701126ef0f1484710ffce510b65dc5df434c396d78037e7e014fa596eb3b040000",
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
      "Wed, 09 Feb 2022 13:13:53 GMT",
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
              service: "sheets.googleapis.com",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Wed, 09 Feb 2022 13:13:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
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
              service: "sheets.googleapis.com",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Wed, 09 Feb 2022 13:14:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
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
      "Wed, 09 Feb 2022 13:14:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "4b8e82301800e0bb74ad045068991dc6f0541c0409ba21b5fe18441e4211c4ccddc7cc76aec07788ef8d2863d0b609af7228d1177a515913987016f5f8298ea167c463cb02abae23bf11f17a05c7cc319ca23497e9e066d229c21ebec13ce08fc321be7050c9032f4c333a5d9f0e86abf572a4a832b40d5689e6c15ebc25ba0f9c77e581ec45b761f39d1a7a797e54e275ba7649b5ed2937711ff80c574d6da60597874daedbc56849d4f5355c2ef3d4571c91da854525e8589feadb4be748ccce46426e16914bd7bebb67fb3e9cba9a457383ee55391c76a11c1fd3a5519adf7ec184c964f20f9a2118eaac8136c93e1f2c144d9ba1bf1c12feaae133c40a68030dfaf905273c94133b040000",
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
      "Wed, 09 Feb 2022 13:14:51 GMT",
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
      "Wed, 09 Feb 2022 13:14:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "1f8b08000000000002ffedd4476e83400040d1bbccda4294803cd9d97448001b3065832843e8a0010fc651ee1e946daee07781bffbdf20cd7334cfc932b66800ef604b5948e554469f42423f3d0b8e421c565b6767632caa0a73abfd6b3fc6366a5074adb920591a41be159a41cb4f376a0bb5aa71c7d0ba53c0ac33d54d2903d67953fb8ff364331553b6b2d764c451897f49f5de29f8ce94d654aa9fbacf8915e178b6d89cce1cb047da0bba3785d22bd140fad3632d7b0c73458c2dd95f87813784b316589f829684d80dfccca8e8dcd1a4341b968bc0cc77914fc23dca9a73703b291b816e27316b4cb8e3e38b3f522f2f2fff8003408fa9c6684eeafd071c0fe101fccd2159b609ed8738a314230c7e7e01fdd56ba33b040000",
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
      "Wed, 09 Feb 2022 13:14:57 GMT",
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
      "Wed, 09 Feb 2022 13:14:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:14:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "0002ffedd44b7282301800e0bb642d0e4fe5efce28dad6680b568c6e9c80296fd0844aa4d3bbd7e9b657f03bc4f78d581c73298f6d53f01a3da11b3361180f237d42af7afff16e082d9be35111689ace3edf5eea144c2069deee6c4657302bf1787321065fa89c4a329b420fdd645d490ac64eb34eb04c0f9527a1b890af704f441707548edd3e73bc6e5e57be72ccac202cce2ef972da84b64efa94ef605e6d192e71eb3a1070f7d92ecd12ba32aa736bede7ae6a126e5711bdaa30ccb73c1925913a49e7b5f005266dc06abaa98cd18adab0e43ab65512871eeb66e9b43958625158d4dbebc38787877fd0007175ce0497c7ecfe81e5000cd05f0ec7f676e6f7213067820bf4f30ba68ba2713b040000",
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
      "Wed, 09 Feb 2022 13:15:14 GMT",
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
      "Wed, 09 Feb 2022 13:15:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "cb",
      "72",
      "82",
      "30",
      "00",
      "40",
      "d1",
      "7f",
      "c9da3a047994ee44304e4d0b484461c3f04815a38624f8804effbd4eb7fd05cffe6eef3728aa8a2a95779cd13378037da13be36a5c6ad3ed551b48a0d2a54bc449f85d20e534dac4905cf9949852bc1c8708de7b74c67bdf338e88bb81c950eac2238c1adc52bdce64b46e36deec16a3244ebc4737749f8ad47ee86490e1eed5d3a8c001cbab89b0a1d198591ad721b70743f25524f1e1522ed8c1ba68080ecbb4df58ab9c0a794abebc936e930fb12ed78b106bd26261dd73a4aa792df6459b54d6ce4c8db3768f66fe9c1354aafe66cbc936c958591fcc06bfebbbf1d3d3d33f6004e8bd6d245579f3f8c1c4749c11f89b43def52d7d1cc2a585a412fcfc0251b351623b040000",
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
      "Wed, 09 Feb 2022 13:15:21 GMT",
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
      "Wed, 09 Feb 2022 13:15:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "08000000000002ffedd44b7282300000d0bb646d1d82a2a4bbf88152942828bf0d03345589e59310143abd7b9d6e7b05df21de3748f39c0a91b415a32578057daaa2713ece141c76ca7020e5e0727fb13597cd56eacb4fe76be636d3b4c84d79777a339c0d5941f131f2a45d9dce177e62f3ab01579ac4eb0595a5d7349696f481a3c2c2c271850b88dc4d0ed38aefe9c663f296c915c9b4bef51b352c77c45424b6b33208dcc13726fb6344bd17091d7d8e3046c432102b0f439438a80eafd389525b5127d76f7c650bff1c3166ccdcf6f81edbb11e914e908dd83931ddb910b6412854a69f3ffc2c21f3603b1d3f3d3dfd034680deeb0ba722b93c3e9868088dc05f0e49dbd7f431c482a69c72f0f30b3db7b11f3b040000",
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
      "Wed, 09 Feb 2022 13:15:31 GMT",
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
      "Wed, 09 Feb 2022 13:15:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "000002ffedd44b7282300000d0bb642d4e1450d29d744051a9517eca86011a448311420ac44eef5ea7db5ec17788f70dd23c276d9b883b250cbc01994ed1381f677071ece0c3c750a322e4a74d796d2baace8299d4f5d3e47ef5aaa9e58a541f82be74ac9b6c951346bbc5b9b6def77164affdf39c19595b7f15b155f78f9207bee735ceca88112fb0e26bcade36b1bdca279b708896587671b66cc22a27283856e60ecf98372f5cdbd832c1f93e9c622c7bd1b03b32b2839567d5d22001d328ec54a4e9ae1d15f4d6f4db75f431880b75bde18abc2e4dccd2987c363e54232753a02dd235949231878e5f5e5efe01234086fac2499b5c9e1fa83a4223f0974322644d9e439824e584839f5f3630db493b040000",
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
      "Wed, 09 Feb 2022 13:15:44 GMT",
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
      "Wed, 09 Feb 2022 13:15:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:15:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              service: "sheets.googleapis.com",
              quota_limit: "ReadRequestsPerMinutePerUser",
              consumer: "projects/172856096362",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Wed, 09 Feb 2022 13:16:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              service: "sheets.googleapis.com",
              quota_limit: "ReadRequestsPerMinutePerUser",
              consumer: "projects/172856096362",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Wed, 09 Feb 2022 13:16:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:16:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Wed, 09 Feb 2022 13:17:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
