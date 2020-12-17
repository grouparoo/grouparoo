import { helper } from "@grouparoo/spec-helper";
import { Log } from "./../../src/models/Log";
import { Source } from "./../../src/models/Source";
import { Profile } from "./../../src/models/Profile";
import { ProfileProperty } from "./../../src/models/ProfileProperty";
import { Property } from "./../../src/models/Property";

let actionhero;

describe("models/profileProperty", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  let source: Source;
  let profile: Profile;
  let firstNameProperty: Property;
  let emailProperty: Property;
  let urlProperty: Property;
  let phoneNumberProperty: Property;
  let userIdProperty: Property;
  let lastLoginProperty: Property;
  let ltvProperty: Property;
  let vipProperty: Property;

  beforeAll(async () => {
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProperty("userId", "integer", "id");
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    profile = new Profile();
    await profile.save();

    userIdProperty = await Property.findOne({
      where: { key: "userId" },
    });

    firstNameProperty = await Property.create({
      sourceGuid: source.guid,
      key: "firstName",
      type: "string",
    });
    await firstNameProperty.setOptions({ column: "firstName" });
    await firstNameProperty.update({ state: "ready" });

    emailProperty = await Property.create({
      sourceGuid: source.guid,
      key: "email",
      type: "email",
    });
    await emailProperty.setOptions({ column: "email" });
    await emailProperty.update({ state: "ready" });

    urlProperty = await Property.create({
      sourceGuid: source.guid,
      key: "url",
      type: "url",
    });
    await urlProperty.setOptions({ column: "url" });
    await urlProperty.update({ state: "ready" });

    phoneNumberProperty = await Property.create({
      sourceGuid: source.guid,
      key: "phoneNumber",
      type: "phoneNumber",
    });
    await phoneNumberProperty.setOptions({ column: "phoneNumber" });
    await phoneNumberProperty.update({ state: "ready" });

    lastLoginProperty = await Property.create({
      sourceGuid: source.guid,
      key: "lastLoginAt",
      type: "date",
    });
    await lastLoginProperty.setOptions({ column: "lastLoginAt" });
    await lastLoginProperty.update({ state: "ready" });

    ltvProperty = await Property.create({
      sourceGuid: source.guid,
      key: "ltv",
      type: "float",
    });
    await ltvProperty.setOptions({ column: "ltv" });
    await ltvProperty.update({ state: "ready" });

    vipProperty = await Property.create({
      sourceGuid: source.guid,
      key: "isVIP",
      type: "boolean",
    });
    await vipProperty.setOptions({ column: "isVIP" });
    await vipProperty.update({ state: "ready" });
  });

  test("creating, editing, and deleting a profile property creates a relevant log message", async () => {
    const property = await ProfileProperty.create({
      profileGuid: profile.guid,
      propertyGuid: ltvProperty.guid,
      rawValue: "123.0",
    });

    let log = await Log.findOne({
      where: { topic: "profileProperty", verb: "create" },
    });
    expect(log.message).toMatch(/profileProperty .* created/);

    property.rawValue = "100";
    await property.save();
    log = await Log.findOne({
      where: { topic: "profileProperty", verb: "update" },
    });
    expect(log.message).toBe('profileProperty "ltv" updated: rawValue -> 100');

    await property.destroy();
    log = await Log.findOne({
      where: { topic: "profileProperty", verb: "destroy" },
    });
    expect(log.message).toBe('profileProperty "ltv" destroyed');
  });

  describe("array properties", () => {
    let purchasesProperty: Property;

    beforeAll(async () => {
      purchasesProperty = await Property.create({
        sourceGuid: source.guid,
        key: "purchases",
        type: "string",
        isArray: true,
      });
      await purchasesProperty.setOptions({ column: "purchases" });
      await purchasesProperty.update({ state: "ready" });
    });

    afterAll(async () => {
      await purchasesProperty.destroy();
    });

    test("by default profile properties have a position of 0", async () => {
      const property = await ProfileProperty.create({
        profileGuid: profile.guid,
        propertyGuid: purchasesProperty.guid,
        rawValue: "hat",
      });
      expect(property.position).toBe(0);
      await property.destroy();
    });

    test("multiple values can be set with different positions", async () => {
      const propertyA = await ProfileProperty.create({
        profileGuid: profile.guid,
        propertyGuid: purchasesProperty.guid,
        rawValue: "hat",
        position: 1,
      });
      const propertyB = await ProfileProperty.create({
        profileGuid: profile.guid,
        propertyGuid: purchasesProperty.guid,
        rawValue: "shoe",
        position: 0,
      });
      expect(propertyA.position).toBe(1);
      expect(propertyB.position).toBe(0);
      await propertyA.destroy();
      await propertyB.destroy();
    });

    test("multiple values cannot re-use the same position", async () => {
      const property = await ProfileProperty.create({
        profileGuid: profile.guid,
        propertyGuid: purchasesProperty.guid,
        rawValue: "hat",
      });

      await expect(
        ProfileProperty.create({
          profileGuid: profile.guid,
          propertyGuid: purchasesProperty.guid,
          rawValue: "hat",
        })
      ).rejects.toThrow(/There is already a ProfileProperty/);

      await property.destroy();
    });
  });

  describe("type coercion", () => {
    test("strings", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: firstNameProperty.guid,
      });
      await profileProperty.setValue("Mario");
      const response = await profileProperty.getValue();
      expect(response).toBe("Mario");
    });

    test("emails", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: emailProperty.guid,
      });
      await profileProperty.setValue("mario@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("emails are lower cased", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: emailProperty.guid,
      });
      await profileProperty.setValue("MARIO@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("invalid emails throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: emailProperty.guid,
      });

      const badEmails = [
        "someone",
        "someone.com",
        "someone.com@",
        "someone@site",
        "someone with spaces@site.com",
      ];

      for (const i in badEmails) {
        await expect(
          profileProperty.setValue(badEmails[i])
        ).rejects.toThrowError(/email .* is not valid/);
      }
    });

    test("very long emails are valid", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: emailProperty.guid,
      });
      const value =
        "Deleted-user-id-19430-Team-5051deleted-user-id-19430-team-5051XXXXXX@example.com";
      await profileProperty.setValue(value);
      const response = await profileProperty.getValue();
      expect(response).toBe(value.toLowerCase());
    });

    test("urls", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: urlProperty.guid,
      });
      await profileProperty.setValue("HTTPS://grouparoo.com/picture");
      const response = await profileProperty.getValue();
      expect(response).toBe("https://grouparoo.com/picture");
    });

    test("invalid urls throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: urlProperty.guid,
      });
      await expect(profileProperty.setValue("not a url")).rejects.toThrowError(
        /url .* is not valid/
      );
    });

    test("phone numbers", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: phoneNumberProperty.guid,
      });
      await profileProperty.setValue("4128889999");
      const response = await profileProperty.getValue();
      expect(response).toBe("+1 412 888 9999");
    });

    test("phone numbers with another country code", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: phoneNumberProperty.guid,
      });
      await profileProperty.setValue("+42 123 123 1231");
      const response = await profileProperty.getValue();
      expect(response).toBe("+421 2 312 312 31");
    });

    test("phone numbers which we cannot parse throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: phoneNumberProperty.guid,
      });
      await expect(profileProperty.setValue("1-800-got-milk")).rejects.toThrow(
        /phone number .* is not valid/
      );
    });

    test("integers", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: userIdProperty.guid,
      });
      await profileProperty.setValue(123);
      const response = await profileProperty.getValue();
      expect(response).toBe(123);
    });

    test("dates (object form)", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: lastLoginProperty.guid,
      });
      await profileProperty.setValue(new Date(0));
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("dates (timestamp form)", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: lastLoginProperty.guid,
      });
      await profileProperty.setValue(0);
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("floats", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: ltvProperty.guid,
      });
      await profileProperty.setValue(100.21);
      const response = await profileProperty.getValue();
      expect(response).toBe(100.21);
    });

    test("booleans", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: vipProperty.guid,
      });
      await profileProperty.setValue(true);
      let response = await profileProperty.getValue();
      expect(response).toBe(true);

      await profileProperty.setValue("true");
      response = await profileProperty.getValue();
      expect(response).toBe(true);

      await profileProperty.setValue(1);
      response = await profileProperty.getValue();
      expect(response).toBe(true);

      await profileProperty.setValue(false);
      response = await profileProperty.getValue();
      expect(response).toBe(false);

      await profileProperty.setValue("false");
      response = await profileProperty.getValue();
      expect(response).toBe(false);

      await profileProperty.setValue(0);
      response = await profileProperty.getValue();
      expect(response).toBe(false);
    });

    describe("null", () => {
      test("string rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: firstNameProperty.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("email rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: emailProperty.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("integer rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: userIdProperty.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("date rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: lastLoginProperty.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("float rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: ltvProperty.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("boolean rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: vipProperty.guid,
        });
        await profileProperty.setValue(null);
        let response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
    });

    test("it will not save a key that is not defined as a property", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        propertyGuid: "abc",
      });

      await expect(profileProperty.setValue(true)).rejects.toThrow(
        /property not found for propertyGuid/
      );
    });
  });

  describe("uniqueness and cascade destruction", () => {
    let secondProfile;
    beforeAll(async () => {
      emailProperty.unique = true;
      await emailProperty.save();

      await profile.buildNullProperties();
      secondProfile = new Profile();
      await secondProfile.save();
    });

    afterAll(async () => {
      emailProperty.unique = false;
      await emailProperty.save();
    });

    test("allows the addition of another unique, non-conflicting property", async () => {
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });
    });

    test("blocks the addition of another unique property", async () => {
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });
      await expect(
        secondProfile.addOrUpdateProperties({
          email: ["mario@example.com"],
        })
      ).rejects.toThrow(
        /Another profile already has the value mario@example.com for property email/
      );
    });

    test("editing the key of a property renames all the profile properties that have that key", async () => {
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });

      const beforeCount = await ProfileProperty.count({
        where: { propertyGuid: emailProperty.guid },
      });
      expect(beforeCount).toBe(2);

      emailProperty.key = "EMAIL!";
      await emailProperty.save();

      const afterCount = await ProfileProperty.count({
        where: { propertyGuid: emailProperty.guid },
      });
      expect(afterCount).toBe(2);

      const property = await ProfileProperty.findOne({
        where: { propertyGuid: emailProperty.guid },
      });
      const apiData = await property.apiData();
      expect(apiData.key).toBe("EMAIL!");

      emailProperty.key = "email";
      await emailProperty.save();
    });

    test("deleting a property deletes all the profile properties that have that key", async () => {
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });

      const beforeCount = await ProfileProperty.count({
        where: { propertyGuid: emailProperty.guid },
      });
      expect(beforeCount).toBe(2);

      await emailProperty.destroy();

      const afterCount = await ProfileProperty.count({
        where: { propertyGuid: emailProperty.guid },
      });
      expect(afterCount).toBe(0);
    });
  });
});
