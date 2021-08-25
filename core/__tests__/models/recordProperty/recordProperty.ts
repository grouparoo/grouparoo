import { helper } from "@grouparoo/spec-helper";
import {
  Log,
  Source,
  GrouparooRecord,
  RecordProperty,
  Property,
} from "../../../src";

describe("models/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let source: Source;
  let record: GrouparooRecord;
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

    record = new GrouparooRecord();
    await record.save();

    userIdProperty = await Property.findOne({
      where: { key: "userId" },
    });

    firstNameProperty = await Property.create({
      sourceId: source.id,
      key: "firstName",
      type: "string",
    });
    await firstNameProperty.setOptions({ column: "firstName" });
    await firstNameProperty.update({ state: "ready" });

    emailProperty = await Property.create({
      sourceId: source.id,
      key: "email",
      type: "email",
    });
    await emailProperty.setOptions({ column: "email" });
    await emailProperty.update({ state: "ready" });

    urlProperty = await Property.create({
      sourceId: source.id,
      key: "url",
      type: "url",
    });
    await urlProperty.setOptions({ column: "url" });
    await urlProperty.update({ state: "ready" });

    phoneNumberProperty = await Property.create({
      sourceId: source.id,
      key: "phoneNumber",
      type: "phoneNumber",
    });
    await phoneNumberProperty.setOptions({ column: "phoneNumber" });
    await phoneNumberProperty.update({ state: "ready" });

    lastLoginProperty = await Property.create({
      sourceId: source.id,
      key: "lastLoginAt",
      type: "date",
    });
    await lastLoginProperty.setOptions({ column: "lastLoginAt" });
    await lastLoginProperty.update({ state: "ready" });

    ltvProperty = await Property.create({
      sourceId: source.id,
      key: "ltv",
      type: "float",
    });
    await ltvProperty.setOptions({ column: "ltv" });
    await ltvProperty.update({ state: "ready" });

    vipProperty = await Property.create({
      sourceId: source.id,
      key: "isVIP",
      type: "boolean",
    });
    await vipProperty.setOptions({ column: "isVIP" });
    await vipProperty.update({ state: "ready" });
  });

  test("creating, editing, and deleting a record property creates a relevant log message", async () => {
    const property = await RecordProperty.create({
      recordId: record.id,
      propertyId: ltvProperty.id,
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
        sourceId: source.id,
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

    test("by default record properties have a position of 0", async () => {
      const property = await RecordProperty.create({
        recordId: record.id,
        propertyId: purchasesProperty.id,
        rawValue: "hat",
      });
      expect(property.position).toBe(0);
      await property.destroy();
    });

    test("multiple values can be set with different positions", async () => {
      const propertyA = await RecordProperty.create({
        recordId: record.id,
        propertyId: purchasesProperty.id,
        rawValue: "hat",
        position: 1,
      });
      const propertyB = await RecordProperty.create({
        recordId: record.id,
        propertyId: purchasesProperty.id,
        rawValue: "shoe",
        position: 0,
      });
      expect(propertyA.position).toBe(1);
      expect(propertyB.position).toBe(0);
      await propertyA.destroy();
      await propertyB.destroy();
    });

    test("multiple values cannot re-use the same position", async () => {
      const property = await RecordProperty.create({
        recordId: record.id,
        propertyId: purchasesProperty.id,
        rawValue: "hat",
      });

      await expect(
        RecordProperty.create({
          recordId: record.id,
          propertyId: purchasesProperty.id,
          rawValue: "hat",
        })
      ).rejects.toThrow(/Validation error/);

      await property.destroy();
    });
  });

  describe("type coercion", () => {
    test("strings", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: firstNameProperty.id,
      });
      await profileProperty.setValue("Mario");
      const response = await profileProperty.getValue();
      expect(response).toBe("Mario");
    });

    test("emails", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: emailProperty.id,
      });
      await profileProperty.setValue("mario@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("emails are lower cased", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: emailProperty.id,
      });
      await profileProperty.setValue("MARIO@example.com");
      const response = await profileProperty.getValue();
      expect(response).toBe("mario@example.com");
    });

    test("invalid emails throw an error", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: emailProperty.id,
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
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: emailProperty.id,
      });
      const value =
        "Deleted-user-id-19430-Team-5051deleted-user-id-19430-team-5051XXXXXX@example.com";
      await profileProperty.setValue(value);
      const response = await profileProperty.getValue();
      expect(response).toBe(value.toLowerCase());
    });

    test("urls", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: urlProperty.id,
      });
      await profileProperty.setValue("HTTPS://grouparoo.com/picture");
      const response = await profileProperty.getValue();
      expect(response).toBe("https://grouparoo.com/picture");
    });

    test("invalid urls throw an error", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: urlProperty.id,
      });
      await expect(profileProperty.setValue("not a url")).rejects.toThrowError(
        /url .* is not valid/
      );
    });

    test("phone numbers", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: phoneNumberProperty.id,
      });
      await profileProperty.setValue("4128889999");
      const response = await profileProperty.getValue();
      expect(response).toBe("+1 412 888 9999");
    });

    test("phone numbers with another country code", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: phoneNumberProperty.id,
      });
      await profileProperty.setValue("+42 123 123 1231");
      const response = await profileProperty.getValue();
      expect(response).toBe("+421 2 312 312 31");
    });

    test("phone numbers which we cannot parse throw an error", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: phoneNumberProperty.id,
      });
      await expect(profileProperty.setValue("1-800-got-milk")).rejects.toThrow(
        /phone number .* is not valid/
      );
    });

    test("integers", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: userIdProperty.id,
      });
      await profileProperty.setValue(123);
      const response = await profileProperty.getValue();
      expect(response).toBe(123);
    });

    test("dates (object form)", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: lastLoginProperty.id,
      });
      await profileProperty.setValue(new Date(0));
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("dates (timestamp form)", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: lastLoginProperty.id,
      });
      await profileProperty.setValue(0);
      const response = (await profileProperty.getValue()) as Date;
      expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
      expect(response.getFullYear()).toBeLessThanOrEqual(1970);
    });

    test("floats", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: ltvProperty.id,
      });
      await profileProperty.setValue(100.21);
      const response = await profileProperty.getValue();
      expect(response).toBe(100.21);
    });

    test("booleans", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: vipProperty.id,
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
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: firstNameProperty.id,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("email rules can be null", async () => {
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: emailProperty.id,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("integer rules can be null", async () => {
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: userIdProperty.id,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("date rules can be null", async () => {
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: lastLoginProperty.id,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("float rules can be null", async () => {
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: ltvProperty.id,
        });
        await profileProperty.setValue(null);
        const response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
      test("boolean rules can be null", async () => {
        const profileProperty = new RecordProperty({
          recordId: record.id,
          propertyId: vipProperty.id,
        });
        await profileProperty.setValue(null);
        let response = await profileProperty.getValue();
        expect(response).toBe(null);
      });
    });

    test("it will not save a key that is not defined as a property", async () => {
      const profileProperty = new RecordProperty({
        recordId: record.id,
        propertyId: "abc",
      });

      await expect(profileProperty.setValue(true)).rejects.toThrow(
        /property not found for propertyId/
      );
    });
  });

  describe("uniqueness and cascade destruction", () => {
    let secondProfile;
    beforeAll(async () => {
      emailProperty.unique = true;
      await emailProperty.save();

      await record.buildNullProperties();
      secondProfile = new GrouparooRecord();
      await secondProfile.save();
    });

    afterAll(async () => {
      emailProperty.unique = false;
      await emailProperty.save();
    });

    test("allows the addition of another unique, non-conflicting property", async () => {
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });
    });

    test("blocks the addition of another unique property", async () => {
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await expect(
        secondProfile.addOrUpdateProperties({
          email: ["mario@example.com"],
        })
      ).rejects.toThrow(/Validation error/);
    });

    test("editing the key of a property renames all the record properties that have that key", async () => {
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });

      const beforeCount = await RecordProperty.count({
        where: { propertyId: emailProperty.id },
      });
      expect(beforeCount).toBe(2);

      emailProperty.key = "EMAIL!";
      await emailProperty.save();

      const afterCount = await RecordProperty.count({
        where: { propertyId: emailProperty.id },
      });
      expect(afterCount).toBe(2);

      const property = await RecordProperty.findOne({
        where: { propertyId: emailProperty.id },
      });
      const apiData = await property.apiData();
      expect(apiData.key).toBe("EMAIL!");

      emailProperty.key = "email";
      await emailProperty.save();
    });

    test("deleting a property deletes all the record properties that have that key", async () => {
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondProfile.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });

      const beforeCount = await RecordProperty.count({
        where: { propertyId: emailProperty.id },
      });
      expect(beforeCount).toBe(2);

      await emailProperty.destroy();

      const afterCount = await RecordProperty.count({
        where: { propertyId: emailProperty.id },
      });
      expect(afterCount).toBe(0);
    });
  });
});
