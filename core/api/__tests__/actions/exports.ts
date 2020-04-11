import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Export } from "./../../src/models/Export";
let actionhero;

describe("actions/exports", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;
    let destination;
    let profile;
    let guid;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      destination = await helper.factories.destination();
      const otherDestination = await helper.factories.destination();

      const firstExport = await Export.create({
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });
      guid = firstExport.guid;

      await Export.create({
        destinationGuid: destination.guid,
        profileGuid: "other-profile",
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      await Export.create({
        destinationGuid: otherDestination.guid,
        profileGuid: profile.guid,
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the exports", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(3);
      expect(total).toBe(3);
    });

    test("a reader can view an export", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, export: _export } = await specHelper.runAction(
        "export:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(_export.guid).toBe(guid);
      expect(_export.destination.guid).toBe(destination.guid);
    });

    test("a reader can ask for exports about a profile", async () => {
      connection.params = {
        csrfToken,
        profileGuid: profile.guid,
      };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(2);
      expect(exports[0].profileGuid).toBe(profile.guid);
      expect(exports[1].profileGuid).toBe(profile.guid);
      expect(total).toBe(2);
    });

    test("a reader can ask for exports about a destination", async () => {
      connection.params = {
        csrfToken,
        destinationGuid: destination.guid,
      };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(2);
      expect(exports[0].destination.guid).toBe(destination.guid);
      expect(exports[1].destination.guid).toBe(destination.guid);
      expect(total).toBe(2);
    });
  });
});
