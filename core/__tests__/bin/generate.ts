import { helper } from "@grouparoo/spec-helper";
import { Generate } from "../../dist/bin/generate";
import os from "os";
import fs from "fs-extra";

const tmpDir = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/generate/config`;

describe("bin/generate", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(() => {
    fs.mkdirpSync(tmpDir);
    fs.emptyDirSync(tmpDir);
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

  test("the generate command can list templates", async () => {
    process.argv = ["", "", "generate", "--list"];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`group:calculated`);
    expect(output).toContain(`group:manual`);
    expect(output).toContain(`setting`);
  });

  test("the generate command can filter the list of templates", async () => {
    process.argv = ["", "", "generate", "group", "--list"];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`group:calculated`);
    expect(output).toContain(`group:manual`);
    expect(output).not.toContain(`setting`);
  });

  test("the generate command can write a new file", async () => {
    process.argv = ["", "", "generate", "group:calculated", "new-group"];
    const command = new Generate();
    const toStop = await command.run({ params: { path: tmpDir } });
    expect(toStop).toBe(true);

    const file = `${tmpDir}/groups/new_group.js`;
    const output = messages.join(" ");
    expect(output).toContain("generate group:calculated");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('id: "new_group"');
    expect(contents).toContain('class: "group"');
  });

  test("the generate command will fail if the file exists", async () => {
    process.argv = ["", "", "generate", "group:calculated", "new-group"];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    const file = `${tmpDir}/groups/new_group.js`;
    expect(output).toContain(`${file} already exists`);
    expect(output).not.toContain(`wrote ${file}`);
  });

  test("the generate command will write the file with the overwrite flag", async () => {
    process.argv = [
      "",
      "",
      "generate",
      "group:calculated",
      "new-group",
      "--overwrite",
    ];
    const command = new Generate();
    await command.run({ params: { path: tmpDir } });

    const output = messages.join(" ");
    const file = `${tmpDir}/groups/new_group.js`;
    expect(output).toContain(`wrote ${file}`);
  });
});
