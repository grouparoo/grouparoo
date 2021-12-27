import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Destination, Group, Property, Source } from "./../../../src";

describe("tasks/property:destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("property:destroy", () => {
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
      await task.enqueue("property:destroy", { propertyId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("property:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].propertyId).toBe("abc123");
    });

    test("will delete property immediately if it's not being used", async () => {
      const property = await Property.create({
        sourceId: source.id,
        key: "test_property",
        type: "string",
        unique: false,
      });
      await property.setOptions({ column: "col" });
      await property.update({ state: "deleted" });

      await task.enqueue("property:destroy", { propertyId: property.id });
      const foundTasks = await specHelper.findEnqueuedTasks("property:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("property:destroy", foundTasks[0].args[0]);

      await expect(Property.findById(property.id)).rejects.toThrow(
        /cannot find Property/
      );
    });

    test("will wait for group to be deleted if it depends on the property", async () => {
      const property = await Property.create({
        sourceId: source.id,
        key: "test_property",
        type: "string",
        unique: false,
      });
      await property.setOptions({ column: "col" });
      await property.update({ state: "ready" });

      const group: Group = await helper.factories.group();
      await group.setRules([
        { key: "test_property", match: "%", operation: { op: "like" } },
      ]);

      await property.update({ state: "deleted" });
      await task.enqueue("property:destroy", { propertyId: property.id });

      const foundTasks = await specHelper.findEnqueuedTasks("property:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("property:destroy", foundTasks[0].args[0]);

      const reloadedProperty = await Property.findById(property.id);
      expect(reloadedProperty.state).toBe("deleted");

      // remove group
      await group.destroy();

      // run it again
      await specHelper.runTask("property:destroy", foundTasks[0].args[0]);
      await expect(property.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test("will wait for destination to be deleted if property is being used in a mapping", async () => {
      const property = await Property.create({
        sourceId: source.id,
        key: "test_property",
        type: "string",
        unique: false,
      });
      await property.setOptions({ column: "col" });
      await property.update({ state: "ready" });

      const destination: Destination = await helper.factories.destination();
      await destination.setMapping({ prop: "test_property" }, false);

      await property.update({ state: "deleted" });
      await task.enqueue("property:destroy", { propertyId: property.id });

      const foundTasks = await specHelper.findEnqueuedTasks("property:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("property:destroy", foundTasks[0].args[0]);

      const reloadedProperty = await Property.findById(property.id);
      expect(reloadedProperty.state).toBe("deleted");

      // remove destination
      await destination.destroy();

      // run it again
      await specHelper.runTask("property:destroy", foundTasks[0].args[0]);
      await expect(property.reload()).rejects.toThrow(/does not exist anymore/);
    });
  });
});
