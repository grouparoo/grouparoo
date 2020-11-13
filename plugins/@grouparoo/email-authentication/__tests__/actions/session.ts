// We are just testing that the app boots with this plugin loaded

import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";

let actionhero;

describe("actions/emailAuth", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

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
