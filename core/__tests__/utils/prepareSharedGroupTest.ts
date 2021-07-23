import { helper } from "@grouparoo/spec-helper";
import { Profile, Group, Run, Import, ProfileProperty } from "../../src";
import { specHelper } from "actionhero";

export namespace SharedGroupTests {
  let actionhero;
  let run: Run;
  let group: Group;
  let mario: Profile;
  let luigi: Profile;
  let peach: Profile;
  let toad: Profile;

  export async function beforeAll() {
    await Profile.truncate();
    await helper.factories.properties();
    helper.disableTestPluginImport();

    mario = await Profile.create();
    luigi = await Profile.create();
    peach = await Profile.create();
    toad = await Profile.create();

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
      type: "calculated",
      rules: {},
    });

    await group.update({ matchType: "all" });

    run = await helper.factories.run();

    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: [mario.id, luigi.id, peach.id, toad.id] } }
    );

    await mario.update({ state: "ready" });
    await luigi.update({ state: "ready" });
    await peach.update({ state: "ready" });
    await toad.update({ state: "ready" });

    return { group, run };
  }

  export async function afterEach() {
    await specHelper.deleteEnqueuedTasks("group:run", {
      groupId: group.id,
    });
    const members = await group.$get("groupMembers");
    for (const m of members) await m.destroy();
    await group.destroy();
    await run.destroy();
    await Import.truncate();
  }
}
