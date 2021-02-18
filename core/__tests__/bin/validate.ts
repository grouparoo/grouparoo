import { helper } from "@grouparoo/spec-helper";
import { readFileSync, existsSync, writeFileSync } from "fs";
import { Validate } from "../../src/bin/validate";
import os from "os";
import { join } from "path";
let actionhero;

const filename = join(
  __dirname,
  `../../log/test-server-${process.env.JEST_WORKER_ID}-test.log`
);

function readLogFile() {
  if (!existsSync(filename)) {
    return [];
  }

  const messages: string[] = readFileSync(filename).toString().split(os.EOL);
  return messages.slice(Math.max(messages.length - 100, 1));
}
function clearTestLog() {
  writeFileSync(filename, "");
}

describe("bin/config-validate", () => {
  beforeAll(async () => {
    const { Process } = await import("actionhero");
    actionhero = new Process();
    await actionhero.initialize();
    await helper.enableTestPlugin();
  }, helper.setupTime);

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
      clearTestLog();
    });

    test("the validate command can be run", async () => {
      const command = new Validate();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);
      await helper.sleep(100);

      const output = readLogFile().join(" ");
      expect(output).toContain(
        "✅ Validation succeeded - 13 config objects OK!"
      );
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
      clearTestLog();
    });

    test("the validate command will fail for invalid configs", async () => {
      const command = new Validate();
      const toStop = await command.run({ params: {} });
      expect(toStop).toBe(true);
      await helper.sleep(100);

      const output = readLogFile().join(" ");
      expect(output).toContain("❌ Validation failed - 1 validation error");
    });

    /* this cannot actually be tested - actionhero wants to shut down the process */
    // test("invalid configurations cannot boot", async () => {
    //   await expect(actionhero.start()).rejects.toThrow(/foo/);
    // });
  });
});
