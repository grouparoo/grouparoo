import { helper } from "@grouparoo/spec-helper";
import { Op } from "sequelize";
import { api, task, specHelper } from "actionhero";
import {
  Property,
  RecordProperty,
  GrouparooRecord,
  Group,
  Export,
  Import,
} from "../../../src";

describe("tasks/record:destroy", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let userIdProperty: Property;

  beforeAll(async () => {
    userIdProperty = await Property.findOne({ where: { key: "userId" } });
    expect(userIdProperty.directlyMapped).toBe(true);
  });

  test("can be enqueued", async () => {
    await task.enqueue("record:destroy", { recordId: "john-doe" });
    const found = await specHelper.findEnqueuedTasks("record:destroy");
    expect(found.length).toEqual(1);
    expect(found[0].args[0].recordId).toBe("john-doe");
  });

  test("wont throw if record no longer exists", async () => {
    expect(
      specHelper.runTask("record:destroy", {
        recordId: "someRecordThatDoesNotExist",
      })
    ).resolves.toBe(undefined);
  });

  test("does not delete records that aren't ready", async () => {
    const record = await helper.factories.record();
    await record.update({ state: "pending" });

    await specHelper.runTask("record:destroy", { recordId: record.id });
    await record.reload();
    expect(record.state).toBe("pending");

    // make it ready
    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("exports records and removes them from groups before destroying", async () => {
    const record = await helper.factories.record();

    const modelDestination = await helper.factories.destination();
    await modelDestination.update({ collection: "model", state: "ready" });

    const groupDestination = await helper.factories.destination();
    const group: Group = await helper.factories.group();

    await group.addRecord(record);
    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    await groupDestination.updateTracking("group", group.id);
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.id] = group.name;
    await groupDestination.setDestinationGroupMemberships(
      destinationGroupMemberships
    );
    await groupDestination.exportRecord(record);

    let recordGroups = await record.$get("groups");
    expect(recordGroups.length).toBe(1);

    await specHelper.runTask("export:enqueue", {});
    let foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }
    await api.resque.queue.connection.redis.flushdb();

    let exportCount = await Export.count({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(0);
    await record.reload();
    expect(record.state).toBe("ready");

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // record is still there, but is now being exported
    await record.reload();
    expect(record.state).toBe("ready");

    recordGroups = await record.$get("groups");
    expect(recordGroups.length).toBe(0); // removed from groups

    exportCount = await Export.count({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(2);

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // does nothing, there's an export being processed
    await record.reload();
    expect(record.state).toBe("ready");
    exportCount = await Export.count({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(2); // still only 2

    // process the export
    await specHelper.runTask("export:enqueue", {});
    foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(2);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }

    const finalModelExportId: string = foundTasks.find(
      (t) => t.args[0].destinationId === modelDestination.id
    ).args[0].exportId;
    const finalGroupExportId: string = foundTasks.find(
      (t) => t.args[0].destinationId === groupDestination.id
    ).args[0].exportId;

    const finalModelExport = await Export.findById(finalModelExportId);
    const finalGroupExport = await Export.findById(finalGroupExportId);
    expect(finalModelExport.toDelete).toBe(true);
    expect(finalModelExport.oldGroups.length).toBe(0);
    expect(finalModelExport.newGroups.length).toBe(0);
    expect(finalGroupExport.toDelete).toBe(true);
    expect(finalGroupExport.oldGroups.length).toBe(1);
    expect(finalGroupExport.newGroups.length).toBe(0);

    // now we can destroy
    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("all related models are cleaned up", async () => {
    const record = await helper.factories.record();
    const _import = await helper.factories.import(
      undefined,
      undefined,
      record.id
    );
    const _export = await helper.factories.export(record);
    await _export.update({ state: "complete" });

    await record.addOrUpdateProperties({
      userId: [null],
      isVIP: [true],
      ltv: [213],
    });

    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    await specHelper.runTask("record:destroy", { recordId: record.id });

    const properties = await RecordProperty.findAll({
      where: { recordId: record.id },
    });
    expect(properties.length).toBe(0);

    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_import.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_export.reload()).rejects.toThrow(/does not exist anymore/);
  });
});
