import { helper } from "../src";
import { specHelper } from "actionhero";
let actionhero;

describe("actions/status", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("status:public", () => {
    test("the public status action is OK", async () => {
      const { status } = await specHelper.runAction("status:public");
      expect(status).toBe("ok");
    });
  });
});
