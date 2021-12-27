import { helper } from "@grouparoo/spec-helper";
import { Op } from "sequelize";
import { api, task, specHelper } from "actionhero";
import { Property, RecordProperty, Export, GroupMember } from "../../../src";

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
    expect(userIdProperty.isPrimaryKey).toBe(true);
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
    expect(record.state).toBe("pending"); // no change

    // make it ready
    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "deleted" });

    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("exports records and removes them from groups before destroying (group destination)", async () => {
    const record = await helper.factories.record();
    const destination = await helper.factories.destination();
    const group = await helper.factories.group();
    await GroupMember.create({ groupId: group.id, recordId: record.id });

    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    await destination.updateTracking("group", group.id);
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.id] = group.name;
    await destination.setDestinationGroupMemberships(
      destinationGroupMemberships
    );
    await destination.exportRecord(record);

    let recordGroups = await record.$get("groups");
    expect(recordGroups.length).toBe(1);

    await specHelper.runTask("export:enqueue", {});
    let foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }
    await api.resque.queue.connection.redis.flushdb();

    const exportCount = await Export.count({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(0);
    await record.reload();
    expect(record.state).toBe("ready");

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // record is still there, but is now being exported
    await record.reload();
    expect(record.state).toBe("deleted");

    recordGroups = await record.$get("groups");
    expect(recordGroups.length).toBe(0); // removed from groups

    let exports = await Export.findAll({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exports.length).toBe(1);
    expect(exports[0].toDelete).toBe(true);
    expect(exports[0].completedAt).toBe(null);

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // does nothing, there's an export being processed
    await record.reload();
    expect(record.state).toBe("deleted");
    exports = await Export.findAll({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exports.length).toBe(1); // still only 1
    expect(exports[0].toDelete).toBe(true);
    expect(exports[0].completedAt).toBe(null);

    // process the export
    await specHelper.runTask("export:enqueue", {});
    foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }

    const finalExport = await Export.findById(foundTasks[0].args[0].exportId);
    expect(finalExport.oldGroups.length).toBe(1);
    expect(finalExport.newGroups.length).toBe(0);
    expect(finalExport.toDelete).toBe(true);
    expect(finalExport.completedAt).not.toBe(null);

    // now we can destroy
    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("exports records and removes them from groups before destroying (model destination)", async () => {
    const record = await helper.factories.record();

    const destination = await helper.factories.destination();

    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    await destination.updateTracking("model");
    await destination.exportRecord(record);

    await specHelper.runTask("export:enqueue", {});
    let foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }
    await api.resque.queue.connection.redis.flushdb();

    const exportCount = await Export.count({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(0);
    await record.reload();
    expect(record.state).toBe("ready");

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // record is still there, but is now being exported
    await record.reload();
    expect(record.state).toBe("deleted");

    let exports = await Export.findAll({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exports.length).toBe(1);
    expect(exports[0].toDelete).toBe(true);
    expect(exports[0].completedAt).toBe(null);

    // try to delete
    await specHelper.runTask("record:destroy", { recordId: record.id });

    // does nothing, there's an export being processed
    await record.reload();
    expect(record.state).toBe("deleted");
    exports = await Export.findAll({
      where: { recordId: record.id, state: { [Op.ne]: "complete" } },
    });
    expect(exports.length).toBe(1); // still only 1
    expect(exports[0].toDelete).toBe(true);
    expect(exports[0].completedAt).toBe(null);

    // process the export
    await specHelper.runTask("export:enqueue", {});
    foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }

    const finalExport = await Export.findById(foundTasks[0].args[0].exportId);
    expect(finalExport.toDelete).toBe(true);
    expect(finalExport.completedAt).not.toBe(null);

    // now we can destroy
    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("all related models are cleaned up (except for records)", async () => {
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
    await record.update({ state: "deleted" });

    await specHelper.runTask("record:destroy", { recordId: record.id });
    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);

    const properties = await RecordProperty.findAll({
      where: { recordId: record.id },
    });
    expect(properties.length).toBe(0);

    await expect(record.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_import.reload()).rejects.toThrow(/does not exist anymore/);
    await _export.reload(); // does not throw
  });
});
