import { helper } from "@grouparoo/spec-helper";
import { Generate } from "../../src/bin/generate";
import os from "os";
import fs from "fs-extra";

process.env.GROUPAROO_CONFIG_DIR = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/generate/config`;

fs.emptyDirSync(process.env.GROUPAROO_CONFIG_DIR);

describe("bin/generate", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(() => {
    fs.mkdirpSync(process.env.GROUPAROO_CONFIG_DIR);
    fs.emptyDirSync(process.env.GROUPAROO_CONFIG_DIR);
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
    const command = new Generate();
    await command.run({ params: { list: true } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`group`);
    expect(output).toContain(`setting`);
  });

  test("the generate command can filter the list of templates", async () => {
    const command = new Generate();
    await command.run({
      params: { template: "group", list: true },
    });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`group`);
    expect(output).not.toContain(`setting`);
  });

  test("the generate command can write a new file", async () => {
    const command = new Generate();
    const toStop = await command.run({
      params: { template: "group", id: "new-group" },
    });
    expect(toStop).toBe(true);

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/groups/new-group.js`;
    const output = messages.join(" ");
    expect(output).toContain("generate group");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('id: "new-group"');
    expect(contents).toContain('class: "group"');
  });

  test("the generate command will fail if the file exists", async () => {
    const command = new Generate();
    await command.run({
      params: { template: "group", id: "new-group" },
    });

    const output = messages.join(" ");
    const file = `${process.env.GROUPAROO_CONFIG_DIR}/groups/new-group.js`;
    expect(output).toContain(`${file} already exists`);
    expect(output).not.toContain(`wrote ${file}`);
  });

  test("the generate command will write the file with the overwrite flag", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "group",
        id: "new-group",
        overwrite: true,
      },
    });

    const output = messages.join(" ");
    const file = `${process.env.GROUPAROO_CONFIG_DIR}/groups/new-group.js`;
    expect(output).toContain(`wrote ${file}`);
  });

  test("the generate command will notify if it changed the ID value", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "group",
        id: "New Group",
        overwrite: true,
      },
    });

    // Notice that if it changes *any* part of the string, it also converts
    // hyphens to underscores, while the next test shows that the hyphens don't
    // change if the rest of the string is valid.
    const output = messages.join(" ");
    expect(output).toContain(`ID was changed to \"new_group\"`);
  });

  test("the generate command will be quiet if it did not change the ID value", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "group",
        id: "new-group",
        overwrite: true,
      },
    });

    const output = messages.join(" ");
    expect(output).not.toContain(`ID was changed`);
  });

  test("if a parent is required and not provided an error will be shown", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "team:member",
        id: "new-team-member",
      },
    });
    const output = messages.join(" ");
    expect(output).toMatch("teamId is needed for a team:member");
  });

  test("if a parent is required and provided it will be used", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "team:member",
        id: "new-team-member",
        parent: "admin_team",
      },
    });
    const output = messages.join(" ");
    expect(output).toMatch("/config/teamMembers/new-team-member.js"); // success
  });
});
