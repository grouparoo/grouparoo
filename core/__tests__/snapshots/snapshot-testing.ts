import { Profile, Group } from "../../src"; // `@grouparoo/core`
import { helper } from "@grouparoo/spec-helper";

let actionhero; // the running Grouparoo process

describe("test grouparoo profiles", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("within a mock environment", () => {
    let profile: Profile;
    let group: Group;

    beforeAll(async () => {
      // make properties
      await helper.factories.properties();

      // make a group
      group = await helper.factories.group();
      await group.update({ type: "calculated", name: "test group" });
      await group.setRules([
        { key: "email", match: "%@example.com", operation: { op: "like" } },
      ]);
      await group.update({ state: "ready" });

      // make the profile
      const response = await Profile.findOrCreateByUniqueProfileProperties({
        userId: ["person1@example.com"],
      });
      profile = response.profile;

      // import & export the profile
      await profile.sync();
    });

    test("profile properties match the snapshot", async () => {
      const properties = await profile.simplifiedProperties();

      // this tells Jest that the snapshot should match exactly except for the guid and dates, which can be variable
      expect(properties).toMatchSnapshot({
        email: expect.arrayContaining([expect.stringMatching(/@example.com/)]),
        userId: expect.arrayContaining([expect.any(Number)]),
        lastLoginAt: expect.arrayContaining([expect.any(Date)]),
      });
    });

    test("groups match the snapshot", async () => {
      const groups = await profile.$get("groups");
      const groupApiData = await Promise.all(
        groups.map((group) => group.apiData())
      );

      expect(groupApiData.length).toEqual(1);

      expect(groupApiData[0]).toMatchSnapshot({
        guid: expect.stringMatching(/^grp_/),
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
        nextCalculatedAt: expect.any(Number),
      });
    });
  });
});
