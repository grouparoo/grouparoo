import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Group } from "../../../dist";
import { App, GrouparooModel, Destination, Source } from "../../../src";

describe("tasks/model:destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("model:destroy", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("can be enqueued", async () => {
      await task.enqueue("model:destroy", { modelId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("model:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].modelId).toBe("abc123");
    });

    test("will delete model immediately if it's not being used", async () => {
      const model: GrouparooModel = await helper.factories.model();

      await model.update({ state: "deleted" });
      await task.enqueue("model:destroy", { modelId: model.id });
      const foundTasks = await specHelper.findEnqueuedTasks("model:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);

      await expect(GrouparooModel.findById(model.id)).rejects.toThrow(
        /cannot find GrouparooModel/
      );
    });

    test("will wait for source to be deleted if it uses the model", async () => {
      const model: GrouparooModel = await helper.factories.model();
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app, {
        modelId: model.id,
      });
      await model.update({ state: "deleted" });
      await task.enqueue("model:destroy", { modelId: model.id });

      const foundTasks = await specHelper.findEnqueuedTasks("model:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);

      const reloadedModel = await GrouparooModel.findById(model.id);
      expect(reloadedModel.state).toBe("deleted");

      // remove source
      await source.destroy();

      // run it again
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);
      await expect(model.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test("will wait for destination to be deleted if it uses the model", async () => {
      const model: GrouparooModel = await helper.factories.model();
      const app: App = await helper.factories.app();
      const destination: Destination = await helper.factories.destination(app, {
        modelId: model.id,
      });
      await model.update({ state: "deleted" });
      await task.enqueue("model:destroy", { modelId: model.id });

      const foundTasks = await specHelper.findEnqueuedTasks("model:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);

      const reloadedModel = await GrouparooModel.findById(model.id);
      expect(reloadedModel.state).toBe("deleted");

      // remove destination
      await destination.destroy();

      // run it again
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);
      await expect(model.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test("will wait for group to be deleted if it uses the model", async () => {
      const model: GrouparooModel = await helper.factories.model();
      const group: Group = await helper.factories.group();
      await group.update({ modelId: model.id });

      await model.update({ state: "deleted" });
      await task.enqueue("model:destroy", { modelId: model.id });

      const foundTasks = await specHelper.findEnqueuedTasks("model:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);

      const reloadedModel = await GrouparooModel.findById(model.id);
      expect(reloadedModel.state).toBe("deleted");

      // remove group
      await group.destroy();

      // run it again
      await specHelper.runTask("model:destroy", foundTasks[0].args[0]);
      await expect(model.reload()).rejects.toThrow(/does not exist anymore/);
    });
  });
});
