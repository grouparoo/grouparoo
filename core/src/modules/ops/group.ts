import Sequelize, { Op } from "sequelize";
import { Group, GroupRuleWithKey } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Run } from "../../models/Run";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordMultipleAssociationShim } from "../../models/RecordMultipleAssociationShim";
import { Import } from "../../models/Import";
import { RecordOps } from "./record";

export namespace GroupOps {
  /**
   * Given a GrouparooRecord, create an import to recalculate its Group Membership.
   */
  export async function updateRecords(
    recordIds: string[],
    creatorType: string,
    creatorId: string,
    destinationId?: string
  ) {
    const bulkData = [];
    for (const recordId of recordIds) {
      bulkData.push({
        rawData: destinationId ? { _meta: { destinationId } } : {},
        data: destinationId ? { _meta: { destinationId } } : {},
        creatorType,
        creatorId,
        recordId,
        recordAssociatedAt: new Date(),
        oldRecordProperties: {},
        oldGroupIds: [],
      });
    }

    const _imports = await Import.bulkCreate(bulkData);

    await RecordOps.markPendingByIds(recordIds, false);

    return _imports;
  }

  /**
   * Check if the record should be in this Group
   */
  export async function updateRecordsMembership(
    group: Group,
    records: GrouparooRecord[]
  ) {
    const response: { [recordId: string]: boolean } = {};
    records.forEach((p) => (response[p.id] = false));
    const existingMemberships = await GroupMember.findAll({
      where: {
        groupId: group.id,
        recordId: { [Op.in]: records.map((p) => p.id) },
      },
    });

    const rules = await group.getRules();

    if (Object.keys(rules).length == 0) {
      await GroupMember.destroy({
        where: { id: { [Op.in]: existingMemberships.map((gm) => gm.id) } },
      });
      return response;
    } else {
      const { where, include } = await group._buildGroupMemberQueryParts(
        rules,
        group.matchType
      );

      // and includes this record
      if (!where[Op.and]) where[Op.and] = [];
      where[Op.and].push({ id: { [Op.in]: records.map((p) => p.id) } });

      const matchedRecords = await RecordMultipleAssociationShim.findAll({
        attributes: ["id"],
        where,
        include,
      });

      const bulkCreateRecordIds: string[] = [];
      const bulkDestroyRecordIds: string[] = [];
      for (const record of records) {
        const belongs = matchedRecords.find((p) => p.id === record.id)
          ? true
          : false;
        response[record.id] = belongs;
        const existingMembership = existingMemberships.find(
          (gm) => gm.recordId === record.id
        );

        if (belongs && !existingMembership) {
          bulkCreateRecordIds.push(record.id);
        }
        if (!belongs && existingMembership) {
          bulkDestroyRecordIds.push(record.id);
        }
      }

      if (bulkCreateRecordIds.length > 0) {
        await GroupMember.bulkCreate(
          bulkCreateRecordIds.map((recordId) => {
            return { recordId, groupId: group.id };
          })
        );
      }

      if (bulkDestroyRecordIds.length > 0) {
        await GroupMember.destroyWithLogs({
          where: {
            recordId: { [Op.in]: bulkDestroyRecordIds },
            groupId: group.id,
          },
        });
      }

      return response;
    }
  }

  /**
   * Count the members that would be in this group
   */
  export async function countPotentialMembers(
    group: Group,
    rules?: GroupRuleWithKey[],
    matchType: "any" | "all" = group.matchType
  ) {
    if (!rules) rules = await group.getRules();

    const { where, include } = await group._buildGroupMemberQueryParts(
      rules,
      matchType
    );

    // we use RecordMultipleAssociationShim as a shim model which has extra associations
    return RecordMultipleAssociationShim.count({
      distinct: true,
      where,
      include,
    });
  }

  /**
   * Take the rules for the group and check how many group members there would have been both individually for each single rule, and then by building up the query step-by-step
   */
  export async function countComponentMembersFromRules(
    group: Group,
    rules?: GroupRuleWithKey[]
  ) {
    const componentCounts: number[] = [];
    const funnelCounts: number[] = [];
    let funnelStep = 0;

    if (!rules) rules = await group.getRules();

    for (const i in rules) {
      const localRule = rules[i];
      componentCounts[i] = await group.countPotentialMembers([localRule]);

      const funnelRules = [];
      let j = 0;
      while (j <= funnelStep) {
        funnelRules.push(rules[j]);
        j++;
      }
      funnelCounts[funnelStep] = await group.countPotentialMembers(funnelRules);
      funnelStep++;
    }

    return { componentCounts, funnelCounts };
  }

