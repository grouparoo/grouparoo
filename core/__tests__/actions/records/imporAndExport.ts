import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { SessionCreate } from "../../../src/actions/session";
import {
  RecordCreate,
  RecordExport,
  RecordImport,
} from "../../../src/actions/records";
import {
  Destination,
  GrouparooRecord,
  RecordProperty,
  Group,
} from "../../../src";
import { Op } from "sequelize";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("actions/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;

  beforeAll(async () => {
    await helper.factories.properties();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("writer signed in", () => {
    let connection;
    let csrfToken;
    let group: Group;
    let destination: Destination;

    beforeAll(async () => {
      group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.update({ state: "ready" });

      destination = await helper.factories.destination();
      await destination.trackGroup(group);
      await destination.update({ state: "ready" });
    });

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a writer can create a new record and properties", async () => {
      connection.params = {
        csrfToken,
        modelId: "mod_profiles",
        properties: { userId: 123 },
      };
      const { error, record } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("pending");

      id = record.id;
    });

    test("a record can be imported", async () => {
      const luigi = await GrouparooRecord.findOne();
      await RecordProperty.destroy({
        where: { recordId: luigi.id, propertyId: { [Op.ne]: "userid" } },
      });

      connection.params = {
        csrfToken,
        id: luigi.id,
      };
      const { record, error, groups } =
        await specHelper.runAction<RecordImport>("record:import", connection);
      expect(error).toBeUndefined();
      expect(simpleRecordValues(record.properties)).toEqual({
        userId: [expect.any(Number)],
        email: [expect.stringMatching(`@example.com`)],
        firstName: ["Mario"],
        lastName: ["Mario"],
        isVIP: [true],
        lastLoginAt: [expect.any(Date)],
        ltv: [100],
        purchaseAmounts: [null],
        purchases: ["...mario"],
      });

      expect(groups.length).toBe(1);
      expect(groups[0].id).toEqual(group.id);

      id = record.properties.userId[0];
    });

    test("a record can be exported", async () => {
      const luigi = await GrouparooRecord.findOne();

      connection.params = {
        csrfToken,
        id: luigi.id,
      };
      const { exports, error } = await specHelper.runAction<RecordExport>(
        "record:export",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(1);
      expect(exports[0].destination.id).toEqual(destination.id);
    });
  });
});
