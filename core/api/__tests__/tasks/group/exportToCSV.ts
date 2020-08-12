import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { Group } from "../../../src/models/Group";
import { Import } from "../../../src/models/Import";
import { Profile } from "../../../src/models/Profile";
import { File } from "../../../src/models/File";
import fs from "fs";

let actionhero;

describe("tasks/group:exportToCSV", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("group:exportToCSV", () => {
    let mario: Profile;
    let luigi: Profile;
    let group: Group;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.destroy({ truncate: true });
    });

    beforeAll(async () => {
      await helper.factories.profilePropertyRules();
      helper.disableTestPluginImport();

      await Profile.destroy({ truncate: true });

      mario = await Profile.create();
      luigi = await Profile.create();

      await mario.addOrUpdateProperties({
        userId: [1],
        firstName: ["Mario"],
        lastName: ["Mario"],
        email: ["mario@example.com"],
      });

      await luigi.addOrUpdateProperties({
        userId: [2],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        email: ["luigi@example.com"],
      });

      group = await Group.create({ name: "test group", type: "manual" });
      await group.update({ state: "ready" });
      await group.addProfile(mario);
      await group.addProfile(luigi);
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:exportToCSV", { groupGuid: "abc123" });
      const found = await specHelper.findEnqueuedTasks("group:exportToCSV");
      expect(found.length).toEqual(1);
    });

    it("will create the CSV file and upload it", async () => {
      await specHelper.runTask("group:exportToCSV", { groupGuid: group.guid });
      const files = await File.findAll();
      expect(files.length).toBe(1);

      expect(files[0].type).toBe("csv");
      expect(files[0].extension).toBe(".csv");

      const contents = fs
        .readFileSync(`${files[0].bucket}/${files[0].path}`)
        .toString();
      expect(contents).toMatch(/mario@example.com,Mario/);
      expect(contents).toMatch(/luigi@example.com,Luigi/);
    });
  });
});
