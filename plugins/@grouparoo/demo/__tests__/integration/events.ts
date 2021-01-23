import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";

describe("demo events", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  test("smoke test", async () => {
    expect(1 + 1).toEqual(2);
  });
});
