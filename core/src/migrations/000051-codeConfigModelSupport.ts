export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("apiKeys", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("apps", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("destinations", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("groups", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("profilePropertyRules", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("sources", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("schedules", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("settings", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.addColumn("teamMembers", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("apiKeys", "locked");
    await migration.removeColumn("apps", "locked");
    await migration.removeColumn("destinations", "locked");
    await migration.removeColumn("groups", "locked");
    await migration.removeColumn("profilePropertyRules", "locked");
    await migration.removeColumn("sources", "locked");
    await migration.removeColumn("schedules", "locked");
    await migration.removeColumn("settings", "locked");
    await migration.removeColumn("teamMembers", "locked");
  },
};
