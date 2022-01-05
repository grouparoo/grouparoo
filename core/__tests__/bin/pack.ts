import os from "os";
import path from "path";
import { mkdtemp, readFile, remove } from "fs-extra";
import { existsSync } from "fs";
import tar from "tar";
import { helper } from "@grouparoo/spec-helper";
import { Pack } from "../../src/bin/pack";

describe("bin/pack", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let tempDir: string;
  let messages: string[] = [];
  const spies: any[] = [];

  beforeEach(async () => {
    tempDir = await mkdtemp(path.join(os.tmpdir(), "grouparoo-pack-test-"));
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

  afterEach(async () => {
    spies.map((s) => s.mockRestore());
    await remove(tempDir);
  });

  test("makes an archive with configured config directory", async () => {
    process.env.GROUPAROO_CONFIG_DIR = path.join(
      __dirname,
      "../fixtures/codeConfig/initial"
    );

    const archivePath = path.join(tempDir, "grouparoo.tar.gz");
    expect(existsSync(archivePath)).toBe(false);

    const command = new Pack();
    const toStop = await command.run({ params: { output: archivePath } });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("✅ Saved config archive");

    expect(existsSync(archivePath)).toBe(true);

    await tar.extract({ cwd: tempDir, file: archivePath });

    const packageJson = path.join(tempDir, "package.json");
    expect(existsSync(packageJson)).toBe(true);

    const configFile = path.join(tempDir, "config", "config.js");
    expect(existsSync(configFile)).toBe(true);
  });

  test("discards other file types", async () => {
    process.env.GROUPAROO_CONFIG_DIR = path.join(
      __dirname,
      "../fixtures/codeConfig/additional-file-types"
    );

    const archivePath = path.join(tempDir, "grouparoo.tar.gz");
    expect(existsSync(archivePath)).toBe(false);

    const command = new Pack();
    const toStop = await command.run({ params: { output: archivePath } });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("✅ Saved config archive");

    expect(existsSync(archivePath)).toBe(true);

    await tar.extract({ cwd: tempDir, file: archivePath });

    const packageJson = path.join(tempDir, "package.json");
    expect(existsSync(packageJson)).toBe(true);

    const jsFile = path.join(tempDir, "config", "config.js");
    expect(existsSync(jsFile)).toBe(true);

    const jsonFile = path.join(tempDir, "config", "config.json");
    expect(existsSync(jsonFile)).toBe(true);

    const mdFile = path.join(tempDir, "config", "markdown.md");
    expect(existsSync(mdFile)).toBe(false);
  });

  test("can save to a different file", async () => {
    process.env.GROUPAROO_CONFIG_DIR = path.join(
      __dirname,
      "../fixtures/codeConfig/initial"
    );

    const archivePath = path.join(tempDir, "otherfile.tgz");
    expect(existsSync(archivePath)).toBe(false);

    const command = new Pack();
    const toStop = await command.run({ params: { output: archivePath } });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("✅ Saved config archive");

    expect(existsSync(archivePath)).toBe(true);

    await tar.extract({ cwd: tempDir, file: archivePath });

    const packageJson = path.join(tempDir, "package.json");
    console.log((await readFile(packageJson)).toString());
    expect(existsSync(packageJson)).toBe(true);
  });
});
