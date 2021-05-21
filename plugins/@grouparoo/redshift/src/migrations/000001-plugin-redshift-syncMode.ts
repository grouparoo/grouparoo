export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      // Set all existing instances to "sync" to maintain same behavior
      await migration.bulkUpdate(
        "destinations",
        {
          syncMode: "sync",
        },
        {
          state: "ready",
          type: "redshift-export",
          locked: null,
        }
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
        type: "redshift-export",
        locked: null,
      }
    );
  },
};
