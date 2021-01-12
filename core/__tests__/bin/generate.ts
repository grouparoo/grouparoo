import { helper } from "@grouparoo/spec-helper";
import { Generate } from "../../src/bin/generate";
import os from "os";
import fs from "fs-extra";

let actionhero;
const tmpDir = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/generate/config`;

describe("bin/generate", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
  }, helper.setupTime);

  beforeAll(() => {
    fs.mkdirpSync(tmpDir);
    fs.emptyDirSync(tmpDir);
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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

  test("the generate command can write a new file", async () => {
    process.argv = [
      "",
      "",
      "generate",
      "group:calculated",
      "--",
      "--id",
      "new-group",
    ];
    const command = new Generate();
    const toStop = await command.run({ params: { path: tmpDir } });
    expect(toStop).toBe(true);

    const file = `${tmpDir}/group/calculated/new_group.js`;
    const output = messages.join(" ");
    expect(output).toContain("generate group:calculated");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('id: "new-group"');
    expect(contents).toContain('class: "Group"');
  });

  test("the generate command will fail if the file exists", async () => {
    process.argv = [
      "",
      "",
      "generate",
      "group:calculated",
      "--",
      "--id",
      "new-group",
    ];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    const file = `${tmpDir}/group/calculated/new_group.js`;
    expect(output).toContain(`${file} already exists`);
    expect(output).not.toContain(`wrote ${file}`);
  });

  test("the generate command will write the file with the overwrite flag", async () => {
    process.argv = [
      "",
      "",
      "generate",
      "group:calculated",
      "--",
      "--id",
      "new-group",
      "--overwrite",
    ];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    const file = `${tmpDir}/group/calculated/new_group.js`;
    expect(output).toContain(`wrote ${file}`);
  });
});
