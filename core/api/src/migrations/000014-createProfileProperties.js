const TABLE = "profileProperties";

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

      profileGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      rawValue: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      profilePropertyRuleGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await migration.addIndex(
      TABLE,
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );

    await migration.addIndex(TABLE, ["profileGuid"], {
      fields: ["profileGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
