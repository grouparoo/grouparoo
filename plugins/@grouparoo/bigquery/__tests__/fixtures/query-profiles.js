const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620855837670";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
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
      "000002ff1dd04b7282300000d0bb642d8e8a29a63b900005f9895670c3400c41451af983d3bbd7e911de7b8184105ad771f373a725f80463b2427332b7f8468919ddeaa5aeab97bac835cc0cbf2cae58501be22fa3f010adce3e37b9d2496ec2512b69525af5c9d46742a0d9bb0162432bb03166c453ede3020f0c77f6788b04cb6bd9494b5defd23ab290b8a695573052863acf44dd647900213cac6d9e6166e7d3d91fda07436bef718e7a87181bd665aa9c0666b8dfe367788437b90fa6afa7e30693207de4cc2a44725fec1edb7e5d083028c932bc9f522f4bd177d3386006e8c0af15ade3eb9b2b428466e0df1e3723a7ef00852615adc0ef1fd5ef85d01a010000",
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
      "Wed, 12 May 2021 21:43:59 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 100 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1620855837670",
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
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b91f7953669439aa412daa084a95a295a92b2c117643be7cc90c62176400cf1df774ea0834d826f89ef79b97bee1ec98dac0b32274c96b71db40f9fae15237b040c2df1f5e7e5acf99debeb929d4ffdcbc0fd7694b9d1fdc10122a46569ba6d2a1869d5b51cf47c938dcb56750d6d951aa1d068329acca65e1404911fce420f691a2ab192f50d927f19d3e8b9ebbe588f4ba5ca0a6823f598abedeeddbd9bba4dabae811bedbe7574d144bbef7a7eae14a746aafa6093a17fa7a1bd822d951576f09758b02f6f95c7926ec72582ef2407cab9ea6a63bb4209ae6a21cbaeed55c9fc91f45dbefa2059b24a16b9230be7243d3b75b079212bd0ce597a9ca4ced185ad1c660b67b53c5de6cec4f39cb393932cc91d9b5001dac8ba17cf29abc00a3f8fbffc3f734ba0866a188a57a137a393c88b99602117911f30e10163110b03ea338fc7fbb05f30a0c83356bd67d15ad5a1284400218b692498f0237f1a539f0b46bd6981718a82b1d80f68419ef6c87d2b0d1c4bdd282d8710c88f7499275779ba592f0ef3a41f43d0ae32c743737688d77d1a1c1241efccf564ab52a1934d74b9ce93f470912fcf9361892b28297fc86e718d82561a108ecbcf1f1acc8b7cdf24e905199e5210d042cd3fce11c17de1a3137e392884e249a18b36f88f4be3da7af01686e5c9aded65c78e633f223db835ffd4f6bd49686bbb43b28ab085da3c0f341c14797a36ebf40e8445cc7cbd5c7fc5ea1f1c234de4ce030000",
    ],
    [
      "ETag",
      "XZ6pzTsjgbV23Z5/KBS/8w==",
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
      "Wed, 12 May 2021 21:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620855837670"
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
      "00000002ff6591514fc2301485ffcbf551966c205097f0208628094118a246c343d9eee6b0db9d6da72184ffeeedf4c1a42fedc9d7d3f6f4f4041f659d410cfbb2f86c511f2f0ab46b271234adb286a7866a83d003b4b260a77ee8472b153e6d5ec4fab255af42d7e2b9984cd861d277ac24c427c84b549981f8ed04b5ac90b795191becb1717abe7c9cddcd120615650e2cb78bc5cd743183f3eedc8303ed13cc51639da23bacd174c0d4ce5d4e23ab466160a8d5291ae8ccdd42a1a96da4260a980451108dfaa1180ec5603c1a87ec53944a5b52cdd6ed06f8164b56aa84be392544cea13bcd89f36efc72bc0bf49ff43d32f0c89547861e197964ec11e1916b8f707246bbbfe74c8f16cd4a135763d0b522c2df8a6ec9d566b94eab5bec412af9abee4b0b712e95c1f30fd897e5c908020000",
    ],
    [
      "ETag",
      "rO21Pl0VSX8Q+ulZ8rn8Wg==",
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
      "Wed, 12 May 2021 21:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
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
      "1dd04b7282300000d0bb642d8e4453a43bd10a06e45babb0c9408c4240c0a0fc9cdebd4e8ff0de0bc494b2a6218f2a6725f804430cd5299d9af55223d70b6a02458ff0f944a5e07a90a1cd4dc40d3127c1cf42087d1d607907c7a75d76984b97ba60523213b78c5b6e6b84bbb0b4149e489ebf2fb04c1427ddb64631136d7e86a6371e61833e789f454564d0c2eb1a61704ba182d9dfa39d7768a1f65023ee17c2f75995a801dc3b56c637cfdbeaa00d4ec6b5c3b11dc5181e57a9ec22af32791b8c34be276aaf8768ed6f5393ca1ba9a87dd7c4cf768d96e284c104b0bece046b48f6e6ce91aa4ec0bf9d3c869abd0334160b26c0ef1fdaab10bf1a010000",
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
      "Wed, 12 May 2021 21:44:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 100 OFFSET 9999",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1620855837670",
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
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "5b",
      "4f",
      "a3",
      "40",
      "14",
      "fe2b64f6716db9df9a985db74597a4b64ae9eeea8b1986038e52069941638cffdd03a8ab31d13ed1f96ee7f640ae799d9319c97879d3417bffed4a64648f80a225befae72797b61dd2b385d35d9bff4ebe1f9d9effbedbdf4706ef5592ee9a0a2652742d0339db6ea6652bba86b6424cd068624d4ccf3202d70d6cdff30d9449a88a25afaf517ca9542367bafe123d2d85282ba00d97532676afeffaada537adb802a6a4fe3e51c710a97f9af9a3128c2a2eeafded06f33b09ed05ec28afb082ffc23cfbf9de79cae96e5a22f99633a08c89ae567d5568c1445df0b26b0757327b2043956f3ec8265a46f354e3b97698ac8f352cbee015486d9d2ca244fb75d623079bb9b68c8fe354330d435b1f1e6ea2540bf187093948c5ebc13fa55905bdf7f304e28f63ef055451092378e11b1e350323cc8acc674560bb596140960599ef523b3358e88093674051a77af741456b513b45681499cb0ccbb1838281199a96473d16988e15e4a16d01f8b9475df2b847ee5aae60c16523241fe740fe26711a5da4c976353f48a3a18d8276955a8cc5f54dbcad53619348faa4afc71ee50293faa1c6ab344a0ee669fc271af7b88492b2fbcd0d6eb2a09504a4e3fed3fb06e7454eb7517246c6a7040a68a1665fcf11c903f0d515bfdc1452f1aa30452afc8f4b63b2cf602d8ccbe3bbbe9617b5635a86470672ab3e60b6eb23f67a4bbd23eca056cf0d8d37451e9fc33af94a421067be8a5747883e01531da51dd1030000",
    ],
    [
      "ETag",
      "7ZPh339aYD4uk1XP+GQZHw==",
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
      "Wed, 12 May 2021 21:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620855837670"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff258f414fc2401085ffcb786d938a016a130ea055491a82550e6a3c2cdb69296c3b75771a5349ffbbb370dad9b7dfbef7e60ca7ba2d20817d5dfdf468879b0af9d50f39badeb093a3a3d6210480ac2a213fd57dc6cd70383da67f26d61f4fd1763b5f2e1642387dc046417286b246533848beced0aa06e55b5d08c043e7e7f5e63d7d4e73111a2abcb0d965d97295a5307e8f011c699f6389165b8ddeacb37444cd6bdfd3a9a633183aeaad460717f8f25059ea3b65894251c249783b9b44f1741adfcd67f34838435a714dada0bb379014265626a75f69091eb8dc5703a3db5a126f87de368eae190fe47359fab0ed3100ad64d7979a2129957138fe030246418f49010000",
    ],
    [
      "ETag",
      "Za9LtmyhkDEzl8cYF0PP7A==",
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
      "Wed, 12 May 2021 21:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
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
      "1d",
      "d0",
      "cb",
      "72",
      "82301400d07fc95a1d4120d21d60290f1f688344379910af40d3510a29209dfe7b9d7ec2393f880b016dcbd45dc20dbda007d7ed9998c5f5d26505084f2f22c34beda1969bef281b525ff74b2876e368e1b994b8ca47af3b5a419067da423a43efd47b0d5664115379a52edef0f55d59ca6d95962e6fd838f709782a24d36d6967619685d1416c6adc2709e982c62ab6c3455bf13b6584bf759c6fdff78793a04112988d01c2f1c0987f50734ac2325c5f776d2cc9391e287928fb95fbce294babf0d857dcc04d17eb5f945539a363dee6abd311ef2f9f1d9a2018eaaa8196554feec2b4ed09fab733f5a8e119e0026fa041bf7ff1c4585b1a010000",
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
      "Wed, 12 May 2021 21:44:02 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1620855837670",
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
      "00",
      "00",
      "00",
      "02",
      "ff85526d4fdb3010fe2b91f771b4796bd3a612da58095ba4b668493ac427643be7cc90c621769810e2bfef9c000321b16f89ef9e977bee1ec88d6c4ab2224c56b73d74f79fae152347040cadf0f5a2babe032d3febfc8766dbf836535b5354c7c7d8212d4ad3435bc344abbee3a057fb7c5a75aa6f69a7d4048926e1c48f026f399f2fc345b4f010a6a1161bd9dc20f8b731ad5eb9eeb3f4b452aaaa81b6524fb93abcbcbb7781db76ea1ab8d1ee5b451745b4fba1e6975a716aa46a8ef739eaf71aba2b385059a3837fc0927d7dcb3c95f430adb0f94e72a09cabbe31d6155270d50859f5ddc04a560f6470f9ea83e4c92659178e2c9db3ec7ceba079216bd0ce79769a64ceb74b5b39c9d7ce26dda6853373cecfcef2a4706c3e2568239b81baa0ac064bfb347cfa3e710ba0866a188b570b2fa2fed28b99600b2e96e19c090f185bb2c59c86cce3f10c6625038a3863d907146d54134441043140e997be5742e48751b408fdb92845195331f3e250cc7c1693c723f2a793064ea56e95966304e4224b8be4aac8f6bbf549910c6308dad7e67434678778edd3e090d8f4c15c8fb62a152ad93cd35d916427eb22fd958c2bdc4045f97d7e8b4b14b4d680edb8fae2bec5bcc8cf7d925d92f12903011d34fcff3962f350f8df013f9f13b6e241a18a36f88f4be3da6af00ec6e5c983f5f28c9e057e309cbfa19d79570b06e69733b28c7080c63c0d349e13797c12ebf54b131631f35dbafb8ed5bf4a82d6a2cc030000",
    ],
    [
      "ETag",
      "Wgjvesi+sSHsbM9qRoMtTg==",
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
      "Wed, 12 May 2021 21:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620855837670"
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
      "65",
      "90",
      "4d",
      "4f",
      "83",
      "40",
      "10",
      "86ffcb788584423f08490fb6a98a9246b18d07d3c316060481a1bb8b0d92fe7767d183492fbb93679fdd796707f82c9a14023816f9a943d9dfe4a85f4c11a3ea2aad786ba9510816a016399beb6fefe96d15a53bd709ef1e312ac32e3f9d974b3654f281b5806080acc02a5510bc0fd0881af95a91b2a0fbd6d4e176b7b9dfc40c6a4a0dd8eea3e876156de072b85850d231c60c2536099ac75a4925263a343995a8db0a6d459d4c50c1288f07b9a4ae1592c866627bf664ee3afe6ce67b8bf9c261afa244e8821a56f7afc05d346951c574e6943065418e2507cec6f58bf164ccf39fb857c4bb2253430e7f0d56bd46f52c89c32a34397de737f49acc209a07d4b2430b12c19ff7506808325129bcfc0062d9e35f9a010000",
    ],
    [
      "ETag",
      "Cz3KWBLdT20IFJeLjIugqw==",
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
      "Wed, 12 May 2021 21:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd0cb7282301400d07fc95a1d4120d21d60290f1f688344379910af40d3510a29209dfe7b9d7ec2393f880b016dcbd45dc20dbda007d7ed9998c5f5d26505084f2f22c34beda1969bef281b525ff74b2876e368e1b994b8ca47af3b5a419067da423a43efd47b0d5664115379a52edef0f55d59ca6d95962e6fd838f709782a24d36d6967619685d1416c6adc2709e982c62ab6c3455bf13b6584bf759c6fdff78793a04112988d01c2f1c0987f50734ac2325c5f776d2cc9391e287928fb95fbce294babf0d857dcc04d17eb5f945539a363dee6abd311ef2f9f1d9a2018eaaa8196554feec2b4ed09fab733f5a8e119e0026fa041bf7ff1c4585b1a010000",
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
      "Wed, 12 May 2021 21:44:02 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 4",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620855837670",
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
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "5b",
      "6f",
      "9b",
      "3014fe2bc87b4d0249209048d5962574424a1315c8daeea5b29d03730b9862d32aaafadf7b1cd2db26b56fe0f3ddcee591dc8a6a47668489fcae8566ffed4632d223a0698eaf895e5e360ff7e5c3c5f966fec78b92eddebbcc4f4e10210c4bd1b22ea0af64db7050b36d32c81bd9d6b491b28f427db73f9c8c9cc0f382b13ff11da42928b295a86e91fc57eb5acd6cfbc57a904b9917406ba1065c96afeff6fdc8ae1b79035c2bfba3a38d26cafed4f37b2139d5425627db04fd5b05cd3594541498e08db8633f3e2a0f042d073982ef0507cab96c2b6d52a104975526f2b639a892d92339a47cf7419270152e524becacd378736661f84c14a0ac4dbc0c63ebe795a9cc9385b58acea2d472adcde96912e2078aef4069511da453ca0a30b2c7e6a3ff276e085453055df1da77267418385396319f67c1d86399038c05ccf7e898397cea82bb634091a78dfa81452b594d8260c432ce5c77c21c447953df0b3cdf8180834f8713ce190a0743f2d4230f8dd0b014aa964a74232017719486d769bc5d2fe669786823a36da1975d38d3c4fb9c1a9b44d0277d3d99aa90e864e619add3309e2fd2e877d8ad700539e5fbe40e9798d14201c271f5e9bec67991f36d185f91ee29860c1aa8f8d77344f0a1f0d501bf9c1342f1a0d04569fcc7a571653c7803ddf24469b2bcb0ddd1d431eb4570a3ffad8d8738d8dedb19194528a1d2c786ba73224f47b356bd82b088335f47eb5f587d06d55bcbafcc030000",
    ],
    [
      "ETag",
      "StDXrwvmwWQOAZ5ISUy5Xg==",
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
      "Wed, 12 May 2021 21:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620855837670"
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
      "65",
      "90",
      "c14e83401086df65bc9604152821e9812a6a0dad4aedc1981e1618900a0cee2e36a4e1dd9d450f26bdec4efefd76e79b3dc167d5e610405a955f3dcae1a244fd628a04555f6bc55b47ad4298016a5132e926e1f6f6313fbe1dee9c759a964fc910afc3c58209957d602320384151619d2b08de4fd08a06f95a9533a087ced4abcd6b741f251c34949b60b38be370194730eec7191c284db040896d86e6b14ed20133bd329e4a345d8d96a25e66a86082a7835252df094964716239d6a57765fbaeeb5fcfbdb9cd5c4d99d015b58ceeb6c05d3469512774644b70189053c9c2c5b47e9b51279fff897796cccf12df24fbbf06cb41a37a96c4b20a8da76fff4adf901944f3805af638834cf0e73d541a8242d40ac71f7a3ec43f9a010000",
    ],
    [
      "ETag",
      "5RASDJdwYjF4MbbgORyLMA==",
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
      "Wed, 12 May 2021 21:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd04b7282300000d0bb642d8e848fb13b309688686b8d0cb061481ae5d34a2444603abd7b9d1ee1bd1f50702e94cafbb61137f002a602aee67cbe93c8cfaf62d08b9aa6d46f1b795b4e99cc5800cb30d5b035fd3b35d74bdc9451b3b72bf15065535064eb53d95101fbc3c07c38eed027d3d63af2708ad17808d9fb9907d26d95431cd943f16a6584bdf12489f1da3086a3733027ee729d4b97c8da1daccda67ab0f21bb94762164102f517d1f836c6f8e38851d941d99ee4e9eeab781fd10521bc56ce92b6dbcba5f08cf3d616cc303dfb1e4661948c5e7d456006c428ab4ea8bc7a722d67b59a817f7bde4f523c037c5174a203bf7ffb0805c21a010000",
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
      "Wed, 12 May 2021 21:44:04 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 8",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1620855837670",
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
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "5b6fa24014fe2b64f6b5ca45106ad2ecba8a0d89d52ce26efad4cc0c073a1619ca0c764dd3ffbe07b06e9b26ed1bcc773bb767f220ca944c0813f96303f5f1db4e32724140d31c5f8ff5dfe47eb9738283fbb432f976bacb67d7d3ab2b648856a5e8be2a60a06453735093ed6698d7b2a9682de5008d06dec01e3b56e079c1c81ffb16ca1414d952940f28bed7ba5213d37c8d1ee652e605d04aa82197fbf3bb7970ccaa963be05a99ef134d0c51e6a799df0bc9a916b2bcda6e30bf5150dfc19e8a022bf82f4cd98ff7ce4341f7c31cc907c181722e9b52b755a105976526f2a6ee5cc9e4997455bef9209b7019ce1243a4c6225edf18587c260a50c63a9e87b1f1f3b645a69b99b18c6ea2c4708df562b109132340f314941665679d5056406b7b6a3efa38f156403555d08377be35a676605db28cf93c0b461ecb2c602c60be4747cce2972eb829038a3addba772a5acad2b36d6ab9943b9cfbdcb5471c580a4eea38e9186c3ff51c77e4503b63e4e5823cd542c35ca84a2ad18f80fc89a324bc4be2ed6a364dc2ae8d8c36859ef7c5b54dbcad53639348faa4af9716151293da7946ab248ca7b324fa1df62b5c424ef971f3884bcc68a100e9b8fae458e1bcc8af6d18df92fe29860c6a28f9d7734472077c75c0afe784543c284c511aff71695cb519bc867e7962dfd6f2aa765ddbf34847aef5076c7ce923763ea3d611f650ea5343fd3991975358a3ce240471e6ab68758de83f5f85022ecc030000",
    ],
    [
      "ETag",
      "yrxThLj28v4wN/cUAjgCGA==",
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
      "Wed, 12 May 2021 21:44:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620855837670"
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
      "02ff4d90c14e83401086df653c0a09ad5228490fad692a863416ed45d3c316064a050677070d69faeecea2072fbb7ffefd66f7cb5ee0a36a7388e058959f3deae1a644ded990a2e96b36b275d41a04079055292497f373783fd1c9ed938e97a7b7cde61407bbc54208939db051105da0a8b0ce0d44ef176855833256e502f0d0d91c6f5fd79b752a4543b92db6fb2459ae92355c0f5707ce744cb1408d6d86f6b24ed319338eada7514d57a36ba8d7191a18e1f1a0d4d4774a13b9d2b8be3b994dbdd0f7c3bb601678c2d59429aea81574ff02f20a13ab3aa56fb184a9007a8c225c8ceb97d4f3d1e77f33f16c75f89b5e0d8ce659939818b412a1f76bf440d692c59e758f0e644a7ee6b162880a551bbcfe00924997a977010000",
    ],
    [
      "ETag",
      "tg9j841rL+JrIAhZGGhI7Q==",
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
      "Wed, 12 May 2021 21:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
