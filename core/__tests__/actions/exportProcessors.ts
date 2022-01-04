import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { Destination, ExportProcessor } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  ExportProcessorsList,
  ExportProcessorView,
} from "../../src/actions/exportProcessors";

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
    let id: string;

    beforeAll(async () => {
      destination = await helper.factories.destination();
      const otherDestination = await helper.factories.destination();

      const firstExportProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        state: "pending",
        remoteKey: "my/key/123",
      });
      id = firstExportProcessor.id;

      await helper.factories.export(null, destination, {
        exportProcessorId: id,
        state: "processing",
      });

      await helper.factories.export(null, destination, {
        exportProcessorId: id,
        state: "complete",
      });

      await ExportProcessor.create({
        destinationId: destination.id,
        startedAt: new Date(),
        state: "pending",
        remoteKey: "other/key/123",
      });

      await ExportProcessor.create({
        destinationId: destination.id,
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
        remoteKey: "some/key/123",
      });

      await ExportProcessor.create({
        destinationId: otherDestination.id,
        startedAt: new Date(),
        errorMessage: "broken",
        state: "failed",
        remoteKey: "lol",
        retryCount: 2,
      });

      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the export processors", async () => {
      connection.params = { csrfToken };
      const { error, exportProcessors, total } =
        await specHelper.runAction<ExportProcessorsList>(
          "exportProcessors:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessors.length).toBe(4);
      expect(total).toBe(4);
    });

    test("a reader can view an export processor", async () => {
      connection.params = { csrfToken, id };
      const { error, exportProcessor } =
        await specHelper.runAction<ExportProcessorView>(
          "exportProcessor:view",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessor.id).toBe(id);
      expect(exportProcessor.exportsCount).toBe(2);
      expect(exportProcessor.remoteKey).toBe("my/key/123");
      expect(exportProcessor.createdAt).toBeGreaterThan(0);
      expect(exportProcessor.destination.id).toBe(destination.id);
    });

    test("a reader can ask for export processors about a destination", async () => {
      connection.params = { csrfToken, destinationId: destination.id };
      const { error, exportProcessors, total } =
        await specHelper.runAction<ExportProcessorsList>(
          "exportProcessors:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessors.length).toBe(3);
      expect(exportProcessors[0].destination.id).toBe(destination.id);
      expect(exportProcessors[1].destination.id).toBe(destination.id);
      expect(total).toBe(3);
    });

    test("a reader can ask for export processors with state complete", async () => {
      connection.params = { csrfToken, state: "complete" };
      const { error, exportProcessors, total } =
        await specHelper.runAction<ExportProcessorsList>(
          "exportProcessors:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessors.length).toBe(1);
      expect(exportProcessors[0].state).toBe("complete");
      expect(total).toBe(1);
    });

    test("a reader can ask for export processors with state pending", async () => {
      connection.params = { csrfToken, state: "pending" };
      const { error, exportProcessors, total } =
        await specHelper.runAction<ExportProcessorsList>(
          "exportProcessors:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessors.length).toBe(2);
      expect(exportProcessors[0].state).toBe("pending");
      expect(exportProcessors[1].state).toBe("pending");
      expect(total).toBe(2);
    });

    test("a reader can ask for export processors with state failed", async () => {
      connection.params = { csrfToken, state: "failed" };
      const { error, exportProcessors, total } =
        await specHelper.runAction<ExportProcessorsList>(
          "exportProcessors:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(exportProcessors.length).toBe(1);
      expect(exportProcessors[0].state).toBe("failed");
      expect(exportProcessors[0].retryCount).toBe(2);
      expect(exportProcessors[0].errorMessage).toBe("broken");
      expect(total).toBe(1);
    });
  });
});
