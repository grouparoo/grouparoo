import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Property, Source, Destination } from "./../../../src";

describe("tasks/source:destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("source:destroy", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    beforeAll(async () => {
      await helper.factories.properties();
    });

    test("can be enqueued", async () => {
      await task.enqueue("source:destroy", { sourceId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("source:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].sourceId).toBe("abc123");
    });

    test("will delete source immediately if it's not being used", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "userId" });

      await source.update({ state: "deleted" });
      await task.enqueue("source:destroy", { sourceId: source.id });
      const foundTasks = await specHelper.findEnqueuedTasks("source:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);

      await expect(Source.findById(source.id)).rejects.toThrow(
        /cannot find Source/
      );
    });

    test("will wait for property to be deleted if it depends on the source", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const property = await helper.factories.property(
        source,
        { key: "test_prop" },
        { column: "col" }
      );

      await source.update({ state: "deleted" });
      await task.enqueue("source:destroy", { sourceId: source.id });

      const foundTasks = await specHelper.findEnqueuedTasks("source:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);

      const reloadedSource = await Source.findById(source.id);
      expect(reloadedSource.state).toBe("deleted");

      // remove property
      await property.destroy();

      // run it again
      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);
      await expect(Source.findById(source.id)).rejects.toThrow(
        /cannot find Source/
      );
    });

    test("will not destroy until directly mapped property is not in use elsewhere", async () => {
      const source: Source = await helper.factories.source();
      await source.bootstrapUniqueProperty("myUserId", "integer", "id");
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "myUserId" });

      //map property to destination
      const destination: Destination = await helper.factories.destination();
      await destination.setMapping({ "primary-id": "myUserId" });

      //try to destroy
      await source.update({ state: "deleted" });
      await task.enqueue("source:destroy", { sourceId: source.id });
      const foundTasks = await specHelper.findEnqueuedTasks("source:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);

      //should still be there
      const reloadedSource = await Source.findById(source.id);
      expect(reloadedSource.state).toBe("deleted");

      //destroy destination and rerun
      await destination.destroy();

      //should not still be there

      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);
      await expect(Source.findById(source.id)).rejects.toThrow(
        /cannot find Source/
      );
    });

    test("will destroy its directly mapped property if not used elsewhere", async () => {
      const source: Source = await helper.factories.source();
      const myUserIdProp = await source.bootstrapUniqueProperty(
        "myUserId",
        "string",
        "id"
      );
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "myUserId" });
      await source.update({ state: "ready" });

      await Property.determineDirectlyMapped(myUserIdProp);
      expect(myUserIdProp.isPrimaryKey).toBe(true);

      await source.update({ state: "deleted" });
      await task.enqueue("source:destroy", { sourceId: source.id });

      const foundTasks = await specHelper.findEnqueuedTasks("source:destroy");
      expect(foundTasks.length).toBe(1);

      await specHelper.runTask("source:destroy", foundTasks[0].args[0]);

      await expect(Source.findById(source.id)).rejects.toThrow(
        /cannot find Source/
      );
      await expect(Property.findById(myUserIdProp.id)).rejects.toThrow(
        /cannot find Property/
      );
    });
  });
});
