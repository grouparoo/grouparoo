export default {
  up: async function (migration, DataTypes) {
    // "aggregation method" renamed to "aggregationMethod"
    await migration.sequelize.query(
      `UPDATE "options" SET key='aggregationMethod' WHERE key='aggregation method' AND "ownerType" = 'profilePropertyRule'`
    );

    // "sort column" renamed to "sortColumn"
    await migration.sequelize.query(
      `UPDATE "options" SET key='sortColumn' WHERE key='sort column' AND "ownerType" = 'profilePropertyRule'`
    );
  },

  down: async function (migration) {
    throw new Error("migration cannot be reversed");
  },
};
