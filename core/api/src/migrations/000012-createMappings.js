const TABLE = "mappings";

module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(TABLE, {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      ownerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      ownerType: {
        type: DataTypes.STRING(191),
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
    });

    await migration.addIndex(TABLE, ["ownerGuid", "profilePropertyRuleGuid"], {
      unique: true,
      fields: ["ownerGuid", "profilePropertyRuleGuid"],
    });

    await migration.addIndex(TABLE, ["ownerGuid", "remoteKey"], {
      unique: true,
      fields: ["ownerGuid", "remoteKey"],
    });

    await migration.addIndex(TABLE, ["ownerGuid"], {
      fields: ["ownerGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
