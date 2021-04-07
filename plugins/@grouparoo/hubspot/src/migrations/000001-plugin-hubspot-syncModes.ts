export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      // Set all existing instances to "sync" to maintain same behavior
      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"='sync' WHERE "state"='ready' AND "type"='hubspot-export' AND "locked" IS NULL`
      );
    });
  },

  down: async function (migration) {
    // nothing to do
  },
};
