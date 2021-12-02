import path from "path";
import nock from "nock";
import { helper } from "@grouparoo/spec-helper";
import { Push } from "../../src/bin/push";

describe("bin/push", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let archivePath = path.join(__dirname, "../../package.json");
  let messages = [];
  let spies = [];

  beforeEach(async () => {
    messages = [];
    spies.push(
      jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message))
    );
    spies.push(
      jest
        .spyOn(console, "error")
        .mockImplementation((message) => messages.push(message))
    );
  });

  afterEach(async () => {
    spies.map((s) => s.mockRestore());
  });

  test("an auth token is required", async () => {
    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        apply: false,
      },
    });

    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("You must provide a Grouparoo Cloud token");
  });

  test.each([true, false])(
    "uploads config and waits for `finished` state (toApply=%p)",
    async (toApply) => {
      nock("https://cloud.grouparoo.com")
        .post("/api/v1/configuration")
        .query(true)
        .reply(200, {
          configuration: { id: "config-id" },
        });

      nock("https://cloud.grouparoo.com")
        .get("/api/v1/configuration/config-id")
        .query(true)
        .reply(200, {
          configuration: { id: "config-id", state: "finished" },
        });

      const command = new Push();
      const toStop = await command.run({
        params: {
          archivePath,
          projectId: "my-project",
          token: "some-token",
          apply: toApply,
        },
      });
      expect(toStop).toBe(true);

      const output = messages.join(" ");
      expect(output).toContain(
        `The configuration has been successfully ${
          toApply ? "applied" : "validated"
        }`
      );
    }
  );

  test("validate and apply jobs are logged", async () => {
    nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .reply(200, {
        configuration: { id: "config-id" },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          validateJobId: "validate-id",
          state: "validated",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          applyJobId: "apply-id",
          state: "applied",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          state: "finished",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/job/validate-id")
      .query(true)
      .reply(200, {
        job: {
          type: "validate",
          logs: "validate job logs go here",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/job/apply-id")
      .query(true)
      .reply(200, {
        job: {
          type: "apply",
          logs: "apply job logs go here",
        },
      });

    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        token: "some-token",
        apply: true,
      },
    });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("Logging output for validate job (validate-id)");
    expect(output).toContain("validate job logs go here");
    expect(output).toContain("apply job logs go here");
    expect(output).toContain("Logging output for apply job (apply-id)");
    expect(output).toContain("The configuration has been successfully applied");
  });

  test("logs error if initial upload failed", async () => {
    nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .reply(500, {
        error: { message: "something weird happened here" },
      });

    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        token: "some-token",
        apply: false,
      },
    });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain(
      "❌ Grouparoo Cloud error: something weird happened here"
    );
  });

  test("can retry if there is a timeout reached", async () => {
    const timeoutNock = nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .times(4)
      .replyWithError({ message: "timeout!", code: "ETIMEDOUT" });

    const happyNock = nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .reply(200, {
        configuration: { id: "config-id" },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          validateJobId: "validate-id",
          state: "validated",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          state: "finished",
        },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/job/validate-id")
      .query(true)
      .reply(200, {
        job: {
          type: "validate",
          logs: "validate job logs go here",
        },
      });

    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        token: "some-token",
        apply: false,
      },
    });
    expect(toStop).toBe(true);

    expect(timeoutNock.isDone()).toBe(true);
    expect(happyNock.isDone()).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain(
      "The configuration has been successfully validated"
    );
  });

  test("it will only retry 5 times", async () => {
    nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .times(5)
      .replyWithError({ message: "timeout!", code: "ETIMEDOUT" });

    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        token: "some-token",
        apply: false,
      },
    });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain("❌");
    expect(output).toContain("timeout!");
  });

  test("logs error if an error was attached to the configuration", async () => {
    nock("https://cloud.grouparoo.com")
      .post("/api/v1/configuration")
      .query(true)
      .reply(200, {
        configuration: { id: "config-id" },
      });

    nock("https://cloud.grouparoo.com")
      .get("/api/v1/configuration/config-id")
      .query(true)
      .reply(200, {
        configuration: {
          id: "config-id",
          state: "failed",
          errorMessage: "something happened with this thing",
        },
      });

    const command = new Push();
    const toStop = await command.run({
      params: {
        archivePath,
        projectId: "my-project",
        token: "some-token",
        apply: false,
      },
    });
    expect(toStop).toBe(true);

    const output = messages.join(" ");
    expect(output).toContain(
      "❌ An error occurred while processing the config: something happened with this thing"
    );
  });
});
