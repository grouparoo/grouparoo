import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/prometheus": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";

describe("initializer/prometheus", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  test("the prometheus plugin is loaded and can get relevant metrics", async () => {
    await api.prometheus.observe();
    const response = await api.prometheus.registry.metrics();
    expect(response).toContain(`process_cpu_user_seconds_total`);
    expect(response).toContain(`grouparoo_workers_cluster_count`);
  });
});
