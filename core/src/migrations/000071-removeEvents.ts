export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("eventData");
      await migration.dropTable("events");
      await migration.removeColumn("profiles", "anonymousId");
      await migration.sequelize.query(
        `DELETE FROM "permissions" WHERE topic = 'event'`
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      throw new Error("irreversible migration");
    });
  },
};
