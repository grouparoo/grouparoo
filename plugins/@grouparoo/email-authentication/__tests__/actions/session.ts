// We are just testing that the app boots with this plugin loaded

// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/csv": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import { helper } from "@grouparoo/core/test";
import { specHelper } from "actionhero";

let actionhero;

describe("actions/emailAuth", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    helper.disableTestPluginImport();
  });

  test("an administrator can sign in with email", async () => {
    const session = await specHelper.buildConnection();
    session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const { error, teamMember } = await specHelper.runAction(
      "session:create",
      session
    );
    expect(error).toBeUndefined();
    expect(teamMember.guid).toBeTruthy();
    expect(teamMember.email).toBe("mario@example.com");
  });
});
