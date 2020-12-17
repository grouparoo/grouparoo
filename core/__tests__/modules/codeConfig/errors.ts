import { helper } from "@grouparoo/spec-helper";
import { Setting } from "../../../src/models/Setting";
import path from "path";
import { api } from "actionhero";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";

let actionhero;

describe("modules/codeConfig", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await Setting.truncate();
    await helper.shutdown(actionhero);
  });

  describe("errors", () => {
    describe("app", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-app"
          )
        );
        expect(errors[0]).toMatch(
          /fileGuid is required for a app of type test-plugin-app/
        );
      });
    });

    describe("source", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-source"
          )
        );
        expect(errors[0]).toMatch(/cannot find Property/);
      });
    });

    describe("property", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-property"
          )
        );
        expect(errors[0]).toMatch(/cannot find Source/);
      });
    });

    describe("group", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-group"
          )
        );
        expect(errors[0]).toMatch(/cannot find Property/);
      });
    });

    describe("team member", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-teamMember"
          )
        );
        expect(errors[0]).toMatch(/TeamMember.firstName cannot be null/);
      });
    });
  });
});
