import { helper } from "@grouparoo/spec-helper";
import { ResetCLI } from "../../src/bin/reset";
import { cache } from "actionhero";
import {
  Import,
  Export,
  App,
  Source,
  GrouparooRecord,
  Property,
  Team,
} from "../../src";

describe("bin/reset", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  beforeAll(async () => await helper.factories.properties());

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

  test("requires --confirm flag", async () => {
    const command = new ResetCLI();
    await command.run({ params: {} });
    const output = messages.join(" ");

    expect(output).toContain("need to --confirm this command");
    expect(output).not.toContain("Success!");
  });

  test("requires valid mode argument", async () => {
    const command = new ResetCLI();
    await command.run({ params: { confirm: "true", mode: "foo" } });
    const output = messages.join(" ");

    expect(output).toContain("mode not found");
    expect(output).not.toContain("Success!");
  });

  test("requires mode argument", async () => {
    const command = new ResetCLI();
    await command.run({ params: { confirm: "true" } });
    const output = messages.join(" ");

    expect(output).toContain("mode not found");
    expect(output).not.toContain("Success!");
  });

  test("reset cache", async () => {
    await cache.save("testKey", { k: "v" });
    const responseA = await cache.load("testKey");
    expect(responseA.value).toEqual({ k: "v" });

    const command = new ResetCLI();
    await command.run({ params: { confirm: "true", mode: "cache" } });
    const output = messages.join(" ");

    expect(output).toContain("Success!");
    await expect(cache.load("testKey")).rejects.toThrow(/not found/);
  });

  test("reset data", async () => {
    await helper.factories.record();
    await helper.factories.import();
    await helper.factories.export();

    const command = new ResetCLI();
    await command.run({ params: { confirm: "true", mode: "data" } });
    const output = messages.join(" ");

    expect(output).toContain("Success!");

    // removed data models
    expect(await GrouparooRecord.count()).toBe(0);
    expect(await Import.count()).toBe(0);
    expect(await Export.count()).toBe(0);

    // kept config models
    expect(await App.count()).toBeGreaterThan(0);
    expect(await Property.count()).toBeGreaterThan(0);
  });

  test("reset cluster", async () => {
    await helper.factories.record();
    await helper.factories.team();

    const command = new ResetCLI();
    await command.run({ params: { confirm: "true", mode: "cluster" } });
    const output = messages.join(" ");

    expect(output).toContain("Success!");

    // removed most models
    expect(await GrouparooRecord.count()).toBe(0);
    expect(await Source.count()).toBe(0);
    expect(await Property.count()).toBe(0);
    expect(await App.count()).toBe(0);

    // did not remove teams
    expect(await Team.count()).toBeGreaterThan(0);
  });
});
