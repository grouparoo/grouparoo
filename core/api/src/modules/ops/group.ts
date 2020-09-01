import { Group, GroupRuleWithKey } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { ProfileMultipleAssociationShim } from "../../models/ProfileMultipleAssociationShim";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
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
    destinationGuid?: string
  ) {
    const profile = await Profile.findOne({ where: { guid: profileGuid } });

    const oldProfileProperties = [];
    const properties = await profile.properties();
    for (const key in properties) {
      oldProfileProperties[key] = properties[key].values;
    }

    const oldGroupGuids = (await profile.$get("groups")).map((g) => g.guid);

    return Import.build({
      rawData: destinationGuid ? { _meta: { destinationGuid } } : {},
      data: destinationGuid ? { _meta: { destinationGuid } } : {},
      creatorType,
      creatorGuid,
      profileGuid: profile.guid,
      profileAssociatedAt: new Date(),
      oldProfileProperties,
      oldGroupGuids,
    });
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
    force = false,
    destinationGuid?: string
  ) {
    let groupMembersCount = 0;
    let profiles: ProfileMultipleAssociationShim[];

    if (group.type === "manual") {
      profiles = await group.$get("profiles", {
        attributes: ["guid"],
        limit,
        offset,
        order: [["createdAt", "asc"]],
      });
    } else {
      const rules = await group.getRules();
      if (Object.keys(rules).length === 0) {
        return 0;
      }

      const { where, include } = await group._buildGroupMemberQueryParts(
        rules,
        group.matchType
      );

      profiles = await ProfileMultipleAssociationShim.findAll({
        attributes: ["guid"],
        where,
        include,
        limit,
        offset,
        order: [["createdAt", "asc"]],
        subQuery: false,
      });
    }

    const transaction = await api.sequelize.transaction();

    try {
      for (const i in profiles) {
        const profile = profiles[i];
        const groupMember = await GroupMember.findOne({
          where: {
            profileGuid: profile.guid,
            groupGuid: group.guid,
          },
        });

        if (!groupMember || force) {
          const _import = await group.buildProfileImport(
            profile.guid,
            "run",
            run.guid,
            destinationGuid
          );
          await _import.save({ transaction });
          await run.increment(["importsCreated"], { transaction });
        }

        if (groupMember) {
          groupMember.removedAt = null;
          groupMember.set("updatedAt", new Date());
          groupMember.changed("updatedAt", true);
          await groupMember.save({ transaction });
        }

        groupMembersCount++;
      }

      group.calculatedAt = new Date();
      await group.save({ transaction });

      await transaction.commit();

      return groupMembersCount;
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
    offset = 0,
    force = false,
    destinationGuid?: string
  ) {
    let groupMembersCount = 0;

    // The offset and order can be ignored as we will keep running this query until the set of results becomes 0.
    const groupMembersToRemove = await GroupMember.findAll({
      attributes: ["guid", "profileGuid"],
      where: {
        groupGuid: group.guid,
        updatedAt: { [Op.lt]: run.createdAt },
        removedAt: null,
      },
      limit,
    });

    const transaction = await api.sequelize.transaction();

    try {
      for (const i in groupMembersToRemove) {
        const member = groupMembersToRemove[i];
        member.removedAt = new Date();
        await member.save({ transaction });
        const _import = await group.buildProfileImport(
          member.profileGuid,
          "run",
          run.guid,
          destinationGuid
        );
        await run.increment(["importsCreated"], { transaction });
        await _import.save({ transaction });

        groupMembersCount++;
      }

      group.calculatedAt = new Date();
      await group.save({ transaction });

      await transaction.commit();

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
      member.removedAt = new Date();
      await member.save();
      const _import = await group.buildProfileImport(
        member.profileGuid,
        "run",
        run.guid
      );
      await _import.save();
      groupMembersCount++;
    }

    return groupMembersCount;
  }
}
