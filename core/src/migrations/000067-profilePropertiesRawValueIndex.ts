export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex("profileProperties", ["profileId", "rawValue"], {
        fields: ["profileId", "rawValue"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeIndex(
        "profileProperties",
        ["profileId", "rawValue"],
        {
          fields: ["profileId", "rawValue"],
        }
      );
    });
  },
};
