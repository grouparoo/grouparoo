import { helper } from "@grouparoo/spec-helper";
import { Team } from "../../../src/models/Team";
import { Setting } from "../../../src/models/Setting";
import { validateConfigObjectKeys } from "../../../src/classes/codeConfig";

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
});
