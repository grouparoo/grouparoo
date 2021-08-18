import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/prometheus": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { ApiKey } from "@grouparoo/core";
import Axios from "axios";
import { config } from "actionhero";

let url: string;
let apiKey: string;

describe("integration/endpoint/prometheus", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  beforeAll(() => {
    // apiKey = await ApiKey.create({name: 'prometheus'});
    url = `http://localhost:${config.servers.web.port}/v1/prometheus/metrics`;
  });

  test("endpoint returns metrics as plain text", async () => {
    const { data } = await Axios({
      headers: { "Content-Type": "text/plain" },
      method: "GET",
      url,
    });

    expect(data).toBeDefined(); //TODO: a better comparison
  });
});

// notes on making a model in the test
// const apiKey = await ApiKey.create({name: 'test'})
// apiKey.apiKey // is the string you curl with   --> GET http://localhost:1234/api/v1/promethus/metrics?apiKey={adsadasd}
