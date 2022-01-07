import path from "path";
import nock from "nock";
import { helper } from "@grouparoo/spec-helper";
import { CI } from "../../src/bin/ci";

describe("bin/ci", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

  let prevCfgDir: string;
  beforeAll(() => {
    prevCfgDir = process.env.GROUPAROO_CONFIG_DIR;
    process.env.GROUPAROO_CONFIG_DIR = path.join(
      __dirname,
      "../fixtures/codeConfig/initial"
    );
  });

  afterAll(() => {
    process.env.GROUPAROO_CONFIG_DIR = prevCfgDir;
  });

  beforeEach(async () => {
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
  });

  test("runs pack and push (apply=false)", async () => {
    nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .reply(200, {
        configuration: { id: "config-id" },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: { id: "config-id", state: "finished" },
      });

    const command = new CI();
    const toStop = await command.run({
      params: {
        projectId: "my-project",
        token: "some-token",
      },
    });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("✅ Saved config archive to");
    expect(output).toContain(
      "The configuration has been successfully validated"
    );
  });
});
