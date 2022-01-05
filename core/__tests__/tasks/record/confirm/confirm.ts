import { helper } from "@grouparoo/spec-helper";
import Moment from "moment";
import { api, task, specHelper } from "actionhero";
import {
  Import,
  plugin,
  GrouparooRecord,
  RecordProperty,
  Property,
  Run,
  Schedule,
  Source,
} from "../../../../src";

describe("tasks/records:confirm", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  let primaryKeyProperty: Property;

  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => {
    await helper.factories.properties();
    primaryKeyProperty = await Property.findOne({
      where: { key: "userId" },
    });
  });

  afterEach(async () => {
    await plugin.updateSetting("core", "confirm-records-days", 7);
  });

  test("can be enqueued", async () => {
    await task.enqueue("records:confirm", {});
    const found = await specHelper.findEnqueuedTasks("records:confirm");
    expect(found.length).toEqual(1);
  });

  test("marks records and primary key record property pending if they haven't been confirmed in a while", async () => {
    const staleRecord: GrouparooRecord = await helper.factories.record();
    const recentRecord: GrouparooRecord = await helper.factories.record();

    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(10, "days").toDate(),
      },
      {
        where: {
          recordId: staleRecord.id,
        },
      }
    );

    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          recordId: recentRecord.id,
        },
      }
    );

    await GrouparooRecord.update(
      { state: "ready" },
      {
        where: {
          id: [staleRecord.id, recentRecord.id],
        },
      }
    );

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(1);

    await staleRecord.reload();
    await recentRecord.reload();

    expect(staleRecord.state).toBe("pending");
    expect(recentRecord.state).toBe("ready"); // dont need to confirm

    const pendingRecordProperties = await RecordProperty.findAll({
      where: {
        state: "pending",
        recordId: [staleRecord.id, recentRecord.id],
      },
    });
    expect(pendingRecordProperties.length).toBe(1);
    expect(pendingRecordProperties[0].propertyId).toBe(
      primaryKeyProperty.id // only the property with isPrimaryKey is marked pending
    );
    expect(pendingRecordProperties[0].recordId).toBe(staleRecord.id);

    const readyRecordProperties = await RecordProperty.findAll({
      where: {
        state: "ready",
        recordId: [staleRecord.id, recentRecord.id],
      },
    });
    expect(readyRecordProperties.length).toBe(9 + 8);

    await staleRecord.destroy();
    await recentRecord.destroy();
  });

  test("the amount of days can be configured", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 5);

    const record: GrouparooRecord = await helper.factories.record();
    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          recordId: record.id,
        },
      }
    );
    await record.update({ state: "ready" });

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(1);

    await record.reload();
    expect(record.state).toBe("pending");

    const pendingRecordProperties = await RecordProperty.findAll({
      where: {
        recordId: record.id,
        state: "pending",
      },
    });

    expect(pendingRecordProperties.length).toBe(1);
    expect(pendingRecordProperties[0].propertyId).toBe(primaryKeyProperty.id);

    await record.destroy();
  });

  test("can disable confirming records by setting days to 0", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 0);

    const record: GrouparooRecord = await helper.factories.record();
    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          recordId: record.id,
        },
      }
    );
    await record.update({ state: "ready" });

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(0);

    await record.reload();
    expect(record.state).toBe("ready");

    const pendingRecordProperties = await RecordProperty.findAll({
      where: {
        recordId: record.id,
        state: "pending",
      },
    });

    expect(pendingRecordProperties.length).toBe(0);

    await record.destroy();
  });

  test("marks records and primary key record property pending that haven't been confirmed if the schedule has run and it's marked as confirmRecords=true", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmRecords: true,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const record: GrouparooRecord = await helper.factories.record();
    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          recordId: record.id,
        },
      }
    );
    await record.update({ state: "ready" });

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(1);

    await record.reload();
    expect(record.state).toBe("pending");

    const pendingRecordProperties = await RecordProperty.findAll({
      where: {
        recordId: record.id,
        state: "pending",
      },
    });

    expect(pendingRecordProperties.length).toBe(1);
    expect(pendingRecordProperties[0].propertyId).toBe(primaryKeyProperty.id);

    await record.destroy();
    await schedule.destroy();
  });

  test("does not mark records pending that haven't been confirmed if the schedule has run and it's marked as confirmRecords=false", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmRecords: false,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const record: GrouparooRecord = await helper.factories.record();
    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          recordId: record.id,
        },
      }
    );
    await record.update({ state: "ready" });

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(0);

    await record.reload();
    expect(record.state).toBe("ready");

    const pendingRecordProperties = await RecordProperty.findAll({
      where: {
        recordId: record.id,
        state: "pending",
      },
    });

    expect(pendingRecordProperties.length).toBe(0);

    await record.destroy();
    await schedule.destroy();
  });

  test("will wait for schedule run's imports to be associated before trying to confirm records", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmRecords: true,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const record: GrouparooRecord = await helper.factories.record();
    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          recordId: record.id,
        },
      }
    );
    await record.update({ state: "ready" });

    // create an unassociated import
    const _import: Import = await helper.factories.import(run);

    // try to confirm
    let count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(0); // nothing

    await record.reload();
    expect(record.state).toBe("ready");

    // associate the import
    await _import.update({
      recordId: "someId",
      recordAssociatedAt: new Date(),
      state: "importing",
    });

    // try to confirm again
    count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(1); // now we can confirm it

    await record.reload();
    expect(record.state).toBe("pending");

    await record.destroy();
    await schedule.destroy();
  });

  test("silently exists if the schedule has no runs", async () => {
    await plugin.updateSetting("core", "confirm-records-days", 0);

    const source = await Source.findOne();
    await helper.factories.schedule(source, {
      confirmRecords: true,
    });

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(0); // nothing
  });
});
