import { helper } from "../../utils/specHelper";
import { task, specHelper } from "actionhero";
import { Group } from "./../../../src/models/Group";
import { Import } from "./../../../src/models/Import";
import { Profile } from "./../../../src/models/Profile";

let actionhero, api;

describe("tasks/group:updateMembers", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("group:updateMembers", () => {
    let group: Group;
    let mario: Profile;
    let luigi: Profile;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.destroy({ truncate: true });
    });

    beforeAll(async () => {
      await helper.factories.profilePropertyRules();

      group = await Group.create({
        name: "test calculated group",
        type: "manual",
      });

      await Profile.destroy({ truncate: true });

      mario = await Profile.create();
      luigi = await Profile.create();

      await mario.addOrUpdateProperties({
        userId: 1,
        firstName: "Mario",
        lastName: "Mario",
        email: "mario@example.com",
      });

      await luigi.addOrUpdateProperties({
        userId: 2,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:updateMembers", { groupGuid: "abc123" });
      const found = await specHelper.findEnqueuedTasks("group:updateMembers");
      expect(found.length).toEqual(1);
    });

    it("will create imports for profiles already in the group to sync", async () => {
      await group.addProfile(mario);
      await group.addProfile(luigi);
      await Import.destroy({ truncate: true });

      await specHelper.runTask("group:updateMembers", {
        groupGuid: group.guid,
      });

      const imports = await Import.findAll();
      expect(imports.map((e) => e.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
      );

      expect(imports[0].data).toEqual({});
      expect(imports[0].rawData).toEqual({});
      expect(imports[1].data).toEqual({});
      expect(imports[1].rawData).toEqual({});

      await group.removeProfile(mario);
      await group.removeProfile(luigi);
    });

    it("will include a destinationGuid if provided", async () => {
      await group.addProfile(mario);
      await group.addProfile(luigi);
      await Import.destroy({ truncate: true });

      await specHelper.runTask("group:updateMembers", {
        groupGuid: group.guid,
        destinationGuid: "abc123",
      });

      const imports = await Import.findAll();
      expect(imports.map((e) => e.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
      );

      const data = { _meta: { destinationGuid: "abc123" } };
      expect(imports[0].data).toEqual(data);
      expect(imports[0].rawData).toEqual(data);
      expect(imports[1].data).toEqual(data);
      expect(imports[1].rawData).toEqual(data);

      await group.removeProfile(mario);
      await group.removeProfile(luigi);
    });
  });
});