  /**
   * Part 1 of the Group Run
   * Add New Members
   */
  export async function runAddGroupMembers(
    group: Group,
    run: Run,
    limit = 1000,
    offset = 0,
    highWaterMark: number = null,
    destinationId?: string
  ) {
    let records: RecordMultipleAssociationShim[];
    const rules = await group.getRules();

    // if there are no group rules, there's nothing to do
    if (Object.keys(rules).length === 0) {
      return { groupMembersCount: 0, nextHighWaterMark: 0, nextOffset: 0 };
    }

    const { where, include } = await group._buildGroupMemberQueryParts(
      rules,
      group.matchType,
      "ready"
    );

    where["createdAt"] = { [Op.and]: [{ [Op.lt]: run.createdAt }] };
    if (highWaterMark) {
      where["createdAt"][Op.and].push({ [Op.gte]: highWaterMark });
    }

    records = await RecordMultipleAssociationShim.findAll({
      attributes: ["id", "createdAt"],
      where,
      include,
      limit,
      offset,
      order: [["createdAt", "asc"]],
      subQuery: false,
    });

    let nextHighWaterMark = 0;
    if (records.length > 0) {
      nextHighWaterMark = records.reverse()[0].createdAt.getTime() + 1;
    }

    let nextOffset = 0;
    if (
      records.length > 1 &&
      records[0].createdAt.getTime() ===
        records.reverse()[0].createdAt.getTime()
    ) {
      nextOffset = offset + records.length;
      nextHighWaterMark--;
    }

    const groupMembers = await GroupMember.findAll({
      where: {
        recordId: { [Op.in]: records.map((p) => p.id) },
        groupId: group.id,
      },
    });

    const existingGroupMemberRecordIds = groupMembers.map(
      (member) => member.recordId
    );
    const recordsNeedingGroupMembership = destinationId
      ? records
      : records.filter((p) => !existingGroupMemberRecordIds.includes(p.id));

    await updateRecords(
      recordsNeedingGroupMembership.map((p) => p.id),
      "run",
      run.id,
      destinationId
    );

    if (records.length > 0) {
      await GroupMember.update(
        { updatedAt: new Date(), removedAt: null },
        {
          where: {
            recordId: { [Op.in]: records.map((p) => p.id) },
            groupId: group.id,
          },
        }
      );
    }

    await group.update({ calculatedAt: new Date() });

    return {
      groupMembersCount: records.length,
      nextHighWaterMark,
      nextOffset,
    };
  }

  /**
   * Part 2 of the Group Run
   * Remove Members
   */
  export async function runRemoveGroupMembers(
    group: Group,
    run: Run,
    limit = 1000,
    destinationId?: string
  ) {
    const groupMembersToRemove = await GroupMember.findAll({
      where: {
        groupId: group.id,
        updatedAt: { [Op.lt]: run.createdAt },
        createdAt: { [Op.lt]: run.createdAt },
        removedAt: null,
      },
      limit,
    });

    // The offset and order can be ignored as we will keep running this query until the set of results becomes 0.
    await updateRecords(
      groupMembersToRemove.map((member) => member.recordId),
      "run",
      run.id,
      destinationId
    );

    const now = new Date();
    await GroupMember.update(
      { removedAt: now },
      {
        where: {
          id: {
            [Op.in]: groupMembersToRemove.map((member) => member.id),
          },
        },
      }
    );

    await group.update({ calculatedAt: new Date() });
    return groupMembersToRemove.length;
  }

  /**
   * Part 3 for the Group Run
   * Check if there was anyone we should have removed from a previous Run that was stopped for this Run
   */
  export async function removePreviousRunGroupMembers(
    group: Group,
    run: Run,
    limit = 100
  ) {
    const groupMembersToRemove = await GroupMember.findAll({
      where: {
        groupId: group.id,
        removedAt: { [Op.lte]: run.createdAt },
      },
      limit,
    });

    await updateRecords(
      groupMembersToRemove.map((member) => member.recordId),
      "run",
      run.id
    );

    const now = new Date();
    await GroupMember.update(
      { removedAt: now },
      {
        where: {
          id: {
            [Op.in]: groupMembersToRemove.map((member) => member.id),
          },
        },
      }
    );

    return groupMembersToRemove.length;
  }

  /**
   * Determine if these Group Rules are equal
   */
  export function rulesAreEqual(
    oldRules: GroupRuleWithKey[],
    newRules: GroupRuleWithKey[]
  ) {
    if (oldRules.length !== newRules.length) return false;

    function nullish(value: string | number | boolean) {
      if (value === null) return null;
      if (value === undefined) return null;
      if (value === "null") return null;
      return value.toString();
    }

    for (const i in oldRules) {
      const A = oldRules[i];
      const B = newRules[i];
      if (A.key !== B.key) return false;
      if (A.operation?.op !== B.operation?.op) return false;
      if (nullish(A.match) !== nullish(B.match)) return false;
      if (nullish(A.relativeMatchNumber) !== nullish(B.relativeMatchNumber)) {
        return false;
      }
      if (nullish(A.relativeMatchUnit) !== nullish(B.relativeMatchUnit)) {
        return false;
      }
      if (
        nullish(A.relativeMatchDirection) !== nullish(B.relativeMatchDirection)
      ) {
        return false;
      }
    }

    return true;
  }

  /**
   * Get a list of all groups and when the newest member was added
   */
  export async function newestGroupMembers(limit = 5) {
    const newGroupMembers = await GroupMember.findAll({
      attributes: [
        "groupId",
        [Sequelize.fn("max", Sequelize.col("createdAt")), "newestMemberAdded"],
      ],
      group: ["groupId"],
      order: [[Sequelize.col("newestMemberAdded"), "desc"]],
      limit: limit,
    });

    const groupIds = newGroupMembers.map((mem) => mem.groupId);

    let groups = await Group.findAll();
    groups = groups
      .sort((a, b) => {
        if (groupIds.indexOf(a.id) < 0) return 1;
        if (groupIds.indexOf(b.id) < 0) return -1;
        return groupIds.indexOf(a.id) - groupIds.indexOf(b.id);
      })
      .slice(0, limit);

    const newestMembersAdded: { [id: string]: number } = {};
    newGroupMembers.forEach((g) => {
      // @ts-ignore
      const value: Date | string = g.getDataValue("newestMemberAdded"); // this may be a string if SQLite is used
      newestMembersAdded[g.groupId] =
        value instanceof Date ? value.getTime() : new Date(value).getTime();
    });

    return {
      groups,
      newestMembersAdded: newestMembersAdded,
    };
  }
}
