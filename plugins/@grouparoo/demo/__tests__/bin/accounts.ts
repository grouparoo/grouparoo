import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Demo } from "../../src/bin/grouparoo/demo/demo";

describe("demo accounts", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  test("runs without crash", async () => {
    const command = new Demo();
    const toStop = await command.run({ params: { _arguments: ["accounts"] } });
    expect(toStop).toBe(true);
  });
});
