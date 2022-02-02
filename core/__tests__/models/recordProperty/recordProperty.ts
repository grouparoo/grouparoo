import { helper } from "@grouparoo/spec-helper";
import {
  Source,
  GrouparooRecord,
  RecordProperty,
  Property,
  GrouparooModel,
} from "../../../src";
import { InvalidReasons } from "../../../src/models/RecordProperty";

describe("models/recordProperty", () => {
  let model: GrouparooModel;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => {
    model = await helper.factories.model();
  });

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
    await source.bootstrapUniqueProperty({
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    record = new GrouparooRecord({ modelId: model.id });
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
      const recordProperty = new RecordProperty({
        recordId: record.id,
        propertyId: firstNameProperty.id,
      });
      await recordProperty.setValue("Mario");
      const response = await recordProperty.getValue();
      expect(response).toBe("Mario");
    });

    describe("emails", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: emailProperty.id,
        });
        await recordProperty.setValue("mario@example.com");
        const response = await recordProperty.getValue();
        expect(response).toBe("mario@example.com");
      });

      test("emails are lower cased", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: emailProperty.id,
        });
        await recordProperty.setValue("MARIO@example.com");
        const response = await recordProperty.getValue();
        expect(response).toBe("mario@example.com");
      });

      test("invalid emails set invalidValue", async () => {
        const recordProperty = new RecordProperty({
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

        for (const e of badEmails) {
          await recordProperty.setValue(e);
          const response = await recordProperty.getValue();
          expect(response).toBe(null);
          expect(recordProperty.invalidValue).toBe(e);
          expect(recordProperty.invalidReason).toBe("Invalid email value");
        }
      });

      test("very long emails are valid", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: emailProperty.id,
        });
        const value =
          "Deleted-user-id-19430-Team-5051deleted-user-id-19430-team-5051XXXXXX@example.com";
        await recordProperty.setValue(value);
        const response = await recordProperty.getValue();
        expect(response).toBe(value.toLowerCase());
      });
    });

    describe("urls", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: urlProperty.id,
        });
        await recordProperty.setValue("HTTPS://grouparoo.com/picture");
        const response = await recordProperty.getValue();
        expect(response).toBe("https://grouparoo.com/picture");
      });

      test("invalid urls set invalidValue", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: urlProperty.id,
        });

        recordProperty.setValue("not a url");
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
        expect(recordProperty.invalidValue).toBe("not a url");
        expect(recordProperty.invalidReason).toBe("Invalid url value");
      });
    });

    describe("phone numbers", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: phoneNumberProperty.id,
        });
        await recordProperty.setValue("4128889999");
        const response = await recordProperty.getValue();
        expect(response).toBe("+1 412 888 9999");
      });

      test("invalid numbers are stored", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: phoneNumberProperty.id,
        });
        await recordProperty.setValue("5");
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
        expect(recordProperty.invalidValue).toBe("5");
        expect(recordProperty.invalidReason).toBe("Invalid phoneNumber value");
      });
    });

    describe("integers", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: userIdProperty.id,
        });
        await recordProperty.setValue(123);
        const response = await recordProperty.getValue();
        expect(response).toBe(123);
      });

      test("invalid", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: userIdProperty.id,
        });
        await recordProperty.setValue("fish");
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
        expect(recordProperty.invalidValue).toBe("fish");
        expect(recordProperty.invalidReason).toBe("Invalid integer value");
      });
    });

    describe("float", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: ltvProperty.id,
        });
        await recordProperty.setValue(100.21);
        const response = await recordProperty.getValue();
        expect(response).toBe(100.21);
      });

      test("floats (invalid)", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: ltvProperty.id,
        });
        await recordProperty.setValue("foo");
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
        expect(recordProperty.invalidValue).toBe("foo");
        expect(recordProperty.invalidReason).toBe("Invalid float value");
      });
    });

    describe("dates", () => {
      test("dates (object form)", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: lastLoginProperty.id,
        });
        await recordProperty.setValue(new Date(0));
        const response = (await recordProperty.getValue()) as Date;
        expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
        expect(response.getFullYear()).toBeLessThanOrEqual(1970);
      });

      test("dates (timestamp form)", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: lastLoginProperty.id,
        });
        await recordProperty.setValue(0);
        const response = (await recordProperty.getValue()) as Date;
        expect(response.getFullYear()).toBeGreaterThanOrEqual(1969);
        expect(response.getFullYear()).toBeLessThanOrEqual(1970);
      });

      test("dates (invalid)", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: lastLoginProperty.id,
        });
        await recordProperty.setValue("mushroom");
        const response = (await recordProperty.getValue()) as Date;
        expect(response).toEqual(null);
        expect(recordProperty.invalidValue).toBe("mushroom");
        expect(recordProperty.invalidReason).toBe("Invalid date value");
      });
    });

    describe("booleans", () => {
      test("work", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: vipProperty.id,
        });
        await recordProperty.setValue(true);
        let response = await recordProperty.getValue();
        expect(response).toBe(true);

        await recordProperty.setValue("true");
        response = await recordProperty.getValue();
        expect(response).toBe(true);

        await recordProperty.setValue(1);
        response = await recordProperty.getValue();
        expect(response).toBe(true);

        await recordProperty.setValue(false);
        response = await recordProperty.getValue();
        expect(response).toBe(false);

        await recordProperty.setValue("false");
        response = await recordProperty.getValue();
        expect(response).toBe(false);

        await recordProperty.setValue(0);
        response = await recordProperty.getValue();
        expect(response).toBe(false);
      });

      test("invalid", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: vipProperty.id,
        });
        await recordProperty.setValue("hat");
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
        expect(recordProperty.invalidValue).toBe("hat");
        expect(recordProperty.invalidReason).toBe("Invalid boolean value");
      });
    });

    describe("null", () => {
      test("string rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: firstNameProperty.id,
        });
        await recordProperty.setValue(null);
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
      test("email rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: emailProperty.id,
        });
        await recordProperty.setValue(null);
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
      test("integer rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: userIdProperty.id,
        });
        await recordProperty.setValue(null);
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
      test("date rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: lastLoginProperty.id,
        });
        await recordProperty.setValue(null);
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
      test("float rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: ltvProperty.id,
        });
        await recordProperty.setValue(null);
        const response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
      test("boolean rules can be null", async () => {
        const recordProperty = new RecordProperty({
          recordId: record.id,
          propertyId: vipProperty.id,
        });
        await recordProperty.setValue(null);
        let response = await recordProperty.getValue();
        expect(response).toBe(null);
      });
    });

    test("it will not save a key that is not defined as a property", async () => {
      const recordProperty = new RecordProperty({
        recordId: record.id,
        propertyId: "abc",
      });

      await expect(recordProperty.setValue(true)).rejects.toThrow(
        /property not found for propertyId/
      );
    });
  });

  describe("uniqueness and cascade destruction", () => {
    let secondRecord: GrouparooRecord;
    beforeAll(async () => {
      emailProperty.unique = true;
      await emailProperty.save();

      await record.buildNullProperties();
      secondRecord = new GrouparooRecord({ modelId: model.id });
      await secondRecord.save();
    });

    afterAll(async () => {
      emailProperty.unique = false;
      await emailProperty.save();
    });

    test("allows the addition of another unique, non-conflicting property", async () => {
      await record.markPending();
      await secondRecord.markPending();

      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondRecord.addOrUpdateProperties({
        email: ["luigi@example.com"],
      });
    });

    test("recordProperties that violate the uniqueness rule will noted", async () => {
      await record.markPending();
      await secondRecord.markPending();

      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondRecord.addOrUpdateProperties({
        email: ["mario@example.com"],
      }); // does not throw

      const properties = await secondRecord.getProperties();
      expect(properties.email.values).toEqual([null]);
      expect(properties.email.invalidValue).toEqual("mario@example.com");
      expect(properties.email.invalidReason).toEqual(InvalidReasons.Duplicate);
      expect(properties.email.invalidReason).toEqual("Duplicate Value");
    });

    test("editing the key of a property renames all the record properties that have that key", async () => {
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });
      await secondRecord.addOrUpdateProperties({
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
      await secondRecord.addOrUpdateProperties({
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
