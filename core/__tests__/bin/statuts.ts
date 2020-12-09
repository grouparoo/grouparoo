import { helper } from "@grouparoo/spec-helper";
import { Status } from "../../src/bin/status";
let actionhero;

describe("bin/status", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("mock console.log", () => {
    let messages = [];
    let spy;

    beforeEach(() => {
      messages = [];
      spy = jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message));
    });

    afterEach(() => {
      spy.mockRestore();
    });

    test("the status command can be run", async () => {
      const command = new Status();
      const toStop = await command.run();
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(spy).toHaveBeenCalled();
      expect(output).toContain("Status for My Grouparoo Cluster (test)");
      expect(output).toContain("Groups: 0");
      expect(output).toContain("Pending Exports: 0");
    });

    test("with a group", async () => {
      const group = await helper.factories.group();

      const command = new Status();
      await command.run();

      const output = messages.join(" ");
      expect(output).toContain("Groups: 1");
      expect(output).toContain(
        `${group.name}: 0 members (most recent addition - Never)`
      );
    });
  });
});
