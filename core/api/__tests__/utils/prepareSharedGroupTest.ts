import { Profile } from "../../src/models/Profile";
import { Group } from "../../src/models/Group";
import { Run } from "../../src/models/Run";
import { Import } from "../../src/models/Import";
import { helper } from "./specHelper";
import { specHelper } from "actionhero";

let actionhero;
let run: Run;
let group: Group;
let mario: Profile;
let luigi: Profile;
let peach: Profile;
let toad: Profile;

export namespace SharedGroupTests {
  export async function afterAll(doActionheroTeardown = true) {
    if (doActionheroTeardown) await helper.shutdown(actionhero);
  }

  export async function beforeAll(doActionheroSetup = true) {
    if (doActionheroSetup) {
      const env = await helper.prepareForAPITest();
      actionhero = env.actionhero;
    }

    await Profile.destroy({ truncate: true });
    await helper.factories.profilePropertyRules();
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

    return { group, run };
  }

  export async function afterEach() {
    await specHelper.deleteEnqueuedTasks("group:run", {
      groupGuid: group.guid,
    });
    const members = await group.$get("groupMembers");
    await Promise.all(members.map((m) => m.destroy()));
    await group.destroy();
    await run.destroy();
    await Import.destroy({ truncate: true });
  }
}
