import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, utils } from "actionhero";
import {
  Group,
  Destination,
  Export,
  GrouparooRecord,
  Run,
} from "./../../../src";

describe("tasks/destination:destroy", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => await Export.truncate());

  describe("without tracked group", () => {
    let destination: Destination;

    beforeAll(async () => {
      destination = await helper.factories.destination();
    });

    afterAll(async () => {
      await destination.destroy();
    });

    test("deleting a destination with no group tracked works", async () => {
      await destination.update({ state: "deleted" });
      await specHelper.runTask("destination:destroy", {
        destinationId: destination.id,
      });

      await expect(Destination.findById(destination.id)).rejects.toThrow(
        /cannot find Destination/
      );
    });
  });

  describe.each(["ready", "deleted"])(
    "with a tracked group in %p state",
    (groupState) => {
      let group: Group;
      let destination: Destination;
      let mario: GrouparooRecord;
      let luigi: GrouparooRecord;
      let run: Run;

      beforeAll(async () => {
        destination = await helper.factories.destination();
        group = await helper.factories.group();
        mario = await helper.factories.record();
        luigi = await helper.factories.record();
        await group.addProfile(mario);
        await group.addProfile(luigi);
        await destination.trackGroup(group);

        await group.update({ state: groupState });

        await api.resque.queue.connection.redis.flushdb();
        await Run.truncate();
      });

      afterAll(async () => {
        await mario.destroy();
        await luigi.destroy();
      });

      test("a destination tracking a group cannot be deleted", async () => {
        await expect(destination.destroy()).rejects.toThrow(
          "cannot delete a destination that is tracking a group"
        );
      });

      test("the task can be enqueued and create a run for the group", async () => {
        await destination.update({ state: "deleted" });
        await specHelper.runTask("destination:destroy", {
          destinationId: destination.id,
        });

        run = await Run.findOne({
          where: { creatorId: group.id, destinationId: destination.id },
        });
        expect(run.state).toBe("running");
        expect(run.force).toBe(false);

        destination = await Destination.findById(destination.id);
        expect(destination.state).toBe("deleted");
        expect(destination.groupId).toBeNull();
      });

      test("the destination will not be deleted yet (running run)", async () => {
        await utils.sleep(1000);
        await specHelper.runTask("destination:destroy", {
          destinationId: destination.id,
        });

        destination = await Destination.findById(destination.id);
        expect(destination.state).toBe("deleted");
      });

      test("the group run can be completed and create exports", async () => {
        await specHelper.runTask("group:run", { runId: run.id });
        await specHelper.runTask("group:run", { runId: run.id });
        await specHelper.runTask("group:run", { runId: run.id });
        await specHelper.runTask("group:run", { runId: run.id });

        await ImportWorkflow();

        await specHelper.runTask("group:run", { runId: run.id });

        run = await run.reload();
        group = await Group.findById(group.id);
        expect(group.state).toBe(groupState);
        expect(run.state).toBe("complete");

        // create exports
        const exportTasks = await specHelper.findEnqueuedTasks("record:export");
        await Promise.all(
          exportTasks.map((t) => specHelper.runTask("record:export", t.args[0]))
        );
      });

      test("the destination will not be deleted yet (pending exports)", async () => {
        await utils.sleep(1000);
        await specHelper.runTask("destination:destroy", {
          destinationId: destination.id,
        });

        destination = await Destination.findById(destination.id);
        expect(destination.state).toBe("deleted");
      });

      test("the exports can be exported", async () => {
        await specHelper.runTask("export:enqueue", {});
        const foundExportSendTasks = await specHelper.findEnqueuedTasks(
          "export:send"
        );
        expect(foundExportSendTasks.length).toBe(2);
        await Promise.all(
          foundExportSendTasks.map((t) =>
            specHelper.runTask("export:send", t.args[0])
          )
        );
      });

      test("the destination will not be deleted yet (not enough time has passed)", async () => {
        await api.resque.queue.connection.redis.flushdb();
        await specHelper.runTask("destination:destroy", {
          destinationId: destination.id,
        });

        destination = await Destination.findById(destination.id);
        expect(destination.state).toBe("deleted");
      });

      test("time passes", async () => {
        await utils.sleep(1000);
      });

      test("now the destination can be deleted", async () => {
        await utils.sleep(1000);
        await specHelper.runTask("destination:destroy", {
          destinationId: destination.id,
        });

        await expect(Destination.findById(destination.id)).rejects.toThrow(
          /cannot find Destination/
        );
      });
    }
  );
});
