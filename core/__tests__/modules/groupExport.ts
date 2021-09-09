import { helper } from "@grouparoo/spec-helper";
import { groupExportToCSV } from "./../../src/modules/groupExport";
import { GrouparooRecord, Group, Run } from "./../../src";
import parse from "csv-parse/lib/sync";
import fs from "fs";

describe("modules/groupExport", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  describe("groupExport", () => {
    let filename: string;
    let runId: string;
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;
    let peach: GrouparooRecord;
    let toad: GrouparooRecord;
    let group: Group;

    beforeAll(async () => {
      mario = await GrouparooRecord.create();
      luigi = await GrouparooRecord.create();
      peach = await GrouparooRecord.create();
      toad = await GrouparooRecord.create();
      group = await helper.factories.group();

      await mario.addOrUpdateProperties({
        userId: [1],
        firstName: ["Mario"],
        lastName: ["Mario"],
        email: ["mario@example.com"],
        ltv: [100.0],
        isVIP: [true],
        lastLoginAt: [new Date(0)],
      });

      await luigi.addOrUpdateProperties({
        userId: [2],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        email: ["luigi@example.com"],
        ltv: [50.01],
        isVIP: [false],
        lastLoginAt: [new Date()],
      });

      await peach.addOrUpdateProperties({
        userId: [3],
        firstName: ["Peach"],
        lastName: ["Toadstool"],
        email: ["peach@example.com"],
        ltv: [999.99],
        isVIP: [true],
        lastLoginAt: [new Date(0)],
      });

      await toad.addOrUpdateProperties({
        userId: [4],
        firstName: ["Toad"],
        lastName: ["Toadstool"],
        email: ["toad@example.com"],
        ltv: [0],
        isVIP: [false],
        lastLoginAt: [new Date()],
      });
    }, 10 * 1000);

    test(
      "a group's records can be exported and create a run",
      async () => {
        const records = [mario, luigi, toad, peach];
        for (const p of records) await group.addRecord(p);

        const response = await groupExportToCSV(group, 1);
        filename = response.filename;
        runId = response.runId;
      },
      helper.longTime
    );

    test("the run is complete", async () => {
      const run = await Run.findOne({ where: { id: runId } });
      expect(run.state).toBe("complete");
      expect(run.completedAt).toBeTruthy();
    });

    test("the exported csv will contain record data", async () => {
      const rows = parse(fs.readFileSync(filename), { columns: true });
      let lastLoginAt: Date;

      // mario
      let properties = await mario.getProperties();
      expect(rows[0].id).toBe(mario.id);
      expect(parseInt(rows[0].createdAt)).toBeGreaterThan(0);
      expect(rows[0]["email"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[0]["ltv"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[0]["lastLoginAt"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // luigi
      properties = await luigi.getProperties();
      expect(rows[1].id).toBe(luigi.id);
      expect(parseInt(rows[1].createdAt)).toBeGreaterThan(0);
      expect(rows[1]["email"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[1]["ltv"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[1]["lastLoginAt"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // peach
      properties = await peach.getProperties();
      expect(rows[2].id).toBe(peach.id);
      expect(parseInt(rows[2].createdAt)).toBeGreaterThan(0);
      expect(rows[2]["email"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[2]["ltv"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[2]["lastLoginAt"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // toad
      properties = await toad.getProperties();
      expect(rows[3].id).toBe(toad.id);
      expect(parseInt(rows[3].createdAt)).toBeGreaterThan(0);
      expect(rows[3]["email"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[3]["ltv"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[3]["lastLoginAt"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );
    });

    describe("array properties", () => {
      test("array properties are flattened into a comma-delimited list in a single CSV column", async () => {
        await mario.addOrUpdateProperties({ purchases: ["hat", "shell"] });
        const properties = await mario.getProperties();
        expect(properties.purchases.values).toEqual(["hat", "shell"]);

        const { filename } = await groupExportToCSV(group, 1);
        const rows = parse(fs.readFileSync(filename), { columns: true });
        expect(rows[0].purchases).toEqual("hat, shell");
        expect(rows[1].purchases).toEqual("");
      });
    });
  });
});
