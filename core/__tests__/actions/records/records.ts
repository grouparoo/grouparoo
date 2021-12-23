import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { AsyncReturnType } from "type-fest";
import {
  GrouparooRecord,
  Group,
  Team,
  TeamMember,
  Property,
  Run,
  RecordProperty,
  GrouparooModel,
  Destination,
  GroupMember,
} from "../../../src";
import { SessionCreate } from "../../../src/actions/session";
import {
  RecordAutocompleteRecordProperty,
  RecordCreate,
  RecordDestroy,
  RecordsImportAndUpdate,
  RecordsList,
  RecordView,
} from "../../../src/actions/records";
import { ConfigWriter } from "../../../src/modules/configWriter";
import { RecordOps } from "../../../src/modules/ops/record";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("actions/records", () => {
  const mockedConfigWriterRun = jest.fn();

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;
  let model: GrouparooModel;

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    helper.disableTestPluginImport();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    ConfigWriter.run = mockedConfigWriterRun;
  });

  describe("writer signed in", () => {
    let connection;
    let csrfToken;

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
        modelId: model.id,
        properties: {
          userId: 123,
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
        },
      };
      const { error, record, groups, destinations } =
        await specHelper.runAction<RecordCreate>("record:create", connection);
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("ready");
      expect(simpleRecordValues(record.properties)).toEqual({
        userId: [123],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        isVIP: [null],
        lastLoginAt: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });

      expect(record.properties["userId"].state).toBe("ready");
      expect(record.properties["email"].state).toBe("ready");
      expect(record.properties["purchases"].state).toBe("ready");

      expect(groups).toEqual([]);
      expect(destinations).toEqual([]);

      id = record.id;
    });

    test("when a record is created, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();

      connection.params = {
        csrfToken,
        modelId: model.id,
        properties: {
          userId: 12,
          email: "wario@example.com",
          firstName: "Wario",
          lastName: "Waluigio",
        },
      };

      const { record: recordData } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );

      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);

      const record = await GrouparooRecord.findOne({
        where: { id: recordData.id },
      });
      await record.destroy();
    });

    test("a writer can list all the records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, records, total } = await specHelper.runAction<RecordsList>(
        "records:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
      expect(simpleRecordValues(records[0].properties).userId).toEqual([123]);
      expect(total).toBe(1);
    });

    test("a writer can list all the records with a certain state", async () => {
      connection.params = {
        csrfToken,
        state: "pending",
      };
      const { records: pendingProfilesA, total: pendingTotalA } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(pendingProfilesA.length).toBe(0);
      expect(pendingTotalA).toBe(0);

      connection.params = {
        csrfToken,
        state: "ready",
      };
      const { records: readyProfilesA, total: readyTotalA } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(readyProfilesA.length).toBe(1);
      expect(readyTotalA).toBe(1);

      const luigi = await GrouparooRecord.findOne();
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: luigi.id } }
      );
      await luigi.update({ state: "ready" });

      connection.params = {
        csrfToken,
        state: "pending",
      };
      const { records: pendingProfilesB, total: pendingTotalB } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(pendingProfilesB.length).toBe(0);
      expect(pendingTotalB).toBe(0);

      connection.params = {
        csrfToken,
        state: "ready",
      };
      const { records: readyProfilesB, total: readyTotalB } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(readyProfilesB.length).toBe(1);
      expect(readyTotalB).toBe(1);

      // Put a recordProperty into an invalid state
      await RecordProperty.update(
        {
          invalidValue: "email",
          invalidReason: "Bad Email",
        },
        {
          where: {
            recordId: readyProfilesB[0].id,
            propertyId: "email",
          },
        }
      );
      // Set the profile to pending so it's picked up
      await GrouparooRecord.update(
        {
          state: "pending",
        },
        {
          where: {
            id: readyProfilesB[0].id,
          },
        }
      );

      // Run the import task
      await RecordOps.makeReadyAndCompleteImports();

      connection.params = {
        csrfToken,
        state: "invalid",
      };
      const { records: invalidRecords, total: invalidTotal } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(invalidRecords.length).toBe(1);
      expect(invalidTotal).toBe(1);
    });

    test("a writer can find a record with an invalid state, even if the queried record is not invalid", async () => {
      connection.params = {
        csrfToken,
        state: "invalid",
      };
      const { records: invalidRecords } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(invalidRecords[0]).toBeDefined();

      const [invalidRecord] = invalidRecords;
      const [userId] = invalidRecord.properties.userId.values;
      connection.params = {
        csrfToken,
        state: "invalid",
        searchKey: "userId",
        searchValue: String(userId),
      };

      const { records: filteredInvalidRecords } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(filteredInvalidRecords.length).toBe(1);
    });

    test("a writer can remove records that are no longer invalid", async () => {
      connection.params = {
        csrfToken,
        state: "invalid",
      };
      let { records: invalidRecords, total: invalidTotal } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(invalidRecords.length).toBe(1);
      expect(invalidTotal).toBe(1);

      const [invalidRecord] = invalidRecords;

      await RecordProperty.update(
        {
          invalidValue: null,
          invalidReason: null,
        },
        {
          where: {
            recordId: invalidRecord.id,
            propertyId: "email",
          },
        }
      );
      await GrouparooRecord.update(
        {
          state: "pending",
        },
        {
          where: {
            id: invalidRecord.id,
          },
        }
      );

      await RecordOps.makeReadyAndCompleteImports();

      ({ records: invalidRecords, total: invalidTotal } =
        await specHelper.runAction<RecordsList>("records:list", connection));
      expect(invalidRecords.length).toBe(0);
      expect(invalidTotal).toBe(0);
    });

    test("a writer can get autocomplete results from properties", async () => {
      const emailProperty = await Property.findOne({
        where: { key: "email" },
      });

      connection.params = {
        csrfToken,
        propertyId: emailProperty.id,
        match: "@example.com",
      };
      const { error, recordProperties } =
        await specHelper.runAction<RecordAutocompleteRecordProperty>(
          "records:autocompleteRecordProperty",
          connection
        );

      expect(error).toBeUndefined();
      expect(recordProperties).toEqual(["luigi@example.com"]);
    });

    test("an administrator can import and update all records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, run } = await specHelper.runAction<RecordsImportAndUpdate>(
        "records:importAndUpdate",
        connection
      );
      expect(error).toBeUndefined();
      expect(run.id).toBeTruthy();

      const runningRuns = await Run.findAll({
        where: { state: "running", creatorType: "teamMember" },
      });
      expect(runningRuns.length).toBe(1);
    });

    test("a writer can destroy a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, success } = await specHelper.runAction<RecordDestroy>(
        "record:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    test("when a record is destroyed, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();
      const record = await helper.factories.record();

      connection.params = {
        csrfToken,
        id: record.id,
      };

      const { success } = await specHelper.runAction<RecordDestroy>(
        "record:destroy",
        connection
      );
      expect(success).toBe(true);
      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);
    });

    describe("groups", () => {
      let group: Group;
      let record: GrouparooRecord;

      beforeAll(async () => {
        record = new GrouparooRecord({ modelId: model.id });
        await record.save();

        group = new Group({
          name: "new group",
          modelId: model.id,
        });
        await group.save();
        await group.update({ state: "ready" });
        await GroupMember.create({ recordId: record.id, groupId: group.id });
      });

      afterAll(async () => {
        await GroupMember.truncate();
        await group.destroy();
        await record.destroy();
      });

      test("the record lists group memberships", async () => {
        connection.params = {
          csrfToken,
          id: record.id,
        };
        const { error, groups } = await specHelper.runAction<RecordView>(
          "record:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(groups.length).toBe(1);
        expect(groups[0].id).toBeTruthy();
        expect(groups[0].name).toBe("new group");
      });

      test("the records in the group can be listed", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);

        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(total).toBe(1);
      });
    });

    describe("destinations", () => {
      let destination: Destination;
      let record: GrouparooRecord;

      beforeAll(async () => {
        destination = await helper.factories.destination();
        await destination.updateTracking("model");
        await destination.update({ state: "ready" });
      });

      beforeAll(async () => {
        record = new GrouparooRecord({ modelId: model.id });
        await record.save();
      });

      afterAll(async () => {
        await destination.destroy();
        await record.destroy();
      });

      test("the record lists destinations", async () => {
        connection.params = {
          csrfToken,
          id: record.id,
        };
        const { error, destinations } = await specHelper.runAction<RecordView>(
          "record:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(destinations.length).toBe(1);
        expect(destinations[0].id).toBeTruthy();
        expect(destinations[0].name).toBe(destination.name);
      });
    });

    describe("search", () => {
      let mario: AsyncReturnType<GrouparooRecord["apiData"]>;
      let luigi: AsyncReturnType<GrouparooRecord["apiData"]>;
      let peach: AsyncReturnType<GrouparooRecord["apiData"]>;
      let toad: AsyncReturnType<GrouparooRecord["apiData"]>;
      let group: Group;

      beforeAll(async () => {
        group = new Group({
          name: "VIP people",
          modelId: model.id,
        });
        await group.save();
      });

      beforeAll(async () => {
        // sleeping after each create so that we can sort by createdAt

        connection.params = {
          csrfToken,
          modelId: model.id,
          properties: { email: "mario@example.com", userId: 1 },
        };
        let response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        mario = response.record;

        connection.params = {
          csrfToken,
          modelId: model.id,
          properties: { email: "luigi@example.com", userId: 2 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        luigi = response.record;

        connection.params = {
          csrfToken,
          modelId: model.id,
          properties: { email: "toad@mushroom-kingdom.gov", userId: 3 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        toad = response.record;

        connection.params = {
          csrfToken,
          modelId: model.id,
          properties: { email: "peach@mushroom-kingdom.gov", userId: 4 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        peach = response.record;

        await GroupMember.create({ groupId: group.id, recordId: mario.id });
        await GroupMember.create({ groupId: group.id, recordId: peach.id });
      }, 10 * 1000);

      afterAll(async () => {
        const records = [mario, luigi, toad, peach];
        for (const i in records) {
          connection.params = {
            csrfToken,
            id: records[i].id,
          };
          await specHelper.runAction("record:destroy", connection);
        }
      });

      afterAll(async () => {
        await GroupMember.truncate();
        await group.destroy();
      });

      test("returns all records and counts when there is no search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(4);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([1]);
        expect(simpleRecordValues(records[1].properties).email).toEqual([
          "luigi@example.com",
        ]);
        expect(simpleRecordValues(records[1].properties).userId).toEqual([2]);
        expect(simpleRecordValues(records[2].properties).email).toEqual([
          "toad@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[2].properties).userId).toEqual([3]);
        expect(simpleRecordValues(records[3].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[3].properties).userId).toEqual([4]);
        expect(total).toBe(4);
      });

      test("returns all records and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([1]);
        expect(simpleRecordValues(records[1].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[1].properties).userId).toEqual([4]);
        expect(total).toBe(2);
      });

      test("returns exact matches when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("returns case-insensitive matches when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);

        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: true,
        };
        const { total: caseSensitiveTotal } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(caseSensitiveTotal).toBe(0);
      });

      test("returns exact matches when there is a search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("returns case-insensitive matches when there is a search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "PEACH@MUSHroom-kingdom.gov",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);

        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: true,
        };
        const { total: caseSensitiveTotal } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(caseSensitiveTotal).toBe(0);
      });

      test("returns fuzzy matching records and counts when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching records and counts when there is a search (all) ignoring case, returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@MuShRoom-kingdom.GOV",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching records and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleRecordValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleRecordValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("without a search, records without properties are returned", async () => {
        const record = await helper.factories.record();

        connection.params = { csrfToken };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(5);
        expect(total).toBe(5);

        await record.destroy();
      });

      test("returns matching records when null is the searchValue", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "null",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(4);
        expect(total).toBe(4);
      });

      test("returns all matching records when * is the searchValue (results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "*",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(0);
        expect(total).toBe(0);
      });

      test("returns all matching records when * is the searchValue (no results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "*",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(0);
        expect(total).toBe(0);
      });

      test("returns matching records when null is the searchValue", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "null",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(4);
        expect(total).toBe(4);
      });
    });
  });

  describe("reader signed in", () => {
    let connection;
    let teamId;
    let csrfToken;

    beforeAll(async () => {
      const record = new GrouparooRecord({ modelId: model.id });
      await record.save();
      await record.addOrUpdateProperties({
        firstName: ["Toad"],
        email: ["toad@example.com"],
      });
      id = record.id;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamId = readOnlyTeam.id;

      const luigi = new TeamMember({
        teamId,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("P@ssw0rd!");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader cannot create a new record", async () => {
      connection.params = {
        csrfToken,
      };
      const { error } = await specHelper.runAction("record:create", connection);
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can list all the records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, records } = await specHelper.runAction<RecordsList>(
        "records:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
    });

    test("a reader can view a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, record } = await specHelper.runAction<RecordView>(
        "record:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(simpleRecordValues(record.properties)).toEqual({
        firstName: ["Toad"],
        email: ["toad@example.com"],
        isVIP: [null],
        lastLoginAt: [null],
        lastName: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
        userId: [null],
      });
    });

    test("a reader cannot destroy a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction(
        "record:destroy",
        connection
      );

      expect(destroyResponse.error.code).toBe("AUTHORIZATION_ERROR");
    });
  });
});
