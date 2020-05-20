import { helper } from "./../utils/specHelper";
import { Profile } from "./../../src/models/Profile";
import { Event } from "./../../src/models/Event";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";

let actionhero;
let identifyingProfilePropertyRuleGuid;

describe("models/event", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    identifyingProfilePropertyRuleGuid = (
      await ProfilePropertyRule.findOne({ where: { key: "userId" } })
    ).guid;
  });

  test("an event can be created", async () => {
    const event = await helper.factories.event();

    expect(event.guid.length).toBe(40);
    expect(event.createdAt).toBeTruthy();
    expect(event.updatedAt).toBeTruthy();
    expect(event.occurredAt).toBeTruthy();
  });

  test("data can be stored and retrieved", async () => {
    const event = await helper.factories.event();
    await event.setData({ a: 1, b: 2 });
    const data = await event.getData();
    expect(data).toEqual({
      a: "1",
      b: "2",
    });
  });

  describe("profile association", () => {
    let profileA: Profile;
    let profileB: Profile;

    beforeEach(async () => {
      profileA = await helper.factories.profile();
      profileB = await helper.factories.profile();

      await profileA.addOrUpdateProperties({ userId: 1 });
      await profileB.addOrUpdateProperties({ userId: 2 });
    });

    afterEach(async () => {
      const profiles = await Profile.findAll();
      await Promise.all(profiles.map((p) => p.destroy()));
    });

    test("already identified", async () => {
      const event = await helper.factories.event();
      await event.update({ profileGuid: profileA.guid });

      const response = await event.associate(
        identifyingProfilePropertyRuleGuid
      );
      expect(response.guid).toBe(profileA.guid);
    });

    describe("with userId", () => {
      test("new", async () => {
        const event = await helper.factories.event();
        await event.update({ userId: "100" });

        const response = await event.associate(
          identifyingProfilePropertyRuleGuid
        );

        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(3);
      });

      test("with merge", async () => {
        const event = await helper.factories.event();
        await event.update({ userId: "1" });

        const response = await event.associate(
          identifyingProfilePropertyRuleGuid
        );
        expect(response.guid).toBe(profileA.guid);
      });
    });
    describe("with anonymousId", () => {
      test("new", async () => {
        const event = await helper.factories.event();
        await event.update({ anonymousId: "abc123" });

        const response = await event.associate(
          identifyingProfilePropertyRuleGuid
        );
        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(3);
      });

      test("with merge", async () => {
        const event = await helper.factories.event();
        await event.update({ anonymousId: "abc123" });

        const otherEvent = await helper.factories.event();
        await otherEvent.update({ anonymousId: "abc123", userId: "1" });

        await event.associate(identifyingProfilePropertyRuleGuid);
        await otherEvent.associate(identifyingProfilePropertyRuleGuid);

        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(2);
      });
    });
  });

  describe("class methods", () => {
    beforeEach(async () => {
      const events = await Event.findAll();
      await Promise.all(events.map((e) => e.destroy()));
    });

    test("getTypes", async () => {
      await helper.factories.event({ type: "pageview" });
      await helper.factories.event({ type: "identify" });
      await helper.factories.event({ type: "addtocart" });

      expect(await Event.getTypes()).toEqual([
        "addtocart",
        "identify",
        "pageview",
      ]);
    });

    test("dataKeys", async () => {
      await helper.factories.event({ type: "pageview", data: { page: "/" } });
      await helper.factories.event({
        type: "pageview",
        data: { page: "/about", time: 100 },
      });
      await helper.factories.event({
        type: "pageview",
        data: { page: "/sign-in", referrer: "other-site.com" },
      });

      expect(await Event.dataKeys("pageview")).toEqual([
        "page",
        "referrer",
        "time",
      ]);
    });
  });
});
