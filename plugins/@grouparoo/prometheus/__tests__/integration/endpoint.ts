import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/prometheus": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { ApiKey } from "@grouparoo/core";
import Axios from "axios";
import { api, config } from "actionhero";

let url: string;
let apiKey: ApiKey;

import { StatusMetric } from "@grouparoo/core/dist/modules/statusReporters";
import { Status } from "@grouparoo/core/dist/modules/status";
  
const metric: StatusMetric = {
  collection: "cluster",
  topic: "workers",
  aggregation: "exact",
  count: 1,
};

describe("integration/endpoint/prometheus", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  describe("with a valid API key", () => {
    beforeAll(async () => {
      apiKey = await ApiKey.create({
        name: "metrics",
      });
      apiKey.setPermissions([{topic: "system", read: true, write: false}]);
      url = `http://localhost:${config.servers.web.port}/api/v1/prometheus/metrics?apiKey=${apiKey.apiKey}`;
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Status.set([metric]);
    })

    test("returns metrics as plain text", async () => {
      const { status, data } = await Axios({
        headers: { "Content-Type": "text/plain" },
        method: "GET",
        url,
      });
      expect(status).toEqual(200);
      expect(data).toBeDefined(); //TODO: a better comparison
    });
  });
});
