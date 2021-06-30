const nock = require("nock");

nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "114",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "112",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:42:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:42:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:42:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:42:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:42:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:43:27 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "5",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:43:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:43:27 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:43:27 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:43:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "61",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      defaultAddress: {
        street: "Alice Luna",
        number: 10,
        zipcode: "555555555",
      },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:43:28 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-06-30 20:43:30 +00:00",
          defaultAddress: {
            street: "Alice Luna",
            number: 10,
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-06-30 20:43:28 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:43:30 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:44:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "449",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:44:28 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:44:28 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:44:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sebastian@mailinator.com",
    dataFields: {
      name: "sebastian",
      userId: "sebastian3039",
      phoneNumber: "+5583999999939",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:44:29 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sebastian@mailinator.com",
        dataFields: {
          name: "sebastian",
          phoneNumber: "+5583999999939",
          email: "sebastian@mailinator.com",
          signupDate: "2021-06-30 20:44:32 +00:00",
          profileUpdatedAt: "2021-06-30 20:44:29 +00:00",
          signupSource: "API",
          userId: "sebastian3039",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:44:32 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:44:32 +00:00",
          },
        },
        userId: "sebastian3039",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:45:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "470",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "33",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-06-30 20:43:30 +00:00",
          defaultAddress: {
            street: "Alice Luna",
            number: 10,
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-06-30 20:43:28 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:43:30 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:45:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "449",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:45:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      userId: "testuser123",
      phoneNumber: "+5583999999999",
      signupDate: "2020-08-19T20:50:04.000Z",
      customField: "testCustomField",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:45:30 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "15",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            street: "Alice Luna",
            number: 10,
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-06-30 20:45:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:45:31 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:46:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "576",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            street: "Alice Luna",
            number: 10,
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-06-30 20:45:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:45:31 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:46:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "576",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:46:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "88",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      userId: "testuser123",
      phoneNumber: "+5583999999999",
      signupDate: "2020-08-19T20:50:04.000Z",
      customField: "testCustomField",
      defaultAddress: { number: 20, street: "Emilio de Araujo" },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:46:30 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "14",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:46:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:46:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "582",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:46:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:46:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "582",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:46:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:46:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "582",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:46:30 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:46:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "582",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:47:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "34",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      signupDate: null,
      userId: "testuser123",
      name: "Evan",
      phoneNumber: "+5583999999998",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:47:32 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:47:32 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:47:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:48:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:47:32 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:47:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:48:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:48:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: null,
      phoneNumber: null,
      signupDate: null,
      userId: "testuser123",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:48:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:48:33 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:48:34 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "495",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:48:33 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:48:34 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "495",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:49:34 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "24",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List One" })
  .once()
  .reply(200, { listId: 1064898 }, [
    "Date",
    "Wed, 30 Jun 2021 20:49:34 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064898,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1342",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1342",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Two" })
  .once()
  .reply(200, { listId: 1064899 }, [
    "Date",
    "Wed, 30 Jun 2021 20:49:35 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064899,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:49:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:49:35 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:49:36 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "618",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:49:35 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:49:36 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "618",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:50:36 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "35",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064898,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 1064899,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:50:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "16",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:50:36 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:50:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "610",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:50:36 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:50:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "610",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:51:37 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064899,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Three" })
  .once()
  .reply(200, { listId: 1064911 }, [
    "Date",
    "Wed, 30 Jun 2021 20:51:38 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "14",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064911,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:51:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:51:38 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:51:43 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064911,
          name: "List Three",
          createdAt: 1625086298484,
          listType: "Standard",
        },
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:51:38 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:51:43 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:52:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064911,
          name: "List Three",
          createdAt: 1625086298484,
          listType: "Standard",
        },
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064911,
          name: "List Three",
          createdAt: 1625086298484,
          listType: "Standard",
        },
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Four" })
  .once()
  .reply(200, { listId: 1064916 }, [
    "Date",
    "Wed, 30 Jun 2021 20:52:40 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "74",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 1064916,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:52:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:52:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:52:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064916,
          name: "List Four",
          createdAt: 1625086359993,
          listType: "Standard",
        },
        {
          id: 1064911,
          name: "List Three",
          createdAt: 1625086298484,
          listType: "Standard",
        },
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:53:40 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "22",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:52:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:52:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "2",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:53:41 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:52:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:52:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:53:41 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "44",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:52:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:52:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:43:30 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "626",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:53:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/updateEmail", {
    currentEmail: "caio.silveira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:53:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "78",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "lucas.nogueira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:53:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "lucas.nogueira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:53:42 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:53:43 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:53:42 +00:00",
          },
          email: "lucas.nogueira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:54:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "652",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:54:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "25",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:54:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "185",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "lucas.nogueira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:53:42 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:53:43 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:53:42 +00:00",
          },
          email: "lucas.nogueira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:54:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "652",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:54:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/updateEmail", {
    currentEmail: "lucas.nogueira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:54:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "223",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sandro.arturo@mailinator.com",
    dataFields: {
      userId: "testuser123",
      name: "Lucas",
      phoneNumber: "+5583999999997",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:54:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "25",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:54:43 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:54:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:55:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:55:44 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:54:43 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:54:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:55:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:55:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "77",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sandro.arturo@mailinator.com",
    dataFields: { userId: "testuser345" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:55:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:55:45 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:55:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:56:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:55:45 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:55:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:56:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:55:45 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:55:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:56:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [1064898, 1064899, 1064911],
          signupDate: "2021-06-30 20:53:42 +00:00",
          defaultAddress: {
            zipcode: "555555555",
            number: 20,
            street: "Emilio de Araujo",
          },
          profileUpdatedAt: "2021-06-30 20:55:45 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-06-30 20:55:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:54:44 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:56:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "714",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:56:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:57:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "50",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:57:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:57:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:58:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "59",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:58:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:58:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "2",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:58:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { userId: "testuser456", name: "Carlos" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:58:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "31",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1064916,
          name: "List Four",
          createdAt: 1625086359993,
          listType: "Standard",
        },
        {
          id: 1064911,
          name: "List Three",
          createdAt: 1625086298484,
          listType: "Standard",
        },
        {
          id: 1064899,
          name: "List Two",
          createdAt: 1625086175202,
          listType: "Standard",
        },
        {
          id: 1064898,
          name: "List One",
          createdAt: 1625086174615,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:58:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 1064916,
    subscribers: [{ email: "carlos.solimoes@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Wed, 30 Jun 2021 20:58:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:59:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:59:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "121",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:59:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:59:49 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 20:59:49 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 20:59:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Jake" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 20:59:49 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Jake",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-06-30 20:59:50 +00:00",
          profileUpdatedAt: "2021-06-30 20:59:49 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:59:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:59:50 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:00:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Jake",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-06-30 20:59:50 +00:00",
          profileUpdatedAt: "2021-06-30 20:59:49 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:59:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:59:50 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:00:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:00:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:00:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "516",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Lucas" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:00:51 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "16",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:01:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Lucas",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-06-30 20:59:50 +00:00",
          profileUpdatedAt: "2021-06-30 21:00:51 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 21:00:57 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:59:50 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:01:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Lucas",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-06-30 20:59:50 +00:00",
          profileUpdatedAt: "2021-06-30 21:00:51 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 21:00:57 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:59:50 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:01:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:01:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:01:52 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:02:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 21:02:52 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "231",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [1064916],
          signupDate: "2021-06-30 20:58:48 +00:00",
          profileUpdatedAt: "2021-06-30 20:58:48 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-06-30 20:58:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-06-30 20:58:48 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:02:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:02:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "42",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 21:03:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/000")
  .once()
  .reply(
    400,
    {
      msg: "Invalid email: 000",
      code: "InvalidEmailAddressError",
      params: null,
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "76",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Wed, 30 Jun 2021 21:03:54 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/getFields")
  .once()
  .reply(
    200,
    {
      fields: {
        "itblInternal.regionCode": "string",
        phoneNumberDetails: "object",
        defaultAddress: "object",
        "phoneNumberDetails.updatedAt": "date",
        "Lifetime Value": "double",
        "Last Name 2": "string",
        "phoneNumberDetails.countryCodeISO": "string",
        foo: "object",
        "devices.deviceId": "string",
        "devices.token": "string",
        "devices.appBuild": "string",
        "defaultAddress.number": "long",
        "defaultAddress.defaultAddress": "long",
        name: "string",
        "phoneNumberDetails.lineType": "string",
        phoneNumber: "string",
        email: "string",
        unsubscribedChannelIds: "long",
        "foo.name": "string",
        "defaultAddress.street": "string",
        LTV: "double",
        "phoneNumberDetails.carrier": "string",
        customField: "string",
        "devices.appPackageName": "string",
        "devices.iterableSdkVersion": "string",
        emailListIds: "long",
        "foo.ltv": "double",
        signupDate: "date",
        Language: "string",
        "devices.endpointEnabled": "boolean",
        "devices.applicationName": "string",
        "itblInternal.emailDomain": "string",
        profileUpdatedAt: "date",
        "defaultAddress.zipcode": "string",
        signupSource: "string",
        unsubscribedMessageTypeIds: "long",
        userId: "string",
        "devices.appVersion": "string",
        "devices.platform": "string",
        "Number of Purchases": "long",
        devices: "object",
        "devices.platformEndpoint": "string",
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1197",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { signupDate: "GGG" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(
    400,
    {
      msg: "Project 10216: The request does not have the same data types as the data previously submitted. Field 'signupDate' already exists for type 'user' and has a data type of 'date' but possible types 'string, keyword' in the request.",
      code: "RequestFieldsTypesMismatched",
      params: {
        validationErrors: {
          signupDate: {
            incomingTypes: ["string", "keyword"],
            expectedType: "date",
            _type: "UnexpectedType",
            offendingValue: "GGG",
            category: "user",
          },
        },
      },
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "447",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:54 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "263",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "71",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "175",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Wed, 30 Jun 2021 21:03:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/1064898")
  .once()
  .reply(
    200,
    {
      msg: "List 1064898 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "998",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/1064899")
  .once()
  .reply(
    200,
    {
      msg: "List 1064899 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1081",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/1064911")
  .once()
  .reply(
    200,
    {
      msg: "List 1064911 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:03:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1258",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/1064916")
  .once()
  .reply(
    200,
    {
      msg: "List 1064916 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Wed, 30 Jun 2021 21:04:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1128",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
