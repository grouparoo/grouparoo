export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex("imports", ["createdProfile"], {
        fields: ["createdProfile"],
      });

      await migration.addIndex("imports", ["exportedAt"], {
        fields: ["exportedAt"],
      });

      await migration.addIndex("profileProperties", ["rawValue"], {
        fields: ["rawValue"],
      });
    });
  },

  down: async function (migration) {
    await migration.removeIndex("imports", ["createdProfile"], {
      fields: ["createdProfile"],
    });

    await migration.removeIndex("imports", ["exportedAt"], {
      fields: ["exportedAt"],
    });

    await migration.removeIndex("profileProperties", ["rawValue"], {
      fields: ["rawValue"],
    });
  },
};
