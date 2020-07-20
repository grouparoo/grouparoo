import { helper } from "./../utils/specHelper";
import { groupExportToCSV } from "./../../src/modules/groupExport";
import { Profile } from "./../../src/models/Profile";
import { Run } from "./../../src/models/Run";
import parse from "csv-parse/lib/sync";
import fs from "fs";

let actionhero;

describe("modules/groupExport", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
  });

  describe("groupExport", () => {
    let filename: string;
    let runGuid: string;
    let mario: Profile;
    let luigi: Profile;
    let peach: Profile;
    let toad: Profile;

    beforeAll(async () => {
      mario = await Profile.create();
      luigi = await Profile.create();
      peach = await Profile.create();
      toad = await Profile.create();

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
      "a group's profiles can be exported and create a run",
      async () => {
        const profiles = [mario, luigi, toad, peach];

        const group = await helper.factories.group();
        await Promise.all(profiles.map((profile) => group.addProfile(profile)));

        const response = await groupExportToCSV(group, 1);
        filename = response.filename;
        runGuid = response.runGuid;
      },
      1000 * 30
    );

    test("the run is complete", async () => {
      const run = await Run.findOne({ where: { guid: runGuid } });
      expect(run.profilesImported).toBe(0);
      expect(run.profilesExported).toBe(4);
      expect(run.state).toBe("complete");
      expect(run.completedAt).toBeTruthy();
    });

    test("the exported csv will contain profile data", async () => {
      const rows = parse(fs.readFileSync(filename), { columns: true });
      let lastLoginAt: Date;

      // mario
      let properties = await mario.properties();
      expect(rows[0].guid).toBe(mario.guid);
      expect(parseInt(rows[0].createdAt)).toBeGreaterThan(0);
      expect(rows[0]["email[0]"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[0]["ltv[0]"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[0]["lastLoginAt[0]"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // luigi
      properties = await luigi.properties();
      expect(rows[1].guid).toBe(luigi.guid);
      expect(parseInt(rows[1].createdAt)).toBeGreaterThan(0);
      expect(rows[1]["email[0]"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[1]["ltv[0]"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[1]["lastLoginAt[0]"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // peach
      properties = await peach.properties();
      expect(rows[2].guid).toBe(peach.guid);
      expect(parseInt(rows[2].createdAt)).toBeGreaterThan(0);
      expect(rows[2]["email[0]"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[2]["ltv[0]"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[2]["lastLoginAt[0]"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );

      // toad
      properties = await toad.properties();
      expect(rows[3].guid).toBe(toad.guid);
      expect(parseInt(rows[3].createdAt)).toBeGreaterThan(0);
      expect(rows[3]["email[0]"]).toBe(properties.email.values[0]);
      expect(parseFloat(rows[3]["ltv[0]"])).toBe(properties.ltv.values[0]);
      lastLoginAt = properties.lastLoginAt.values[0] as Date;
      expect(parseInt(rows[3]["lastLoginAt[0]"])).toBe(
        Math.round(lastLoginAt.getTime() / 1000)
      );
    });
  });
});
