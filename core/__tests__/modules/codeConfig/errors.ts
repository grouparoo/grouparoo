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
  afterAll(async () => await Setting.truncate());

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

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
      expect(errors).toContain(
        "Duplicate ID values found for marketing_team of class team"
      );
    });

    test("catches missing IDs ", async () => {
      const objsEmptyString = [
        {
          id: "",
          name: "Marketing Team",
          class: "team",
        },
      ];

      let response = validateConfigObjects(objsEmptyString);
      expect(response.errors).toContain('"Marketing Team" is missing an ID');

      const objsNoID = [
        {
          name: "Marketing Team",
          class: "team",
        },
      ];

      response = validateConfigObjects(objsNoID);
      expect(response.errors).toContain('"Marketing Team" is missing an ID');

      const objsNothing = [
        {
          class: "team",
        },
      ];

      // @ts-ignore
      response = validateConfigObjects(objsNothing);
      expect(response.errors).toContain("A config object is missing an ID");
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
        expect(errors[0]).toMatch(/Could not find object with ID: user_id/);
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
        expect(errors[0]).toMatch(
          /Could not find object with ID: missing_source/
        );
      });
    });

    describe("property filter", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("deprecated property filter ops throw error", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-property-filter"
          )
        );
        expect(errors[0]).toMatch(
          "[ config ] error with Property `email` (email): Property filter `greater than` has been deprecated and replaced with `gt`. Read more at https://www.grouparoo.com/docs/config/code-config/properties"
        );
      });
    });

    describe("schedule filter", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("deprecated schedule filter ops throw error", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-schedule-filter"
          )
        );
        expect(errors[0]).toMatch(
          "[ config ] error with Schedule `Users Table Schedule` (users_table_schedule): Schedule filter `greater than` has been deprecated and replaced with `gt`. Read more at https://www.grouparoo.com/docs/config/code-config/sources"
        );
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
        expect(errors[0]).toMatch(
          /Could not find object with ID: missing_record_property/
        );
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
