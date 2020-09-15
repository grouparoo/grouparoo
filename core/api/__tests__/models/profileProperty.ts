import { helper } from "@grouparoo/spec-helper";
import { Log } from "./../../src/models/Log";
import { Source } from "./../../src/models/Source";
import { Profile } from "./../../src/models/Profile";
import { ProfileProperty } from "./../../src/models/ProfileProperty";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";

let actionhero;

describe("models/profileProperty", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  let source: Source;
  let profile: Profile;
  let firstNameRule: ProfilePropertyRule;
  let emailRule: ProfilePropertyRule;
  let urlRule: ProfilePropertyRule;
  let phoneNumberRule: ProfilePropertyRule;
  let userIdRule: ProfilePropertyRule;
  let lastLoginRule: ProfilePropertyRule;
  let ltvRule: ProfilePropertyRule;
  let vipRule: ProfilePropertyRule;

  beforeAll(async () => {
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProfilePropertyRule("userId", "integer", "id");
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    profile = new Profile();
    await profile.save();

    userIdRule = await ProfilePropertyRule.findOne({
      where: { key: "userId" },
    });

    firstNameRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "firstName",
      type: "string",
    });
    await firstNameRule.setOptions({ column: "firstName" });
    await firstNameRule.update({ state: "ready" });

    emailRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "email",
      type: "email",
    });
    await emailRule.setOptions({ column: "email" });
    await emailRule.update({ state: "ready" });

    urlRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "url",
      type: "url",
    });
    await urlRule.setOptions({ column: "url" });
    await urlRule.update({ state: "ready" });

    phoneNumberRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "phoneNumber",
      type: "phoneNumber",
    });
    await phoneNumberRule.setOptions({ column: "phoneNumber" });
    await phoneNumberRule.update({ state: "ready" });

    lastLoginRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "lastLoginAt",
      type: "date",
    });
    await lastLoginRule.setOptions({ column: "lastLoginAt" });
    await lastLoginRule.update({ state: "ready" });

    ltvRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "ltv",
      type: "float",
    });
    await ltvRule.setOptions({ column: "ltv" });
    await ltvRule.update({ state: "ready" });

    vipRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "isVIP",
      type: "boolean",
    });
    await vipRule.setOptions({ column: "isVIP" });
    await vipRule.update({ state: "ready" });
  });

  test("creating, editing, and deleting a profile property creates a relevant log message", async () => {
    const property = await ProfileProperty.create({
      profileGuid: profile.guid,
      profilePropertyRuleGuid: ltvRule.guid,
      rawValue: "123.0",
    });

    let log = await Log.findOne({
      where: { topic: "profileProperty", verb: "create" },
    });
    expect(log.message).toBe('profileProperty "ltv" created');

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
    let purchasesRule: ProfilePropertyRule;

    beforeAll(async () => {
      purchasesRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "purchases",
        type: "string",
        isArray: true,
      });
      await purchasesRule.setOptions({ column: "purchases" });
      await purchasesRule.update({ state: "ready" });
    });

    afterAll(async () => {
      await purchasesRule.destroy();
    });

    test("by default profile properties have a position of 0", async () => {
      const property = await ProfileProperty.create({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: purchasesRule.guid,
        rawValue: "hat",
      });
      expect(property.position).toBe(0);
      await property.destroy();
    });

    test("multiple values can be set with different positions", async () => {
      const propertyA = await ProfileProperty.create({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: purchasesRule.guid,
        rawValue: "hat",
        position: 1,
      });
      const propertyB = await ProfileProperty.create({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: purchasesRule.guid,
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
        profilePropertyRuleGuid: purchasesRule.guid,
        rawValue: "hat",
      });

      await expect(
        ProfileProperty.create({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: purchasesRule.guid,
          rawValue: "hat",
        })
      ).rejects.toThrow(/Validation error/);

      await property.destroy();
    });
  });

  describe("type coercion", () => {
    test("strings", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: firstNameRule.guid,
      });
      await profileProperty.setValue("Mario");
      const response = await profileProperty.getValue();
      expect(response).toBe("Mario");
    });

    test("emails", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });
      await profileProperty.setValue("mario@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("emails are lower cased", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });
      await profileProperty.setValue("MARIO@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("invalid emails throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });
      await expect(
        profileProperty.setValue("someone.com")
      ).rejects.toThrowError(/email .* is not valid/);
    });

    test("urls", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: urlRule.guid,
      });
      await profileProperty.setValue("HTTPS://grouparoo.com/picture");
      const response = await profileProperty.getValue();
      expect(response).toBe("https://grouparoo.com/picture");
    });

    test("invalid urls throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: urlRule.guid,
      });
      await expect(profileProperty.setValue("not a url")).rejects.toThrowError(
        /url .* is not valid/
      );
    });

    test("phone numbers", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: phoneNumberRule.guid,
      });
      await profileProperty.setValue("4128889999");
      const response = await profileProperty.getValue();
      expect(response).toBe("+1 412 888 9999");
    });

    test("phone numbers with another country code", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: phoneNumberRule.guid,
      });
      await profileProperty.setValue("+42 123 123 1231");
      const response = await profileProperty.getValue();
      expect(response).toBe("+421 2 312 312 31");
    });

    test("phone numbers which we cannot parse throw an error", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: phoneNumberRule.guid,
      });
      await expect(profileProperty.setValue("1-800-got-milk")).rejects.toThrow(
        /phone number .* is not valid/
      );
    });

    test("integers", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: userIdRule.guid,
      });
      await profileProperty.setValue(123);
      const response = await profileProperty.getValue();
      expect(response).toBe(123);
    });

    test("dates (object form)", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: lastLoginRule.guid,
      });
      await profileProperty.setValue(new Date(0));
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("dates (timestamp form)", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: lastLoginRule.guid,
      });
      await profileProperty.setValue(0);
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("floats", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: ltvRule.guid,
      });
      await profileProperty.setValue(100.21);
      const response = await profileProperty.getValue();
      expect(response).toBe(100.21);
    });

    test("booleans", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: vipRule.guid,
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
          profilePropertyRuleGuid: firstNameRule.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("email rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: emailRule.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("integer rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: userIdRule.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("date rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: lastLoginRule.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("float rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: ltvRule.guid,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("boolean rules can be null", async () => {
        const profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          profilePropertyRuleGuid: vipRule.guid,
        });
        await profileProperty.setValue(null);
        let response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
    });

    test("it will not save a key that is not defined as a profilePropertyRule", async () => {
      const profileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: "abc",
      });
      try {
        await profileProperty.setValue(true);
        throw new Error("should not get here");
      } catch (error) {
        expect(error.message).toMatch(
          /profile property rule not found for this profilePropertyRuleGuid/
        );
      }
    });
  });

  describe("uniqueness and cascade destruction", () => {
    let secondProfile;
    beforeAll(async () => {
      emailRule.unique = true;
      await emailRule.save();

      secondProfile = new Profile();
      await secondProfile.save();
    });

    afterAll(async () => {
      emailRule.unique = false;
      await emailRule.save();
    });

    test("allows the addition of another unique, non-conflicting property", async () => {
      const originalProfileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });
      await originalProfileProperty.setValue("mario@example.com");
      await originalProfileProperty.save();
      expect(originalProfileProperty.guid).toBeTruthy();

      const newProfileProperty = new ProfileProperty({
        profileGuid: secondProfile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });
      await newProfileProperty.setValue("luigi@example.com");
      await newProfileProperty.save();
      expect(newProfileProperty.guid).toBeTruthy();

      await originalProfileProperty.destroy();
      await newProfileProperty.destroy();
    });

    test("blocks the addition of another unique and updates cascade", async () => {
      const originalProfileProperty = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: emailRule.guid,
      });

      await originalProfileProperty.setValue("mario@example.com");
      await originalProfileProperty.save();
      expect(originalProfileProperty.guid).toBeTruthy();

      try {
        const newProfileProperty = new ProfileProperty({
          profileGuid: secondProfile.guid,
          profilePropertyRuleGuid: emailRule.guid,
        });

        await newProfileProperty.setValue("mario@example.com");
        await newProfileProperty.save();

        throw new Error("should not get here");
      } catch (error) {
        expect(error.message).toMatch(
          /another profile already has the value mario@example.com for property email/
        );
      }
    });

    test("editing the key of a profilePropertyRule renames all the profile properties that have that key", async () => {
      const beforeCount = await ProfileProperty.count({
        where: { profilePropertyRuleGuid: emailRule.guid },
      });
      expect(beforeCount).toBe(1);

      emailRule.key = "EMAIL!";
      await emailRule.save();

      const afterCount = await ProfileProperty.count({
        where: { profilePropertyRuleGuid: emailRule.guid },
      });
      expect(afterCount).toBe(1);

      const property = await ProfileProperty.findOne({
        where: { profilePropertyRuleGuid: emailRule.guid },
      });
      const apiData = await property.apiData();
      expect(apiData.key).toBe("EMAIL!");
    });

    test("deleting a profilePropertyRule deletes all the profile properties that have that key", async () => {
      const beforeCount = await ProfileProperty.count({
        where: { profilePropertyRuleGuid: emailRule.guid },
      });
      expect(beforeCount).toBe(1);

      await emailRule.destroy();

      const afterCount = await ProfileProperty.count({
        where: { profilePropertyRuleGuid: emailRule.guid },
      });
      expect(afterCount).toBe(0);
    });
  });
});
