import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, utils, config } from "actionhero";
import { GroupOps } from "../../../src/modules/ops/group";
import {
  Destination,
  Export,
  GrouparooModel,
  GrouparooRecord,
  GroupMember,
  Run,
} from "./../../../src";

describe("tasks/destination:destroy", () => {
  let destination: Destination;
  let model: GrouparooModel;
  let mario: GrouparooRecord;

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => ({ model } = await helper.factories.properties()));
  beforeAll(async () => await Export.truncate());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
    await GrouparooRecord.truncate();
    await Destination.truncate();
    destination = await helper.factories.destination();
    mario = await helper.factories.record();
    await destination.update({ state: "deleted" });
  });

  test("deleting a destination with no group tracked works", async () => {
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(0);
  });

  test("deleting a destination with a group tracked works", async () => {
    const group = await helper.factories.group();
    await destination.updateTracking("group", group.id);
    await Run.truncate();

    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(0);
  });

  test("a destination which has a run from the group it is tracking will not be deleted", async () => {
    const group = await helper.factories.group();
    await destination.updateTracking("group", group.id);
    await Run.truncate();

    await group.run(destination.id);
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(1);
    await Run.update(
      { state: "complete" },
      { where: { destinationId: destination.id } }
    );
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(1);
  });

  test("a destination with pending group exports cannot be deleted", async () => {
    const group = await helper.factories.group();
    await group.setRules([{ key: "grouparooId", operation: { op: "exists" } }]);
    await GroupOps.updateRecords([mario.id], "group", group.id); // make an import
    await GroupMember.create({ groupId: group.id, recordId: mario.id }); // add the member
    const { newRun: run } = await destination.updateTracking("group", group.id);

    await specHelper.runTask("group:run", { runId: run.id });
    await specHelper.runTask("group:run", { runId: run.id });
    await specHelper.runTask("group:run", { runId: run.id });

    await ImportWorkflow();

    await specHelper.runTask("group:run", { runId: run.id });
    await specHelper.runTask("group:run", { runId: run.id });

    await run.reload();
    await group.reload();
    expect(group.state).toBe("ready");
    expect(run.state).toBe("complete");
    expect((await mario.$get("groups")).map((g) => g.id)).toEqual([group.id]);

    // create exports
    const exportTasks = await specHelper.findEnqueuedTasks("record:export");
    expect(exportTasks.length).toBe(1);
    await Promise.all(
      exportTasks.map((t) => specHelper.runTask("record:export", t.args[0]))
    );
    expect(await Export.count()).toBe(1);

    // can't delete (has exports)
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(1);

    // complete exports
    await specHelper.runTask("export:enqueue", {});
    const foundExportSendTasks = await specHelper.findEnqueuedTasks(
      "export:send"
    );
    expect(foundExportSendTasks.length).toBe(1);
    await Promise.all(
      foundExportSendTasks.map((t) =>
        specHelper.runTask("export:send", t.args[0])
      )
    );

    // can't delete (not enough time has passed)
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(1);

    // can delete (time has passed)
    await utils.sleep(config.tasks.timeout * 5);
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(0);
  }, 10000);

  test("deleting a destination with a model tracked works", async () => {
    await destination.updateTracking("model");
    await Run.truncate();

    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(0);
  });

  test("a destination which has a run from the destination it is tracking will not be deleted", async () => {
    await destination.updateTracking("model");
    await Run.truncate();

    await model.run(destination.id);
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(1);

    expect(await Destination.unscoped().count()).toEqual(1);
    await Run.update(
      { state: "complete" },
      { where: { destinationId: destination.id } }
    );
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });

    expect(await Destination.unscoped().count()).toEqual(1);
  });

  test("a destination with pending model exports cannot be deleted", async () => {
    const { newRun: run } = await destination.updateTracking("model");

    await specHelper.runTask("grouparooModel:run", { runId: run.id });

    await ImportWorkflow();

    await specHelper.runTask("grouparooModel:run", { runId: run.id });
    await specHelper.runTask("grouparooModel:run", { runId: run.id });
    await specHelper.runTask("grouparooModel:run", { runId: run.id });

    await run.reload();
    expect(run.state).toBe("complete");

    // create exports
    const exportTasks = await specHelper.findEnqueuedTasks("record:export");
    await Promise.all(
      exportTasks.map((t) => specHelper.runTask("record:export", t.args[0]))
    );

    // can't delete (has exports)
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(1);

    // complete exports
    await specHelper.runTask("export:enqueue", {});
    const foundExportSendTasks = await specHelper.findEnqueuedTasks(
      "export:send"
    );
    expect(foundExportSendTasks.length).toBe(1);
    await Promise.all(
      foundExportSendTasks.map((t) =>
        specHelper.runTask("export:send", t.args[0])
      )
    );

    // can't delete (not enough time has passed)
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(1);

    // can delete (time has passed)
    await utils.sleep(3000);

    // can delete (not enough time has passed)
    await specHelper.runTask("destination:destroy", {
      destinationId: destination.id,
    });
    expect(await Destination.unscoped().count()).toEqual(0);
  }, 10000);
});
