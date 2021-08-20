export default {
  up: async function (migration, DataTypes) {
    await migration.changeColumn("groupRules", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      allowNull: true,
    });

    await migration.addColumn("groupRules", "profileColumn", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.changeColumn("groupRules", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      allowNull: false,
    });

    await migration.removeColumn("groupRules", "profileColumn");
  },
};
