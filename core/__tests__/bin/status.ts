import { helper } from "@grouparoo/spec-helper";
import { StatusCLI } from "../../src/bin/status";

describe("bin/status", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  let messages: string[] = [];
  let spy: any;

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
    const command = new StatusCLI();
    const toStop = await command.run({ params: {} });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(spy).toHaveBeenCalled();
    expect(output).toContain("Cluster Status @");
    expect(output).toContain("Cluster Name: My Grouparoo Cluster / test");
    expect(output).toContain("Groups: 0");
    expect(output).toContain("Export: 0");
  });

  test("the status command can output json", async () => {
    const command = new StatusCLI();
    const toStop = await command.run({ params: { json: "true" } });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(spy).toHaveBeenCalled();
    expect(output).not.toContain("Cluster Status @");
    expect(output).toContain('"ClusterName":["My Grouparoo Cluster","test"]');
    expect(output).toContain('"Export":[0]');
  });

  test("with a group", async () => {
    const group = await helper.factories.group();

    const command = new StatusCLI();
    await command.run({ params: {} });

    const output = messages.join(" ");
    expect(output).toContain("Groups: 1");
    expect(output).toContain(`0 members / newest member: Never`);
  });
});
