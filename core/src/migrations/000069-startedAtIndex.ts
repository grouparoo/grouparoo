export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex("imports", ["startedAt"], {
        fields: ["startedAt"],
      });

      await migration.addIndex("exports", ["startedAt"], {
        fields: ["startedAt"],
      });

      await migration.addIndex("exportProcessors", ["startedAt"], {
        fields: ["startedAt"],
      });
    });
  },

  down: async function (migration) {
    await migration.removeIndex("imports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await migration.removeIndex("exports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await migration.removeIndex("exportProcessors", ["startedAt"], {
      fields: ["startedAt"],
    });
  },
};
