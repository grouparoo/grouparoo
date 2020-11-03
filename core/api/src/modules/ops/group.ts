import { Group, GroupRuleWithKey } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { ProfileMultipleAssociationShim } from "../../models/ProfileMultipleAssociationShim";
import { Import } from "../../models/Import";
import { Op, Transaction } from "sequelize";
import { api, task } from "actionhero";

export namespace GroupOps {
  /**
   * Create a Run for this Group
   */
  export async function run(
    group: Group,
    force = false,
    destinationGuid?: string
  ) {
    await group.stopPreviousRuns();
    await task.enqueue("group:run", {
      groupGuid: group.guid,
      force,
      destinationGuid,
    });
  }

  /**
   * Stop previous Runs for this Group
   */
  export async function stopPreviousRuns(group: Group) {
    const previousRuns = await Run.findAll({
      where: {
        creatorGuid: group.guid,
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
    profileGuid: string,
    creatorType: string,
    creatorGuid: string,
    destinationGuid?: string,
    transaction?: any
  ) {
    let toCommit = false;
    if (!transaction) {
      toCommit = true;
      transaction = await api.sequelize.transaction({
        lock: Transaction.LOCK.UPDATE,
      });
    }

    const profile = await Profile.findOne({
      where: { guid: profileGuid },
      transaction,
    });

    const oldProfileProperties = {};
    const properties = await profile.properties();
    for (const key in properties) {
      oldProfileProperties[key] = properties[key].values;
    }

    const oldGroupGuids = (await profile.$get("groups")).map((g) => g.guid);

    const _import = await Import.create(
      {
        rawData: destinationGuid ? { _meta: { destinationGuid } } : {},
        data: destinationGuid ? { _meta: { destinationGuid } } : {},
        creatorType,
        creatorGuid,
        profileGuid: profile.guid,
        profileAssociatedAt: new Date(),
        oldProfileProperties,
        oldGroupGuids,
      },
      { transaction }
    );

    await profile.update({ state: "pending" }, { transaction });

    if (toCommit) {
      try {
        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    }

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
        groupGuid: group.guid,
        profileGuid: profile.guid,
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
        if (existingMembership) {
          await existingMembership.destroy();
        }
        return false;
      } else {
        const { where, include } = await group._buildGroupMemberQueryParts(
          rules,
          group.matchType
        );

        // and includes this profile
        if (!where[Op.and]) {
          where[Op.and] = [];
        }
        where[Op.and].push({
          guid: profile.guid,
        });

        const matchedProfiles = await ProfileMultipleAssociationShim.findAll({
          attributes: ["guid"],
          where,
          include,
        });

        const belongs = matchedProfiles.length === 1;

        if (belongs && !existingMembership) {
          await GroupMember.create({
            groupGuid: group.guid,
            profileGuid: profile.guid,
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
    if (!rules) {
      rules = await group.getRules();
    }

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

    if (!rules) {
      rules = await group.getRules();
    }

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
    destinationGuid?: string
  ) {
    let profiles: ProfileMultipleAssociationShim[];
    const rules = await group.getRules();

    if (group.type === "manual") {
      profiles = await group.$get("profiles", {
        attributes: ["guid", "createdAt"],
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

      if (highWaterMark) where["createdAt"] = { [Op.gte]: highWaterMark };

      profiles = await ProfileMultipleAssociationShim.findAll({
        attributes: ["guid", "createdAt"],
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
        profileGuid: { [Op.in]: profiles.map((p) => p.guid) },
        groupGuid: group.guid,
      },
    });

    const transaction = await api.sequelize.transaction({
      type: Transaction.TYPES.EXCLUSIVE,
    });

    try {
      const existingGroupMemberProfileGuids = groupMembers.map(
        (member) => member.profileGuid
      );
      const profilesNeedingGroupMembership = force
        ? profiles
        : profiles.filter(
            (p) => !existingGroupMemberProfileGuids.includes(p.guid)
          );

      for (const i in profilesNeedingGroupMembership) {
        const profileGuid = profilesNeedingGroupMembership[i].guid;
        await buildProfileImport(
          profileGuid,
          "run",
          run.guid,
          destinationGuid,
          transaction
        );
      }

      await GroupMember.update(
        { updatedAt: new Date(), removedAt: null },
        {
          where: {
            profileGuid: { [Op.in]: profiles.map((p) => p.guid) },
            groupGuid: group.guid,
          },
          transaction,
        }
      );

      await run.increment(["importsCreated"], {
        by: profilesNeedingGroupMembership.length,
        silent: true,
        transaction,
      });
      run.set("updatedAt", new Date());
      await run.save({ transaction });

      await transaction.commit();

      await group.update({ calculatedAt: new Date() });

      return {
        groupMembersCount: profiles.length,
        nextHighWaterMark,
        nextOffset,
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  /**
   * Part 2 of the Group Run
   * Remove Members
   */
  export async function runRemoveGroupMembers(
    group: Group,
    run: Run,
    limit = 1000,
    destinationGuid?: string
  ) {
    let groupMembersCount = 0;

    const groupMembersToRemove = await GroupMember.findAll({
      attributes: ["guid", "profileGuid"],
      where: {
        groupGuid: group.guid,
        updatedAt: { [Op.lt]: run.createdAt },
        removedAt: null,
      },
      limit,
    });

    const transaction = await api.sequelize.transaction({
      type: Transaction.TYPES.EXCLUSIVE,
    });

    try {
      // The offset and order can be ignored as we will keep running this query until the set of results becomes 0.

      for (const i in groupMembersToRemove) {
        const member = groupMembersToRemove[i];

        await buildProfileImport(
          member.profileGuid,
          "run",
          run.guid,
          destinationGuid,
          transaction
        );

        member.removedAt = new Date();
        await member.save({ transaction });

        groupMembersCount++;
      }

      await run.increment(["importsCreated"], {
        by: groupMembersCount,
        transaction,
        silent: true,
      });
      run.set("updatedAt", new Date());
      await run.save({ transaction });

      await transaction.commit();
      await group.update({ calculatedAt: new Date() });
      return groupMembersCount;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
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
      attributes: ["guid", "profileGuid"],
      where: {
        groupGuid: group.guid,
        removedAt: { [Op.lte]: run.createdAt },
      },
      limit,
    });

    for (const i in groupMembersToRemove) {
      const member = groupMembersToRemove[i];

      await buildProfileImport(member.profileGuid, "run", run.guid);

      member.removedAt = new Date();
      await member.save();

      groupMembersCount++;
    }

    run.set("updatedAt", new Date());
    await run.save();

    return groupMembersCount;
  }
}
