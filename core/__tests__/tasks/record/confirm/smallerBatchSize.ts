process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "2";

import { helper } from "@grouparoo/spec-helper";
import Moment from "moment";
import { api, specHelper } from "actionhero";
import { GrouparooRecord, RecordProperty } from "../../../../src";

describe("tasks/records:confirm", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(async () => await helper.factories.properties());

  test("only processes records up to the batch size", async () => {
    const record1: GrouparooRecord = await helper.factories.record();
    const record2: GrouparooRecord = await helper.factories.record();
    const record3: GrouparooRecord = await helper.factories.record();

    await RecordProperty.update(
      {
        state: "ready",
        confirmedAt: Moment().subtract(10, "days").toDate(),
      },
      {
        where: {
          recordId: [record1.id, record2.id, record3.id],
        },
      }
    );

    await GrouparooRecord.update(
      { state: "ready" },
      {
        where: {
          id: [record1.id, record2.id, record3.id],
        },
      }
    );

    const count = await specHelper.runTask("records:confirm", {});
    expect(count).toBe(2);

    await record1.reload();
    await record2.reload();
    await record3.reload();

    const states = [record1.state, record2.state, record3.state].sort();
    expect(states).toEqual(["pending", "pending", "ready"]);
  });
});
