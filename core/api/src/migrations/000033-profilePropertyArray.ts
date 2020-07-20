module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profileProperties", "position", {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0,
    });
    await migration.changeColumn("profileProperties", "position", {
      type: DataTypes.BIGINT,
      allowNull: false,
    });

    await migration.addColumn("profilePropertyRules", "isArray", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
    await migration.changeColumn("profilePropertyRules", "isArray", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await migration.removeIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );
    await migration.addIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid", "position"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
      }
    );
  },

  down: async function (migration) {
    await migration.removeColumn("profileProperties", "position");
    await migration.removeColumn("profilePropertyRules", "isArray");
    await migration.removeIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid", "position"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
      }
    );
    await migration.addIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );
  },
};
