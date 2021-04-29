export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex("profiles", ["createdAt"], {
        fields: ["createdAt"],
      });

      await migration.addIndex("runs", ["updatedAt"], {
        fields: ["updatedAt"],
      });

      await migration.addIndex("imports", ["createdAt"], {
        fields: ["createdAt"],
      });

      await migration.addIndex("exports", ["createdAt"], {
        fields: ["createdAt"],
      });
    });
  },

  down: async function (migration) {
    await migration.removeIndex("profiles", ["createdAt"], {
      fields: ["createdAt"],
    });

    await migration.removeIndex("runs", ["updatedAt"], {
      fields: ["updatedAt"],
    });

    await migration.removeIndex("imports", ["createdAt"], {
      fields: ["createdAt"],
    });

    await migration.removeIndex("exports", ["createdAt"], {
      fields: ["createdAt"],
    });
  },
};
