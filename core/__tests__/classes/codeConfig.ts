import path from "path";
import { loadConfigObjects } from "../../src/modules/configLoaders";
import { getParentIds } from "../../src/classes/codeConfig";

describe("classes/codeConfig", () => {
  describe("#getParentIds", () => {
    let configObjects;

    beforeAll(async () => {
      const dir = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "initial"
      );

      configObjects = await loadConfigObjects(dir);
    });

    test("includes its id as a provided id", async () => {
      const parent = configObjects.find(({ id }) => id === "test_destination");
      const { providedIds } = getParentIds(parent);
      expect(providedIds).toEqual(["test_destination"]);
    });

    test("includes the values of mappings", async () => {
      const parent = configObjects.find(({ id }) => id === "test_destination");
      const { prerequisiteIds } = getParentIds(parent);
      expect(prerequisiteIds).toContain("user_id");
      expect(prerequisiteIds).toContain("email");
    });
  });
});
