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
  },

  down: async function (migration) {
    await migration.removeColumn("profileProperties", "position");
    await migration.removeColumn("profilePropertyRules", "isArray");
  },
};
