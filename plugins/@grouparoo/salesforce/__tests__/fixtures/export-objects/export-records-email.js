const nock = require("nock");

nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:10 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vD72LFh6EeydQ2FF-N78kQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:10 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:11 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:11 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:11 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vNc-41h6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:11 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:12 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vRZEHFh6Eey-ibvwZKzoKw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:12 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:13 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:13 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:13 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vYDFVFh6Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:13 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:13 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vcA_XVh6EeyvHtlMSAHepQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:13 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:14 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:14 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:14 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vi_Kd1h6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:14 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:14 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=vnVen1h6EeyWZrGRir5Mvw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:14 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:16 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:16 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:16 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=v39UFlh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:16 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:16 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=v8U3k1h6EeyDCOvdtwN1oA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:16 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:17 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:17 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:17 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=wDCi-Fh6Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:17 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:21 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=wkNWnlh6Eey8UivMKYY8FQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:21 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:21 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:21 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:21 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=wsP4IVh6EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:21 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:22 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=wwk-RFh6EeyYkTVP1aeHsA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:22 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:24 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:24 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:24 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=xBkn7Vh6Eey5zu9w7G84nA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:24 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:27 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=xiu0fVh6Eey-dn_tEHi5cA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:27 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:28 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:28 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:28 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=xqbXoFh6EeyIypl49-F3Nw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:28 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:31 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=yLYwCFh6EeybaykJvdMrPQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:31 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:32 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:32 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:32 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=yToFx1h6EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:32 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:33 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=yYA2uVh6Eey2Kkdp3AF1Pw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:33 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:33 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:33 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:33 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=ydraFFh6EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:33 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:34 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=yiCVgFh6Eey2Kkdp3AF1Pw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:34 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:36 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:36 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:36 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=yzdcrlh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:36 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:39 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=zUcpFlh6EeyIB9XNZqgAOg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:39 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:40 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:40 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:40 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=zbjWrlh6EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:40 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:40 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=zf8vbFh6EeyyJMPH8zHQKQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:40 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:42 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:42 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:42 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=zy5f-Fh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:42 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:43 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=z24oqlh6EeytN3Voge8ONA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:43 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:45 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:45 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:45 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0KKJvVh6EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:45 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:46 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0ZK1m1h6EeytN3Voge8ONA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:46 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:47 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:47 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:47 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0fmOI1h6EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:47 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:47 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0j77t1h6EeyjZ8k5rYS1Rw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:47 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:48 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:48 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:48 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0qOJt1h6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:48 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:48 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0uxSjFh6EeyL4ssiR0rrYw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:48 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:49 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:49 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:49 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=00dEIFh6EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:49 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:49 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=04czNVh6EeyC2esfDzo7gw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:49 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:50 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:50 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:50 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=0--49Vh6EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:50 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:51 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1C5H9lh6EeyO93W7vcl27w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:51 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:51 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:51 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:51 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1JITs1h6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:51 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:52 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1NsCplh6EeyTcEkkmBuHog; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:52 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:52 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:52 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:52 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1Teh3Vh6Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:52 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:54 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1hYbB1h6EeyLzbm0BjOtVQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:54 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:54 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:54 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:54 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1oLnEVh6EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:54 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:55 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1uS2AFh6Eeyo9TnfhXRfZQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:55 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:56 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:56 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:56 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=10ngNVh6EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:56 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:56 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=15Fw_Vh6EeyY8AHKHuPR1w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:56 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:57 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:57 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:57 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=1_ZzpVh6Eey6ZPWAcW2cvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:57 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:57 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2D4rplh6EeydQZvbrl7dcA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:57 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:58 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:58 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:58 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2JQ6n1h6EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:58 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:58 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2NjkV1h6Eey1oOfl3EEm4g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:58 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:01:59 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:59 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:59 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2UALBVh6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:01:59 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:00 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2YPx3Fh6EeyhoRVR421NKA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:00 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:00 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:00 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:00 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2drEXVh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:00 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:01 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2i3F5lh6EeyEbYGe3ZzxHg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:01 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:01 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:01 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:01 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2ovr-1h6EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:01 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:02 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2tCWcFh6Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:02 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:02 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:02 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:02 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=2y00zlh6Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:02 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:03 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=23Fpqlh6EeybHUN-0yuozg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:03 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:03 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:03 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:03 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=29Du8Vh6Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:03 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:04 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3Bm3X1h6Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:04 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:04 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:04 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:04 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3HF031h6EeyliYv14dnYlA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:04 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:05 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3LXQi1h6Eey8c7d9lcqytw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:05 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:06 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:06 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:06 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3RZAEVh6EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:06 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:06 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3V4elFh6Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:06 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:07 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:07 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:07 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3cgDolh6Eey5zu9w7G84nA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:07 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:07 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3gyHalh6Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:07 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:08 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:08 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:08 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3mUu61h6EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:08 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:08 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3qonHlh6Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:08 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:09 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:09 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:09 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3wKmylh6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:09 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:09 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=30d4SVh6EeyU3rFi5WHwkQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:09 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:10 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3581fFh6EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:10 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3-O4F1h6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:10 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=3-dhjVh6EeyEbYGe3ZzxHg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:10 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:11 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4D6CsFh6EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:11 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4D8euVh6EeysJJeUNiKnFA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:11 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4IN68Fh6EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:11 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:12 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4OBnNFh6EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:12 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4OBn7Fh6EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:12 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4SURWFh6EeydZzOrnJ07VA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:12 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:13 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4Z_m0Fh6Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:13 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4aCDtVh6EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:13 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:14 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4eP0tlh6EeyeFBM4_qXQCA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:14 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4l9m7Fh6EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:14 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4mDF3Fh6EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:14 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:15 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4qQQYlh6EeyZL4EbkhNVJQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:15 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4vvN1lh6EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:15 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=4vxpiVh6EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:15 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:16 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=40DFwFh6Eeyvku_O6BbQ_g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:16 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:17 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=47AB_Fh6EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:17 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=47B34Fh6EeyMZNNSX2YTPQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:17 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5A0WKVh6EeyHBT-u6fUbOw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:17 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:18 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5HmUTVh6EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:18 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5HpXdlh6EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:18 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5NPoiVh6EeyJWREqApFYgw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:18 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:19 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5TMgWVh6EeyUEl8mbOJ9IQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:20 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5Xr-GFh6EeyFAmcCGLQQKQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:20 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:19 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5TKrL1h6EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:19 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:20 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:20 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:20 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5eUyS1h6EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:20 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:21 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5iYyV1h6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:21 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5iqfPlh6EeyJWREqApFYgw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:21 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5pOaWFh6EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:21 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5pQ2NFh6EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:21 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:22 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5tfPhlh6Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:22 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:23 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=50BValh6EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:23 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=50E_kVh6Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:23 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=54T_AVh6EeydQZvbrl7dcA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:23 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:24 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5_Bro1h6EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:24 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=5_bTqFh6EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:24 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6DTul1h6Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:24 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:25 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6IwOoVh6EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:25 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6Ixdelh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:25 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6NBqs1h6EeyHBT-u6fUbOw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:25 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:26 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6Smu51h6EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:26 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6S63UVh6EeyAWjkoW7aVPw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:26 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6W6mgVh6EeyBFvnI-6WK_Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:26 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:27 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6dlO_lh6EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:27 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6dl2xFh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:27 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6h2rHlh6EeyY8AHKHuPR1w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:27 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:28 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6ojJKFh6EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:29 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6szXA1h6EeySTOfsWtLvlw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:29 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:28 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=6o5Hflh6EeyIypl49-F3Nw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:28 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:30 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=64rQblh6Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:30 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=68_vJFh6Eeyn_W27sUO-lQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:31 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:31 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:31 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7DCF71h6EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:31 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:30 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=69Z_UVh6EeyZoq-wiVRxoA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:30 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:31 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7HfvnVh6Eey46blboab8Pw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:31 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:32 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7MgKzVh6EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:32 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7NebKVh6EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:32 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7Q1RrFh6EeyU3rFi5WHwkQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:32 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:33 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7WaUnVh6Eey5zu9w7G84nA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:33 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7WhpvVh6Eey11-kTtvOm-g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:33 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7au0f1h6EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:33 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:34 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:34 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:34 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7ggE0Fh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:34 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:34 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7kzWVVh6Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:34 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:36 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:36 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:36 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=71BjFVh6Eeytypv37ZaRFQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:36 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:37 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=75ga2Fh6Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:37 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=79cfdlh6EeyQPCm5SVFt0w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:37 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=7_CarVh6EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:37 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8CG9OFh6EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:37 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:38 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8DZWZ1h6Eeyvku_O6BbQ_g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:38 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8JQGv1h6EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:38 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8JsLclh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:38 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:39 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8NgU2Vh6Eeym7G1gUsfJ5w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:39 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8TExjFh6EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:39 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8TeaY1h6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:39 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:40 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8XXbllh6EeyZUwcFykSF4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:40 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8ecUIlh6Eey6ZPWAcW2cvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:40 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8efXC1h6EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:40 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:41 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8iwzH1h6Eey2bZFf5emhwg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:41 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:42 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:42 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:42 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8owtpFh6Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:42 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:42 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8tCw-Fh6EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:42 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:43 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:43 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:43 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8yeDQ1h6EeyWX5vRG1Jg8w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:43 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:43 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=82wtu1h6EeyUoy2-DGDOnw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:43 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:44 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:44 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:44 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=8-xaNlh6EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:44 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:44 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9DEqoVh6EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:44 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:45 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9F25P1h6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:45 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9KI8U1h6EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:45 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9LN6hVh6EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:45 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9OppRFh6EeyhoRVR421NKA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:45 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:46 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9UJMq1h6Eey5zu9w7G84nA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:46 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9Ui1tVh6EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:46 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:47 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9YbQBFh6EeyxmZ8AWbmhcg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:47 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9d8pbVh6EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:47 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9eSAOFh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:47 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:48 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9iP6Clh6EeyHBT-u6fUbOw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:48 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9pKbClh6EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:48 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9pNdvlh6EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:48 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:49 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9trHHVh6Eey2rlvbG-ExKg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:49 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=90Po1lh6EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:49 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=90SF-lh6EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:49 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:50 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=94hE5Vh6EeyU3rFi5WHwkQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:50 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:51 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9_IDbFh6Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:51 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=9_JSG1h6EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:51 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-DY4bVh6EeypnlU60zfi1A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:51 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:52 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-Iy9FFh6EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:52 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-JJiL1h6Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:52 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-NJRg1h6EeybHUN-0yuozg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:52 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:53 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-Slyelh6EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:53 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-S9lvFh6EeyZoq-wiVRxoA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:53 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-W5Dc1h6Eeyuu03IS1KN1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:53 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:54 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-ddlLVh6Eey11-kTtvOm-g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:54 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-dezLlh6EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:54 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-hvBwlh6Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:54 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:55 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-nTdbVh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:55 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-nuU2Vh6EeyliYv14dnYlA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:55 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-rjr41h6EeySTOfsWtLvlw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:55 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:56 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-x8Ae1h6EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:56 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-x_q11h6Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:56 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-2be_Vh6Eey2rlvbG-ExKg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:56 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:57 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-79e1Fh6Eey6ZPWAcW2cvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:57 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=-7_Un1h6EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:57 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_ANtZVh6EeylAredv_LFqg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:57 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:58 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_HFxblh6EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:58 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_HUaMVh6EeyQPCm5SVFt0w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:58 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:59 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_LcGIFh6EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:59 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_R55kVh6Eeytypv37ZaRFQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:02:59 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_R7IBlh6EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:02:59 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:00 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_WKIPFh6EeyhoRVR421NKA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:00 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_coj0Vh6EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:00 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_cqY4lh6EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:00 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:01 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_g70Flh6EeyW2ier_N9Tjg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:01 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:02 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_slEHVh6Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:02 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_slDjFh6EeyAWjkoW7aVPw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:02 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:03 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_xFwW1h6EeyUoy2-DGDOnw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:03 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:03 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:03 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:03 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_2cKtlh6Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:03 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:04 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=_6wC2Fh6Eeyn_W27sUO-lQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:04 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AAJgM1h7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:04 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AAbzwFh7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:04 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:05 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AFFqt1h7EeyMZNNSX2YTPQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:05 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AEbjNVh7EeyeFBM4_qXQCA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:05 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AJj6j1h7EeyC5FvQ_hJPdg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:05 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=ALU1YVh7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:05 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:06 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=APb5G1h7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:06 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=APye0Vh7EeyzgHUNbHD28g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:06 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AVHDQlh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:06 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AVIRt1h7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:06 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:07 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AZYfw1h7EeyhoRVR421NKA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:07 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:07 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:07 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:07 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=Ae0Y5Vh7EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:07 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:08 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AhDNolh7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:08 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AjF0x1h7Eeym7G1gUsfJ5w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:08 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AoggqVh7Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:08 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=Ao9MnFh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:08 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://login.salesforce.com:443", { encodedQueryParams: true })
  .post(
    "/services/Soap/u/42.0",
    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header/><se:Body><login xmlns="urn:partner.soap.sforce.com"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>'
  )
  .once()
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil="true"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil="true"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>',
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:09 GMT",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=As_XiVh7Eey2rlvbG-ExKg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:09 GMT; Max-Age=31536000",
      "Content-Type",
      "text/xml; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "1838",
      "Connection",
      "close",
    ]
  );
