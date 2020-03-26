module.exports = {
  up: async function (migration, DataTypes) {
    const transaction = await migration.sequelize.transaction();

    // apps
    await migration.addIndex("apps", ["createdAt"], { transaction });

    // events
    await migration.addIndex("events", ["sourceGuid"], { transaction });
    await migration.addIndex("events", ["profileGuid"], { transaction });
    await migration.addIndex("events", ["createdAt"], { transaction });

    // files
    await migration.addIndex("files", ["createdAt"], { transaction });

    // groupCounts
    await migration.addIndex("groupCounts", ["groupGuid"], { transaction });
    await migration.addIndex("groupCounts", ["createdAt"], { transaction });

    // groupMembers
    await migration.addIndex("groupMembers", ["profileGuid"], { transaction });
    await migration.addIndex("groupMembers", ["groupGuid"], { transaction });
    await migration.addIndex("groupMembers", ["createdAt"], { transaction });

    // groupRules
    await migration.addIndex("groupRules", ["groupGuid"], { transaction });
    await migration.addIndex("groupRules", ["createdAt"], { transaction });

    // groups
    await migration.addIndex("groups", ["createdAt"], { transaction });

    // logs
    await migration.addIndex("logs", ["topic"], { transaction });
    await migration.addIndex("logs", ["profileGuid"], { transaction });
    await migration.addIndex("logs", ["createdAt"], { transaction });

    // options
    await migration.addIndex("options", ["ownerGuid"], { transaction });

    // profileProperties
    await migration.addIndex("profileProperties", ["profileGuid"], {
      transaction,
    });

    // runs
    await migration.addIndex("runs", ["creatorGuid"], { transaction });
    await migration.addIndex("runs", ["createdAt"], { transaction });

    // scheduleMappings
    await migration.addIndex("scheduleMappings", ["scheduleGuid"], {
      transaction,
    });

    // schedules
    await migration.addIndex("schedules", ["createdAt"], { transaction });

    // teamMembers
    await migration.addIndex("teamMembers", ["teamGuid"], { transaction });

    // teams
    await migration.addIndex("teams", ["createdAt"], { transaction });

    await transaction.commit();
  },

  down: async function (migration, DataTypes) {
    // apps
    await migration.addIndex("apps", ["createdAt"]);

    // events
    await migration.removeIndex("events", ["sourceGuid"]);
    await migration.removeIndex("events", ["profileGuid"]);
    await migration.removeIndex("events", ["createdAt"]);

    // files
    await migration.removeIndex("files", ["createdAt"]);

    // groupCounts
    await migration.removeIndex("groupCounts", ["groupGuid"]);
    await migration.removeIndex("groupCounts", ["createdAt"]);

    // groupMembers
    await migration.removeIndex("groupMembers", ["profileGuid"]);
    await migration.removeIndex("groupMembers", ["groupGuid"]);
    await migration.removeIndex("groupMembers", ["createdAt"]);

    // groupRules
    await migration.removeIndex("groupRules", ["groupGuid"]);
    await migration.removeIndex("groupRules", ["createdAt"]);

    // groups
    await migration.removeIndex("groups", ["createdAt"]);

    // logs
    await migration.removeIndex("logs", ["topic"]);
    await migration.removeIndex("logs", ["profileGuid"]);
    await migration.removeIndex("logs", ["createdAt"]);

    // options
    await migration.removeIndex("options", ["ownerGuid"]);

    // profileProperties
    await migration.removeIndex("profileProperties", ["profileGuid"]);

    // runs
    await migration.removeIndex("runs", ["creatorGuid"]);
    await migration.removeIndex("runs", ["createdAt"]);

    // scheduleMappings
    await migration.removeIndex("scheduleMappings", ["scheduleGuid"]);

    // schedules
    await migration.removeIndex("schedules", ["createdAt"]);

    // teamMembers
    await migration.removeIndex("teamMembers", ["teamGuid"]);

    // teams
    await migration.removeIndex("teams", ["createdAt"]);
  },
};
