export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      // Set all existing instances to "sync" to maintain same behavior
      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"='sync' WHERE "state"='ready' AND "type"='mailchimp-export' AND "locked" IS NULL`
      );
      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"='enrich' WHERE "state"='ready' AND "type"='mailchimp-export-id' AND "locked" IS NULL`
      );
    });
  },

  down: async function (migration) {
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        type: ["mailchimp-export-id", "mailchimp-export"],
        locked: null,
      }
    );
  },
};
