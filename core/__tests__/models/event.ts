import { helper } from "@grouparoo/spec-helper";
import { Profile, Event, Log, Property, ProfileProperty } from "../../src";

describe("models/event", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let identifyingPropertyId: string;

  beforeAll(async () => {
    await helper.factories.properties();
    identifyingPropertyId = (
      await Property.findOne({ where: { key: "userId" } })
    ).id;
  });

  test("an event can be created", async () => {
    const event = await helper.factories.event();

    expect(event.id.length).toBe(40);
    expect(event.createdAt).toBeTruthy();
    expect(event.updatedAt).toBeTruthy();
    expect(event.occurredAt).toBeTruthy();
  });

  test("creating an event creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "event" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
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

      await profileA.update({ anonymousId: "a" });
      await profileB.update({ anonymousId: "b" });
      await profileA.addOrUpdateProperties({ userId: [1] });
      await profileB.addOrUpdateProperties({ userId: [2] });
    });

    afterEach(async () => {
      const profiles = await Profile.findAll();
      await Promise.all(profiles.map((p) => p.destroy()));
    });

    test("already identified", async () => {
      const event = await helper.factories.event();
      await event.update({ profileId: profileA.id });

      const response = await event.associate(identifyingPropertyId);
      expect(response.id).toBe(profileA.id);
      expect(await Profile.count()).toBe(2);
    });

    describe("with userId", () => {
      test("new", async () => {
        const event = await helper.factories.event();
        await event.update({ userId: "100" });

        const response = await event.associate(identifyingPropertyId);

        expect(await Profile.count()).toBe(3);
      });

      test("with merge", async () => {
        const event = await helper.factories.event();
        await event.update({ userId: "1" });

        const response = await event.associate(identifyingPropertyId);
        expect(response.id).toBe(profileA.id);

        expect(await Profile.count()).toBe(2);
      });
    });

    describe("with anonymousId", () => {
      test("new", async () => {
        const event = await helper.factories.event();
        await event.update({ anonymousId: "abc123" });

        const response = await event.associate(identifyingPropertyId);

        expect(await Profile.count()).toBe(3);
      });

      test("with old events", async () => {
        const event = await helper.factories.event();
        await event.update({ anonymousId: "z" });

        const otherEvent = await helper.factories.event();
        await otherEvent.update({
          anonymousId: "z",
          profileId: profileA.id,
        });

        const response = await event.associate(identifyingPropertyId);
        expect(response.id).toBe(profileA.id);
        expect(await Profile.count()).toBe(2);
      });

      test("with merge", async () => {
        const event = await helper.factories.event();
        await event.update({ anonymousId: "abc123" });

        const otherEvent = await helper.factories.event();
        await otherEvent.update({ anonymousId: "abc123", userId: "1" });

        await event.associate(identifyingPropertyId);
        await otherEvent.associate(identifyingPropertyId);

        expect(await Profile.count()).toBe(2);
      });
    });

    test("associating an event to a Profile marks the Profile as pending", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [999] });
      await ProfileProperty.update(
        { state: "ready" },
        { where: { profileId: profile.id } }
      );
      await profile.update({ state: "ready" });

      const event = await helper.factories.event();
      await event.update({ userId: "999" });
      await event.associate(identifyingPropertyId);

      await profile.reload();
      expect(profile.state).toBe("pending");
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
