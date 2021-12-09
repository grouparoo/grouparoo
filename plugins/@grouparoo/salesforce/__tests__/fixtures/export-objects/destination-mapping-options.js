const nock = require('nock');

nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:44 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=QyahSlkLEeyOMudQiDbqkA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:44 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:45 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:45 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:45 GMT; Max-Age=31536000',
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
  'BrowserId=Q5pJ6VkLEeygD_ecFsDWdA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:45 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:45 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Q-AGLFkLEeyOH1kgAeijLw; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:45 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:46 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:46 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:46 GMT; Max-Age=31536000',
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
  'BrowserId=RE9qClkLEeyxuUkpsE777g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:46 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:47 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=RJWaYFkLEeyeIrnqvJQoRg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:47 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:47 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:47 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:47 GMT; Max-Age=31536000',
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
  'BrowserId=ROSkpFkLEeyo-FnXTMV5bA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:47 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:48 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=RSo5SlkLEeyM1rPQy_X77g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:48 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:48 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:48 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:48 GMT; Max-Age=31536000',
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
  'BrowserId=RYpa6FkLEeyqrVHD2zG0zA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:48 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:49 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Rc_u6VkLEeyIvcGnLHK-uQ; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:49 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:49 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:49 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:49 GMT; Max-Age=31536000',
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
  'BrowserId=RiO0B1kLEeyaUju9g98hXg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:49 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:50 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=Rmj6dlkLEey3rlkJQJ6e4g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:50 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:51 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:51 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:51 GMT; Max-Age=31536000',
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
  'BrowserId=RvAFVVkLEeymimvXrsIKsw; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:51 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:51 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=RzXAw1kLEeyOMudQiDbqkA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:51 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:52 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:52 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:52 GMT; Max-Age=31536000',
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
  'BrowserId=R5MjB1kLEeygD_ecFsDWdA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:52 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:52 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=R9jekFkLEeyjKEVOnUL4Lg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:52 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:53 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:53 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:53 GMT; Max-Age=31536000',
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
  'BrowserId=SD7zP1kLEeyZWGtdiTAk2g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:53 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:53 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=SIPrNlkLEeyJXddSk69aYg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:53 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:54 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:54 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:54 GMT; Max-Age=31536000',
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
  'BrowserId=SNafXlkLEeyEm0cUtWDRnw; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:54 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:54 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=SRwzalkLEeysrOeYUM0R9A; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:54 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:55 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:55 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:55 GMT; Max-Age=31536000',
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
  'BrowserId=SXQ_TFkLEeyOji3XWb-wCw; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:55 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:55 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=SblepFkLEeyLGZl34TZMxQ; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:55 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:56 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:56 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:56 GMT; Max-Age=31536000',
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
  'BrowserId=Sht7ZFkLEeyHxh9VCU3yxA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:56 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:56 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=SmDoZ1kLEeysvDtRmd5vvA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:56 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:57 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:57 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:57 GMT; Max-Age=31536000',
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
  'BrowserId=Sq3QsFkLEeyaUju9g98hXg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:57 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:57 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=SvQoGVkLEeyPudmEntthdQ; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:57 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:58 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:58 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:58 GMT; Max-Age=31536000',
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
  'BrowserId=S0rTV1kLEey2AYEDgypm4g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:58 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:58 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=S5VxVlkLEeyOMudQiDbqkA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:58 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:15:59 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:59 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:59 GMT; Max-Age=31536000',
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
  'BrowserId=S_PlblkLEeyCNF98i0do6g; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:59 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);
nock('https://login.salesforce.com:443', {"encodedQueryParams":true})
  .post('/services/Soap/u/42.0', "<se:Envelope xmlns:se=\"http://schemas.xmlsoap.org/soap/envelope/\"><se:Header/><se:Body><login xmlns=\"urn:partner.soap.sforce.com\"><username>demo@grouparoo.com</username><password>jhfd!kjdgd43h986273e87a3d9725fe3755c</password></login></se:Body></se:Envelope>")
  .once().reply(200, "<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns=\"urn:partner.soap.sforce.com\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><soapenv:Body><loginResponse><result><metadataServerUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/m/42.0/00D4S000000oz4e</metadataServerUrl><passwordExpired>true</passwordExpired><sandbox>false</sandbox><serverUrl>https://d4s000000oz4euaa-dev-ed.my.salesforce.com/services/Soap/u/42.0/00D4S000000oz4e</serverUrl><sessionId>00D4S000000oz4e!ARcAQCUUKh5B4yaHGXfPRypFsFMVLE2Ngldte.CJe9oINLgA9D4Y2nKp8mIocoT.8LdSDGD6CVsM6UH8u.5N76.7P7mLzaXK</sessionId><userId>0054S000000JFmhQAG</userId><userInfo><accessibilityMode>false</accessibilityMode><chatterExternal>false</chatterExternal><currencySymbol>$</currencySymbol><orgAttachmentFileSizeLimit>26214400</orgAttachmentFileSizeLimit><orgDefaultCurrencyIsoCode>USD</orgDefaultCurrencyIsoCode><orgDefaultCurrencyLocale>en_US</orgDefaultCurrencyLocale><orgDisallowHtmlAttachments>false</orgDisallowHtmlAttachments><orgHasPersonAccounts>false</orgHasPersonAccounts><organizationId>00D4S000000oz4eUAA</organizationId><organizationMultiCurrency>false</organizationMultiCurrency><organizationName>Grouparoo</organizationName><profileId>00e4S00000127lgQAA</profileId><roleId xsi:nil=\"true\"/><sessionSecondsValid>7200</sessionSecondsValid><userDefaultCurrencyIsoCode xsi:nil=\"true\"/><userEmail>demo@grouparoo.com</userEmail><userFullName>Dev Engineer</userFullName><userId>0054S000000JFmhQAG</userId><userLanguage>en_US</userLanguage><userLocale>en_US</userLocale><userName>demo@grouparoo.com</userName><userTimeZone>America/Los_Angeles</userTimeZone><userType>Standard</userType><userUiSkin>Theme3</userUiSkin></userInfo></result></loginResponse></soapenv:Body></soapenv:Envelope>", [
  'Date',
  'Thu, 09 Dec 2021 16:15:59 GMT',
  'Cache-Control',
  'no-cache,must-revalidate,max-age=0,no-store,private',
  'Set-Cookie',
  'BrowserId=TDlSUVkLEeyEosGobMBgFg; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:15:59 GMT; Max-Age=31536000',
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
  .get('/services/data/v42.0/sobjects/Lead/describe')
  .once().reply(401, [{"message":"Your password has expired. Please reset your password.","errorCode":"INVALID_OPERATION_WITH_EXPIRED_PASSWORD"}], [
  'Date',
  'Thu, 09 Dec 2021 16:16:00 GMT',
  'Set-Cookie',
  'CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:16:00 GMT; Max-Age=31536000',
  'Set-Cookie',
  'LSKey-c$CookieConsentPolicy=0:1; domain=d4s000000oz4euaa-dev-ed.my.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:16:00 GMT; Max-Age=31536000',
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
  'BrowserId=TIkfylkLEeyNpqcFLOaxOA; domain=.salesforce.com; path=/; expires=Fri, 09-Dec-2022 16:16:00 GMT; Max-Age=31536000',
  'Content-Type',
  'application/json;charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close'
]);