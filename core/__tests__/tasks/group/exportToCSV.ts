import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Group, Import, GrouparooRecord, File, Run } from "../../../src";
import fs from "fs";

describe("tasks/group:exportToCSV", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("group:exportToCSV", () => {
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;
    let group: Group;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
    });

    beforeAll(async () => {
      await helper.factories.properties();
      helper.disableTestPluginImport();

      await GrouparooRecord.truncate();

      mario = await GrouparooRecord.create();
      luigi = await GrouparooRecord.create();

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
      await task.enqueue("group:exportToCSV", { groupId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("group:exportToCSV");
      expect(found.length).toEqual(1);
    });

    test("will create the CSV file and upload it", async () => {
      await specHelper.runTask("group:exportToCSV", { groupId: group.id });
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

    test("the run is complete", async () => {
      const runs = await Run.findAll({ where: { creatorId: group.id } });
      expect(runs.length).toBe(1);
      expect(runs[0].percentComplete).toBe(100);
      expect(runs[0].state).toBe("complete");
    });
  });
});
