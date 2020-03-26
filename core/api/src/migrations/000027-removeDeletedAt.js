const tables = [
  "apps",
  "groups",
  "profileProperties",
  "profilePropertyRules",
  "profiles",
  "runs",
  "schedules",
  "teamMembers",
  "teams",
];

module.exports = {
  up: async function (migration, DataTypes) {
    for (const i in tables) {
      const table = tables[i];
      await migration.sequelize.query(
        `delete from "${table}" where guid is not null and "deletedAt" > '1970-01-01'`
      );
      await await migration.removeColumn(table, "deletedAt");
    }
  },

  down: async function (migration, DataTypes) {
    for (const i in tables) {
      const table = tables[i];
      await migration.addColumn(table, "deletedAt", {
        type: DataTypes.DATE,
        allowNull: true,
      });
    }
  },
};
