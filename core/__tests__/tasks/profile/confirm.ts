import { helper } from "@grouparoo/spec-helper";
import Moment from "moment";
import { api, task, specHelper } from "actionhero";
import {
  Import,
  plugin,
  Profile,
  ProfileProperty,
  Run,
  Schedule,
  Source,
} from "../../../src";

describe("tasks/profiles:confirm", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  afterEach(async () => {
    await plugin.updateSetting("core", "runs-profile-batch-size", 100);
    await plugin.updateSetting("core", "confirm-profiles-days", 7);
  });

  test("can be enqueued", async () => {
    await task.enqueue("profiles:confirm", {});
    const found = await specHelper.findEnqueuedTasks("profiles:confirm");
    expect(found.length).toEqual(1);
  });

  test("creates imports and marks profiles pending if they haven't been confirmed in a while", async () => {
    const staleProfile: Profile = await helper.factories.profile();
    const recentProfile: Profile = await helper.factories.profile();

    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(10, "days").toDate(),
      },
      {
        where: {
          profileId: staleProfile.id,
        },
      }
    );

    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          profileId: recentProfile.id,
        },
      }
    );

    await Profile.update(
      { state: "ready" },
      {
        where: {
          id: [staleProfile.id, recentProfile.id],
        },
      }
    );

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(1);

    await staleProfile.reload();
    await recentProfile.reload();

    expect(staleProfile.state).toBe("pending");
    expect(recentProfile.state).toBe("ready"); // dont need to confirm

    const staleProfileProperties = await ProfileProperty.findAll({
      where: {
        state: "pending",
        profileId: staleProfile.id,
      },
    });
    expect(staleProfileProperties.length).toBe(9);

    const recentProfileProperties = await ProfileProperty.findAll({
      where: {
        state: "ready",
        profileId: recentProfile.id,
      },
    });
    expect(recentProfileProperties.length).toBe(9);

    const imports = await Import.findAll({
      where: { profileId: [staleProfile.id, recentProfile.id] },
    });

    expect(imports.length).toBe(1);
    expect(imports[0].profileId).toBe(staleProfile.id);
    expect(imports[0].creatorType).toBe("task");
    expect(imports[0].creatorId).toBe("profiles:confirm");

    await staleProfile.destroy();
    await recentProfile.destroy();
  });

  test("the amount of days can be configured", async () => {
    await plugin.updateSetting("core", "confirm-profiles-days", 5);

    const profile: Profile = await helper.factories.profile();
    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          profileId: profile.id,
        },
      }
    );
    await profile.update({ state: "ready" });

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(1);

    await profile.reload();
    expect(profile.state).toBe("pending");

    const imports = await Import.findAll({
      where: {
        profileId: profile.id,
        creatorType: "task",
        creatorId: "profiles:confirm",
      },
    });
    expect(imports.length).toBe(1);

    await profile.destroy();
  });

  test("can disable confirming profiles by setting days to 0", async () => {
    await plugin.updateSetting("core", "confirm-profiles-days", 0);

    const profile: Profile = await helper.factories.profile();
    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(6, "days").toDate(),
      },
      {
        where: {
          profileId: profile.id,
        },
      }
    );
    await profile.update({ state: "ready" });

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(0);

    await profile.reload();
    expect(profile.state).toBe("ready");

    const imports = await Import.findAll({
      where: {
        profileId: profile.id,
        creatorType: "task",
        creatorId: "profiles:confirm",
      },
    });
    expect(imports.length).toBe(0);

    await profile.destroy();
  });

  test("creates imports for profiles that haven't been confirmed if the schedule has run and it's marked as confirmProfiles=true", async () => {
    await plugin.updateSetting("core", "confirm-profiles-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmProfiles: true,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const profile: Profile = await helper.factories.profile();
    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          profileId: profile.id,
        },
      }
    );
    await profile.update({ state: "ready" });

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(1);

    await profile.reload();
    expect(profile.state).toBe("pending");

    const imports = await Import.findAll({
      where: {
        profileId: profile.id,
        creatorType: "run",
        creatorId: run.id,
      },
    });
    expect(imports.length).toBe(1);

    await profile.destroy();
    await schedule.destroy();
  });

  test("does not create imports for profiles that haven't been confirmed if the schedule has run and it's marked as confirmProfiles=false", async () => {
    await plugin.updateSetting("core", "confirm-profiles-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmProfiles: false,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const profile: Profile = await helper.factories.profile();
    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          profileId: profile.id,
        },
      }
    );
    await profile.update({ state: "ready" });

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(0);

    await profile.reload();
    expect(profile.state).toBe("ready");

    const imports = await Import.findAll({
      where: {
        profileId: profile.id,
        creatorType: "run",
        creatorId: run.id,
      },
    });
    expect(imports.length).toBe(0);

    await profile.destroy();
    await schedule.destroy();
  });

  test("will wait for schedule run's imports to be associated before trying to confirm profiles", async () => {
    await plugin.updateSetting("core", "confirm-profiles-days", 0);

    const source = await Source.findOne();
    const schedule: Schedule = await helper.factories.schedule(source, {
      confirmProfiles: true,
    });
    const run: Run = await helper.factories.run(schedule, {
      state: "complete",
      completedAt: new Date(),
    });

    const profile: Profile = await helper.factories.profile();
    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(1, "days").toDate(),
      },
      {
        where: {
          profileId: profile.id,
        },
      }
    );
    await profile.update({ state: "ready" });

    // create an unassociated import
    const _import: Import = await helper.factories.import(run);

    // try to confirm
    let count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(0); // nothing

    await profile.reload();
    expect(profile.state).toBe("ready");

    // associate the import
    await _import.update({
      profileId: "someId",
      profileAssociatedAt: new Date(),
    });

    // try to confirm again
    count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(1); // now we can confirm it

    await profile.reload();
    expect(profile.state).toBe("pending");

    await profile.destroy();
    await schedule.destroy();
  });

  test("only processes profiles up to the batch size", async () => {
    await plugin.updateSetting("core", "runs-profile-batch-size", 2);

    const profile1: Profile = await helper.factories.profile();
    const profile2: Profile = await helper.factories.profile();
    const profile3: Profile = await helper.factories.profile();

    await ProfileProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(10, "days").toDate(),
      },
      {
        where: {
          profileId: [profile1.id, profile2.id, profile3.id],
        },
      }
    );

    await Profile.update(
      { state: "ready" },
      {
        where: {
          id: [profile1.id, profile2.id, profile3.id],
        },
      }
    );

    const count = await specHelper.runTask("profiles:confirm", {});
    expect(count).toBe(2);

    await profile1.reload();
    await profile2.reload();
    await profile3.reload();

    const states = [profile1.state, profile2.state, profile3.state].sort();
    expect(states).toEqual(["pending", "pending", "ready"]);
  });
});
