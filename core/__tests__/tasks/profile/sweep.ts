import { helper } from "@grouparoo/spec-helper";
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

describe("tasks/profiles:sweep", () => {
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
    await task.enqueue("profiles:sweep", {});
    const found = await specHelper.findEnqueuedTasks("profiles:sweep");
    expect(found.length).toEqual(1);
  });

  test("deletes profiles without a directlyMapped property", async () => {
    const profile: Profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1000],
      isVIP: [true],
      ltv: [213],
    });

    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

    await ProfileProperty.destroy({
      where: {
        profileId: profile.id,
        propertyId: userIdProperty.id,
      },
    });

    const count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(1);
    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("deletes profiles with a directlyMapped property set to null", async () => {
    const profile: Profile = await helper.factories.profile();
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

    const count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(1);
    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
  });

  test("does not delete profiles that aren't done importing", async () => {
    const profile: Profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [null],
      isVIP: [true],
      ltv: [213],
    });

    await ProfileProperty.update(
      { state: "pending" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "pending" });

    const count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(0);

    const reloadedProfile = await profile.reload();
    expect(reloadedProfile.state).toBe("pending");
  });

  test("does not delete profiles that are still being exported", async () => {
    const profile: Profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [null],
      isVIP: [true],
      ltv: [213],
    });

    const destination: Destination = await helper.factories.destination();
    const group: Group = await helper.factories.group();

    await group.addProfile(profile);
    await destination.trackGroup(group);
    await destination.exportProfile(profile);

    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

    const _exports = await Export.findAll({ where: { profileId: profile.id } });
    expect(_exports.length).toBe(1);
    expect(_exports[0].state).toBe("pending");

    let count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(0);

    let reloadedProfile = await profile.reload();
    expect(reloadedProfile.state).toBe("ready");

    // still won't delete if state=processing
    await _exports[0].update({ state: "processing" });
    count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(0);

    reloadedProfile = await profile.reload();
    expect(reloadedProfile.state).toBe("ready");

    // can delete if exports are done
    await _exports[0].update({ state: "complete" });
    count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(1);
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

    const count = await specHelper.runTask("profiles:sweep", {});
    expect(count).toBe(1);

    const properties = await ProfileProperty.findAll({
      where: { profileId: profile.id },
    });
    expect(properties.length).toBe(0);

    await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_import.reload()).rejects.toThrow(/does not exist anymore/);
    await expect(_export.reload()).rejects.toThrow(/does not exist anymore/);
  });
});
