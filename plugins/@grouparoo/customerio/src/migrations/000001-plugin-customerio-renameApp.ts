export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.bulkUpdate(
        "apps",
        {
          type: "customerio",
        },
        {
          type: "customer.io",
        }
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.bulkUpdate(
        "apps",
        {
          type: "customer.io",
        },
        {
          type: "customerio",
        }
      );
    });
  },
};