nock("https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443", {
  encodedQueryParams: true,
})
  .get("/services/data/v42.0/query")
  .query({
    q: "SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27",
  })
  .once()
  .reply(
    401,
    [
      {
        message: "Your password has expired. Please reset your password.",
        errorCode: "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
      },
    ],
    [
      "Date",
      "Wed, 08 Dec 2021 23:03:09 GMT",
      "Set-Cookie",
      "CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:09 GMT; Max-Age=31536000",
      "Set-Cookie",
      "LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:09 GMT; Max-Age=31536000",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Robots-Tag",
      "none",
      "Cache-Control",
      "no-cache,must-revalidate,max-age=0,no-store,private",
      "Set-Cookie",
      "BrowserId=AzfBOlh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:09 GMT; Max-Age=31536000",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );

nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:10 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:10 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:10 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Az6e41h7EeyUEl8mbOJ9IQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:10 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:11 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BBqAWVh7EeydQZvbrl7dcA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:11 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:12 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BHMoEVh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:12 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BHh-nVh7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:12 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BLi8E1h7Eey2bZFf5emhwg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:12 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:13 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BRlTA1h7EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:13 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BR_iCVh7EeyIypl49-F3Nw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:13 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BV2H0Fh7Eey2rlvbG-ExKg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:13 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:14 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:14 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:14 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BgAJw1h7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:14 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:15 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BkgOrFh7EeyFAmcCGLQQKQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:15 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BpgDN1h7EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:15 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BrXrdlh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:15 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:16 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BvqWNFh7Eey2bZFf5emhwg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:16 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=B2XaoFh7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:16 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=BvmrMlh7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:16 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:17 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=B6qFZFh7Eey46blboab8Pw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:17 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:17 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:17 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:17 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=B-1aolh7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:17 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:18 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CAu3rVh7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:18 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CDHdz1h7EeyU3rFi5WHwkQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:18 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CIlzYFh7EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:18 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:19 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CM2BmVh7EeyFAmcCGLQQKQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:19 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CSWzp1h7EeyliYv14dnYlA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:19 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CShLRlh7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:19 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:20 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CWnonlh7EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:20 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:20 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:20 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:20 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CYf3d1h7EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:20 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:21 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CdwyS1h7EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:21 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Cdg6D1h7Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:21 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CkDnq1h7EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:21 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CkEOx1h7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:21 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:22 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CoVDqVh7EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:22 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Cu2idFh7EeyIypl49-F3Nw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:22 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Cu2hvVh7Eey6ZPWAcW2cvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:22 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:23 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=CzJMKVh7EeyC5FvQ_hJPdg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:23 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=C4p-NVh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:23 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=C4tB0lh7EeysJJeUNiKnFA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:23 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:24 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=C87aw1h7Eey2rlvbG-ExKg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:24 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:25 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DC6t-lh7EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:25 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DDYn81h7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:25 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DHMwZFh7EeydZzOrnJ07VA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:25 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:26 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:26 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:26 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DMrtq1h7Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:26 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:26 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DQ9JcVh7EeydZzOrnJ07VA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:26 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:27 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DWqImFh7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:27 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DXoY2Fh7EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:27 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DcAi4lh7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:27 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Db8RZFh7EeyHBT-u6fUbOw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:27 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:28 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DhffnVh7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:28 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DhhVgVh7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:28 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Dlw7_1h7EeyeFBM4_qXQCA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:28 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:29 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DrMOQFh7Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:29 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DrQf3Fh7EeyWX5vRG1Jg8w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:29 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=DvgHN1h7EeyJWREqApFYgw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:29 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:30 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=D1uq-Fh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:30 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=D1rnQFh7EeyAWjkoW7aVPw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:30 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=D6DxBlh7Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:30 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:31 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EAgXflh7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:31 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EAfwG1h7EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:31 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EEzBk1h7EeyQ-kfag-6bqg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:31 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:32 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EKSlYVh7EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:32 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EOkn9lh7EeyZL4EbkhNVJQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:32 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EK1YUlh7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:32 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:34 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:34 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:34 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EbpbKlh7EeykSHfM6rIoPg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:34 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:34 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=EhdHqVh7EeyU3rFi5WHwkQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:34 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:35 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:35 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:35 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Em8FLVh7EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:35 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:35 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=ErNgwVh7Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:35 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:36 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Ewtr41h7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:36 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=ExFfb1h7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:36 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=E0_Ig1h7Eeym7G1gUsfJ5w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:36 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:37 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=E2arTlh7Eey6ZPWAcW2cvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:37 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=E6X-F1h7EeyQPCm5SVFt0w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:37 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=E6ujolh7Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:37 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:38 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:38 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:38 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FANg_Vh7EeysJJeUNiKnFA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:38 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:38 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FEgxhFh7Eey1oOfl3EEm4g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:38 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:39 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:39 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:39 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FLF6y1h7EeyQPCm5SVFt0w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:39 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:39 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FPX9m1h7EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:39 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:40 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:40 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:40 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FVXRKFh7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:40 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:40 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FZ3WlFh7EeyBFvnI-6WK_Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:40 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:41 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Ffs5Qlh7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:41 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FkLJPlh7EeyZUwcFykSF4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:41 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FdLJM1h7EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:41 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:42 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FqB5YVh7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:42 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Fq9Gq1h7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:42 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:43 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=FuhYYlh7Eey1oOfl3EEm4g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:43 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=F0ePClh7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:44 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=F49GMFh7Eeyo9TnfhXRfZQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:44 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:43 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=F0bLglh7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:43 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:52 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:52 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:52 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HJ6-71h7EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:52 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:51 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:51 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:51 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HEAkHlh7EeyMKw1-AYS3mQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:51 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:53 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HOUWoFh7EeyAdf-wxTUaxg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:53 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HVKmNFh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:53 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HVLzpFh7EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:53 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:54 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HZpdGlh7Eey8c7d9lcqytw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:54 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HfMrUlh7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:54 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HfK2FFh7EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:54 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:55 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HjcSx1h7EeySTOfsWtLvlw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:55 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:55 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:55 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:55 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HqLz2Fh7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:55 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:56 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:56 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:56 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HqptoFh7EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:56 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:56 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=HugS51h7EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:56 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:57 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Hz8z4Fh7Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:57 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=H0SyB1h7EeyIypl49-F3Nw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:57 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=H4PeFVh7EeyW2ier_N9Tjg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:57 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:58 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=H9wP91h7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:58 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=ICCTH1h7EeybHUN-0yuozg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:59 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IHyV2lh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:58 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=H-G1NFh7EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:58 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:03:59 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IMTCHFh7Eey2MBXGPn9T-A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:03:59 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IOOUV1h7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:03:59 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:00 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IS6oBlh7EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:00 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IShmSVh7Eeyuu03IS1KN1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:00 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IZAoQlh7EeyZoq-wiVRxoA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:00 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IZaQp1h7Eeytypv37ZaRFQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:00 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:01 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IdVIAFh7EeyxmZ8AWbmhcg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:01 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Ii1Svlh7Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:01 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IjKpw1h7EeyliYv14dnYlA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:01 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:02 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=InH89Fh7EeypnlU60zfi1A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:02 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Isovl1h7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:02 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=IssZ1lh7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:02 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:03 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Iw6yllh7Eey3YT8blHCcgg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:03 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=I2a9OVh7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:03 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=I2fOVFh7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:03 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:04 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=I6tnOlh7EeyY8AHKHuPR1w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:04 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:05 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JBQ7tVh7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:05 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JBpVx1h7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:05 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JFiXBlh7EeyxmZ8AWbmhcg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:05 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:06 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JMLxs1h7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:06 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JMmoVlh7Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:06 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JQfqE1h7Eey1oOfl3EEm4g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:06 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:07 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JV5ux1h7EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:07 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JWUlklh7EeyZoq-wiVRxoA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:07 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JaMYiVh7EeylAredv_LFqg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:07 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:08 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Jhf6i1h7EeyKMtuKxDrPhw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:08 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Jh4U9Vh7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:08 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JlykTFh7EeybHUN-0yuozg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:08 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:09 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JsV5Dlh7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:09 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JsWf41h7Eeytypv37ZaRFQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:09 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:10 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=JwnUMlh7Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:10 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=J2DOJ1h7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:10 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=J2D06lh7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:10 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:11 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=J6VRwlh7EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:11 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:11 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:11 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:11 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KAu0q1h7EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:11 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:12 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KFL2EVh7EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:12 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:12 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:12 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:12 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KLw_71h7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:12 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:13 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KQDCT1h7Eey2MBXGPn9T-A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:13 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:13 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:13 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:13 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KVZcTFh7EeyM0i_-tTazig; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:13 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:14 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KZrfQlh7EeypnlU60zfi1A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:14 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:14 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:14 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:14 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KdSz91h7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:14 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:15 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KibzJ1h7EeyC6OfNeyBcAw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:15 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KkAg6Vh7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:15 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Km7RoFh7EeyC5FvQ_hJPdg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:15 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:16 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Ktl6QVh7EeyJU0OzAf29qQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:16 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=KtnIxVh7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:16 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Kx3WEFh7EeyHBT-u6fUbOw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:16 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:17 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=K4aCvlh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:17 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=K4x2blh7EeyWX5vRG1Jg8w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:17 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:18 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=K8re6lh7Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:18 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LCLDLFh7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:18 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LCho1Fh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:18 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:19 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LGbQ21h7EeyZL4EbkhNVJQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:19 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LL8C_1h7Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:19 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LL94HVh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:19 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:20 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LQOGLlh7EeyZL4EbkhNVJQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:20 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LWFdilh7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:21 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LakU9lh7EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:21 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:20 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LWFd6Fh7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:20 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:21 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:21 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:21 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Lgjnz1h7Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:21 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:22 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Lj53MFh7EeysJJeUNiKnFA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:22 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LlE7pFh7EeyZUwcFykSF4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:22 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Lqtp1lh7EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:22 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LqvfIFh7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:22 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:23 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=LvMhKFh7EeyUoy2-DGDOnw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:23 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=L0uhm1h7EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:23 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=L02da1h7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:23 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:24 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=L5Byhlh7EeylAredv_LFqg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:24 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=L-gIcVh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:25 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MCzZTlh7Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:25 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:24 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=L-2G-lh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:24 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:26 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:26 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:26 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MPcH7Fh7Eeyv0ruCKoE_8Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:26 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:27 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MT6-dVh7Eeyvku_O6BbQ_g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:27 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MZzkmFh7Eey5zu9w7G84nA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:28 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MeURYlh7Eeym7G1gUsfJ5w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:28 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:28 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:28 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:28 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Mj1qqlh7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:28 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:27 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MSO9MFh7EeysJJeUNiKnFA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:27 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:29 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MoIT-Fh7EeyAGz87X4fn4A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:29 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:30 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MutdG1h7EeyYd1V_6agWvg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:30 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=MzXTp1h7Eeyn_W27sUO-lQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:30 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=M06zaVh7Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:30 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:31 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:31 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:31 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=M5KZ_Fh7EeyQPCm5SVFt0w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:31 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:32 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:32 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:32 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NEcdE1h7EeyeNn1uE1UY3w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:32 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:32 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NIhFA1h7Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:32 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:33 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NN6iAFh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:33 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NOB2flh7EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:33 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NSNy_Fh7EeySTOfsWtLvlw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:33 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:34 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:34 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:34 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NXxB9lh7EeyLFie84xBiBg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:34 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:34 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NcDrb1h7EeyQ-kfag-6bqg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:34 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:35 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:35 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:35 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NhgzS1h7Eey5OiGgPRvSyQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:35 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:35 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NlzdRlh7Eeyi-efpKGvgzw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:35 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:36 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:36 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:36 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Nu36NFh7Eeyschlx2ex69w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:36 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:37 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:37 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:37 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=N0xGzVh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:37 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:37 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=NzMZNlh7Eey359tHxWngSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:37 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:38 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=N7MfAlh7EeysNOft76gvAQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:38 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=N_fvrVh7EeyhoRVR421NKA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:38 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OECRqVh7Eey-Va_ISpDs1Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:38 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:39 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OE-FxFh7EeyjRD1yo_XPag; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:39 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OJVohFh7EeybebeNC_RoSA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:40 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:40 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:40 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OO3B-Vh7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:40 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:39 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OI0D61h7EeyMZNNSX2YTPQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:39 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:40 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OTJsB1h7Eeyo9TnfhXRfZQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:40 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:41 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OX96XFh7EeyMZNNSX2YTPQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:41 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OYpPc1h7EeyWX5vRG1Jg8w; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:41 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OcSZYFh7EeyzgHUNbHD28g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:41 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:42 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OhuTE1h7Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:42 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OiGt0Fh7EeyZoq-wiVRxoA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:42 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OmCLaFh7Eey2MBXGPn9T-A; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:42 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:43 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:43 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:43 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OsfYsFh7EeyAWjkoW7aVPw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:43 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:43 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=OwzRL1h7EeyeFBM4_qXQCA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:43 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:44 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:44 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:44 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=O3UIZlh7EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:44 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:44 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=O7nZwlh7Eey1oOfl3EEm4g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:44 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:46 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PJk9Rlh7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:46 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PO9Mw1h7EeyTlYHmZ_gxHA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:46 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PQKGelh7Eey11-kTtvOm-g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:46 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:47 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PTP2plh7Eeym__NmoqQlnA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:47 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:48 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PbCg6Fh7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:48 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PfTVp1h7EeyUoy2-DGDOnw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:49 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PlsRbFh7Eey8rwUuS5QMLg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:48 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PbhpC1h7EeygVw-7_gEOtg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:48 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:49 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PqKh-lh7EeyxmZ8AWbmhcg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:49 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PsPlx1h7Eey5ST3VMfIl3Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:49 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:50 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:50 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:50 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PwM4z1h7Eey11-kTtvOm-g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:50 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:50 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=PwhB0Vh7Eeym__NmoqQlnA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:50 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:51 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=P3DHqlh7EeyeLnMntEjWfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:51 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=P3hoKFh7Eey-wZkHrgB01g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:51 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=P7VxBFh7Eey_v09U3b08lg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:51 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:52 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QA0Hzlh7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:52 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QBRZ-Fh7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:52 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QFFjiVh7EeyC5FvQ_hJPdg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:52 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:53 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QL0dbVh7Eey0Qgv87YmHfQ; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:53 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QL1EElh7Eey11-kTtvOm-g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:53 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QQHusVh7EeyW2ier_N9Tjg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:53 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:54 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QVdhR1h7EeyQ0Ck7YMyf5g; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:54 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QV3J5Fh7EeyF78Fix_Skzg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQPKm.35Fh4pfMGjZb.BBgWBPFH2HVg.8Sulje6Bw3cykKpQKLfNC1cz1ypdgJnVRm2XR6urUPNcqDeJsqyLHMa4KBjKc</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:54 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QZtv1Fh7EeySTOfsWtLvlw; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:54 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:55 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QfPvn1h7EeyO5RflKjUKNA; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://d4s000000oz4euaa-dev-ed.my.salesforce.com:443', {"encodedQueryParams":true})
  .get('/services/data/v42.0/query')
  .query({"q":"SELECT%20Id%20FROM%20Contact%20WHERE%20Email%20%3D%20%27brian%40demo.com%27"})
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Wed, 08 Dec 2021 23:04:55 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'X-XSS-Protection',
  '1; mode=block',
  'X-Robots-Tag',
  'none',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QfPvjVh7EeyRfmvIWxfV6Q; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQBj6Icm9K6gV.yduFWxEqczB3OdwxqqOlz8GAkXajFqYres2qAGkVAAVkMJOUPxzDoxrcTGIZsW25lgfZAX9EGmOuHT3</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Wed, 08 Dec 2021 23:04:55 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QjjBc1h7Eey2bZFf5emhwg; domain=.salesforce.com; path=/; expires=Thu, 08-Dec-2022 23:04:55 GMT; Max-Age=31536000',
  'Content-Type',
  'text/xml; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'Content-Length',
  '1838',
  'Connection',
  'close'
]);