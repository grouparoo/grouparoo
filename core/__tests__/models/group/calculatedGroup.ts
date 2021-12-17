import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, config } from "actionhero";
import {
  Log,
  GrouparooRecord,
  Group,
  Run,
  Import,
  GroupMember,
} from "../../../src";
import { SharedGroupTests } from "../../utils/prepareSharedGroupTest";
import { GroupOps } from "../../../src/modules/ops/group";

describe("models/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("calculated groups", () => {
    let run: Run;
    let group: Group;
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;
    let peach: GrouparooRecord;
    let toad: GrouparooRecord;

    beforeAll(async () => {
      const response = await SharedGroupTests.beforeAll();
      mario = response.mario;
      luigi = response.luigi;
      peach = response.peach;
      toad = response.toad;
    });

    beforeEach(async () => {
      const response = await SharedGroupTests.beforeEach();
      group = response.group;
      run = await helper.factories.run();
    });

    afterEach(async () => {
      await SharedGroupTests.afterEach();
      await run.destroy();
      process.env.GROUPAROO_RUN_MODE = undefined;
    });

    test("an empty calculated group can be created", async () => {
      const members = await group.$get("groupMembers");
      expect(members.length).toBe(0);
      expect(group.state).toBe("draft");
    });

    test("setting rules outside of the dictionary will fail", async () => {
      await expect(
        group.setRules([
          { key: "firstName", match: "nobody", operation: { op: "wacky" } },
        ])
      ).rejects.toThrow(
        /invalid group rule operation "wacky" for property of type string/
      );
    });

    if (config.sequelize.dialect !== "sqlite") {
      test("setting rules that fail a SQL comparison", async () => {
        await expect(
          group.setRules([
            { key: "ltv", match: "fish", operation: { op: "gt" } },
          ])
        ).rejects.toThrow(/fish/); // the error message is dependant on the database, but should contain the column name
      });
    }

    test("changing group rules changes the state to initializing and enquires a run, and then back to ready when complete", async () => {
      await group.setRules([
        { key: "firstName", match: "nobody", operation: { op: "eq" } },
      ]);
      expect(group.state).toBe("updating");

      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id }); // first run to check additions
      await specHelper.runTask("group:run", { runId: run.id }); // second run to check subtractions
      await specHelper.runTask("group:run", { runId: run.id }); // third run to check old group members
      await specHelper.runTask("group:run", { runId: run.id }); // final run to mark complete

      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.method).toBe("complete");

      await group.reload();
      expect(group.state).toBe("ready");
    });

    test("groups with at least one rule are set to ready in config mode", async () => {
      process.env.GROUPAROO_RUN_MODE = "cli:config";
      expect(group.state).toBe("draft");
      await group.setRules([
        { key: "firstName", match: "nobody", operation: { op: "eq" } },
      ]);
      expect(group.state).toBe("ready");
    });

    test("changing the rules will stop previously running runs", async () => {
      await group.setRules([
        { key: "firstName", match: "nobody", operation: { op: "eq" } },
      ]);
      const firstRun = await Run.findOne({
        where: { creatorId: group.id },
      });
      expect(firstRun.state).toBe("running");

      await group.setRules([
        { key: "lastName", match: "nobody", operation: { op: "eq" } },
      ]);

      await firstRun.reload();
      expect(firstRun.state).toBe("stopped");
    });

    test("we can determine if group rules have been changed", async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const rules = await group.getRules();

      expect(GroupOps.rulesAreEqual(rules, [])).toBe(false);
      expect(
        GroupOps.rulesAreEqual(rules, [
          { key: "firstName", match: "Mario", operation: { op: "eq" } },
        ])
      ).toBe(true);
      expect(
        GroupOps.rulesAreEqual(rules, [
          { key: "firstName", match: "Luigi", operation: { op: "eq" } },
        ])
      ).toBe(false);
      expect(
        GroupOps.rulesAreEqual(rules, [
          { key: "LastName", match: "Mario", operation: { op: "eq" } },
        ])
      ).toBe(false);
      expect(
        GroupOps.rulesAreEqual(rules, [
          { key: "firstName", match: "Mario", operation: { op: "ne" } },
        ])
      ).toBe(false);
    });

    test("group#runAddGroupMembers will create an import for new members, and touch the updatedAt for existing members", async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const response = await group.runAddGroupMembers(run);
      expect(response).toEqual(
        expect.objectContaining({
          groupMembersCount: 1,
          nextOffset: 0,
        })
      );

      // first time
      const _import = await Import.findOne({
        where: { creatorId: run.id },
      });
      expect(_import.recordId).toBe(mario.id);

      // create the groupMember
      await mario.updateGroupMembership();
      const groupMember = await GroupMember.findOne({
        where: { groupId: group.id, recordId: mario.id },
      });
      const firstTime = groupMember.updatedAt.getTime();

      await helper.sleep(1001);

      // second time
      await mario.reload();
      await mario.update({ state: "ready" }); // the import would have made the state 'pending'
      await group.runAddGroupMembers(run);
      await groupMember.reload();
      expect(groupMember.updatedAt.getTime()).toBeGreaterThan(
        groupMember.createdAt.getTime()
      );
      expect(groupMember.updatedAt.getTime()).toBeGreaterThan(firstTime);
    });

    test("group#runAddGroupMembers will include ready records", async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);

      await group.runAddGroupMembers(run);

      const _import = await Import.findOne({
        where: { creatorId: run.id },
      });
      expect(_import.recordId).toBe(mario.id);
    });

    test("group#runAddGroupMembers will ignore not-ready records", async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);

      await mario.update({ state: "pending" });
      await group.runAddGroupMembers(run);

      const _import = await Import.findOne({
        where: { creatorId: run.id },
      });
      expect(_import).toBe(null);
    });

    test("group#runRemoveGroupMembers will create imports for records which should no longer be part of the group and mark removedAt on the group member", async () => {
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } }, // mario and luigi
      ]);
      const firstAddResponse = await group.runAddGroupMembers(run);
      const firstRemoveResponse = await group.runRemoveGroupMembers(run);
      expect(firstAddResponse).toEqual(
        expect.objectContaining({
          groupMembersCount: 2,
          nextOffset: 0,
        })
      );
      expect(firstRemoveResponse).toEqual(0);

      // create the groupMembers
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      const firstGroupMembers = await GroupMember.findAll({
        where: { groupId: group.id },
      });
      expect(firstGroupMembers.length).toBe(2);

      await mario.reload();
      await luigi.reload();
      await mario.update({ state: "ready" });
      await luigi.update({ state: "ready" });

      // next run
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } }, // just mario
      ]);
      const nextRun = await helper.factories.run();
      const secondAddResponse = await group.runAddGroupMembers(nextRun);
      const secondRemoveResponse = await group.runRemoveGroupMembers(nextRun);
      expect(secondAddResponse).toEqual(
        expect.objectContaining({
          groupMembersCount: 1,
          nextOffset: 0,
        })
      );
      expect(secondRemoveResponse).toEqual(1);

      const imports = await Import.findAll({
        where: { creatorId: nextRun.id },
      });
      expect(imports.length).toBe(1);
      expect(imports[0].recordId).toBe(luigi.id);

      const luigiGroupMember = await GroupMember.findOne({
        where: { recordId: luigi.id, groupId: group.id },
      });
      expect(luigiGroupMember.removedAt).toBeTruthy();

      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();

      const secondGroupMembers = await GroupMember.findAll({
        where: { groupId: group.id },
      });
      expect(secondGroupMembers.length).toBe(1);

      await nextRun.destroy();
    });

    test("runAddGroupMembers updates calculatedAt", async () => {
      expect(group.calculatedAt).toBeFalsy();
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runAddGroupMembers(run);
      expect(group.calculatedAt).toBeTruthy();
    });

    test("runRemoveGroupMembers updates calculatedAt", async () => {
      expect(group.calculatedAt).toBeFalsy();
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runRemoveGroupMembers(run);
      expect(group.calculatedAt).toBeTruthy();
    });

    describe("group#nextCalculatedAt", () => {
      test("returns for a group with relative rules ", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            operation: { op: "gt" },
            relativeMatchDirection: "subtract",
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ]);

        expect(group.calculatedAt).toBeFalsy();
        expect((await group.nextCalculatedAt()).getTime() / 1000).toBeCloseTo(
          new Date().getTime() / 1000
        );
        await group.runAddGroupMembers(run);
        expect((await group.nextCalculatedAt()).getTime()).toBeGreaterThan(
          new Date().getTime()
        );
      });

      test("does not return for calculated groups without relative rules", async () => {
        await group.setRules([
          {
            key: "ltv",
            operation: { op: "gt" },
            match: "3",
          },
        ]);
        expect(await group.nextCalculatedAt()).toBeNull();
      });

      test("does not return for manual groups", async () => {
        await group.setRules([]);
        await group.update({ type: "manual" });
        expect(await group.nextCalculatedAt()).toBeNull();
      });
    });

    test("runUpdateMembers with a destination will create imports for all members and include a destinationId in _meta", async () => {
      await group.update({ type: "manual", state: "ready" });
      await group.addRecord(mario);
      await group.addRecord(luigi);

      let imports = await Import.findAll();
      expect(imports.length).toBe(2);
      await Import.truncate();

      const run = await group.run("abc123");
      await specHelper.runTask("group:run", { runId: run.id });

      imports = await Import.findAll();
      expect(imports.map((i) => i.recordId).sort()).toEqual(
        [mario, luigi].map((p) => p.id).sort()
      );

      const data = { _meta: { destinationId: "abc123" } };
      expect(imports[0].data).toEqual(data);
      expect(imports[0].rawData).toEqual(data);
      expect(imports[1].data).toEqual(data);
      expect(imports[1].rawData).toEqual(data);
    });

    test("group rules must have a related recordProperty Ryle", async () => {
      await expect(
        group.setRules([{ key: "a", match: "cool", operation: { op: "eq" } }])
      ).rejects.toThrow(/cannot find property a/);
    });

    test("recalculating group membership will reuse existing groupMembers", async () => {
      await group.update({ matchType: "all" });
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runAddGroupMembers(run);
      await mario.updateGroupMembership();
      const members = await group.$get("groupMembers");
      expect(members.length).toBe(1);
      const groupMemberId = members[0].id;

      const secondRun = await helper.factories.run();
      await group.runAddGroupMembers(secondRun);
      await mario.updateGroupMembership();
      const membersAgain = await group.$get("groupMembers");
      expect(membersAgain[0].id).toBe(groupMemberId);
      await secondRun.destroy();
    });

    test("adding and removing members from a calculated group produces log entries", async () => {
      await Log.truncate();

      await group.update({ matchType: "all" });
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
      ]);
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      let members = await group.$get("groupMembers");
      expect(members.length).toBe(2);

      let createCount = await Log.count({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(createCount).toBe(2);

      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const secondRun = await helper.factories.run();
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      members = await group.$get("groupMembers");
      expect(members.length).toBe(1);

      createCount = await Log.count({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(createCount).toBe(2); // no change

      const destroyCount = await Log.count({
        where: { topic: "groupMember", verb: "destroy" },
      });
      expect(destroyCount).toBe(1);

      await secondRun.destroy();
    });

    test("calculating a group with more than 10 rules produces an error", async () => {
      group.matchType = "all";
      await expect(
        group.setRules([
          { key: "userId", match: "Mario", operation: { op: "eq" } },
          { key: "lastName", match: "Mario", operation: { op: "eq" } },
          { key: "firstName", match: "Mario", operation: { op: "eq" } },
          { key: "email", match: "Mario", operation: { op: "eq" } },
          { key: "isVIP", match: "Mario", operation: { op: "eq" } },
          { key: "ltv", match: "0", operation: { op: "eq" } },
          { key: "ltv", match: "1", operation: { op: "eq" } },
          { key: "ltv", match: "2", operation: { op: "eq" } },
          { key: "ltv", match: "3", operation: { op: "eq" } },
          { key: "ltv", match: "4", operation: { op: "eq" } },
          { key: "ltv", match: "5", operation: { op: "eq" } },
        ])
      ).rejects.toThrow(/too many group rules/);
    });

    describe("group rules", () => {
      test("it returns 0 members when no rules exist on the group", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);
        expect(await group.countPotentialMembers()).toBe(0);
      });
    });

    describe("convenientRules", () => {
      describe("fromConvenientRules", () => {
        test("exists", async () => {
          const convenientRules = [
            { key: "email", operation: { op: "exists" } },
          ];
          const rules = [
            { key: "email", match: "null", operation: { op: "ne" } },
          ];

          expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
        });

        test("notExists", async () => {
          const convenientRules = [
            { key: "email", operation: { op: "notExists" } },
          ];
          const rules = [
            { key: "email", match: "null", operation: { op: "eq" } },
          ];

          expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
        });

        test("relative_gt", async () => {
          const convenientRules = [
            {
              key: "lastLoginAt",
              operation: { op: "relative_gt" },
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];
          const rules = [
            {
              key: "lastLoginAt",
              operation: { op: "gt" },
              relativeMatchDirection: "subtract",
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];

          expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
        });

        test("relative_lt", async () => {
          const convenientRules = [
            {
              key: "lastLoginAt",
              operation: { op: "relative_lt" },
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];
          const rules = [
            {
              key: "lastLoginAt",
              operation: { op: "lt" },
              relativeMatchDirection: "add",
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];

          expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
        });
      });

      describe("toConvenientRules", () => {
        test("exists", async () => {
          const convenientRules = [
            { type: "email", key: "email", operation: { op: "exists" } },
          ];
          const rules = [
            {
              type: "email",
              key: "email",
              match: "null",
              operation: { op: "ne" },
            },
          ];

          expect(group.toConvenientRules(rules)).toEqual(convenientRules);
        });

        test("notExists", async () => {
          const convenientRules = [
            { type: "email", key: "email", operation: { op: "notExists" } },
          ];
          const rules = [
            {
              type: "email",
              key: "email",
              match: "null",
              operation: { op: "eq" },
            },
          ];

          expect(group.toConvenientRules(rules)).toEqual(convenientRules);
        });

        test("relative_gt", async () => {
          const convenientRules = [
            {
              type: "date",
              key: "lastLoginAt",
              operation: { op: "relative_gt", description: "is in the past" },
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];
          const rules = [
            {
              type: "date",
              key: "lastLoginAt",
              operation: { op: "gt" },
              relativeMatchDirection: "subtract",
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];

          expect(group.toConvenientRules(rules)).toEqual(convenientRules);
        });

        test("relative_lt", async () => {
          const convenientRules = [
            {
              type: "date",
              key: "lastLoginAt",
              operation: { op: "relative_lt", description: "is in the future" },
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];
          const rules = [
            {
              type: "date",
              key: "lastLoginAt",
              operation: { op: "lt" },
              relativeMatchDirection: "add",
              relativeMatchNumber: 1,
              relativeMatchUnit: "days",
            },
          ];

          expect(group.toConvenientRules(rules)).toEqual(convenientRules);
        });
      });

      test("convenientRules work with rulesAreEqual", async () => {
        await group.setRules(
          group.fromConvenientRules([
            { key: "firstName", operation: { op: "exists" } },
          ])
        );
        const rules = await group.getRules();

        expect(
          GroupOps.rulesAreEqual(rules, [
            {
              key: "firstName",
              operation: { op: "ne" },
              match: "null",
            },
          ])
        ).toBe(true);
      });
    });

    describe("#updateProfilesMembership", () => {
      describe("manual group", () => {
        test("manual groups leave memberships where they are", async () => {
          await group.update({ type: "manual" });
          await group.addRecord(mario);

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);

          let belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: true });

          belongs = await group.updateRecordsMembership([luigi]);
          expect(belongs).toEqual({ [luigi.id]: false });
        });

        test("manual groups will remove members if the group is deleted", async () => {
          await group.update({ type: "manual", state: "deleted" });
          await group.addRecord(mario);

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);

          let belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: false });

          belongs = await group.updateRecordsMembership([luigi]);
          expect(belongs).toEqual({ [luigi.id]: false });

          members = await group.$get("groupMembers");
          expect(members.length).toBe(0);
        });
      });

      describe("calculated group", () => {
        test("groups with no rules will not have members added", async () => {
          await group.setRules([]);
          const belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: false });
        });

        test("it will add a record not yet in the group", async () => {
          let members = await group.$get("groupMembers");
          expect(members.length).toBe(0);

          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          const belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: true });

          members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].recordId).toBe(mario.id);
        });

        test("it works with multiple records", async () => {
          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          const belongs = await group.updateRecordsMembership([mario, luigi]);
          expect(belongs).toEqual({ [mario.id]: true, [luigi.id]: false });
        });

        test("it will leave a group member in the group", async () => {
          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          const belongsA = await group.updateRecordsMembership([mario]);
          expect(belongsA).toEqual({ [mario.id]: true });

          const belongsB = await group.updateRecordsMembership([mario]);
          expect(belongsB).toEqual({ [mario.id]: true });

          const members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].recordId).toBe(mario.id);
        });

        test("it will remove a record from the group", async () => {
          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          let belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: true });

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].recordId).toBe(mario.id);

          await group.setRules([
            { key: "lastName", match: "Lakitu", operation: { op: "eq" } },
          ]);

          belongs = await group.updateRecordsMembership([mario]);
          expect(belongs).toEqual({ [mario.id]: false });

          members = await group.$get("groupMembers");
          expect(members.length).toBe(0);
        });
      });
    });

    describe("#countPotentialMembers", () => {
      test("it will count the records which would become members at the next run by default", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        const count = await group.countPotentialMembers();
        expect(count).toBe(3);
      });

      test("it can return a count of records which would match an arbitrary rule set", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);
        const rules = [
          {
            key: "lastLoginAt",
            match: new Date(100000).getTime(),
            operation: { op: "gte" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ];
        const count = await group.countPotentialMembers(rules);
        expect(count).toBe(1);
      });
    });

    describe("#countComponentMembersFromRules", () => {
      test("we can count the membership subtotals for each part of the group rule", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);

        const rules = [
          {
            key: "firstName",
            match: "%",
            operation: { op: "like" },
          },
          {
            key: "lastLoginAt",
            match: new Date(100000).getTime(),
            operation: { op: "gte" },
          },
          {
            key: "lastName",
            match: "Mario",
            operation: { op: "like" },
          },
        ];

        const count = await group.countPotentialMembers(rules);
        expect(count).toBe(1);

        const { componentCounts, funnelCounts } =
          await group.countComponentMembersFromRules(rules);

        // if we just had the rule `firstName: { match: "%", op: "iLike" },` there would be 4 group members
        // if we just had the rule `lastLoginAt: { match: new Date(100000).getTime(), op: "gte" }` there would be 2 group members
        // if we just had the rule `lastName: { match: "mario", op: "iLike" }` there would be 2 group members
        expect(componentCounts).toEqual([4, 2, 2]);

        // checking just the first rule (`firstName`) there would have been 2 group members
        // checking the first & second rule (`firstName` + `lastLoginAt`) there would have been 2 group members
        // checking all 3 rules (`firstName` + `lastLoginAt` + `lastLoginAt`), there would have been 1 group member
        expect(funnelCounts).toEqual([4, 2, 1]);
      });
    });
  });
});
