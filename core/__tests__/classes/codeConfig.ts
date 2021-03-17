import path from "path";
import { loadConfigObjects } from "../../src/modules/configLoaders";
import {
  getParentIds,
  getConfigObjectsWithIds,
  sortConfigObjectsWithIds,
  ConfigurationObject,
} from "../../src/classes/codeConfig";

describe("classes/codeConfig", () => {
  let configObjects: ConfigurationObject[];

  beforeAll(async () => {
    const dir = path.join(__dirname, "..", "fixtures", "codeConfig", "initial");
    configObjects = await loadConfigObjects(dir);
  });

  describe("#getParentIds", () => {
    test("includes its id as a provided id", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { providedIds } = getParentIds(destination);
      expect(providedIds).toEqual(["test_destination"]);
    });

    test("includes the values of mappings", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { prerequisiteIds } = getParentIds(destination);
      expect(prerequisiteIds).toContain("user_id");
      expect(prerequisiteIds).toContain("email");
    });
  });

  describe("#getConfigObjectsWithIds", () => {
    test("it applies prerequisiteIds", async () => {
      const objectsWithId = getConfigObjectsWithIds(configObjects);
      const destination = objectsWithId.find(
        ({ configObject }) => configObject.id === "test_destination"
      );
      expect(destination.prerequisiteIds.sort()).toEqual([
        "data_warehouse",
        "email",
        "email_group",
        "user_id",
      ]);
      expect(destination.providedIds.sort()).toEqual(["test_destination"]);
    });

    test("options are not included", async () => {
      const objectsWithId = getConfigObjectsWithIds(configObjects);
      const app = objectsWithId.find(
        ({ configObject }) => configObject.id === "data_warehouse"
      );
      expect(app.prerequisiteIds).toEqual([]);
      expect(app.providedIds).toEqual(["data_warehouse"]);
    });
  });

  describe("#sortConfigObjectsWithIds", () => {
    // we are running this test a few times with the input array shuffled each time
    function testSortConfigObjectsWithIds(idx: number) {
      it(`works (attempt ${idx})`, async () => {
        const shuffledConfigObjects = [...configObjects];
        shuffleArray(shuffledConfigObjects);
        const objectsWithId = getConfigObjectsWithIds(shuffledConfigObjects);
        const sortedObjects = sortConfigObjectsWithIds(objectsWithId);

        const teamPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "admin_team"
        );
        const teamMemberPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "demo"
        );
        const appPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "data_warehouse"
        );
        const sourcePosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "users_table"
        );
        const schedulePosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "users_table_schedule"
        );
        const propertyPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "email"
        );
        const groupPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "email_group"
        );
        const destinationPosition = sortedObjects.findIndex(
          (o) => o.configObject.id === "test_destination"
        );

        expect(teamPosition).toBeLessThan(teamMemberPosition);
        expect(appPosition).toBeLessThan(sourcePosition);
        expect(sourcePosition).toBeLessThan(schedulePosition);
        expect(sourcePosition).toBeLessThan(propertyPosition);
        expect(sourcePosition).toBeLessThan(groupPosition);
        expect(sourcePosition).toBeLessThan(destinationPosition);
        expect(groupPosition).toBeLessThan(destinationPosition);
        expect(propertyPosition).toBeLessThan(destinationPosition);
      });
    }

    for (let i = 0; i < 10; i++) {
      testSortConfigObjectsWithIds(i);
    }
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
