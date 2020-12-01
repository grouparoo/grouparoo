const tables = [
  "apiKeys",
  "apps",
  "destinations",
  "groups",
  "permissions",
  "profilePropertyRules",
  "sources",
  "schedules",
  "settings",
  "teams",
  "teamMembers",
];

module.exports = {
  up: async function (migration, DataTypes) {
    for (const i in tables) {
      const table = tables[i];
      await migration.changeColumn(table, "locked", {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      });
      if (table !== "teams") {
        await migration.sequelize.query(
          `UPDATE "${table}" SET locked='config:code' where locked IS NOT NULL`
        );
      } else {
        await migration.sequelize.query(
          `UPDATE "${table}" SET locked='team:initialize' where locked IS NOT NULL and name = 'Administrators' and "permissionAllWrite" = true and "permissionAllRead" = true`
        );
        await migration.sequelize.query(
          `UPDATE "${table}" SET locked='config:code' where locked IS NOT NULL and name != 'Administrators'`
        );
      }
    }
  },

  down: async function (migration, DataTypes) {
    for (const i in tables) {
      await migration.changeColumn(tables[i], "locked", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
    }
  },
};
