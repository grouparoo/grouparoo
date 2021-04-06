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

export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      for (const i in tables) {
        const table = tables[i];
        await migration.changeColumn(table, "locked", {
          type: DataTypes.STRING(191),
          allowNull: true,
          defaultValue: null,
        });
        if (table !== "teams") {
          await migration.sequelize.query(
            `UPDATE "${table}" SET locked='config:code' WHERE (locked = '1' OR locked = 'true')`
          );
        } else {
          await migration.sequelize.query(
            `UPDATE "${table}" SET locked='team:initialize' WHERE (locked = '1' OR locked = 'true') AND name = 'Administrators' AND "permissionAllWrite" = true AND "permissionAllRead" = true`
          );
          await migration.sequelize.query(
            `UPDATE "${table}" SET locked='config:code' WHERE (locked = '1' OR locked = 'true') AND name != 'Administrators'`
          );
        }
        await migration.sequelize.query(
          `UPDATE "${table}" SET locked=NULL WHERE (locked = '0' OR locked = 'false')`
        );
      }
    });
  },

  down: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      for (const i in tables) {
        await migration.changeColumn(tables[i], "locked", {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        });
      }
    });
  },
};
