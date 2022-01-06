import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Op } from "sequelize";
import {
  App,
  GrouparooModel,
  Property,
  Source,
  Destination,
} from "./../../../src";

describe("tasks/source:destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let app: App;
  let model: GrouparooModel;

  const createSource = () =>
    helper.factories.source(app, { modelId: model.id });

  const createProperties = () => helper.factories.properties(model.id);

  beforeAll(async () => {
    app = await helper.factories.app();
    model = await helper.factories.model({
      name: "test__source_destroy",
    });
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterEach(async () => {
    const destinations = await Destination.scope(null).findAll({
      where: { modelId: model.id },
      order: [["createdAt", "DESC"]],
    });

    for (const destination of destinations) {
      await destination.destroy();
    }

    const sources = await Source.scope(null).findAll({
      where: { modelId: model.id },
      order: [["createdAt", "DESC"]],
    });

    const properties = await Property.scope(null).findAll({
      where: {
        sourceId: { [Op.in]: sources.map(({ id }) => id) },
        isPrimaryKey: false,
      },
      order: [["createdAt", "DESC"]],
    });

    for (const property of properties) {
      await property.destroy();
    }

    for (const source of sources) {
      await source.destroy();
    }
  });

  describe("source:destroy", () => {
    test("can be enqueued", async () => {
      await task.enqueue("source:destroy", { sourceId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("source:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].sourceId).toBe("abc123");
    });

    test("will delete source immediately if it's not being used", async () => {
      await createProperties();

      const source = await createSource();
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
      await createProperties();

      const source = await createSource();
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

    test("will not destroy until primary key is not in use elsewhere", async () => {
      const source: Source = await createSource();
      await source.bootstrapUniqueProperty({
        key: "myUserId",
        type: "integer",
        mappedColumn: "id",
      });
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

    test("will destroy its primary key property if not used elsewhere", async () => {
      const source: Source = await createSource();
      const myUserIdProp = await source.bootstrapUniqueProperty({
        key: "myUserId",
        type: "string",
        mappedColumn: "id",
      });
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "myUserId" });
      await source.update({ state: "ready" });

      await myUserIdProp.reload();
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
