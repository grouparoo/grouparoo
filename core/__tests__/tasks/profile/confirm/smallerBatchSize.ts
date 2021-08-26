process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "2";

import { helper } from "@grouparoo/spec-helper";
import Moment from "moment";
import { api, specHelper } from "actionhero";
import { Profile, ProfileProperty } from "../../../../src";

describe("tasks/profiles:confirm", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(async () => await helper.factories.properties());

  test("only processes profiles up to the batch size", async () => {
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
