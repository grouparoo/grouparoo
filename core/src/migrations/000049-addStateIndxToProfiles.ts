export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex("profiles", ["state"], {
        fields: ["state"],
      });

      await migration.addIndex("profileProperties", ["state"], {
        fields: ["state"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeIndex("profiles", ["state"], {
        fields: ["state"],
      });

      await migration.removeIndex("profileProperties", ["state"], {
        fields: ["state"],
      });
    });
  },
};
