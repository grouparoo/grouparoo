import { helper } from "@grouparoo/spec-helper";
import { Setting, Team } from "../../../src";
import path from "path";
import { api } from "actionhero";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";
import {
  validateConfigObjectKeys,
  validateConfigObjects,
} from "../../../src/classes/codeConfig";

describe("modules/codeConfig", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  afterAll(async () => await Setting.truncate());

  describe("validations", () => {
    test("id is always required", async () => {
      const configObject = {
        name: "Marketing Team",
        class: "team",
      };

      expect(() => validateConfigObjectKeys(Team, configObject)).toThrow(
        /id is required for a Team/
      );
    });

    test("catches duplicate ID values", async () => {
      const objs = [
        {
          id: "marketing_team",
          name: "Marketing Team",
          class: "team",
        },
        {
          id: "marketing_team",
          name: "Marketing Team",
          class: "team",
        },
      ];

      const { errors } = validateConfigObjects(objs);
      expect(errors).toContain("Duplicate ID values found: marketing_team");
    });

    test("extraneous keys throw an error", async () => {
      const configObject = {
        id: "marketing_team",
        name: "Marketing Team",
        class: "team",
        cool: true,
      };

      expect(() => validateConfigObjectKeys(Team, configObject)).toThrow(
        /cool is not a valid property of a Team/
      );
    });

    test("multiple errors can be returned", async () => {
      const configObject = {
        id: "marketing_team",
        name: "Marketing Team",
        class: "team",
        cool: true,
        thing: "stuff",
      };

      expect(() => validateConfigObjectKeys(Team, configObject)).toThrow(
        /cool is not a valid property of a Team, thing is not a valid property of a Team/
      );
    });
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
          /fileId is required for a app of type test-plugin-app/
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
