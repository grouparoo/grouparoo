import path from "path";
import { helper } from "@grouparoo/spec-helper";
import { loadConfigObjects } from "../../src/modules/configLoaders";
import {
  getParentIds,
  getConfigObjectsWithIds,
  sortConfigObjectsWithIds,
  ConfigurationObject,
  validateAndFormatId,
} from "../../src/classes/codeConfig";

describe("classes/codeConfig", () => {
  let configObjects: ConfigurationObject[];
  helper.grouparooTestServer({ truncate: true });

  beforeAll(async () => {
    const dir = path.join(__dirname, "..", "fixtures", "codeConfig", "initial");
    configObjects = await loadConfigObjects(dir);
  });

  describe("#getParentIds", () => {
    test("includes its id as a provided id", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { providedIds } = await getParentIds(destination);
      expect(providedIds).toEqual(["test_destination"]);
    });

    test("includes the values of mappings", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { prerequisiteIds } = await getParentIds(destination);
      expect(prerequisiteIds).toContain("user_id");
      expect(prerequisiteIds).toContain("email");
    });

    test("includes the value of bootstrapped properties", async () => {
      const source = configObjects.find(({ id }) => id === "users_table");
      const { prerequisiteIds, providedIds } = await getParentIds(source);
      expect(prerequisiteIds).toEqual(["data_warehouse", "user_id"]);
      expect(providedIds).toEqual(["users_table", "user_id"]);
    });

    describe("query source", () => {
      const source = {
        class: "source",
        id: "query_source",
        name: "query_source",
        type: "postgres-query-import",
        appId: "data_warehouse",
      };
      const property = {
        id: "ltv",
        name: "ltv",
        class: "property",
        sourceId: "query_source",
        type: "float",
        unique: false,
        identifying: false,
        isArray: false,
        options: {
          query: "SELECT SUM(price) from purchases where user_id = {{userId}}",
        },
      };

      test("includes properties a query depends on from other code-config objects", async () => {
        const { prerequisiteIds, providedIds } = await getParentIds(
          property,
          configObjects.concat([source, property])
        );

        expect(prerequisiteIds).toEqual(["user_id", "query_source"]);
        expect(providedIds).toEqual(["ltv"]);
      });
    });
  });

  describe("#getConfigObjectsWithIds", () => {
    test("it applies prerequisiteIds", async () => {
      const objectsWithId = await getConfigObjectsWithIds(configObjects);
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
      const objectsWithId = await getConfigObjectsWithIds(configObjects);
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
        const objectsWithId = await getConfigObjectsWithIds(
          shuffledConfigObjects
        );
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

  describe("#validateAndFormatId", () => {
    test("validates ids", async () => {
      expect(await validateAndFormatId(null, "foo")).toBeTruthy();
      expect(await validateAndFormatId(null, "foo_underscore")).toBeTruthy();
      expect(await validateAndFormatId(null, "foo-dash")).toBeTruthy();
      expect(await validateAndFormatId(null, "fooUpperLower")).toBeTruthy();
      expect(await validateAndFormatId(null, "foo-with-numb3r")).toBeTruthy();

      await expect(validateAndFormatId(null, "foo w space")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo w %")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo w /")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo w \\")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo w !")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo w ~")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo,stuff")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo;stuff")).rejects.toThrow();
      await expect(validateAndFormatId(null, "foo&stuff")).rejects.toThrow();
    });
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
