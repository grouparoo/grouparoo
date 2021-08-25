import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooRecord,
  RecordProperty,
  Property,
  Source,
} from "./../../../src";

describe("tasks/property:updateProfileProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let source: Source;

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  beforeAll(async () => {
    await helper.factories.properties();

    source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
  });

  test("can be enqueued", async () => {
    await task.enqueue("property:updateProfileProperties", {
      propertyId: "abc123",
    });
    const found = await specHelper.findEnqueuedTasks(
      "property:updateProfileProperties"
    );
    expect(found.length).toEqual(1);
    expect(found[0].args[0].propertyId).toBe("abc123");
  });

  test("will update the uniqueness of profileProperties", async () => {
    const property = await Property.create({
      sourceId: source.id,
      key: "test_property",
      type: "string",
      unique: false,
    });
    await property.setOptions({ column: "col" });
    await property.update({ state: "ready" });

    const record: GrouparooRecord = await helper.factories.record();
    await record.buildNullProperties();
    const profileProperty = await RecordProperty.findOne({
      where: { recordId: record.id, propertyId: property.id },
    });
    expect(profileProperty.unique).toBe(false);

    await property.update({ unique: true });
    let foundTasks = await specHelper.findEnqueuedTasks(
      "property:updateProfileProperties"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].propertyId).toBe(property.id);

    await specHelper.runTask(
      "property:updateProfileProperties",
      foundTasks[0].args[0]
    );

    await profileProperty.reload();
    expect(profileProperty.unique).toBe(true);
  });
});
