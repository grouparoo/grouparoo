export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.sequelize.query(
        `UPDATE "options" SET "ownerType"='property' WHERE "ownerType"='profilePropertyRule'`
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.sequelize.query(
        `UPDATE "options" SET "ownerType"='profilePropertyRule' WHERE "ownerType"='profilePropertyRule';`
      );
    });
  },
};
