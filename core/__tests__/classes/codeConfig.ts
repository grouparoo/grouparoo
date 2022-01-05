import path from "path";
import { helper } from "@grouparoo/spec-helper";
import { loadConfigObjects } from "../../src/modules/configLoaders";
import {
  getParentIds,
  getConfigObjectsWithIds,
  sortConfigObjectsWithIds,
  AnyConfigurationObject,
  getDirectParentId,
  getAutoBootstrappedProperty,
  SourceConfigurationObject,
} from "../../src/classes/codeConfig";

describe("classes/codeConfig", () => {
  let configObjects: AnyConfigurationObject[];
  helper.grouparooTestServer({ truncate: true });

  beforeAll(async () => {
    const dir = path.join(__dirname, "..", "fixtures", "codeConfig", "initial");
    ({ configObjects } = await loadConfigObjects(dir));
  });

  describe("#getParentIds", () => {
    test("includes its id as a provided id", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { providedIds } = await getParentIds(destination);
      expect(providedIds).toEqual(["destination:test_destination"]);
    });

    test("includes the values of mappings", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const { prerequisiteIds } = await getParentIds(destination);
      expect(prerequisiteIds).toContain("property:user_id");
      expect(prerequisiteIds).toContain("property:email");
    });

    test("does not include the value of bootstrapped properties as prerequisite", async () => {
      const source = configObjects.find(({ id }) => id === "users_table");
      const { prerequisiteIds, providedIds } = await getParentIds(
        source,
        configObjects.filter((c) => c.id !== source.id)
      );
      expect(prerequisiteIds).toEqual([
        "app:data_warehouse",
        "model:mod_profiles",
      ]);
      expect(providedIds).toEqual(["source:users_table"]);
    });

    describe("query source", () => {
      const source = {
        class: "source",
        id: "query_source",
        name: "query_source",
        type: "postgres-import-query",
        appId: "data_warehouse",
      };
      const property = {
        id: "ltv",
        name: "ltv",
        class: "property",
        sourceId: "query_source",
        type: "float",
        unique: false,
        isArray: false,
        options: {
          query:
            "SELECT SUM(price) from purchases where user_id = {{{userId}}}",
        },
      };

      test("includes properties a query depends on from other code-config objects", async () => {
        const { prerequisiteIds, providedIds } = await getParentIds(
          property,
          configObjects.concat([source, property])
        );

        expect(prerequisiteIds).toEqual([
          "property:user_id",
          "source:query_source",
        ]);
        expect(providedIds).toEqual(["property:ltv"]);
      });
    });
  });

  describe("#getDirectParentId", () => {
    test("gets correct parentId for destinations (appId)", async () => {
      const destination = configObjects.find(
        ({ id }) => id === "test_destination"
      );
      const parentId = await getDirectParentId(destination);
      expect(parentId).toBe("data_warehouse");
    });

    test("gets correct parentId for sources (appId)", async () => {
      const source = configObjects.find(({ id }) => id === "users_table");
      const parentId = await getDirectParentId(source);
      expect(parentId).toBe("data_warehouse");
    });

    test("gets correct parentId for properties (sourceId)", async () => {
      const property = configObjects.find(({ id }) => id === "email");
      const parentId = await getDirectParentId(property);
      expect(parentId).toBe("users_table");
    });

    test("gets correct parentId for teamMembers (teamId)", async () => {
      const teamMember = configObjects.find(({ id }) => id === "demo");
      const parentId = await getDirectParentId(teamMember);
      expect(parentId).toBe("admin_team");
    });

    test("returns null for objects without a parentId", async () => {
      const team = configObjects.find(({ id }) => id === "admin_team");
      const parentId = await getDirectParentId(team);
      expect(parentId).toBeNull();
    });
  });

  describe("#getConfigObjectsWithIds", () => {
    test("it applies prerequisiteIds", async () => {
      const objectsWithId = await getConfigObjectsWithIds(configObjects);
      const destination = objectsWithId.find(
        ({ configObject }) => configObject.id === "test_destination"
      );
      expect(destination.prerequisiteIds.sort()).toEqual([
        "app:data_warehouse",
        "group:email_group",
        "model:mod_profiles",
        "property:email",
        "property:user_id",
      ]);
      expect(destination.providedIds.sort()).toEqual([
        "destination:test_destination",
      ]);
    });

    test("options are not included", async () => {
      const objectsWithId = await getConfigObjectsWithIds(configObjects);
      const app = objectsWithId.find(
        ({ configObject }) => configObject.id === "data_warehouse"
      );
      expect(app.prerequisiteIds).toEqual([]);
      expect(app.providedIds).toEqual(["app:data_warehouse"]);
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

  describe("#getAutoBootstrappedProperty", () => {
    test("it can automatically determine which property to bootstrap", () => {
      const source = configObjects.find(
        (o) => o.id === "users_table"
      ) as SourceConfigurationObject;
      const bootstrappedProperty = getAutoBootstrappedProperty(
        source,
        configObjects
      );

      expect(bootstrappedProperty.id).toBe("user_id");
    });

    test("it returns null if the source's mapping should not be bootstrapped", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "multiple-sources"
      );
      const { configObjects: _configObjects } = await loadConfigObjects(dir);
      const source = _configObjects.find(
        (o) => o.id === "purchases_table"
      ) as SourceConfigurationObject;
      const bootstrappedProperty = getAutoBootstrappedProperty(
        source,
        _configObjects
      );

      expect(bootstrappedProperty).toBeNull();
    });

    test("it throws an error if the bootstrapped property is not unique", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "error-bootstrap-not-unique"
      );
      const { configObjects: _configObjects } = await loadConfigObjects(dir);
      const source = _configObjects.find(
        (o) => o.id === "users_table"
      ) as SourceConfigurationObject;

      expect(() => {
        getAutoBootstrappedProperty(source, _configObjects);
      }).toThrow(/"user_id" needs to be set as "unique: true"/);
    });

    test("it throws an error if the bootstrapped property is an array", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "error-bootstrap-is-array"
      );
      const { configObjects: _configObjects } = await loadConfigObjects(dir);
      const source = _configObjects.find(
        (o) => o.id === "users_table"
      ) as SourceConfigurationObject;

      expect(() => {
        getAutoBootstrappedProperty(source, _configObjects);
      }).toThrow(/"user_id" cannot be an array/);
    });
  });
});

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
