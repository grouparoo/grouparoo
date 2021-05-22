export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.addIndex(
        "profileProperties",
        ["propertyId", "rawValue"],
        {
          fields: ["propertyId", "rawValue"],
        }
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeIndex(
        "profileProperties",
        ["propertyId", "rawValue"],
        {
          fields: ["propertyId", "rawValue"],
        }
      );
    });
  },
};
