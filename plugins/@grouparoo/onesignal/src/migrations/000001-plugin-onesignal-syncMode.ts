export default {
  up: async function (migration) {
    // Set all existing instances to "enrich" to maintain same behavior
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: "enrich",
      },
      {
        state: "ready",
        type: "onesignal-export",
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
        type: "onesignal-export",
        locked: null,
      }
    );
  },
};
