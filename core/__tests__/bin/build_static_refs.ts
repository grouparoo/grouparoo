// import { helper } from "@grouparoo/spec-helper";
// import { RunCLI } from "../../src/bin/run";
// import { Run } from "../../src";

import { buildPropertyOpsDictionary } from "../../src/modules/ruleOpsDictionary";

import fs from "fs";
import cp from "child_process";
import path from "path";

const outputDir = path.join(__dirname, "../../bin/static_refs");

const pgFilePath = path.join(
  outputDir,
  "property-ops-dictionary--postgres.json"
);
const sqliteFilePath = path.join(
  outputDir,
  "property-ops-dictionary--sqlite.json"
);
const cliFilePath = path.join(outputDir, "cli-commands.json");

const scriptPath = path.join(__dirname, "../../bin/build_static_refs");

describe("bin/build_static_refs", () => {
  beforeEach(() => {
    if (fs.existsSync(pgFilePath)) fs.unlinkSync(pgFilePath);
    if (fs.existsSync(sqliteFilePath)) fs.unlinkSync(sqliteFilePath);
    if (fs.existsSync(cliFilePath)) fs.unlinkSync(cliFilePath);
  });

  test("writes two files with the appropriate data", () => {
    expect(fs.existsSync(pgFilePath)).toBe(false);
    expect(fs.existsSync(sqliteFilePath)).toBe(false);
    cp.execSync(`node ${scriptPath}`);
    const pgData = buildPropertyOpsDictionary({
      sequelize: { dialect: "postgres" },
    });
    expect(fs.readFileSync(pgFilePath).toString()).toBe(
      JSON.stringify(pgData, null, 2)
    );
    const sqliteData = buildPropertyOpsDictionary({
      sequelize: { dialect: "sqlite" },
    });
    expect(fs.readFileSync(sqliteFilePath).toString()).toBe(
      JSON.stringify(sqliteData, null, 2)
    );
  });

  test("generates CLI data", async () => {
    expect(fs.existsSync(cliFilePath)).toBe(false);
    cp.execSync(`node ${scriptPath}`);
    const json = JSON.parse(fs.readFileSync(cliFilePath).toString());

    const initCommand = json.find((c) => c.name === "init <path>");
    expect(initCommand.name).toBe("init <path>");
    expect(initCommand.inputs.force).toBeTruthy();
  });
});
