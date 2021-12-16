import { helper } from "@grouparoo/spec-helper";
import { GrouparooRecord, Group, Run, Import, RecordProperty } from "../../src";
import { specHelper } from "actionhero";

export namespace SharedGroupTests {
  let group: Group;
  let mario: GrouparooRecord;
  let luigi: GrouparooRecord;
  let peach: GrouparooRecord;
  let toad: GrouparooRecord;

  export async function beforeAll() {
    await GrouparooRecord.truncate();
    await helper.factories.properties();
    helper.disableTestPluginImport();

    mario = await GrouparooRecord.create({ modelId: "mod_profiles" });
    luigi = await GrouparooRecord.create({ modelId: "mod_profiles" });
    peach = await GrouparooRecord.create({ modelId: "mod_profiles" });
    toad = await GrouparooRecord.create({ modelId: "mod_profiles" });

    await mario.addOrUpdateProperties({
      userId: [1],
      firstName: ["Mario"],
      lastName: ["Mario"],
      email: ["mario@example.com"],
      ltv: [100.0],
      isVIP: [true],
      lastLoginAt: [new Date(0)],
      purchases: ["mushroom", "star"],
      purchaseAmounts: [50, 50],
    });

    await luigi.addOrUpdateProperties({
      userId: [2],
      firstName: ["Luigi"],
      lastName: ["Mario"],
      email: ["luigi@example.com"],
      ltv: [50.01],
      isVIP: [false],
      lastLoginAt: [new Date()],
      purchases: ["mushroom"],
      purchaseAmounts: [50.01],
    });

    await peach.addOrUpdateProperties({
      userId: [3],
      firstName: ["Peach"],
      lastName: ["Toadstool"],
      email: ["peach@example.com"],
      ltv: [999.99],
      isVIP: [true],
      lastLoginAt: [new Date(0)],
      purchases: ["parasol"],
      purchaseAmounts: [999.99],
    });

    await toad.addOrUpdateProperties({
      userId: [4],
      firstName: ["Toad"],
      lastName: ["Toadstool"],
      email: ["toad@example.com"],
      ltv: [0],
      isVIP: [false],
      lastLoginAt: [new Date()],
      purchases: [],
      purchaseAmounts: [],
    });

    await mario.buildNullProperties();
    await luigi.buildNullProperties();
    await peach.buildNullProperties();
    await toad.buildNullProperties();

    return { mario, luigi, peach, toad };
  }

  export async function beforeEach() {
    group = await Group.create({
      name: "test calculated group",
      modelId: "mod_profiles",
      rules: {},
    });

    await group.update({ matchType: "all" });

    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: [mario.id, luigi.id, peach.id, toad.id] } }
    );

    await mario.update({ state: "ready" });
    await luigi.update({ state: "ready" });
    await peach.update({ state: "ready" });
    await toad.update({ state: "ready" });

    return { group };
  }

  export async function afterEach() {
    await specHelper.deleteEnqueuedTasks("group:run", {
      groupId: group.id,
    });
    const members = await group.$get("groupMembers");
    for (const m of members) await m.destroy();
    await group.destroy();
    await Import.truncate();
  }
}
