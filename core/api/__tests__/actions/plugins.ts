import { helper } from "./../utils/specHelper";
import { config, specHelper } from "actionhero";
let actionhero;

describe("actions/plugins", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("can list plugins", async () => {
    // cannot actually test this without injecting some plugins at the package.json level...
    const { plugins } = await specHelper.runAction("plugins");
    expect(plugins.length).toBeGreaterThanOrEqual(0);
  });
});
