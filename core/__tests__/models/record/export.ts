import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Group,
  GrouparooModel,
  Destination,
  GroupMember,
} from "../../../src";
import { Op } from "sequelize";

describe("models/record", () => {
  let model: GrouparooModel;
  let record: GrouparooRecord;
  let group: Group;
  let groupDestination: Destination;
  let modelDestination: Destination;
  let otherDestination: Destination;
  let seenExportIds: string[] = [];

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    record = await helper.factories.record();
    group = await helper.factories.group();
    groupDestination = await helper.factories.destination();
    modelDestination = await helper.factories.destination();
    otherDestination = await helper.factories.destination();

    await GroupMember.create({ recordId: record.id, groupId: group.id });
    await groupDestination.updateTracking("group", group.id);
    await modelDestination.updateTracking("model");
  });

  describe("export", () => {
    test("export will find relevant destinations to export to", async () => {
      await record.export();
      const exports = await record.$get("exports");
      expect(exports.length).toEqual(2);
      const exportedDestinationIds = exports.map((e) => e.destinationId);
      expect(exportedDestinationIds).toContain(groupDestination.id);
      expect(exportedDestinationIds).toContain(modelDestination.id);
      expect(exportedDestinationIds).not.toContain(otherDestination.id);

      seenExportIds = seenExportIds.concat(exports.map((e) => e.id));
    });

    test("export will use previous exports to include a recently un-tracked destination", async () => {
      await groupDestination.updateTracking("none");

      await record.export();
      const exports = await record.$get("exports", {
        where: { id: { [Op.notIn]: seenExportIds } },
      });

      expect(exports.length).toEqual(2);
      const exportedDestinationIds = exports.map((e) => e.destinationId);
      expect(exportedDestinationIds).toContain(groupDestination.id);
      expect(exportedDestinationIds).toContain(modelDestination.id);
      expect(exportedDestinationIds).not.toContain(otherDestination.id);

      seenExportIds = seenExportIds.concat(exports.map((e) => e.id));
    });

    test("export will not use previous exports to include a recently un-tracked destination that is now in the deleted state", async () => {
      await groupDestination.update({ state: "deleted" });

      await record.export();
      const exports = await record.$get("exports", {
        where: { id: { [Op.notIn]: seenExportIds } },
      });

      expect(exports.length).toEqual(1);
      const exportedDestinationIds = exports.map((e) => e.destinationId);
      expect(exportedDestinationIds).not.toContain(groupDestination.id);
      expect(exportedDestinationIds).toContain(modelDestination.id);
      expect(exportedDestinationIds).not.toContain(otherDestination.id);

      seenExportIds = seenExportIds.concat(exports.map((e) => e.id));
    });
  });
});
