import nock from "nock";

nock("https://telemetry.grouparoo.com:443", { encodedQueryParams: true })
  .post("/api/v1/telemetry")
  .reply(200);
