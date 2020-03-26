module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "scheduleMappings",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        scheduleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        profilePropertyRuleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        remoteKey: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex(
      "scheduleMappings",
      ["scheduleGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["scheduleGuid", "profilePropertyRuleGuid"],
      }
    );

    await migration.addIndex(
      "scheduleMappings",
      ["scheduleGuid", "remoteKey"],
      {
        unique: true,
        fields: ["scheduleGuid", "remoteKey"],
      }
    );

    await migration.removeColumn("schedules", "mapping");
  },

  down: async function (migration) {
    await migration.dropTable("scheduleMappings");

    await migration.addColumn("schedules", "mapping", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
