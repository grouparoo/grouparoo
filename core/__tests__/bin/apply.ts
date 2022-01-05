import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { join } from "path";
import { Apply } from "../../src/bin/apply";
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
  Setting,
  GrouparooModel,
} from "../../src";

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
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  let messages: string[] = [];
  const spies: any[] = [];

  beforeAll(() => {
    api.codeConfig.allowLockedModelChanges = true;
  });

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
      expect(output).toContain("Applying 15 objects...");
      expect(output).toContain(
        "✅ Config applied - 15 config objects up-to-date!"
      );
    });

    test("models should be created", async () => {
      expect(await App.count()).toBe(1);
      expect(await Source.count()).toBe(1);
      expect(await Schedule.count()).toBe(1);
      expect(await Destination.count()).toBe(1);
      expect(await Group.count()).toBe(2);
      expect(await GroupRule.count()).toBe(3);
      expect(await Property.count()).toBe(4);
      expect(await ApiKey.count()).toBe(1);
      expect(await Team.count()).toBe(1);
      expect(await TeamMember.count()).toBe(1);
      expect(await Option.count()).toBe(8);
      expect(await Mapping.count()).toBe(3);
    });

    test("the apply command will prepare settings", async () => {
      await Setting.truncate();
      const command = new Apply();
      await command.run({ params: {} });
      expect(await Setting.count()).toBeGreaterThan(0);
    });

    test("the apply command will prepare models", async () => {
      await GrouparooModel.truncate();
      const command = new Apply();
      await command.run({ params: {} });
      expect(await GrouparooModel.count()).toBeGreaterThan(0);
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
      const toStop = await command.run({ params: { local: "true" } });
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
