import { helper } from "@grouparoo/spec-helper";
import { Apply } from "../../src/bin/apply";
import { join } from "path";
import {
  App,
  Source,
  Schedule,
  Destination,
  Group,
  GroupRule,
  Property,
  ApiKey,
  Team,
  TeamMember,
  Mapping,
  Option,
} from "../../src";
let actionhero;

const filename = join(
  __dirname,
  `../../log/test-server-${process.env.JEST_WORKER_ID}-test.log`
);

function ensureNoSavedModels() {
  return test("there should be no models created", async () => {
    expect(await App.count()).toBe(0);
    expect(await Source.count()).toBe(0);
    expect(await Schedule.count()).toBe(0);
    expect(await Destination.count()).toBe(0);
    expect(await Group.count()).toBe(0);
    expect(await GroupRule.count()).toBe(0);
    expect(await Property.count()).toBe(0);
    expect(await ApiKey.count()).toBe(0);
    expect(await Team.count()).toBe(0);
    expect(await TeamMember.count()).toBe(0);
    expect(await Option.count()).toBe(0);
    expect(await Mapping.count()).toBe(0);
  });
}

describe("bin/config-apply", () => {
  beforeAll(async () => {
    const { Process } = await import("actionhero");
    actionhero = new Process();
    await actionhero.initialize();
    await helper.enableTestPlugin();
  }, helper.setupTime);

  let messages = [];
  let spies = [];

  beforeEach(() => {
    messages = [];
    spies.push(
      jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message))
    );
    spies.push(
      jest
        .spyOn(console, "error")
        .mockImplementation((message) => messages.push(message))
    );
  });

  afterEach(() => {
    spies.map((s) => s.mockRestore());
  });

  afterAll(async () => {
    await actionhero.stop();
  });

  describe("valid config", () => {
    beforeAll(async () => {
      process.env.GROUPAROO_CONFIG_DIR = join(
        __dirname,
        "../fixtures/codeConfig/initial"
      );
      await helper.truncate();
    });

    ensureNoSavedModels();

    test("the apply command can be run", async () => {
      const command = new Apply();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain("Applying 13 objects...");
      expect(output).toContain(
        "✅ Config applied - 13 config objects up-to-date!"
      );
    });

    test("models should be created", async () => {
      expect(await App.count()).toBe(2);
      expect(await Source.count()).toBe(1);
      expect(await Schedule.count()).toBe(1);
      expect(await Destination.count()).toBe(1);
      expect(await Group.count()).toBe(1);
      expect(await GroupRule.count()).toBe(2);
      expect(await Property.count()).toBe(4);
      expect(await ApiKey.count()).toBe(1);
      expect(await Team.count()).toBe(1);
      expect(await TeamMember.count()).toBe(1);
      expect(await Option.count()).toBe(9);
      expect(await Mapping.count()).toBe(3);
    });

    test("can boot after applying", async () => {
      await actionhero.start();
    });
  });

  describe("invalid config", () => {
    beforeAll(async () => {
      process.env.GROUPAROO_CONFIG_DIR = join(
        __dirname,
        "../fixtures/codeConfig/error-app"
      );
      await helper.truncate();
    });

    ensureNoSavedModels();

    test("the apply command can be run, but does not complete", async () => {
      const command = new Apply();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain("Applying 2 objects...");
      expect(output).not.toContain("✅ Config applied");
    });

    ensureNoSavedModels();
  });

  describe("remotely invalid config", () => {
    beforeAll(async () => {
      process.env.GROUPAROO_CONFIG_DIR = join(
        __dirname,
        "../fixtures/codeConfig/error-app-remote"
      );
      await helper.truncate();
    });

    ensureNoSavedModels();

    test("the apply command can be run, but does not complete", async () => {
      const command = new Apply();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain("Applying 4 objects...");
      expect(output).not.toContain("✅ Config applied");
    });

    ensureNoSavedModels();

    test("the apply command can be run and completes with --local", async () => {
      const command = new Apply();
      const toStop = await command.run({ params: { local: true } });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain("Applying 4 objects...");
      expect(output).toContain(
        "✅ Config applied - 4 config objects up-to-date!"
      );
    });

    test("models should be created", async () => {
      expect(await App.count()).toBe(3);
      expect(await Option.count()).toBe(6);

      expect(await Source.count()).toBe(0);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Group.count()).toBe(0);
      expect(await GroupRule.count()).toBe(0);
      expect(await Property.count()).toBe(0);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
      expect(await Mapping.count()).toBe(0);
    });
  });
});
