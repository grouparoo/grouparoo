export default {
  up: async function (migration) {
    // Set all existing instances to "sync" to maintain same behavior
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: "sync",
      },
      {
        state: "ready",
        type: "postgres-export",
        locked: null,
      }
    );
  },

  down: async function (migration) {
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        type: "postgres-export",
        locked: null,
      }
    );
  },
};
