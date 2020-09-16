import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";

describe("demo events", () => {
  let actionhero;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("smoke test", async () => {
    expect(1 + 1).toEqual(2);
  });
});
