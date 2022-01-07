import { helper } from "@grouparoo/spec-helper";
import { Validate } from "../../src/bin/validate";
import { join } from "path";
import { Setting } from "../../src";
let actionhero: any;

describe("bin/config-validate", () => {
  beforeAll(async () => {
    const { Process } = await import("actionhero");
    actionhero = new Process();
    await actionhero.initialize();
    await helper.enableTestPlugin();
  }, helper.setupTime);

  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

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

    test("the validate command can be run", async () => {
      const command = new Validate();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain(
        "✅ Validation succeeded - 15 config objects OK!"
      );
    });

    test("the validate command will prepare settings", async () => {
      await Setting.truncate();
      const command = new Validate();
      await command.run({ params: {} });
      expect(await Setting.count()).toBeGreaterThan(0);
    });

    test("valid configurations can boot", async () => {
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

    test("the validate command will fail for invalid configs", async () => {
      const command = new Validate();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain("❌ Validation failed - 1 validation error");
    });

    /* this cannot actually be tested - actionhero wants to shut down the process */
    // test("invalid configurations cannot boot", async () => {
    //   await expect(actionhero.start()).rejects.toThrow(/foo/);
    // });
  });
});
