const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1644413845373";

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
      "4d",
      "72",
      "82",
      "300040e1bb646d1c0b22d29da811412120e5c70d032116a140048460a777afd36dafe07780b77cdf202684b66dd4d505adc03b186341999269325b05fdece1e2379dda9e7cf37a560aee093ab988e2e382bb9dc436e18e6d47440298e758b2791de4773fadcf66b7dc8fbdcad52fef0413c203b6342bebf1b8ebbef75187fd5c5457b7e419ab36479b0c822afb57dc70d78f2d7cd69c83ed1e2e91b3db15149550dbef7dae4a9551afad140dce8a92363ce1c144712f176386ef7398d921d92642a847060ce091999aae590b19099f28356cc52e789aad3751978925332eb8746e4e387d7979f9074c00e5ecdad036ba3e7f204a8a32017f7388ba91d1e721541a37b4013fbf856e7f453b040000",
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
      "Wed, 09 Feb 2022 13:37:27 GMT",
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
      "Wed, 09 Feb 2022 13:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
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
      "Wed, 09 Feb 2022 13:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
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
      "Wed, 09 Feb 2022 13:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
