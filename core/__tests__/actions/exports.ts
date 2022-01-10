import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import {
  Destination,
  Export,
  ExportProcessor,
  GrouparooRecord,
} from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  ExportsList,
  ExportsTotals,
  ExportView,
} from "../../src/actions/exports";

describe("actions/exports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection: Connection;
    let csrfToken: string;
    let destination: Destination;
    let record: GrouparooRecord;
    let exportProcessor: ExportProcessor;
    let id: string;

    beforeAll(async () => {
      record = await helper.factories.record();
      destination = await helper.factories.destination();
      exportProcessor = await helper.factories.exportProcessor(destination);

      const otherDestination = await helper.factories.destination();

      const firstExport = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "pending",
      });
      id = firstExport.id;

      await Export.create({
        destinationId: destination.id,
        recordId: "other-record",
        startedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "pending",
      });

      await Export.create({
        destinationId: destination.id,
        exportProcessorId: exportProcessor.id,
        recordId: "another-record",
        startedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "processing",
      });

      await Export.create({
        destinationId: otherDestination.id,
        recordId: record.id,
        startedAt: new Date(),
        completedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      await Export.create({
        destinationId: otherDestination.id,
        recordId: record.id,
        startedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        errorMessage: "broken",
        state: "failed",
      });

      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the exports", async () => {
      connection.params = { csrfToken };
      const { error, exports, total } = await specHelper.runAction<ExportsList>(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(5);
      expect(total).toBe(5);
    });

    test("a reader can view an export", async () => {
      connection.params = { csrfToken, id };
      const { error, export: _export } = await specHelper.runAction<ExportView>(
        "export:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(_export.id).toBe(id);
      expect(_export.createdAt).toBeGreaterThan(0);
      expect(_export.destination.id).toBe(destination.id);
    });

    test("a reader can ask for exports about a record", async () => {
      connection.params = { csrfToken, recordId: record.id };
      const { error, exports, total } = await specHelper.runAction<ExportsList>(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(3);
      expect(exports[0].recordId).toBe(record.id);
      expect(exports[1].recordId).toBe(record.id);
      expect(total).toBe(3);
    });

    test("a reader can ask for exports about a destination", async () => {
      connection.params = { csrfToken, destinationId: destination.id };
      const { error, exports, total } = await specHelper.runAction<ExportsList>(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(3);
      expect(exports[0].destination.id).toBe(destination.id);
      expect(exports[1].destination.id).toBe(destination.id);
      expect(exports[2].destination.id).toBe(destination.id);
      expect(total).toBe(3);
    });

    test("a reader can ask for exports about an export processor", async () => {
      connection.params = { csrfToken, exportProcessorId: exportProcessor.id };
      const { error, exports, total } = await specHelper.runAction<ExportsList>(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(1);
      expect(exports[0].exportProcessorId).toBe(exportProcessor.id);
      expect(total).toBe(1);
    });

    test("a reader can get export totals", async () => {
      connection.params = { csrfToken };
      const { error, totals } = await specHelper.runAction<ExportsTotals>(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        canceled: 0,
        complete: 1,
        draft: 0,
        failed: 1,
        pending: 2,
        processing: 1,
      });
    });

    test("a reader can get export totals for a record", async () => {
      connection.params = { csrfToken, recordId: record.id };
      const { error, totals } = await specHelper.runAction<ExportsTotals>(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        canceled: 0,
        complete: 1,
        draft: 0,
        failed: 1,
        pending: 1,
        processing: 0,
      });
    });

    test("a reader can get export totals for a destination", async () => {
      connection.params = { csrfToken, destinationId: destination.id };
      const { error, totals } = await specHelper.runAction<ExportsTotals>(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        canceled: 0,
        complete: 0,
        draft: 0,
        failed: 0,
        pending: 2,
        processing: 1,
      });
    });
  });
});
