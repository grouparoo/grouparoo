import { helper } from "@grouparoo/spec-helper";
import { Op } from "sequelize";
import { api, task, specHelper } from "actionhero";
import {
  Property,
  ProfileProperty,
  Profile,
  Destination,
  Group,
  Export,
  Import,
} from "../../../src";

describe("tasks/profile:destroy", () => {
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
    await task.enqueue("profile:destroy", { profileId: "john-doe" });
    const found = await specHelper.findEnqueuedTasks("profile:destroy");
    expect(found.length).toEqual(1);
    expect(found[0].args[0].profileId).toBe("john-doe");
  });

  test("wont throw if profile no longer exists", async () => {
    expect(
      specHelper.runTask("profile:destroy", {
        profileId: "someProfileThatNoLongerExists",
      })
    ).resolves.toBe(undefined);
  });

  test("does not delete profiles that aren't ready", async () => {
    const profile: Profile = await helper.factories.profile();
    await profile.update({ state: "pending" });

    await specHelper.runTask("profile:destroy", { profileId: profile.id });
    await profile.reload();
    expect(profile.state).toBe("pending");

    // make it ready
    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

    await specHelper.runTask("profile:destroy", { profileId: profile.id });
    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("exports profiles and removes them from groups before destroying", async () => {
    const profile: Profile = await helper.factories.profile();

    const destination: Destination = await helper.factories.destination();
    const group: Group = await helper.factories.group();

    await group.addProfile(profile);
    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

    await destination.trackGroup(group);
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.id] = group.name;
    await destination.setDestinationGroupMemberships(
      destinationGroupMemberships
    );
    await destination.exportProfile(profile);

    let profileGroups = await profile.$get("groups");
    expect(profileGroups.length).toBe(1);

    await specHelper.runTask("export:enqueue", {});
    let foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }
    await api.resque.queue.connection.redis.flushdb();

    let exportCount = await Export.count({
      where: { profileId: profile.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(0);
    await profile.reload();
    expect(profile.state).toBe("ready");

    // try to delete
    await specHelper.runTask("profile:destroy", { profileId: profile.id });

    // profile is still there, but is now being exported
    await profile.reload();
    expect(profile.state).toBe("ready");

    profileGroups = await profile.$get("groups");
    expect(profileGroups.length).toBe(0); // removed from groups

    exportCount = await Export.count({
      where: { profileId: profile.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(1);

    // try to delete
    await specHelper.runTask("profile:destroy", { profileId: profile.id });

    // does nothing, there's an export being processed
    await profile.reload();
    expect(profile.state).toBe("ready");
    exportCount = await Export.count({
      where: { profileId: profile.id, state: { [Op.ne]: "complete" } },
    });
    expect(exportCount).toBe(1); // still only 1

    // process the export
    await specHelper.runTask("export:enqueue", {});
    foundTasks = await specHelper.findEnqueuedTasks("export:send");
    expect(foundTasks.length).toBe(1);
    for (const i in foundTasks) {
      await specHelper.runTask("export:send", foundTasks[i].args[0]);
    }

    const finalExport = await Export.findById(foundTasks[0].args[0].exportId);
    expect(finalExport.toDelete).toBe(true);
    expect(finalExport.oldGroups.length).toBe(1);
    expect(finalExport.newGroups.length).toBe(0);

    // now we can destroy
    await specHelper.runTask("profile:destroy", { profileId: profile.id });
    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("all related models are cleaned up", async () => {
    const profile: Profile = await helper.factories.profile();
    const _import: Import = await helper.factories.import(
      undefined,
      undefined,
      profile.id
    );
    const _export: Export = await helper.factories.export(profile);
    await _export.update({ state: "complete" });

    await profile.addOrUpdateProperties({
      userId: [null],
      isVIP: [true],
      ltv: [213],
    });

    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

    await specHelper.runTask("profile:destroy", { profileId: profile.id });

    const properties = await ProfileProperty.findAll({
      where: { profileId: profile.id },
    });
    expect(properties.length).toBe(0);

    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_import.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_export.reload()).rejects.toThrow(/does not exist anymore/);
  });
});
