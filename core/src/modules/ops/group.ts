import { Group, GroupRuleWithKey } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { ProfileMultipleAssociationShim } from "../../models/ProfileMultipleAssociationShim";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
import { api, log } from "actionhero";
import { ProfileOps } from "./profile";

export namespace GroupOps {
  /**
   * Create a Run for this Group
   */
  export async function run(
    group: Group,
    force = false,
    destinationId?: string
  ) {
    if (process.env.GROUPAROO_RUN_MODE === "cli:validate") return;
    if (process.env.GROUPAROO_RUN_MODE === "cli:config") return;

    await group.stopPreviousRuns();

    if (group.state !== "deleted") {
      await group.update({ state: "updating" });
    }

    const run = await Run.create({
      creatorId: group.id,
      creatorType: "group",
      state: "running",
      destinationId,
      force,
    });

    return run;
  }

  /**
   * Stop previous Runs for this Group
   */
  export async function stopPreviousRuns(group: Group) {
    const previousRuns = await Run.findAll({
      where: {
        creatorId: group.id,
        state: "running",
      },
    });

    for (const i in previousRuns) {
      await previousRuns[i].stop();
    }
  }

  /**
   * Given a Profile, create an import to recalculate its Group Membership.  Optionally re-import all Profile Properties with `force`
   */
  export async function updateProfiles(
    profileIds: string[],
    creatorType: string,
    creatorId: string,
    force: boolean,
    destinationId?: string
  ) {
    const bulkData = [];
    for (const profileId of profileIds) {
      bulkData.push({
        rawData: destinationId ? { _meta: { destinationId } } : {},
        data: destinationId ? { _meta: { destinationId } } : {},
        creatorType,
        creatorId,
        profileId,
        profileAssociatedAt: new Date(),
        oldProfileProperties: {},
        oldGroupIds: [],
      });
    }

    const _imports = await Import.bulkCreate(bulkData);

    await ProfileOps.markPendingByIds(profileIds, force);

    return _imports;
  }

  /**
   * Check if the profile should be in this Group
   */
  export async function updateProfilesMembership(
    group: Group,
    profiles: Profile[]
  ) {
    const response: { [profileId: string]: boolean } = {};
    profiles.forEach((p) => (response[p.id] = false));
    const existingMemberships = await GroupMember.findAll({
      where: {
        groupId: group.id,
        profileId: { [Op.in]: profiles.map((p) => p.id) },
      },
    });

    if (group.type === "manual") {
      if (group.state === "deleted") {
        await GroupMember.destroy({
          where: { id: { [Op.in]: existingMemberships.map((gm) => gm.id) } },
        });
      } else {
        for (const profile of profiles) {
          response[profile.id] = existingMemberships.find(
            (gm) => gm.profileId === profile.id
          )
            ? true
            : false;
        }
      }
      return response;
    } else {
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

        // and includes this profile
        if (!where[Op.and]) where[Op.and] = [];
        where[Op.and].push({ id: { [Op.in]: profiles.map((p) => p.id) } });

        const matchedProfiles = await ProfileMultipleAssociationShim.findAll({
          attributes: ["id"],
          where,
          include,
        });

        const bulkCreateProfileIds: string[] = [];
        const bulkDestroyProfileIds: string[] = [];
        for (const profile of profiles) {
          const belongs = matchedProfiles.find((p) => p.id === profile.id)
            ? true
            : false;
          response[profile.id] = belongs;
          const existingMembership = existingMemberships.find(
            (gm) => gm.profileId === profile.id
          );

          if (belongs && !existingMembership) {
            bulkCreateProfileIds.push(profile.id);
          }
          if (!belongs && existingMembership) {
            bulkDestroyProfileIds.push(profile.id);
          }
        }

        if (bulkCreateProfileIds.length > 0) {
          await GroupMember.bulkCreate(
            bulkCreateProfileIds.map((profileId) => {
              return { profileId, groupId: group.id };
            })
          );
        }

        if (bulkDestroyProfileIds.length > 0) {
          await GroupMember.destroyWithLogs({
            where: {
              profileId: { [Op.in]: bulkDestroyProfileIds },
              groupId: group.id,
            },
          });
        }

        return response;
      }
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

    // we use ProfileMultipleAssociationShim as a shim model which has extra associations
    return ProfileMultipleAssociationShim.count({
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
    force = false,
    destinationId?: string
  ) {
    let profiles: ProfileMultipleAssociationShim[];
    const rules = await group.getRules();

    if (group.type === "manual") {
      profiles = await group.$get("profiles", {
        attributes: ["id", "createdAt"],
        limit,
        offset,
        where: highWaterMark
          ? { createdAt: { [Op.gte]: highWaterMark } }
          : undefined,
        order: [["createdAt", "asc"]],
      });
    } else {
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

      profiles = await ProfileMultipleAssociationShim.findAll({
        attributes: ["id", "createdAt"],
        where,
        include,
        limit,
        offset,
        order: [["createdAt", "asc"]],
        subQuery: false,
      });
    }

    let nextHighWaterMark = 0;
    if (profiles.length > 0) {
      nextHighWaterMark = profiles.reverse()[0].createdAt.getTime() + 1;
    }

    let nextOffset = 0;
    if (
      profiles.length > 1 &&
      profiles[0].createdAt.getTime() ===
        profiles.reverse()[0].createdAt.getTime()
    ) {
      nextOffset = offset + profiles.length;
      nextHighWaterMark--;
    }

    const groupMembers = await GroupMember.findAll({
      where: {
        profileId: { [Op.in]: profiles.map((p) => p.id) },
        groupId: group.id,
      },
    });

    const existingGroupMemberProfileIds = groupMembers.map(
      (member) => member.profileId
    );
    const profilesNeedingGroupMembership =
      force || destinationId
        ? profiles
        : profiles.filter((p) => !existingGroupMemberProfileIds.includes(p.id));

    await updateProfiles(
      profilesNeedingGroupMembership.map((p) => p.id),
      "run",
      run.id,
      force,
      destinationId
    );

    if (profiles.length > 0) {
      await GroupMember.update(
        { updatedAt: new Date(), removedAt: null },
        {
          where: {
            profileId: { [Op.in]: profiles.map((p) => p.id) },
            groupId: group.id,
          },
        }
      );
    }

    await group.update({ calculatedAt: new Date() });

    return {
      groupMembersCount: profiles.length,
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
    await updateProfiles(
      groupMembersToRemove.map((member) => member.profileId),
      "run",
      run.id,
      false,
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

    await updateProfiles(
      groupMembersToRemove.map((member) => member.profileId),
      "run",
      run.id,
      false
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
        [
          api.sequelize.fn("max", api.sequelize.col("createdAt")),
          "newestMemberAdded",
        ],
      ],
      group: ["groupId"],
      order: [[api.sequelize.col("newestMemberAdded"), "desc"]],
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
