module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profileProperties", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      false: true,
    });

    await migration.removeColumn("profileProperties", "key");
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn(
      "profileProperties",
      "profilePropertyRuleGuid"
    );

    await migration.addColumn("profileProperties", "key", {
      type: DataTypes.STRING(191),
      false: true,
    });
  },
};
