import { Group, GroupRuleWithKey } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { ProfileMultipleAssociationShim } from "../../models/ProfileMultipleAssociationShim";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
import { api, log } from "actionhero";

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

    await group.stopPreviousRuns();
    await group.update({ state: "updating" });

    const run = await Run.create({
      creatorId: group.id,
      creatorType: "group",
      state: "running",
      destinationId,
      force,
    });

    log(
      `[ run ] starting run ${run.id} for group ${group.name} (${group.id})`,
      "notice"
    );

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
   * Given a Profile, create an import to recalculate its Group Membership
   */
  export async function buildProfileImport(
    profileId: string,
    creatorType: string,
    creatorId: string,
    destinationId?: string
  ) {
    const profile = await Profile.findOne({
      where: { id: profileId },
    });

    const oldProfileProperties = {};
    const properties = await profile.properties();
    for (const key in properties) {
      oldProfileProperties[key] = properties[key].values;
    }

    const oldGroupIds = (await profile.$get("groups")).map((g) => g.id);

    const _import = await Import.create({
      rawData: destinationId ? { _meta: { destinationId } } : {},
      data: destinationId ? { _meta: { destinationId } } : {},
      creatorType,
      creatorId,
      profileId: profile.id,
      profileAssociatedAt: new Date(),
      oldProfileProperties,
      oldGroupIds,
    });

    await profile.markPending();

    return _import;
  }

  /**
   * Check if the profile should be in this Group
   */
  export async function updateProfileMembership(
    group: Group,
    profile: Profile
  ) {
    const existingMembership = await GroupMember.findOne({
      where: {
        groupId: group.id,
        profileId: profile.id,
      },
    });

    if (group.type === "manual") {
      if (group.state === "deleted") {
        if (existingMembership) {
          await existingMembership.destroy();
        }
        return false;
      } else {
        return existingMembership ? true : false;
      }
    } else {
      const rules = await group.getRules();

      if (Object.keys(rules).length == 0) {
        if (existingMembership) await existingMembership.destroy();
        return false;
      } else {
        const { where, include } = await group._buildGroupMemberQueryParts(
          rules,
          group.matchType
        );

        // and includes this profile
        if (!where[Op.and]) where[Op.and] = [];
        where[Op.and].push({ id: profile.id });

        const matchedProfiles = await ProfileMultipleAssociationShim.findAll({
          attributes: ["id"],
          where,
          include,
        });

        const belongs = matchedProfiles.length === 1;

        if (belongs && !existingMembership) {
          await GroupMember.create({
            groupId: group.id,
            profileId: profile.id,
          });
        }

        if (!belongs && existingMembership) {
          await existingMembership.destroy();
        }

        return belongs;
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
    const componentCounts = [];
    const funnelCounts = [];
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

      const { where, include } = await group._buildGroupMemberQueryParts(rules);

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
    const profilesNeedingGroupMembership = force
      ? profiles
      : profiles.filter((p) => !existingGroupMemberProfileIds.includes(p.id));

    for (const i in profilesNeedingGroupMembership) {
      const profileId = profilesNeedingGroupMembership[i].id;
      await buildProfileImport(profileId, "run", run.id, destinationId);
    }

    await GroupMember.update(
      { updatedAt: new Date(), removedAt: null },
      {
        where: {
          profileId: { [Op.in]: profiles.map((p) => p.id) },
          groupId: group.id,
        },
      }
    );

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
    let groupMembersCount = 0;

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
    for (const i in groupMembersToRemove) {
      const member = groupMembersToRemove[i];

      await buildProfileImport(member.profileId, "run", run.id, destinationId);

      member.removedAt = new Date();
      await member.save();

      groupMembersCount++;
    }

    await group.update({ calculatedAt: new Date() });
    return groupMembersCount;
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
    let groupMembersCount = 0;

    const groupMembersToRemove = await GroupMember.findAll({
      where: {
        groupId: group.id,
        removedAt: { [Op.lte]: run.createdAt },
      },
      limit,
    });

    for (const i in groupMembersToRemove) {
      const member = groupMembersToRemove[i];

      await buildProfileImport(member.profileId, "run", run.id);

      member.removedAt = new Date();
      await member.save();

      groupMembersCount++;
    }

    run.set("updatedAt", new Date());
    await run.save();

    return groupMembersCount;
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
