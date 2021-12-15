import { helper } from "@grouparoo/spec-helper";
import { group } from "console";
import {
  GrouparooModel,
  App,
  GroupMember,
  Source,
  Property,
  GrouparooRecord,
  Group,
  Destination,
} from "../../src";

describe("multiple models", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => helper.factories.properties());

  let model: GrouparooModel;
  let source: Source;
  let adminUserId: Property;
  let adminEmail: Property;
  let adminRecord: GrouparooRecord;
  let profileRecord: GrouparooRecord;
  let profileGroup: Group;
  let adminGroup: Group;
  let adminDestination: Destination;

  test("a new model can be created", async () => {
    model = await GrouparooModel.create({
      type: "profile",
      name: "admin-users",
      id: "admin-users",
    });
  });

  test("a source can use the new model", async () => {
    const app = await App.findOne();
    source = await helper.factories.source(app, { modelId: model.id });
    await source.setOptions({ table: "admin-users" });
    await source.bootstrapUniqueProperty(
      "adminUserId",
      "integer",
      "id",
      "adminUserId"
    );
    await source.setMapping({ id: "adminUserId" });
    await source.update({ state: "ready" });

    adminUserId = await Property.findOne({ where: { key: "adminUserId" } });
  });

  test("sources cannot map to properties of other models", async () => {
    await expect(source.setMapping({ id: "userId" })).rejects.toThrow(
      /cannot map/
    );
  });

  test("a new property can be added", async () => {
    adminEmail = await Property.create({
      key: "adminEmailAddress",
      sourceId: source.id,
      type: "string",
      unique: false,
      array: false,
    });
    await adminEmail.setOptions({ column: "email" });
    await adminEmail.update({ state: "ready" });
  });

  test("records gain properties related to the model they are part of", async () => {
    profileRecord = await GrouparooRecord.create({
      modelId: "mod_profiles",
    });
    adminRecord = await GrouparooRecord.create({ modelId: model.id });

    await profileRecord.buildNullProperties();
    await adminRecord.buildNullProperties();

    expect(Object.keys(await profileRecord.getProperties()).sort()).toEqual([
      "email",
      "firstName",
      "isVIP",
      "lastLoginAt",
      "lastName",
      "ltv",
      "purchaseAmounts",
      "purchases",
      "userId",
    ]);
    expect(Object.keys(await adminRecord.getProperties()).sort()).toEqual([
      "adminEmailAddress",
      "adminUserId",
    ]);

    await profileRecord.import();
    await adminRecord.import();
  });

  test("group members only collect records of matching modelIds", async () => {
    profileGroup = await Group.create({
      type: "calculated",
      name: "profileGroup",
      modelId: "mod_profiles",
      state: "ready",
    });
    adminGroup = await Group.create({
      type: "calculated",
      name: "adminGroup",
      modelId: model.id,
      state: "ready",
    });

    await profileGroup.setRules([
      { key: "userId", match: "null", operation: { op: "ne" } },
    ]);
    await adminGroup.setRules([
      { key: "adminUserId", match: "null", operation: { op: "ne" } },
    ]);

    await profileGroup.updateRecordsMembership([profileRecord]);
    await adminGroup.updateRecordsMembership([adminRecord]);

    const profileGroupMembers = await profileGroup.$get("groupMembers");
    const adminGroupMembers = await adminGroup.$get("groupMembers");

    expect(profileGroupMembers.length).toEqual(1);
    expect(adminGroupMembers.length).toEqual(1);
  });

  test("groups can only have rules set which are of the same model", async () => {
    await expect(
      adminGroup.setRules([
        { key: "userId", match: "null", operation: { op: "ne" } },
      ])
    ).rejects.toThrow(/does not belong/);
    await expect(
      profileGroup.setRules([
        { key: "adminUserId", match: "null", operation: { op: "ne" } },
      ])
    ).rejects.toThrow(/does not belong/);
  });

  test("groups can only have members added from the same model", async () => {
    const newProfileGroup = await Group.create({
      name: "manualProfileGroup",
      modelId: "mod_profiles",
      state: "ready",
    });

    await expect(
      GroupMember.create({
        recordId: adminRecord.id,
        groupId: newProfileGroup.id,
      })
    ).rejects.toThrow(/do not match/);

    await newProfileGroup.destroy();
  });

  test("destinations can be created for a model", async () => {
    adminDestination = await helper.factories.destination(null, {
      modelId: model.id,
    });
    await adminDestination.update({ state: "ready" });
  });

  test("destinations can only track groups of the same model", async () => {
    await expect(
      adminDestination.updateTracking("group", profileGroup.id)
    ).rejects.toThrow(/do not share the same modelId/);

    await adminDestination.updateTracking("group", adminGroup.id);
  });

  test("destination options only use properties of the same model", async () => {
    await expect(
      adminDestination.setMapping({ "primary-id": "userId" })
    ).rejects.toThrow(/cannot map/);

    adminDestination.setMapping({ "primary-id": "adminUserId" });
  });
});
