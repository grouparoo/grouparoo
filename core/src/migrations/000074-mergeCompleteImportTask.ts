export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      // Kick profiles back to "pending" if they're ready but their imports are not
      await migration.sequelize.query(
        `UPDATE profiles SET "state"='pending' WHERE "state"='ready' AND "id" IN 
          (SELECT "profileId" FROM imports WHERE "exportedAt" IS NULL AND "profileUpdatedAt" IS NULL AND "groupsUpdatedAt" IS NULL)`
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      throw new Error("irreversible migration");
    });
  },
};
